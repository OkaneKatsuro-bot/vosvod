import {SubmitPayload, SubmitResult, Test} from "@/types/test.type";
import {create} from "zustand/react";


interface QuizState {
    test: Test | null
    answers: Record<number, number[]>
    result?: SubmitResult

    /** Загрузка теста по id */
    loadTest: (testId: number) => Promise<void>
    /** Обновить выбор для конкретного вопроса */
    setAnswer: (questionId: number, optionIds: number[]) => void
    /** Отправить ответы на бек и получить результат */
    submit: () => Promise<void>
}

export const useQuizStore = create<QuizState>((set, get) => ({
    test: null,
    answers: {},
    result: undefined,

    loadTest: async () => {
        const res = await fetch(`http://localhost:4200/tests`)
        const test: Test = await res.json()
        set({test, answers: {}, result: undefined})
    },

    setAnswer: (questionId, optionIds) => {
        set(state => ({
            answers: {
                ...state.answers,
                [questionId]: optionIds,
            }
        }))
    },

    submit: async () => {
        const {answers} = get()
        const payload: SubmitPayload = {answers}
        const res = await fetch(`http://localhost:4200/tests/submit`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        })
        const result: SubmitResult = await res.json()
        set({result})
    }
}))
