'use client';

import { useState } from 'react';
import {useRouter} from "next/navigation";

const mockExamData = [
  {
    id: 1,
    title: 'ЭКЗАМЕНАЦИОННЫЕ БИЛЕТЫ (ДЕМО)',
    description: '10 вопросов, 1 ошибка',
    tickets: Array.from({ length: 5 }, (_, i) => `БИЛЕТ ${i + 1}`),
  },
  {
    id: 2,
    title: 'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ',
    materials: [
      { title: 'Флаги МСС (пример)', link: '#' },
      { title: 'Правила судоходства (пример)', link: '#' }
    ]
  }
];

export default function ExamsPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">
          ДЕМО-РЕЖИМ: МИНТРАНС
        </h1>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-2">
            Пример адреса: наб.р.Пряжки 3/1, каб.319
          </p>
          <p className="font-semibold text-red-600 mt-2">
            ДЕМО-ЗАПИСЬ
          </p>
        </div>
      </header>

      <main className="space-y-6">
        {mockExamData.map((section) => (
          <section 
            key={section.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div 
              className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer"
              onClick={() => setActiveSection(prev => 
                prev === section.id ? null : section.id
              )}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-sm text-gray-600 mt-2">
                  {section.description}
                </p>
              )}
            </div>

            {activeSection === section.id && (
              <div className="p-4 border-t border-gray-100">
                {section.tickets && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {section.tickets.map((ticket, index) => (
                      <div
                          onClick={()=> router.push(`/testtest`)}
                        key={index}
                        className="p-3 text-center bg-blue-50 rounded-md hover:bg-blue-100 cursor-pointer"
                      >
                        {ticket}
                      </div>
                    ))}
                  </div>
                )}

                {section.materials && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.materials.map((material, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white border rounded-md hover:bg-gray-50 cursor-pointer"
                      >
                        {material.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}