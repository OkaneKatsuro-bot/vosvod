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

  const toggleDetails = (id: string) => {
    setExpandedRescuer(expandedRescuer === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          <span className="border-b-2 border-blue-400 pb-2">Команда спасателей мостика</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rescuers.map((rescuer) => (
            <div 
              key={rescuer.id}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={rescuer.imageUrl}
                  alt={rescuer.fullName}
                  fill
                  className="h-full w-full object-cover object-top"
                  style={{ 
                    transform: 'translateZ(0)', // Для оптимизации рендеринга
                    backfaceVisibility: 'hidden' // Исправление артефактов в некоторых браузерах
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{rescuer.fullName}</h3>
                <p className="text-blue-200 mb-1">
                  <span className="font-semibold">Должность:</span> {rescuer.position}
                </p>
                <p className="text-blue-200 mb-4">
                  <span className="font-semibold">Образование:</span> {rescuer.education}
                </p>
                
                <button
                  onClick={() => toggleDetails(rescuer.id)}
                  className="text-blue-300 hover:text-white text-sm font-medium mb-4 transition-colors"
                >
                  {expandedRescuer === rescuer.id ? 'Скрыть квалификацию' : 'Показать квалификацию'}
                </button>
                
                {expandedRescuer === rescuer.id && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-white">Квалификация:</h4>
                    <ul className="list-disc list-inside text-blue-200 space-y-1">
                      {rescuer.qualifications.map((qual, index) => (
                        <li key={index}>{qual}</li>
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