'use client';


import {useEffect, useState} from 'react';
import {Loader2,} from 'lucide-react';
import {ProtectedLayout} from "@/components/sign-in-components/ProtectedLayout";

// Временная функция проверки доступа
const mockVerifyAccess = (testId: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testId > 0); // Всегда true если testId число
        }, 1000);
    });
};

export default function SignInPage() {
    //const router = useRouter();
    const [status, setStatus] = useState<'loading' | 'valid'>('loading');
    const [testId] = useState<number>(123); // Фиксированный ID для демо

    useEffect(() => {
        const checkAccess = async () => {
            await mockVerifyAccess(testId);
            setStatus('valid');
        };

        checkAccess();
    }, [testId]);


    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin"/>
                <p className="text-gray-600">Имитация проверки доступа...</p>
            </div>
        );
    }

    return (


        <ProtectedLayout testId={testId}/>
    );
}
