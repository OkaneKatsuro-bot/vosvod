// types/exam.ts
export type ExamSection = {
    id: number;
    title: string;
    description?: string; // Делаем опциональным
    tickets?: string[];
    materials?: {
      title: string;
      link: string;
    }[];
  };