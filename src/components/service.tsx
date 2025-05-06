"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  const cardsData = [
    {
      title: "Яхтенный рулевой МИНТРАНС",
      description: "Практика проводится в акватории Финского залива, под руководством опытного инструктора.",
      imageUrl: "img_3742.jpg"
    },
    {
      title: "Права на спецтехнику МИНТРАНС",
      description: "Учебные группы не более 10 человек, что позволяет создать индивидуальный подход к каждому курсанту.",
      imageUrl: "1-768x576.jpg"
    },
    {
      title: "Обучение матросов, мотористов, рулевых речного флота",
      description: "Подготовка судоводителей маломерных судов",
      imageUrl: "2-2-768x645.jpeg"
    },
    {
      title: "Прогулочные суда МИНТРАНС",
      description: "Учебный Центр ВОСВОД объявляет набор на обучение судоводителей маломерных прогулочных судов с последующим получением прав МИНТРАНС.",
      imageUrl: "3-768x576.jpg"
    },
    {
      title: "Коммерческие суда МИНТРАНС",
      description: "Программа профессионального обучения для судоводителя маломерного судна, используемого в коммерческих целях.",
      imageUrl: "IMG_3947-768x576.jpg"
    },
    {
      title: "Курсы судоводителей маломерного судна (Курсы ГИМС)",
      description: "Учебный Центр ВОСВОД (Всероссийское Общество Спасания на Водах) проводит курсы подготовки судоводителей маломерных судов по всем категориям.",
      imageUrl: "IMG_3961-768x576.jpg"
    },
    {
      title: "Права на квадроцикл, снегоход. Гостехнадзор",
      description: "Преподается в классах оборудованных последним словом техники обучения. Учебные группы не более 10 человек, что позволяет создать индивидуальный подход к каждому курсанту.",
      imageUrl: "1-1-768x512.jpg"
    },
    {
      title: "Обучение водолазов, дайверов",
      description: "Учебный Центр ВОСВОД производит обучение водолазов 4-7 разряда и дайверов категорий Diver CMAS 1 звезда и Diver CMAS 2 звезды.",
      imageUrl: "2-768x512.jpg"
    },
    {
      title: "Спасатели",
      description: "Курс обучения включает в себя полный спектр навыков для обеспечения безопасности и спасания на водных объектах, местах массового отдыха людей на водах, аквапарках, бассейнах,SPA-зонах, детских оздоровительных лагерей и т.д.",
      imageUrl: "4-768x512.jpg"
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-12  from-blue-900/30 to-black">
      <section className="relative z-10 w-full min-h-screen py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="w-full text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="border-b-2 pb-2">
                Программы обучения
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300">
              Выберите подходящий курс и начните профессиональное обучение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <CardContainer key={index} className="inter-var h-full">
                <CardBody className="bg-black/60 backdrop-blur-xl relative group/card hover:shadow-2xl hover:shadow-blue-500/30 border-white/30 w-full h-full rounded-xl p-6 border flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 rounded-xl" />
                  
                  <div className="flex-1 relative z-10">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-blue-400 mb-4 line-clamp-2 drop-shadow-lg"
                    >
                      {card.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-200 text-sm line-clamp-3 drop-shadow-md"
                    >
                      {card.description}
                    </CardItem>
                  </div>

                  <CardItem translateZ="100" className="w-full mt-4 relative">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                      <img
                        src={card.imageUrl}
                        className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl border border-white/30"
                        alt={card.title}
                      />
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-center mt-6 relative z-10">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="#"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      Подробнее →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                    >
                      Выбрать
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}