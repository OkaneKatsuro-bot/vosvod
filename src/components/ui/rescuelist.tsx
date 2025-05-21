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

  const toggleDetails = (id: string) => {
    setExpandedRescuer((prev) => (prev === id ? null : id));
  };

  const rescuers: Rescuer[] = [
    {
      id: "1",
      fullName: "Кочетов Даниил Юрьевич",
      position: "Директор, преподаватель (инструктор)",
      education: "Высшее",
      qualifications: [
        "Судоводитель маломерного судна",
        "Спасатель Российской Федерации",
      ],
      imageUrl: "/флот1.jpg",
    },
    {
      id: "2",
      fullName: "Поляков Вячеслав Анатольевич",
      position:
        "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: [
        "Моторист 1-го класса",
        "Боцман",
        "Судоводитель маломерного судна",
      ],
      imageUrl: "/флот2.jpg",
    },
    {
      id: "3",
      fullName: "Соловьев Алексей Викторович",
      position:
        "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: [
        "Капитан",
        "Оператор ГМССБ",
        "Судоводитель  маломерного судна",
        "Радиолокационное наблюдение и прокладка",
        "Специалист по спасательным шлюпкам и плотам, дежурным шлюпкам (таблица А-VI/2-1)",
      ],
      imageUrl: "/флот3.jpg",
    },
    {
      id: "4",
      fullName: "Курлов Валерий Петрович",
      position:
        "Преподаватель (инструктор), преподаватель практической  подготовки на парусные суда",
      education: "Высшее",
      qualifications: [
        "Яхтенный капитан без ограничений парусности и района плавания",
        "Судоводитель парусно-моторного судна",
        "Радиолокационное наблюдение и прокладка",
      ],
      imageUrl: "/флот4.jpg",
    },
    {
      id: "5",
      fullName: "Росляков Виктор Сергеевич",
      position:
        "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      qualifications: [
        "Судоводитель маломерного судна",
        "Спасатель Российской  Федерации",
        "Международный инструктор по спасанию на воде ILS",
        "Инструктор тренажере морской радиосвязи прибрежного плавания ГМССБ...",
        "Инструктор комплексного навигационном тренажере «CNM-2014»...",
      ],
      imageUrl: "/флот5.jpg",
    },
    {
      id: "6",
      fullName: "Латыпов Артем Фаритович",
      position:
        "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: [
        "Спасатель Российской Федерации",
        "Судоводитель маломерного  маломерным судна",
        "Водолаз 6 разряда",
        "Руководитель водолазных спусков",
        "Инструктор- водолаз",
        "Международный водолаз CDI",
        "Инструктор-тренер ILCOR, EFR, BLS, Diving Medicine, PADI, CMAS",
        "Международный инструктор по спасанию на воде ILS",
      ],
      imageUrl: "/флот6.jpg",
    },
    {
      id: "7",
      fullName: "Малышева Мария Витальевна",
      position:
        "Преподаватель (инструктор), инструктор тренажерной подготовки, экзаменатор",
      education: "Высшее",
      qualifications: [
        "Спасатель Российской Федерации",
        "Международный инструктор по спасанию на воде ILS",
        "Судоводитель маломерного  маломерным судна",
        "Инструктор тренажере морской радиосвязи прибрежного плавания ГМССБ...",
        "Инструктор комплексного навигационном тренажере «CNM-2014»...",
      ],
      imageUrl: "/флот7.jpg",
    },
  ];

  return (
    <section className="bg-[#f5f5f6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-800 text-center mb-12">
          Старший преподавательский состав
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {rescuers.map((rescuer) => (
            <div
              key={rescuer.id}
              className="flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={rescuer.imageUrl}
                  alt={rescuer.fullName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">
                  {rescuer.fullName}
                </h3>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium text-blue-600">Должность:</span> {rescuer.position}
                </p>
                {rescuer.education && (
                  <p className="text-gray-700 text-sm mb-3">
                    <span className="font-medium text-blue-600">Образование:</span> {rescuer.education}
                  </p>
                )}

                <button
                  onClick={() => toggleDetails(rescuer.id)}
                  className="mt-auto w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  {expandedRescuer === rescuer.id ? "Скрыть квалификацию" : "Показать квалификацию"}
                </button>

                {expandedRescuer === rescuer.id && (
                  <div className="mt-4 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pr-2">
                    <h4 className="text-sm font-semibold text-blue-700 mb-2">Квалификация:</h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
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
    </section>
  );
}