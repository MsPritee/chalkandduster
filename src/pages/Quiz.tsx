import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, CheckCircle, XCircle, User, Save } from 'lucide-react';
import quizData from '../data/quizData';
import { db } from "../firebase.ts";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

interface Quiz {
  topic: string;
  questions: Question[];
}

const Quiz: React.FC = () => {
  const navigate = useNavigate();

  // Selection/search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Name prompt
  const [awaitingName, setAwaitingName] = useState(false);
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState('');

  // Active quiz state
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false);

  // Results state
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [savePromptVisible, setSavePromptVisible] = useState(false);
  const [saveDone, setSaveDone] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Email share state
  const [emailTo, setEmailTo] = useState('');
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  // All available topics
  const availableTopics = quizData.quizzes.map((quiz: Quiz) => quiz.topic);

  // Filter topics
  const filteredTopics = availableTopics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !quizSubmitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, timeLeft, quizSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Step 1: User selects topic → prepare questions, then ask for name
  const startQuiz = (topic: string) => {
    console.log('startQuiz called with topic:', topic);
    const quiz = quizData.quizzes.find((q: Quiz) => q.topic === topic);
    console.log('Found quiz:', quiz);
    if (quiz) {
      const shuffledQuestions = [...quiz.questions].sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, 10);
      console.log('Selected questions:', selectedQuestions.length);
      console.log('First question sample:', selectedQuestions[0]);

      setCurrentQuestions(selectedQuestions);
      setSelectedAnswers(new Array(selectedQuestions.length).fill(-1));
      setSelectedTopic(topic);

      // Show name prompt; don't start quiz yet
      setAwaitingName(true);
      setQuizStarted(false);
      setTimeLeft(600);
      setCurrentQuestionIndex(0);
      setQuizSubmitted(false);
      setScore(0);
      setSaveDone(false);
      setSavePromptVisible(false);
    }
  };

  // Step 2: Confirm name and start quiz
  const handleConfirmName = () => {
    if (!userName.trim()) {
      setNameError('Please enter your name');
      return;
    }
    setNameError('');
    console.log('handleConfirmName called, setting quizStarted to true');

    setAwaitingName(false);
    setQuizStarted(true);
    setTimeLeft(600);
  };

  // Answers
  const handleAnswerSelect = (answerIndex: number) => {
    if (!quizSubmitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setSelectedAnswers(newAnswers);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit quiz → show results and ask to save
  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === currentQuestions[index]?.correctAnswerIndex) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizSubmitted(true);
    setSavePromptVisible(true);
  };

  // Save results to Firestore
  const saveResult = async () => {
    if (!selectedTopic) return;
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);

    const record = {
      name: userName.trim() || "Anonymous",
      topic: selectedTopic,
      score,
      total,
      percentage,
      timeSpentSeconds: Math.max(0, 600 - timeLeft),
      createdAt: serverTimestamp(),
    };

    try {
      setSaving(true);
      setSaveError(null);
      await addDoc(collection(db, "quizResults"), record);
      setSaveDone(true);
      setSavePromptVisible(false);
    } catch (e) {
      setSaveError("Failed to save result. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const skipSave = () => {
    setSavePromptVisible(false);
  };

  // Build a detailed result payload for email
  const buildEmailPayload = () => {
    const total = currentQuestions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const timeSpentSeconds = Math.max(0, 600 - timeLeft);

    const questions = currentQuestions.map((q, idx) => {
      const selectedIndex = selectedAnswers[idx];
      return {
        number: idx + 1,
        question: q.questionText,
        selectedAnswer: selectedIndex >= 0 ? q.options[selectedIndex] : 'Not answered',
        correctAnswer: q.options[q.correctAnswerIndex],
        isCorrect: selectedIndex === q.correctAnswerIndex,
      };
    });

    return {
      name: userName || 'Anonymous',
      topic: selectedTopic || '',
      score,
      total,
      percentage,
      timeSpentSeconds,
      questions,
    };
  };

  const handleSendEmail = async () => {
    setEmailError(null);
    setEmailSent(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTo)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    console.log('EmailJS config:', { serviceId, templateId, publicKey: publicKey ? '***' : 'missing' });

    if (!serviceId || !templateId || !publicKey) {
      setEmailError('Email service is not configured. Please set EmailJS environment variables.');
      return;
    }

    const payload = buildEmailPayload();

    const templateParams: Record<string, any> = {
      to_email: emailTo,
      user_name: payload.name,
      topic: payload.topic,
      score_line: `${payload.score}/${payload.total} (${payload.percentage}%)`,
      time_spent: `${payload.timeSpentSeconds}s`,
      // Provide both a readable text and JSON for flexibility in the template
      questions_text: payload.questions
        .map((q) => `Q${q.number}: ${q.question}\nSelected: ${q.selectedAnswer}\nCorrect: ${q.correctAnswer}\n`)
        .join('\n'),
      questions_json: JSON.stringify(payload.questions, null, 2),
    };

    try {
      setEmailSending(true);
      console.log('Sending email with params:', templateParams);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmailSent(true);
    } catch (e: any) {
      console.error('EmailJS error:', e);
      if (e.status === 412) {
        setEmailError('Email service configuration error. Please check EmailJS setup and domain permissions.');
      } else if (e.status === 400) {
        setEmailError('Invalid email parameters. Please check the email address.');
      } else {
        setEmailError(`Failed to send email: ${e.text || e.message || 'Unknown error'}`);
      }
    } finally {
      setEmailSending(false);
    }
  };

  const resetQuiz = () => {
    setSelectedTopic(null);
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setTimeLeft(600);
    setQuizStarted(false);
    setQuizSubmitted(false);
    setScore(0);
    setAwaitingName(false);
    setSavePromptVisible(false);
    setSaveDone(false);
    // keep userName for convenience; clear if you want fresh:
    // setUserName('');
  };

  // Topic selection
  if (!quizStarted && !awaitingName) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Center</h1>
              <p className="text-lg text-gray-600">Select a topic to start your quiz</p>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <div
                  key={topic}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
                  onClick={() => startQuiz(topic)}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic}</h3>
                  <p className="text-gray-600 mb-4">Test your knowledge with 10 random questions</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>10 minutes</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredTopics.length === 0 && searchTerm && (
              <div className="text-center py-8">
                <p className="text-gray-500">No topics found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Name prompt screen
  if (!quizStarted && awaitingName && selectedTopic) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter Your Name</h1>
              <p className="text-gray-600 mb-6">
                You selected <span className="font-semibold">{selectedTopic}</span>. Please enter your name to begin.
              </p>

              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-2">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="w-full outline-none"
                />
              </div>
              {nameError && <p className="text-sm text-red-600 mb-3">{nameError}</p>}

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Clock className="h-4 w-4 mr-2" />
                <span>10-minute time limit • 10 questions</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setAwaitingName(false);
                    setSelectedTopic(null);
                    setCurrentQuestions([]);
                    setSelectedAnswers([]);
                  }}
                  className="flex-1 bg-gray-100 text-gray-800 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Change Topic
                </button>
                <button
                  onClick={handleConfirmName}
                  className="flex-1 bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (quizSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Save prompt */}
            {savePromptVisible && !saveDone && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 mb-4 flex items-center justify-between">
                <div className="text-sm">
                  Do you want to save this result{userName ? ` for ${userName}` : ''}?
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={saveResult}
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-green-600 text-white py-1.5 px-3 rounded-md text-sm font-medium hover:bg-green-700 disabled:opacity-50"
                  >
                    <Save className="h-4 w-4" />
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={skipSave}
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-gray-600 text-white py-1.5 px-3 rounded-md text-sm font-medium hover:bg-gray-700 disabled:opacity-50"
                  >
                    Skip
                  </button>
                </div>
              </div>
            )}
            {saveDone && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-3 mb-4 text-sm">
                Result saved successfully.
              </div>
            )}
            {saveError && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm">
                {saveError}
              </div>
            )}

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h1>
                {userName && <p className="text-gray-600 mb-1">Candidate: <span className="font-semibold">{userName}</span></p>}
                {selectedTopic && <p className="text-gray-600 mb-4">Topic: <span className="font-semibold">{selectedTopic}</span></p>}
                <div className="text-6xl font-bold text-indigo-600 mb-2">
                  {score}/{currentQuestions.length}
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {Math.round((score / currentQuestions.length) * 100)}%
                </div>
              </div>

              {/* Share via Email */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Results via Email</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Recipient email"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none"
                  />
                  <button
                    onClick={handleSendEmail}
                    disabled={emailSending}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
                  >
                    {emailSending ? 'Sending...' : 'Send Results'}
                  </button>
                </div>
                {emailError && (
                  <p className="text-sm text-red-600 mt-2">{emailError}</p>
                )}
                {emailSent && (
                  <p className="text-sm text-green-600 mt-2">Results sent successfully.</p>
                )}
              </div>

              {/* Review Answers */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Question Review</h2>
                {currentQuestions.map((question, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Q{index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg font-medium text-gray-900 mb-3">
                          {question.questionText}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`flex items-center p-3 rounded-lg border ${
                                optionIndex === question.correctAnswerIndex
                                  ? 'bg-green-50 border-green-200'
                                  : optionIndex === selectedAnswers[index] && optionIndex !== question.correctAnswerIndex
                                  ? 'bg-red-50 border-red-200'
                                  : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              {optionIndex === question.correctAnswerIndex ? (
                                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                              ) : optionIndex === selectedAnswers[index] && optionIndex !== question.correctAnswerIndex ? (
                                <XCircle className="h-5 w-5 text-red-600 mr-3" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3" />
                              )}
                              <span className={optionIndex === question.correctAnswerIndex ? 'text-green-800 font-medium' : ''}>
                                {option}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={resetQuiz}
                  className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Take Another Quiz
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz - show when quiz is started and questions are loaded
  console.log('Quiz state check:', { 
    quizStarted, 
    questionsLength: currentQuestions.length, 
    quizSubmitted, 
    selectedTopic,
    currentQuestionIndex 
  });
  
  if (quizStarted && currentQuestions.length > 0 && !quizSubmitted) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    console.log('Active quiz debug:', {
      currentQuestions,
      currentQuestionIndex,
      currentQuestion,
      questionText: currentQuestion?.questionText,
      options: currentQuestion?.options
    });
    
    // Safety check to ensure currentQuestion exists
    if (!currentQuestion) {
      return (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Question...</h1>
              <p className="text-gray-600">Please wait while we load your question.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedTopic} Quiz</h1>
                <p className="text-gray-600">
                  Question {currentQuestionIndex + 1} of {currentQuestions.length}
                </p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <Clock className="h-5 w-5 text-red-500 mr-2" />
                <span className={`text-lg font-bold ${timeLeft <= 60 ? 'text-red-600' : 'text-gray-900'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.questionText}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options && currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium text-gray-900">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex gap-4">
              {currentQuestionIndex === currentQuestions.length - 1 ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {currentQuestions && currentQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentQuestionIndex
                      ? 'bg-indigo-600'
                      : selectedAnswers[index] !== -1
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  // Fallback - this shouldn't happen
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">Please try refreshing the page or selecting a topic again.</p>
          <button
            onClick={resetQuiz}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Quiz Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

