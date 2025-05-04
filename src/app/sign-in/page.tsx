'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Временная функция проверки доступа
const mockVerifyAccess = (testId: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testId > 0); // Всегда true если testId число
    }, 1000);
  });
};

export default function SignInPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'valid'>('loading');
  const [testId, setTestId] = useState<number>(123); // Фиксированный ID для демо

  useEffect(() => {
    const checkAccess = async () => {
      await mockVerifyAccess(testId);
      setStatus('valid');
    };

    checkAccess();
  }, [testId]);

  const handleNavigation = () => {
    router.push(`/exams?testId=${testId}`);
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
        <p className="text-gray-600">Имитация проверки доступа...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <CheckCircle className="h-16 w-16 text-green-600" />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Демо-доступ
          </h1>
          <p className="text-gray-600">
            Тестовый ID: {testId}
          </p>
        </div>
        <Button
          onClick={handleNavigation}
          size="lg"
          className="gap-2"
        >
          Перейти к экзаменам
          <span className="text-xl">→</span>
        </Button>
      </div>
    </div>
  );
}