"use client";

import React from "react";
import { LifeBuoy, BookOpen, Clock, Award, Users, ListChecks } from 'lucide-react';

export function VOSVODCards() {
  const iconsData = [
    { title: "20 лет опыта", icon: <Award className="w-10 h-10 text-blue-600" /> },
    { title: "95% с первого раза", icon: <ListChecks className="w-10 h-10 text-blue-600" /> },
    { title: "24/7 поддержка", icon: <Clock className="w-10 h-10 text-blue-600" /> },
    { title: "Профессионалы", icon: <Users className="w-10 h-10 text-blue-600" /> },
    { title: "Современные пособия", icon: <BookOpen className="w-10 h-10 text-blue-600" /> },
    { title: "Все виды обучения", icon: <LifeBuoy className="w-10 h-10 text-blue-600" /> }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Контент */}
      <div className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
        {/* Заголовок и текст */}
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Учебный центр <span className="text-blue-600">ВОСВОД</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4 text-left">
            <p>
              Учебный центр ВОСВОД ведёт свою деятельность с 2004 года. За это время мы зарекомендовали себя как профессионалы и выпустили тысячи довольных клиентов, которые получили все необходимые документы.
            </p>
            <p>
              Мы обладаем огромным опытом по всем направлениям обучения, имеем превосходный преподавательский состав и разработали понятные учебные пособия.
            </p>
            <p className="font-semibold text-blue-700 text-center text-xl mt-6">
              Будь с нами – будь среди лучших!
            </p>
          </div>
        </div>

        {/* Иконки */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          {iconsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="p-4 bg-white/90 rounded-full shadow-md mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-blue-800 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}