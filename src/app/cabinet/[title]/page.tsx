'use client';
import {useEffect, useState} from 'react';
import {useRouter, useParams} from 'next/navigation';
import {Quiz} from '@/types/quize.type';
import {Progress} from '@/components/ui/progress';

export default function QuizCategoryPage() {
    const {title} = useParams<{ title: string }>();
    const uriDecod = title ? decodeURIComponent(title) : '';

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [progress, setProgress] = useState(13);

    const router = useRouter();

    // — загрузка данных без кэша —
    useEffect(() => {
        if (!uriDecod) return;
        setLoading(true);
        setError(null);

        const url = `http://localhost:4200/api/tests/quizzesBycategory/${encodeURIComponent(
            uriDecod
        )}`;

        (async () => {
            try {
                const res = await fetch(url, {cache: 'no-store', credentials: 'include'});
                if (!res.ok) {
                    throw new Error(`Сервер вернул ${res.status}`);
                }

                const payload = await res.json();
                console.log('API response:', payload);

                if (Array.isArray(payload)) {
                    setQuizzes(payload);
                } else if (Array.isArray(payload.value)) {
                    setQuizzes(payload.value);
                } else {
                    console.warn('Неожиданный формат ответа', payload);
                    setQuizzes([]);
                }
            } catch (e: unknown) {
                setError(e instanceof Error ? e.message : String(e));
            } finally {
                setLoading(false);
            }
        })();
    }, [uriDecod]);


    // — имитация прогресса —
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Progress value={progress} className="w-[60%]"/>;
    if (error) return <p className="text-red-600 text-center">Ошибка: {error}</p>;

    return (
        <div className="bg-[#f5f5f6] min-h-screen py-32 px-4">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-semibold text-blue-800 mb-4">
                        Защищено: Минтранс
                    </h1>
                    <div
                        className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm space-y-3 text-sm text-gray-700 leading-relaxed">
                        <p>
                            Уважаемые курсанты!<br/>
                            Тренажерный центр ВОСВОД находится рядом — наб. р. Пряжки 3/1, 3 этаж, каб. 319 (код на
                            входе 123).
                        </p>
                        <p>
                            👉{' '}
                            <a
                                href="/training-signup"
                                className="text-blue-700 hover:text-blue-900 underline font-medium"
                            >
                                ЗАПИСЬ НА ПРАКТИЧЕСКУЮ ТРЕНАЖЕРНУЮ ПОДГОТОВКУ
                            </a>
                        </p>
                        <p>
                            Список документов после обучения для подачи в государственный орган на получение
                            государственного удостоверения на право управления.
                        </p>
                        <p>
                            👉{' '}
                            <a
                                href="/docs-after-training"
                                className="text-blue-700 hover:text-blue-900 underline font-medium"
                            >
                                Список документов после обучения
                            </a>
                        </p>
                        <p className="text-red-600 font-semibold">Демо-запись</p>
                    </div>
                </header>

                <main className="space-y-5">
                    <section className="bg-white border rounded-lg shadow-sm">
                        <button
                            onClick={() => setOpen((o) => !o)}
                            className="w-full text-left px-5 py-4 hover:bg-gray-50"
                            aria-expanded={open}
                        >
                            <h2 className="text-lg font-medium text-blue-800">
                                Экзаменационные билеты (Демо)
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">10 вопросов, 1 ошибка</p>
                        </button>

                        {open && (
                            <div className="px-5 py-4 border-t">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {quizzes.length > 0 ? (
                                        quizzes.map((quiz) => (
                                            <div
                                                key={quiz.id}
                                                onClick={() => router.push(`/cabinet/${uriDecod}/${quiz.id}`)}
                                                className="text-sm px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 text-center rounded-md border border-blue-100 cursor-pointer transition"
                                            >
                                                {quiz.name}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 text-center">
                                            Нет билетов для категории «{uriDecod}»
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}
