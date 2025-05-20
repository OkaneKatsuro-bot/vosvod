import {QuizeOption} from "@/types/quizeOption.type";

export interface QuizeQuestion {
    id: number;
    quizeId: number;
    sort: number;
    title: string;
    question: string;
    image: string;
    answerType: QuestionType;
    options: QuizeOption[]
}

export enum QuestionType {
    SINGLE = 'SINGLE',
    MULTIPLE = 'MULTIPLE',
    FREE_ANSWER = 'FREE_ANSWER',
}