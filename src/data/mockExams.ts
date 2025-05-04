import { ExamSection } from '@/types/exam';

export const mockExams: ExamSection[] = [
  {
    id: 1,
    title: 'Судовождение маломерных судов',
    description: 'Базовые принципы управления',
    tickets: Array.from({length: 15}, (_, i) => `БИЛЕТ ${i+1}`),
  },
  {
    id: 2,
    title: 'Навигационные правила',
    description: 'Международные и внутренние нормы',
    tickets: Array.from({length: 25}, (_, i) => `БИЛЕТ ${i+1}`),
  },
  {
    id: 3,
    title: 'Спасение на водах',
    description: 'Экстренные ситуации и первая помощь',
    materials: [
      { 
        title: 'Инструкция по спасению', 
        link: '/docs/safety-protocol.pdf' 
      }
    ]
  },
  {
    id: 4,
    title: 'Техническое обслуживание',
    description: 'Основы ремонта и профилактики',
    materials: [
      { 
        title: 'Руководство по ТО', 
        link: '/docs/maintenance-guide.pdf' 
      }
    ]
  },
  {
    id: 5,
    title: 'Метеорология',
    description: 'Прогнозирование погодных условий',
    materials: [
      { 
        title: 'Метеосправочник', 
        link: '/docs/weather-handbook.pdf' 
      }
    ]
  }
];