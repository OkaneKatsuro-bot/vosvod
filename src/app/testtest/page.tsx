'use client'

import {useEffect, useState} from 'react'
import {useQuizStore} from '@/stores/test.store'
import type {SubmitResult} from '@/types/test.type'

export default function TestPage({params}: { params: { id: string } }) {
    const testId = Number(params.id)
    const {test, loadTest, answers, setAnswer, submit, result} = useQuizStore()

    // Правильно: массив [значение, сеттер]
    const [questionNumber, setQuestionNumber] = useState<number>(0)

    // Загрузка теста при монтировании
    useEffect(() => {
        loadTest(testId)
    }, [testId, loadTest])

    // Пока не загрузился тест
    if (!test) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                Загрузка теста…
            </div>
        )
    }

    // проверяем, что для каждого вопроса есть непустой массив ответов
    const allAnswered = test.questions.every(q =>
        Array.isArray(answers[q.id]) && answers[q.id].length > 0
    )


    // После сабмита — результат
    if (result) {
        return <ResultView result={result}/>
    }

    // Текущий вопрос
    const current = test.questions[questionNumber]

    // handlers
    const prevQuestion = () => {
        setQuestionNumber((qn) => Math.max(0, qn - 1))
    }
    const nextQuestion = () => {
        setQuestionNumber((qn) => Math.min(test.questions.length - 1, qn + 1))
    }

    return (
        <section className="w-screen h-screen bg-[oklch(0.98_0.0133_233.74)]">
            <div className="flex justify-center items-center w-full h-full p-[10%]">
                <div className="rounded-2xl bg-[oklch(0.9_0.0602_227.75)] p-[2%] h-full w-full flex flex-row gap-5">

                    {/* Левая колонка: тело вопроса + навигация */}
                    <div className="flex flex-col w-1/2 h-full gap-2.5">
                        <div
                            className="flex text-2xl text-center p-5 flex-1 rounded-2xl bg-[oklch(0.98_0.0133_233.74)]">
                            {current.body}
                        </div>
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
                                disabled={questionNumber === test.questions.length - 1}
                            >
                                Далее
                            </button>
                        </div>
                    </div>

                    {/* Правая колонка: варианты ответа */}
                    <div className="flex flex-col w-1/2 h-full gap-2.5 overflow-auto">
                        {current.options.map((opt) => {
                            const selected = answers[current.id]?.includes(opt.id) ?? false

                            return (
                                <button
                                    key={opt.id}
                                    className={`
                    w-full h-1/4 rounded-2xl text-xl text-center p-5 font-semibold
                    bg-[oklch(0.98_0.0133_233.74)]
                    ${selected ? 'border-4 border-[oklch(0.52_0.1268_243.64)]' : ''}
                  `}
                                    onClick={() => {
                                        // Для SINGLE: один id, для MULTIPLE можно дописать логику toggle
                                        setAnswer(current.id, [opt.id])

                                    }}
                                >
                                    {opt.text}
                                </button>
                            )
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
                    onClick={() => submit()}
                    disabled={!allAnswered}
                >
                    Сдать тест
                </button>
            </div>
        </section>
    )
}

// Компонент для отображения результата
function ResultView({result}: { result: SubmitResult }) {
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-4xl font-bold mb-4">
                Ваш результат: {result.score} / {result.maxScore}
            </h1>

        </section>
    )
}
