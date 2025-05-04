// components/ExamSection.tsx
'use client';

import { ExamSection as SectionType } from '@/types/exam';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ExamSectionProps {
  section: SectionType;
  testId: number;
}

export default function ExamSection({ section, testId }: ExamSectionProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleTicketClick = (ticketNumber: number) => {
    console.log('Переход на:', `/test/${testId}/ticket/${ticketNumber}`);
    router.push(`/test/${testId}/ticket/${ticketNumber}`);
  };

  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div 
        className="p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-blue-600">Раздел {section.id}.</span>
          {section.title}
        </h2>
        {section.description && (
          <p className="text-sm text-gray-600 mt-2">{section.description}</p>
        )}
      </div>

      {isOpen && section.tickets && (
        <div className="p-4 border-t border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Доступные билеты
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {section.tickets.map((ticket, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log('Клик по билету:', index + 1);
                    handleTicketClick(index + 1);
                  }}
                  className="p-3 text-center bg-blue-50 rounded-md hover:bg-blue-100 transition-colors border border-blue-100"
                >
                  <span className="font-medium text-blue-600">
                    {ticket}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}