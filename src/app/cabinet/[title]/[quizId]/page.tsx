'use client'
import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import Image from 'next/image'
import type {SubmitResult} from '@/types/test.type';
import {QuestionType, QuizeQuestion} from '@/types/quizeQuestion.type';
import {useTestsStore} from "@/stores/test.store";
import {Button} from "@/components/ui/button";


export default function TestPage() {
    const {quizId} = useParams<{ quizId: string }>();
    const id = parseInt(quizId ?? '', 10);

    const {
        questions,
        userAnswers,
        result,
        loading,
        error,
        fetchQuestionsByQuiz,
        setAnswer,
        calculateResult,
        reset,
    } = useTestsStore();

    const [questionNumber, setQuestionNumber] = useState(0);

    // Подгружаем вопросы при изменении quizId
    useEffect(() => {
        if (!isNaN(id)) {
            reset();
            fetchQuestionsByQuiz(id);
        }
    }, [quizId, fetchQuestionsByQuiz, reset]);

    // Текущий вопрос
    const current: QuizeQuestion | undefined = questions[questionNumber];

    // Все вопросы отвечены?
    const allAnswered =
        questions.length > 0 &&
        questions.every((q) => (userAnswers[q.id] ?? []).length > 0);

    // Навигация
    const prevQuestion = () =>
        setQuestionNumber((n) => Math.max(0, n - 1));
    const nextQuestion = () =>
        setQuestionNumber((n) =>
            Math.min(questions.length - 1, n + 1)
        );

    // Submit
    const submit = () => {
        calculateResult();

        // Собираем список ответов
        const answersList = questions.map(q => ({
            questionId: q.id,
            selected: userAnswers[q.id] ?? [],
        }));

        // Сохраняем в localStorage под ключом, например, с номером квиза
        try {
            const key = `testAnswers`;
            localStorage.setItem(key, JSON.stringify(answersList));
            console.log('Ответы пользователя сохранены в localStorage:', key);
        } catch (e) {
            console.error('Не удалось сохранить ответы в localStorage', e);
        }

        console.log('Ответы пользователя:', answersList);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Загрузка...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-red-600">
                Ошибка: {error}
            </div>
        );
    }

    // Показываем результат, если он посчитан
    if (result) {
        const r = result as unknown as SubmitResult;
        return <ResultView result={r}/>;
    }

    if (!current) {
        return (
            <div className="flex items-center justify-center h-screen">
                Нет вопросов для этого квиза.
            </div>
        );
    }

    return (
        <section className="w-screen h-screen bg-[oklch(0.98_0.0133_233.74)]">
            <div className="flex justify-center items-center w-full h-full p-[10%]">
                <div className="rounded-2xl bg-[oklch(0.9_0.0602_227.75)] p-[2%] h-full w-full flex flex-row gap-5">

                    {/* Левая колонка: тело вопроса + навигация */}
                    <div className="flex flex-col w-1/2 h-full gap-2.5">
                        <div
                            className="flex  flex-col text-2xl text-center p-5 flex-1 rounded-2xl bg-[oklch(0.98_0.0133_233.74)]">
                            {current.question}

                        </div>
                        {current.image && (
                            <div className="flex h-1/2 justify-center mt-4">
                                <Image
                                    src={current.image}
                                    alt="Иллюстрация к вопросу"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                        )}
                        <div className="flex flex-row h-16 rounded-2xl gap-5">
                            <button
                                className="flex-1 rounded-2xl bg-[oklch(0.98_0.0133_233.74)] text-xl font-semibold disabled:opacity-50"
                                onClick={prevQuestion}
                                disabled={questionNumber === 0}
                            >
                                Назад
                            </button>
                            <button
                                className="flex-1 rounded-2xl bg-[oklch(0.98_0.0133_233.74)] text-xl font-semibold disabled:opacity-50"
                                onClick={nextQuestion}
                                disabled={questionNumber === questions.length - 1}
                            >
                                Далее
                            </button>
                        </div>
                    </div>

                    {/* Правая колонка: варианты ответа */}
                    <div className="flex flex-col w-1/2 h-full gap-2.5 overflow-auto">
                        {current.options.map((opt) => {
                            const selected =
                                userAnswers[current.id]?.includes(opt.id) ?? false;

                            const onClick = () => {
                                if (current.answerType === QuestionType.MULTIPLE) {
                                    // для MULTIPLE: toggle
                                    const prev = userAnswers[current.id] || [];
                                    const next = prev.includes(opt.id)
                                        ? prev.filter((id) => id !== opt.id)
                                        : [...prev, opt.id];
                                    setAnswer(current.id, next);
                                } else {
                                    // для SINGLE/FREE_ANSWER — один выбор
                                    setAnswer(current.id, [opt.id]);
                                }
                            };

                            return (
                                <button
                                    key={opt.id}
                                    className={`
                    w-full h-1/4 rounded-2xl text-xl text-center p-5 font-semibold
                    bg-[oklch(0.98_0.0133_233.74)]
                    ${selected ? 'border-4 border-[oklch(0.52_0.1268_243.64)]' : ''}
                  `}
                                    onClick={onClick}
                                >
                                    {opt.body}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Кнопка «Сдать» */}
            <div className="absolute bottom-8 right-8">
                <button
                    className={`
            px-6 py-3 rounded-2xl text-lg font-bold
            ${allAnswered
                        ? 'bg-[oklch(0.98_0.0133_233.74)]  border-4 border-[oklch(0.52_0.1268_243.64)]  hover:opacity-90'
                        : 'bg-gray-400 text-gray-700 cursor-not-allowed'}
          `}
                    onClick={submit}
                    disabled={!allAnswered}
                >
                    Сдать тест
                </button>
            </div>
        </section>
    );
}


export function ResultView({result}: { result: SubmitResult }) {
    const {questions, userAnswers} = useTestsStore();
    const [resultDetailOpen, setResultDetailOpen] = useState<boolean>(false);

    return (
        <section className="w-screen h-screen overflow-auto pt-24 bg-white p-8">
            <h1 className="text-4xl font-bold mb-4">
                Ваш результат: {result.score} / {result.maxScore}
            </h1>
            <p className="text-2xl">Процент: {result.percentage}%</p>
            <Button className='mt-4' onClick={() => setResultDetailOpen(prev => !prev)}>Подробнее</Button>
            {resultDetailOpen && (
                <div className="space-y-8">
                    {questions.map((q) => {
                        const answeredIds = userAnswers[q.id] ?? [];
                        return (
                            <div key={q.id} className="space-y-2">
                                <h2 className="text-xl font-semibold">{q.question}</h2>

                                <div className="grid gap-2">
                                    {q.options.map((opt) => {
                                        const isSelected = answeredIds.includes(opt.id);
                                        const isCorrect = opt.correct;

                                        // Определяем класс
                                        let borderClass = 'border-gray-200';
                                        let bgClass = 'bg-white';

                                        if (isSelected && isCorrect) {
                                            borderClass = 'border-green-500';
                                            bgClass = 'bg-green-100';
                                        } else if (isSelected && !isCorrect) {
                                            borderClass = 'border-red-500';
                                            bgClass = 'bg-red-100';
                                        } else if (!isSelected && isCorrect) {
                                            // Показываем пользователю, какой вариант был правильным
                                            borderClass = 'border-green-300';
                                            bgClass = 'bg-green-50';
                                        }

                                        return (
                                            <div
                                                key={opt.id}
                                                className={`border ${borderClass} ${bgClass} rounded p-3`}
                                            >
                                                {opt.body}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>)}
        </section>
    );
}