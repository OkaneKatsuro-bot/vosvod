import {QuizeCategory} from "@/types/quizeCategory.type";
import {Quiz} from "@/types/quize.type";
import {QuestionType, QuizeQuestion} from "@/types/quizeQuestion.type";
import {create} from 'zustand';

interface TestsState {
    categories: QuizeCategory[];
    quizzes: Quiz[];
    questions: QuizeQuestion[];
    userAnswers: Record<number, number[]>;
    result: {
        score: number;
        percentage: number;
        maxScore: number;
    } | null;
    loading: boolean;
    error: string | null;

    fetchCategories: () => Promise<void>;
    fetchQuizzesByCategory: (categoryId: number) => Promise<void>;
    fetchQuestionsByQuiz: (quizId: number) => Promise<void>;
    setAnswer: (questionId: number, selected: number[]) => void;
    calculateResult: () => void;
    reset: () => void;
}

export const useTestsStore = create<TestsState>((set, get) => ({
    categories: [],
    quizzes: [],
    questions: [],
    userAnswers: {},
    result: null,
    loading: false,
    error: null,

    fetchCategories: async () => {
        set({loading: true, error: null});
        try {
            const res = await fetch('https://vosvod-backend.onrender.com/api/tests/allCategories', {cache: 'no-store'});
            if (!res.ok) throw new Error(`Error ${res.status}`);
            const data: QuizeCategory[] = await res.json();
            set({categories: data});
        } catch (err: unknown) {
            if (err instanceof Error) {
                set({error: err.message});
            } else {
                set({error: String(err)});
            }
        } finally {
            set({loading: false});
        }
    },

    fetchQuizzesByCategory: async (categoryId) => {
        set({loading: true, error: null});
        try {
            const res = await fetch(`https://vosvod-backend.onrender.com/api/tests/quizzesBycategory/${categoryId}`, {cache: 'no-store'});
            if (!res.ok) throw new Error(`Error ${res.status}`);
            const data: Quiz[] = await res.json();
            set({quizzes: data});
        } catch (err: unknown) {
            if (err instanceof Error) {
                set({error: err.message});
            } else {
                set({error: String(err)});
            }
        } finally {
            set({loading: false});
        }
    },

    fetchQuestionsByQuiz: async (quizId) => {
        set({loading: true, error: null});
        try {
            const res = await fetch(`https://vosvod-backend.onrender.com/api/tests/getQuestionsByQuizeId/${quizId}`, {cache: 'no-store'});
            if (!res.ok) throw new Error(`Error ${res.status}`);
            const data: QuizeQuestion[] = await res.json();
            set({questions: data});
        } catch (err: unknown) {
            if (err instanceof Error) {
                set({error: err.message});
            } else {
                set({error: String(err)});
            }

        } finally {
            set({loading: false});
        }
    },

    setAnswer: (questionId, selected) => {
        // Для SINGLE выбираем только первый элемент
        const question = get().questions.find(q => q.id === questionId);
        if (!question) return;

        let answer = selected;
        if (question.answerType === QuestionType.SINGLE) {
            answer = selected.slice(0, 1);
        }

        set(state => ({
            userAnswers: {
                ...state.userAnswers,
                [questionId]: answer,
            },
        }));
    },

    calculateResult: () => {
        const { questions, userAnswers } = get();
        let correctCount = 0;

        // считаем, сколько вопросов участвует
        const total = questions.filter(q => q.answerType !== QuestionType.FREE_ANSWER).length;

        questions.forEach(q => {
            if (q.answerType === QuestionType.FREE_ANSWER) return;

            const selected = userAnswers[q.id] || [];
            const correctOptionIds = q.options.filter(o => o.correct).map(o => o.id);

            const isCorrect =
                selected.length === correctOptionIds.length &&
                selected.every(id => correctOptionIds.includes(id));

            if (isCorrect) correctCount++;
        });

        const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

        set({
            result: {
                score: correctCount,
                percentage,
                maxScore: total,
            },
        });
    },

    reset: () => {
        set({
            quizzes: [],
            questions: [],
            userAnswers: {},
            result: null,
            error: null,
        });
    },
}));
