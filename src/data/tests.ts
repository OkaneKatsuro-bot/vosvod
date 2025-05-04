export interface Test {
    id: number;
    title: string;
    description: string;
    category: string;
    createdAt: string;
  }
  
  export const mockTests: Test[] = [
    {
        id: 1,
        title: "МОТОРНОЕ СУДНО ГИДРОЦИКЛ (ГИМС)",
        description: "Проверьте свои знания",
        category: "safety",
        createdAt: "2024-05-01",
      },
      {
        id: 2,
        title: "МИНТРАНС",
        description: "Проверьте свои знания",
        category: "navigation",
        createdAt: "2024-05-02",
      },
      {
        id: 3,
        title: "ПАРУСНЫЕ СУДА (ГИМС)",
        description: "Проверьте свои знания",
        category: "legislation",
        createdAt: "2024-05-03",
      },
      {
        id: 4,
        title: "СУДА ОСОБОЙ КОНСТРУКЦИИ",
        description: "Проверьте свои знания",
        category: "ship",
        createdAt: "2024-05-03",
      },
      {
        id: 5,
        title: "СПАСАТЕЛЬ ВОСВОД",
        description: "Проверьте свои знания",
        category: "rescuer",
        createdAt: "2024-05-03",
      },
  ];