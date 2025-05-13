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
    <div className="min-h-screen bg-[#f5f5f6] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
      <header className="mb-16 text-center">
  <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4">
    Программы <span className="text-blue-600">обучения</span>
  </h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
    Выберите подходящий курс и начните профессиональное обучение с опытными инструкторами центра ВОСВОД.
  </p>
</header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {cardsData.map((card, index) => (
    <CardContainer key={index} className="inter-var h-full">
      <CardBody className="bg-white hover:shadow-md transition-shadow duration-300 border border-gray-200 rounded-xl p-6 flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <CardItem className="text-lg font-semibold text-blue-700 mb-2 line-clamp-2">
            {card.title}
          </CardItem>
          <CardItem as="p" className="text-sm text-gray-600 line-clamp-3 flex-grow">
            {card.description}
          </CardItem>

          <CardItem className="mt-4">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="rounded-md w-full h-40 object-cover border border-gray-200"
            />
          </CardItem>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <CardItem
            as="a"
            href="#"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Подробнее →
          </CardItem>
          <CardItem
            as="button"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Выбрать
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  ))}
</div>
      </div>
    </div>
  );
}