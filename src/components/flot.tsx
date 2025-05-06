// components/rescue-bento-grid.tsx
"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function RescueBentoGrid() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-black flex flex-col relative overflow-hidden">
      {/* Star particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Заголовок */}
        <div className="pt-20 pb-12 text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,118,255,0.5)]">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Наш Флот
            </span>
          </h2>
          <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto px-4 font-light">
            Современные спасательные средства и специализированная техника для оперативной работы
          </p>
        </div>

        {/* Bento Grid */}
        <div className="w-full px-4 pb-12">
          <BentoGrid className="max-w-7xl mx-auto">
            {rescueItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                className={cn(
                  "bg-black/40 backdrop-blur-lg border border-blue-800/50 hover:border-blue-400/50 transition-all min-h-[400px]",
                  i === 3 ? "md:col-span-2" : ""
                )}
                titleClass="text-white/90 group-hover/bento:text-blue-400 text-3xl"
                descriptionClass="text-blue-200/80 font-medium"
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

const rescueItems = [
  {
    title: "Wellboat -51",
    description: "Специализированное спасательное судно",
    imageUrl: "/Wellboat-51.jpg",
  },
  {
    title: "Гидроцикл Polaris",
    description: "Высокоскоростное водное транспортное средство",
    imageUrl: "/Polaris.jpg",
  },
  {
    title: "Аэробот STEL",
    description: "Амфибийное судно для сложных условий",
    imageUrl: "/Stel.png",
  },
  {
    title: "Судно на воздушной подушке CHRISTY 6143",
    description: "Современное оборудование для поисковых операций",
    imageUrl: "/Christy6143.jpg",
  },
  {
    title: "Крейсерская парусная яхта PINTO",
    description: "Многофункциональное судно для спасательных операций",
    imageUrl: "/yacht.jpg",
  },
];