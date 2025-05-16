"use client";

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {mockTests} from "@/data/tests";
import {AuthForm} from "./AuthForm";
import {CheckCircle, Loader} from "lucide-react";
import {Button} from "@/components/ui/button";


export interface Test {
    id: number;
    title: string;
    description: string;
    category: string;
    createdAt: string;
}

interface ProtectedLayoutProps {
    testId: number;
}

export function ProtectedLayout({testId}: ProtectedLayoutProps) {
    const router = useRouter();
    const [error, setError] = useState("");
    const [accessGranted, setAccessGranted] = useState(false);
    const [selectedTest, setSelectedTest] = useState<(typeof mockTests)[number] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthorization = () => {
            try {
                // const test = mockTests.find((t) => t.id === testId);

                const test: Test = mockTests[0];
                if (!test) {
                    setError("Тест не найден");
                    return;
                }

                setSelectedTest(test);

                const isAuthorized = localStorage.getItem(`test-auth-${testId}`) === "granted";
                if (isAuthorized) {
                    setAccessGranted(true);
                    router.replace(`/exams`);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(`Ошибка при проверке авторизации: ${error.message}`);
                } else {
                    setError("Неизвестная ошибка при проверке авторизации");
                }
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthorization();
    }, [testId, router]);

    const handleAuthSuccess = () => {
        localStorage.setItem(`test-auth-${testId}`, "granted");
        setAccessGranted(true);
        router.replace(`/exams`);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader className="h-12 w-12 text-blue-500"/>
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
        <div className="min-h-screen bg-white">
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600"/>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Демо-доступ
                        </h1>
                        <p className="text-gray-600">
                            Тестовый ID: {testId}
                        </p>
                    </div>
                    <Button
                        onClick={() => router.push(`/exams?testId=${123}`)}
                        size="lg"
                        className="gap-2"
                    >
                        Перейти к экзаменам
                        <span className="text-xl">→</span>
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4">
            {selectedTest && (
                <AuthForm
                    testId={testId}
                    testTitle={selectedTest.title}
                    onSuccessAction={handleAuthSuccess}
                    onErrorAction={setError}
                />
            )}
        </div>
    );
}