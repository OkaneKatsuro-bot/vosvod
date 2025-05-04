"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  question: string;
  type: 'multiple-choice' | 'text-input';
  options?: string[];
  correctAnswer: string;
}

const TestPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const testId = Number(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState<number | null>(null);

  const [questions] = useState<Question[]>(() => {
    const testQuestions: Record<number, Question[]> = {
      1: [
        {
          id: 1,
          question: 'Что означает красный проблесковый сигнал на судне?',
          type: 'multiple-choice',
          options: ['Судно стоит на якоре', 'Судно потеряло управление', 'Судно проводит погрузку'],
          correctAnswer: 'Судно потеряло управление'
        },
      ],
    };
    return testQuestions[testId] || [];
  });

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const calculateScore = () => {
    const correct = questions.filter((q, index) => 
      answers[index] === q.correctAnswer
    ).length;
    setScore(Math.round((correct / questions.length) * 100));
  };

  if (!questions.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl text-red-500">Тест не найден</h2>
        <Button 
          onClick={() => router.push('/')}
          className="mt-4"
        >
          Вернуться на главную
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {score === null ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Тест #{testId}</h1>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4">
                Вопрос {currentQuestion + 1}/{questions.length}
              </h3>
              <p className="text-lg mb-4">
                {questions[currentQuestion].question}
              </p>
              
              {questions[currentQuestion].type === 'multiple-choice' && (
                <div className="space-y-3">
                  {questions[currentQuestion].options?.map((option, i) => (
                    <Button
                      key={i}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left justify-start"
                      variant="outline"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <Button
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
              >
                Назад
              </Button>
              
              <Button
                onClick={calculateScore}
                disabled={currentQuestion < questions.length - 1}
              >
                Завершить тест
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Результаты теста</h2>
          <p className="text-4xl mb-6">{score}%</p>
          <Button onClick={() => router.push('/')}>
            Вернуться к списку тестов
          </Button>
        </div>
      )}
    </div>
  );
};

export default TestPage;