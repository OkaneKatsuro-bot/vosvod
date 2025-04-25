"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Rescuer {
  id: string;
  fullName: string;
  position: string;
  experience: string;
  qualifications: string[];
  imageUrl: string;
}

export default function BridgeTeamRescuers() {
  const [expandedRescuer, setExpandedRescuer] = useState<string | null>(null);

  const rescuers: Rescuer[] = [
    {
      id: "1",
      fullName: "Иванов Алексей Петрович",
      position: "Капитан-спасатель",
      experience: "15 лет",
      qualifications: ["Мастер спорта по водному туризму", "Эксперт по навигации", "Сертифицированный водолаз"],
      imageUrl: "/rescuer1.jpg"
    },
    // Добавлены новые члены команды
    {
      id: "2",
      fullName: "Смирнова Елена Владимировна",
      position: "Старший помощник",
      experience: "12 лет",
      qualifications: ["Специалист по радиосвязи", "Инструктор по выживанию", "Медицинский работник"],
      imageUrl: "/rescuer2.jpg"
    },
    {
      id: "3",
      fullName: "Кузнецов Дмитрий Игоревич",
      position: "Штурман-спасатель",
      experience: "10 лет",
      qualifications: ["Эксперт по метеорологии", "Специалист по ГИС", "Инструктор по первой помощи"],
      imageUrl: "/rescuer3.jpg"
    },
    {
      id: "4",
      fullName: "Петров Андрей Сергеевич",
      position: "Боцман",
      experience: "8 лет",
      qualifications: ["Специалист по такелажу", "Водолаз 3-й категории", "Инструктор по ремонту судов"],
      imageUrl: "/rescuer4.jpg"
    },
    {
      id: "5",
      fullName: "Васильева Ольга Игоревна",
      position: "Радист",
      experience: "6 лет",
      qualifications: ["Эксперт связи", "Оператор спутниковых систем", "Криптограф"],
      imageUrl: "/rescuer5.jpg"
    },
    {
      id: "6",
      fullName: "Николаев Максим Викторович",
      position: "Медик",
      experience: "9 лет",
      qualifications: ["Хирург", "Специалист по гипербарической медицине", "Парамедик"],
      imageUrl: "/rescuer6.jpg"
    },
    {
      id: "7",
      fullName: "Федорова Анна Дмитриевна",
      position: "Инженер",
      experience: "11 лет",
      qualifications: ["Судовой механик", "Эксперт по аварийным системам", "Электрик"],
      imageUrl: "/rescuer7.jpg"
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
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{rescuer.fullName}</h3>
                <p className="text-blue-200 mb-1">
                  <span className="font-semibold">Должность:</span> {rescuer.position}
                </p>
                <p className="text-blue-200 mb-4">
                  <span className="font-semibold">Опыт:</span> {rescuer.experience}
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