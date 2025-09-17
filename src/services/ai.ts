export interface GeneratedQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_OLLAMA_BASE_URL = 'http://localhost:11434/api/chat';
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const TOGETHER_API_URL = 'https://api.together.xyz/v1/chat/completions';
const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/';

/**
 * Generate multiple-choice questions for a given topic using an LLM.
 * Returns well-formed questions compatible with the app's Question type.
 * Implements cascading fallback: tries providers in order until one succeeds.
 */
export async function generateQuizQuestions(topic: string, count: number = 10): Promise<GeneratedQuestion[]> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
  const provider = (import.meta.env.VITE_AI_PROVIDER as string | undefined)?.toLowerCase();
  const ollamaModel = (import.meta.env.VITE_OLLAMA_MODEL as string | undefined) || 'llama3.1:8b';
  const ollamaBase = (import.meta.env.VITE_OLLAMA_BASE_URL as string | undefined) || DEFAULT_OLLAMA_BASE_URL;
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  const geminiModel = (import.meta.env.VITE_GEMINI_MODEL as string | undefined) || 'gemini-1.5-flash';
  const togetherKey = import.meta.env.VITE_TOGETHER_API_KEY as string | undefined;
  const huggingfaceKey = import.meta.env.VITE_HUGGINGFACE_API_KEY as string | undefined;

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

  // Define providers to try in order of preference
  const providers = [
    // Free options first
    { name: 'ollama', key: null, available: true }, // Local, always available if running
    { name: 'together', key: togetherKey, available: !!togetherKey },
    { name: 'huggingface', key: huggingfaceKey, available: !!huggingfaceKey },
    // Paid options
    { name: 'gemini', key: geminiKey, available: !!geminiKey },
    { name: 'openai', key: apiKey, available: !!apiKey },
  ];

  // If specific provider requested, prioritize it
  if (provider && provider !== 'auto') {
    const requestedProvider = providers.find(p => p.name === provider);
    if (requestedProvider && requestedProvider.available) {
      providers.unshift(providers.splice(providers.indexOf(requestedProvider), 1)[0]);
    }
  }

  let lastError: string = '';

  // Try each provider until one succeeds
  for (const currentProvider of providers) {
    if (!currentProvider.available) continue;

    try {
      console.log(`Trying AI provider: ${currentProvider.name}`);
      const content = await tryProvider(currentProvider.name, currentProvider.key || null, systemPrompt, userPrompt, {
        ollamaModel,
        ollamaBase,
        geminiModel,
        togetherKey,
        huggingfaceKey
      });

      if (content) {
        console.log(`Successfully generated questions with ${currentProvider.name}`);
        return parseAndValidateQuestions(content, count);
      }
    } catch (error) {
      const errorMsg = `${currentProvider.name}: ${error instanceof Error ? error.message : 'Unknown error'}`;
      console.warn(`Provider ${currentProvider.name} failed:`, errorMsg);
      lastError = errorMsg;
      continue; // Try next provider
    }
  }

  throw new Error(`All AI providers failed. Last error: ${lastError}`);
}

// Helper function to try a specific provider
async function tryProvider(
  provider: string,
  apiKey: string | null,
  systemPrompt: string,
  userPrompt: string,
  config: any
): Promise<string | undefined> {
  switch (provider) {
    case 'ollama':
      return await tryOllama(systemPrompt, userPrompt, config.ollamaModel, config.ollamaBase);

    case 'together':
      return await tryTogether(systemPrompt, userPrompt, apiKey!);

    case 'huggingface':
      return await tryHuggingFace(systemPrompt, userPrompt, apiKey!);

    case 'gemini':
      return await tryGemini(systemPrompt, userPrompt, apiKey!, config.geminiModel);

    case 'openai':
      return await tryOpenAI(systemPrompt, userPrompt, apiKey!);

    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}

// Individual provider implementations
async function tryOllama(systemPrompt: string, userPrompt: string, model: string, baseUrl: string): Promise<string | undefined> {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
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
  return data?.message?.content;
}

async function tryTogether(systemPrompt: string, userPrompt: string, apiKey: string): Promise<string | undefined> {
  const res = await fetch(TOGETHER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'meta-llama/Llama-3.2-3B-Instruct-Turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 2048,
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Together AI error: ${res.status} ${txt}`);
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content;
}

async function tryHuggingFace(systemPrompt: string, userPrompt: string, apiKey: string): Promise<string | undefined> {
  const res = await fetch(`${HUGGINGFACE_API_URL}microsoft/DialoGPT-medium`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      inputs: `${systemPrompt}\n\n${userPrompt}`,
      parameters: {
        max_new_tokens: 2048,
        temperature: 0.7,
        do_sample: true,
      },
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`HuggingFace error: ${res.status} ${txt}`);
  }

  const data = await res.json();
  return Array.isArray(data) && data[0]?.generated_text ? data[0].generated_text : undefined;
}

async function tryGemini(systemPrompt: string, userPrompt: string, apiKey: string, model: string): Promise<string | undefined> {
  const url = `${GEMINI_BASE_URL}/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
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
  return typeof text === 'string' ? text : undefined;
}

async function tryOpenAI(systemPrompt: string, userPrompt: string, apiKey: string): Promise<string | undefined> {
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
    throw new Error(`OpenAI error: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data?.choices?.[0]?.message?.content;
}

// Parse and validate the AI response
function parseAndValidateQuestions(content: string, count: number): GeneratedQuestion[] {
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


