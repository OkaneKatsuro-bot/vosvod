"use client";

import React from "react";
import { LifeBuoy, BookOpen, Clock, Award, Users, ListChecks } from "lucide-react";

export function VOSVODCards() {
  const iconsData = [
    { title: "20 лет опыта", icon: <Award className="w-8 h-8 text-blue-600" /> },
    { title: "95% с первого раза", icon: <ListChecks className="w-8 h-8 text-blue-600" /> },
    { title: "24/7 поддержка", icon: <Clock className="w-8 h-8 text-blue-600" /> },
    { title: "Профессионалы", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { title: "Современные пособия", icon: <BookOpen className="w-8 h-8 text-blue-600" /> },
    { title: "Все виды обучения", icon: <LifeBuoy className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <section className="bg-[#f5f5f6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и описание */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4">
            Учебный центр <span className="text-blue-600">ВОСВОД</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            С 2004 года мы подготовили тысячи специалистов по водной безопасности. Надёжное обучение, современная база и поддержка на каждом этапе.
          </p>
        </div>

        {/* Иконки преимуществ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {iconsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-center p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-3 p-3 bg-blue-50 rounded-full">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-blue-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Призыв */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-blue-700">
            Будь с нами – будь среди лучших!
          </p>
        </div>
      </div>
    </section>
  );
}
