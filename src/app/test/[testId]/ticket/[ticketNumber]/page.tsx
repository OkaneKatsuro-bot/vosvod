'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function TestPage() {
  const router = useRouter();
  const params = useParams();

  console.log('Params:', params);
  
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Получаем параметры как строки
  const { testId: testIdStr, ticketNumber: ticketNumberStr } = params;
  
  // Конвертация в числа с проверкой
  const testId = Number(testIdStr);
  const ticketNumber = Number(ticketNumberStr);
  const isValidParams = !isNaN(testId) && !isNaN(ticketNumber);

  const mockQuestions: Question[] = [
    {
      id: 1,
      question: 'Что означает красный проблесковый сигнал на судне?',
      options: [
        'Судно стоит на якоре',
        'Судно потеряло управление', 
        'Судно проводит погрузку'
      ],
      correctAnswer: 'Судно потеряло управление'
    }
  ];

  useEffect(() => {
    if (!isValidParams) {
      router.replace('/error');
      return;
    }

    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setQuestions(mockQuestions);
      } catch (error) {
        console.error('Ошибка загрузки вопросов:', error);
        router.replace('/error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [isValidParams, router]);

  if (!isValidParams) return null;

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
        <p className="mt-4 text-gray-600">Загрузка вопросов...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">
          Тест #{testId} - Билет {ticketNumber}
        </h1>
        <p className="text-gray-600 mt-2">Всего вопросов: {questions.length}</p>
      </header>

      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-4 rounded-lg shadow">
            <p className="text-lg font-medium mb-4">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="w-full text-left justify-start"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Button 
          onClick={() => router.push('/exams')}
          variant="secondary"
        >
          Назад к списку билетов
        </Button>
        
        <Button
          onClick={() => console.log('Проверить ответы')}
          className="bg-green-600 hover:bg-green-700"
        >
          Завершить тест
        </Button>
      </div>
    </div>
  );
}