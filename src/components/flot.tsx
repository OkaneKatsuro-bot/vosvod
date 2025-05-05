import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function RescueBentoGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 flex flex-col">
      {/* Заголовок */}
      <div className="pt-20 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-200">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            Наш Флот
          </span>
        </h2>
        <p className="mt-4 text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto px-4">
          Современные спасательные средства и специализированная техника для оперативной работы
        </p>
      </div>

      {/* Bento Grid на весь экран */}
      <div className="flex-1 w-full px-4 pb-12">
        <BentoGrid className="max-w-7xl mx-auto h-full">
          {rescueItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl} // Добавлен новый пропс
              className={cn(
                "border-2 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-500",
                i === 3 ? "md:col-span-2" : ""
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const RescueImage = ({ src }: { src: string }) => (
  <div className="relative flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden">
    <Image
      src={src}
      alt=""
      fill
      className="object-cover"
    />
  </div>
);

const rescueItems = [
  {
    title: "Спасательные катера",
    description: "Скоростные суда для экстренного реагирования",
    header: <RescueImage src="/rescue-boats.jpg" />,
    imageUrl: "/Wellboat-51.jpg",
  },
  {
    title: "Аварийное снаряжение",
    description: "Специальное оборудование для работы в ЧС",
    imageUrl: "/Polaris.jpg",
  },
  {
    title: "Медицинские модули",
    description: "Мобильные комплексы для оказания первой помощи",
    header: <RescueImage src="/medical-module.jpg" />,
    imageUrl: "/Stel.png",
  },
  {
    title: "Системы навигации",
    description: "Современное оборудование для поисковых операций",
    header: <RescueImage src="/navigation-system.jpg" />,
    imageUrl: "/Christy6143.jpg",
  },
  {
    title: "Поддержка 24/7",
    description: "Круглосуточная готовность к выезду",
    header: <RescueImage src="/support-team.jpg" />,
    imageUrl: "/yacht.jpg",
  },
];