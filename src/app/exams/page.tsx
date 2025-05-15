'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const mockExamData = [
  {
    id: 1,
    title: 'Экзаменационные билеты (Демо)',
    description: '10 вопросов, 1 ошибка',
    tickets: Array.from({ length: 5 }, (_, i) => `Билет ${i + 1}`),
  },
  {
    id: 3,
    title: 'Раздел 4. Дополнительные материалы',
    materials: [
      { title: 'Флаги и вымпелы международной системы сигналов (МСС)', link: '#' },
      { title: 'МППСС (море): карточки огни и знаки', link: '#' },
      { title: 'ВВП (реки, каналы): знаки', link: '#' },
      { title: 'Как решать навигационные задачи', link: '#' }
    ]
  }  
];

export default function ExamsPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="bg-[#f5f5f6] min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
      <header className="mb-10">
  <h1 className="text-4xl font-semibold text-blue-800 mb-4">
    Защищено: Минтранс
  </h1>
  <div className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm space-y-3 text-sm text-gray-700 leading-relaxed">
    <p>
      Уважаемые курсанты!<br />
      Тренажерный центр ВОСВОД находится рядом — наб. р. Пряжки 3/1, 3 этаж, каб. 319 (код на входе 123).
    </p>
    <p>
      👉{' '}
      <a
        href="/training-signup"
        className="text-blue-700 hover:text-blue-900 underline font-medium"
      >
        ЗАПИСЬ НА ПРАКТИЧЕСКУЮ ТРЕНАЖЕРНУЮ ПОДГОТОВКУ
      </a>
    </p>
    <p>
      Список документов после обучения для подачи в государственный орган на получение государственного удостоверения на право управления.
    </p>
    <p>
      👉{' '}
      <a
        href="/docs-after-training"
        className="text-blue-700 hover:text-blue-900 underline font-medium"
      >
        Список документов после обучения
      </a>
    </p>
    <p className="text-red-600 font-semibold">Демо-запись</p>
  </div>
</header>
        <main className="space-y-5">
          {mockExamData.map((section) => (
            <section
              key={section.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() =>
                  setActiveSection((prev) => (prev === section.id ? null : section.id))
                }
                className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors"
                aria-expanded={activeSection === section.id}
              >
                <h2 className="text-lg font-medium text-blue-800">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {section.description}
                  </p>
                )}
              </button>

              {activeSection === section.id && (
                <div className="px-5 py-4 border-t border-gray-100">
                  {section.tickets && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                      {section.tickets.map((ticket, index) => (
                        <div
                          key={index}
                          onClick={() => router.push('/testtest')}
                          className="text-sm px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 text-center rounded-md border border-blue-100 cursor-pointer transition"
                        >
                          {ticket}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.materials && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.materials.map((material, index) => (
                        <a
                          key={index}
                          href={material.link}
                          className="block px-4 py-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-sm text-blue-800 transition"
                        >
                          {material.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}