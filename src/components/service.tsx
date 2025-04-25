"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  const cardsData = [
    {
      title: "Nature Explorer",
      description: "Discover the beauty of untouched wilderness and rare species.",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "City Lights",
      description: "Experience the vibrant energy of metropolitan nightlife.",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Mountain Adventure",
      description: "Conquer the highest peaks and enjoy breathtaking views.",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Beach Paradise",
      description: "Relax on golden sands with crystal clear waters.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Desert Mystique",
      description: "Explore the vast, silent beauty of arid landscapes.",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Forest Retreat",
      description: "Immerse yourself in the tranquility of ancient woods.",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Winter Wonderland",
      description: "Enjoy the magic of snow-covered landscapes.",
      imageUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Autumn Colors",
      description: "Witness the spectacular transformation of fall foliage.",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Waterfall Escape",
      description: "Feel the power and beauty of cascading waters.",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a1a2f] py-12">
      {/* Красный матросский круг с восходом */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[600px] w-[600px] animate-spin-slow">
          {/* Большой восход (ореол) - теперь шире и краснее */}
          <div className="absolute inset-0 rounded-full bg-[#FD1D03]/10 shadow-[0_0_80px_30px_rgba(253,29,3,0.4)]" />
          
          {/* Концентрические круги - сделаны шире */}
          <div className="absolute inset-0 rounded-full border-[6px] border-[#FD1D03]/40" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#FD1D03]/50" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#FD1D03]/60" />
          
          {/* Центральная точка - увеличена */}
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FD1D03] shadow-xl shadow-[#FD1D03]/60" />
          
          {/* Текст по кругу - обновлен цвет */}
          <div className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M300,300 m-250,0 a250,250 0 1,1 500,0 a250,250 0 1,1 -500,0"
                />
              </defs>
              <text fill="#FD1D03" fontSize="28" fontFamily="Arial" fontWeight="bold">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • УЧЕБНЫЙ ЦЕНТР • ВСЕРОССИЙСКОЕ ОБЩЕСТВО СПАСАТЕЛЕЙ НА ВОДАХ •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Сетка карточек - обновлены цвета на #FD1D03 */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-[#0a2342] relative group/card hover:shadow-2xl hover:shadow-[#FD1D03]/20 border-[#FD1D03]/40 w-full h-full rounded-xl p-4 border-2">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-[#FD1D03]"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-[#f8a48a] text-xs max-w-sm mt-2"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <img
                  src={card.imageUrl}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-[#FD1D03]/40"
                  alt={card.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-3 py-1 rounded-xl text-xs font-normal text-[#FD1D03] hover:bg-[#FD1D03]/10 transition-colors"
                >
                  Подробнее →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-3 py-1 rounded-xl bg-[#FD1D03] text-white text-xs font-bold hover:bg-[#D01803] transition-colors"
                >
                  Выбрать
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );

}
