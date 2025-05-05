import { cn } from "@/lib/utils";
import React from "react";
import {
  IconLifebuoy,
  IconAlertTriangle,
  IconShieldCheck,
  IconShip,
  IconHeartbeat
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

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
              header={item.header}
              icon={item.icon}
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

const RescueSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900"></div>
);

const rescueItems = [
  {
    title: "Спасательные катера",
    description: "Скоростные суда для экстренного реагирования",
    header: <RescueSkeleton />,
    icon: <IconShip className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
  {
    title: "Аварийное снаряжение",
    description: "Специальное оборудование для работы в ЧС",
    header: <RescueSkeleton />,
    icon: <IconShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
  {
    title: "Медицинские модули",
    description: "Мобильные комплексы для оказания первой помощи",
    header: <RescueSkeleton />,
    icon: <IconHeartbeat className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
  {
    title: "Системы навигации",
    description: "Современное оборудование для поисковых операций",
    header: <RescueSkeleton />,
    icon: <IconAlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
  {
    title: "Поддержка 24/7",
    description: "Круглосуточная готовность к выезду",
    header: <RescueSkeleton />,
    icon: <IconLifebuoy className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
  },
];