
/** Один тест целиком */
export interface Test {
    id: number
    title: string
    questions: Question[]
}

/** Одиночный вопрос */
export interface Question {
    id: number
    testId: number
    body: string
    type: 'SINGLE' | 'MULTIPLE'
    options: Option[]
}

/** Один вариант ответа */
export interface Option {
    id: number
    questionId: number
    text: string
    score: number   // 1 для правильных, 0 для неправильных
}

/** Что шлём на бек */
export interface SubmitPayload {
    answers: Record<number, number[]>
    // ключ — questionId, значение — массив выбранных optionId
}

/** Что получаем в ответе */
export interface QuestionResult {
    questionId: number
    correctOptionIds: number[]
    yourOptionIds: number[]
    questionScore: number
}

export interface SubmitResult {
    percentage: number;
    score: number
    maxScore: number
    
}
