"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function RescueBentoGrid() {
  return (
    <section className="bg-[#f5f5f6] px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-800">
            Наш флот
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Современные спасательные средства и специализированная техника для оперативной работы
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="gap-6">
          {rescueItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              className={cn(
                "relative overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[400px]",
                i === 3 ? "md:col-span-2" : ""
              )}
              // Белый текст, затемнение отключено
              titleClass="relative z-10 text-white text-xl font-semibold group-hover/bento:text-blue-200 transition-colors"
              descriptionClass="relative z-10 text-white/90 mt-2 text-sm"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
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
