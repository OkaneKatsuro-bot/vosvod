import {create} from 'zustand/react'
import {Test, SubmitPayload, SubmitResult} from '@/types/test.type'

interface QuizState {
    test: Test | null
    answers: Record<number, number[]>
    result?: SubmitResult

    loadTest: () => Promise<void>
    setAnswer: (questionId: number, optionIds: number[]) => void
    submit: () => Promise<void>
}

export const useQuizStore = create<QuizState>((set, get) => ({
    test: null,
    answers: {},
    result: undefined,


    loadTest: async () => {
        try {
            const res = await fetch(
                'https://vosvod-backend.onrender.com/tests',
                {cache: 'no-store'}
            )
            if (!res.ok) {
                console.error('Ошибка при загрузке теста:', res.status, res.statusText)
                return
            }
            const test: Test = await res.json()
            set({test, answers: {}, result: undefined})
        } catch (e) {
            console.error('Network error loading test:', e)
        }
    },

    setAnswer: (questionId, optionIds) =>
        set(state => ({
            answers: {
                ...state.answers,
                [questionId]: optionIds,
            },
        })),

    submit: async () => {
        const {answers} = get()
        try {
            const res = await fetch(
                'https://vosvod-backend.onrender.com/tests/submit',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({answers} as SubmitPayload),
                    cache: 'no-store',
                }
            )
            if (!res.ok) {
                console.error('Ошибка при отправке ответов:', res.status, res.statusText)
                return
            }
            const result: SubmitResult = await res.json()
            set({result})
        } catch (e) {
            console.error('Network error submitting answers:', e)
        }
    },
}))
