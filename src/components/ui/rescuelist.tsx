"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Rescuer {
  id: string;
  fullName: string;
  position: string;
  education?: string;
  qualifications: string[];
  imageUrl: string;
}

export default function BridgeTeamRescuers() {
  const [expandedRescuer, setExpandedRescuer] = useState<string | null>(null);

    // Добавленная функция
    const toggleDetails = (id: string) => {
      setExpandedRescuer(prev => prev === id ? null : id);
    };

  const rescuers: Rescuer[] = [
    {
      id: "1",
      fullName: "Кочетов Даниил Юрьевич",
      position: "Директор, преподаватель (инструктор)",
      education: "Высшее",
      qualifications: ["Судоводитель маломерного судна", "Спасатель Российской Федерации"],
      imageUrl: "/флот1.jpg"
    },
    // Добавлены новые члены команды
    {
      id: "2",
      fullName: "Поляков Вячеслав Анатольевич",
      position: "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: ["Моторист 1-го класса", "Боцман", "Судоводитель маломерного судна"],
      imageUrl: "/флот2.jpg"
    },
    {
      id: "3",
      fullName: "Соловьев Алексей Викторович",
      position: "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: ["Капитан", "Оператор ГМССБ", "Судоводитель  маломерного судна", "Радиолокационное наблюдение и прокладка", "Специалист по спасательным шлюпкам и плотам, дежурным шлюпкам (таблица А-VI/2-1)"],
      imageUrl: "/флот3.jpg"
    },
    {
      id: "4",
      fullName: "Курлов Валерий Петрович",
      position: "Преподаватель (инструктор), преподаватель практической  подготовки на парусные суда",
      education: "Высшее",
      qualifications: ["Яхтенный капитан без ограничений парусности и района плавания", "Судоводитель парусно-моторного судна", "Радиолокационное наблюдение и прокладка"],
      imageUrl: "/флот4.jpg"
    },
    {
      id: "5",
      fullName: "Росляков Виктор Сергеевич",
      position: "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      qualifications: ["Судоводитель маломерного судна", "Спасатель Российской  Федерации", "Международный инструктор по спасанию на воде ILS", "Инструктор тренажере морской радиосвязи прибрежного плавания ГМССБ в рамках применения технического средства обучения для тренажерной подготовки судоводителей по одобренным программам подготовки", "Инструктор комплексного навигационном тренажере «CNM-2014» в рамках применения технического средства обучения для тренажерной подготовки судоводителей по одобренным программам подготовки" ],
      imageUrl: "/флот5.jpg"
    },
    {
      id: "6",
      fullName: "Латыпов Артем Фаритович",
      position: "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: ["Спасатель Российской Федерации", "Судоводитель маломерного  маломерным судна", "Водолаз 6 разряда", "Руководитель водолазных спусков", "Инструктор- водолаз", "Международный водолаз Commercial Divers International CDI", "Инструктор-тренер  International Liaison Committee on Resuscitation (ILCOR), Emergency First Response (EFR), Basic life support (BLS), Diving Medicine Shore Based First Responder,  PADI (Professional Association of Diving Instructors), CMAS (Всемирная конфедерация подводной деятельности)","Международный инструктор  по спасанию на воде ILS (International Life Saving Federation), подводной деятельности)"],
      imageUrl: "/флот6.jpg"
    },
    {
      id: "7",
      fullName: "Малышева Мария Витальевна",
      position: "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор Сведения о квалификации и образовании",
      education: "Высшее",
      qualifications: ["Спасатель Российской Федерации", "Международный инструктор  по спасанию на воде ILS (International Life Saving Federation), подводной деятельности)", "Судоводитель маломерного  маломерным судна", "Инструктор тренажере морской радиосвязи прибрежного плавания ГМССБ в рамках применения технического средства обучения для тренажерной подготовки судоводителей по одобренным программам подготовки", "Инструктор комплексного навигационном тренажере «CNM-2014» в рамках применения технического средства обучения для тренажерной подготовки судоводителей по одобренным программам подготовки"],
      imageUrl: "/флот7.jpg",
    }
  ];

  return (
    <div className="min-h-screen to-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 w-full"></span>
            <span className="relative">Команда спасателей мостика</span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {rescuers.map((rescuer) => (
            <div 
              key={rescuer.id}
              className="h-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col shadow-lg hover:shadow-blue-500/20"
            >
              <div className="relative aspect-square w-full overflow-hidden">
  <Image
    src={rescuer.imageUrl}
    alt={rescuer.fullName}
    fill
    className="object-cover grayscale-[15%] brightness-105 contrast-125"
    style={{ 
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden'
    }}
    priority={false}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 rounded-xl z-0" />
</div>        
              <div className="p-6 flex flex-col flex-1 bg-gray-800/80">
                <h3 className="text-xl font-bold text-white mb-2">{rescuer.fullName}</h3>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-blue-400">Должность:</span> {rescuer.position}
                </p>
                {rescuer.education && (
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold text-blue-400">Образование:</span> {rescuer.education}
                  </p>
                )}
                
                <button
                  onClick={() => toggleDetails(rescuer.id)}
                  className="mt-auto w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  {expandedRescuer === rescuer.id ? 'Скрыть квалификацию' : 'Показать квалификацию'}
                </button>
                
                {expandedRescuer === rescuer.id && (
                  <div className="mt-4 space-y-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-blue-500">
                    <h4 className="font-semibold text-white">Квалификация:</h4>
                    <ul className="text-gray-300 space-y-2">
                      {rescuer.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}