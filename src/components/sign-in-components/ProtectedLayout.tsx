"use client";

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {AuthForm} from "./AuthForm";
import {Loader} from "lucide-react";
import {QuizeCategory} from "@/types/quizeCategory.type";


export function ProtectedLayout(category: QuizeCategory) {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthorization = () => {
            try {

            } catch {

            } finally {
                setIsLoading(false);
            }
        };

        checkAuthorization();
    }, [router]);

    const handleAuthSuccess = () => {
        router.push(`/cabinet/${category.name}`);
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

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4">
            {category && (
                <AuthForm
                    testTitle={category.name}
                    onSuccessAction={handleAuthSuccess}
                    onErrorAction={setError}
                />
            )}
        </div>
    );
}