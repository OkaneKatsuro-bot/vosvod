"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { mockTests } from "@/data/tests";
import { AuthForm } from "./AuthForm";
import { Loader } from "lucide-react";


interface ProtectedLayoutProps {
  testId: number;
  children: React.ReactNode;
}

export function ProtectedLayout({ children, testId }: ProtectedLayoutProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [selectedTest, setSelectedTest] = useState<(typeof mockTests)[number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = () => {
      try {
        const test = mockTests.find((t) => t.id === testId);
        
        if (!test) {
          setError("Тест не найден");
          return;
        }

        setSelectedTest(test);
        
        const isAuthorized = localStorage.getItem(`test-auth-${testId}`) === "granted";
        if (isAuthorized) {
          setAccessGranted(true);
          router.replace(`/test/${testId}`);
        }
      } catch (error) {
        setError("Ошибка при проверке авторизации");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [testId, router]);

  const handleAuthSuccess = () => {
    localStorage.setItem(`test-auth-${testId}`, "granted");
    setAccessGranted(true);
    router.replace(`/test/${testId}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="h-12 w-12 text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#04314D] gap-4">
        <p className="text-2xl text-red-500">{error}</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Вернуться на главную
        </button>
      </div>
    );
  }

  return accessGranted ? (
    <div className="min-h-screen bg-white">{children}</div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      {selectedTest && (
        <AuthForm
          testId={testId}
          testTitle={selectedTest.title}
          onSuccess={handleAuthSuccess}
          onError={setError}
        />
      )}
    </div>
  );
}