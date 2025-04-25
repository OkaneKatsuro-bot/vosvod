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
      {/* Графическая интерпретация Ленинградской области */}
      <div className="absolute inset-0 z-0">
        {/* Основной фон с градиентом */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
        
        {/* Стилизованная карта области */}
        <svg 
          viewBox="0 0 800 600" 
          className="absolute bottom-0 right-0 w-2/3 h-auto opacity-20"
          preserveAspectRatio="xMinYMin"
        >
          {/* Упрощённые контуры Ленинградской области */}
          <path 
            d="M150,100 L250,50 L350,80 L450,40 L550,90 L650,60 L700,150 L650,250 L600,300 L550,350 L500,400 L450,450 L400,500 L300,450 L200,400 L100,350 L50,250 Z" 
            fill="none" 
            stroke="#1e3a8a" 
            strokeWidth="2"
          />
          
          {/* Водные объекты */}
          <path 
            d="M200,200 Q300,150 400,200 T600,200" 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="3"
            strokeDasharray="5,5"
          />
          
          {/* Точки-населенные пункты */}
          <circle cx="300" cy="250" r="8" fill="#1e40af" />
          <circle cx="450" cy="300" r="6" fill="#1e40af" />
          <circle cx="350" cy="400" r="4" fill="#1e40af" />
        </svg>

        {/* Волнообразные элементы */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              fill="#1e3a8a"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              fill="#1e3a8a"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="#1e3a8a"
            ></path>
          </svg>
        </div>
      </div>

      {/* Контент */}
      <div className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
        {/* Заголовок и текст */}
        <div className="text-center mb-16 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          {iconsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="p-4 bg-white rounded-full shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
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