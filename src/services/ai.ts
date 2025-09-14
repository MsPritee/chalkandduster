export interface GeneratedQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_OLLAMA_BASE_URL = 'http://localhost:11434/api/chat';
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';

/**
 * Generate multiple-choice questions for a given topic using an LLM.
 * Returns well-formed questions compatible with the app's Question type.
 */
export async function generateQuizQuestions(topic: string, count: number = 10): Promise<GeneratedQuestion[]> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
  const provider = (import.meta.env.VITE_AI_PROVIDER as string | undefined)?.toLowerCase();
  const ollamaModel = (import.meta.env.VITE_OLLAMA_MODEL as string | undefined) || 'llama3.1:8b';
  const ollamaBase = (import.meta.env.VITE_OLLAMA_BASE_URL as string | undefined) || DEFAULT_OLLAMA_BASE_URL;
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  const geminiModel = (import.meta.env.VITE_GEMINI_MODEL as string | undefined) || 'gemini-1.5-flash';

  const systemPrompt = `You are an expert quiz setter. Create high-quality multiple-choice questions.
Rules:
- Topic-specific, accurate, and unambiguous
- 4 options per question, one correct
- No numbering or extra explanation
- Difficulty: mixed beginner to intermediate
- Output ONLY valid JSON array, no markdown fences`;

  const userPrompt = `Topic: ${topic}
Create ${count} multiple-choice questions.
Return JSON array where each item has fields: questionText (string), options (array of 4 strings), correctAnswerIndex (0-3).`;

  let content: string | undefined;

  if (provider === 'gemini') {
    if (!geminiKey) {
      throw new Error('Missing VITE_GEMINI_API_KEY');
    }
    const url = `${GEMINI_BASE_URL}/models/${encodeURIComponent(geminiModel)}:generateContent?key=${encodeURIComponent(geminiKey)}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] },
        ],
        generationConfig: { temperature: 0.7 },
      }),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Gemini error: ${res.status} ${txt}`);
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    content = typeof text === 'string' ? text : undefined;
  } else if ((provider === 'ollama') || (!apiKey && provider !== 'openai')) {
    // Use local Ollama (free, local inference)
    const res = await fetch(ollamaBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: ollamaModel,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        stream: false,
        options: { temperature: 0.7 },
      }),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Ollama error: ${res.status} ${txt}`);
    }
    const data = await res.json();
    content = data?.message?.content;
  } else {
    // Default to OpenAI (paid)
    if (!apiKey) {
      throw new Error('Missing VITE_OPENAI_API_KEY');
    }
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
      }),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`AI API error: ${response.status} ${text}`);
    }
    const data = await response.json();
    content = data?.choices?.[0]?.message?.content;
  }

  if (!content || typeof content !== 'string') {
    throw new Error('Malformed AI response');
  }

  // Parse content into JSON (robustly handle code fences or extra text)
  const tryParse = (text: string): any | undefined => {
    try {
      return JSON.parse(text);
    } catch {
      return undefined;
    }
  };

  // 1) direct parse
  let parsed: any = tryParse(content);

  // 2) strip markdown code fences
  if (!parsed) {
    const withoutFences = content
      .replace(/^```[a-zA-Z]*\n([\s\S]*?)\n```$/m, '$1')
      .replace(/^```[\s\S]*?```$/m, (m) => m.slice(3, -3));
    parsed = tryParse(withoutFences.trim());
  }

  // 3) extract JSON array
  if (!parsed) {
    const arrMatch = content.match(/\[[\s\S]*\]/);
    if (arrMatch) {
      parsed = tryParse(arrMatch[0]);
    }
  }

  // 4) extract JSON object (expects key "questions")
  if (!parsed) {
    const objMatch = content.match(/\{[\s\S]*\}/);
    if (objMatch) {
      const obj = tryParse(objMatch[0]);
      if (obj) parsed = obj;
    }
  }

  if (!parsed) {
    throw new Error('Failed to parse AI JSON');
  }

  const questions: any[] = Array.isArray(parsed) ? parsed : parsed?.questions;
  if (!Array.isArray(questions)) {
    throw new Error('AI did not return an array of questions');
  }

  // Validate and coerce to expected shape
  const sanitized: GeneratedQuestion[] = questions
    .filter((q) => q && typeof q.questionText === 'string' && Array.isArray(q.options) && q.options.length === 4)
    .map((q) => {
      const correctIndex = Number(q.correctAnswerIndex);
      return {
        questionText: String(q.questionText).trim(),
        options: q.options.map((o: any) => String(o)),
        correctAnswerIndex: Number.isInteger(correctIndex) && correctIndex >= 0 && correctIndex < 4 ? correctIndex : 0,
      };
    });

  if (sanitized.length < Math.min(5, count)) {
    throw new Error('Too few valid questions generated');
  }

  return sanitized.slice(0, count);
}


