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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a1a2f] py-12">
      {/* Контент */}
      <section className="relative z-10 w-full min-h-screen py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="w-full text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Наши программы
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300">
              Выберите подходящий курс и начните обучение
            </p>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-black/40 backdrop-blur-lg relative group/card hover:shadow-2xl hover:shadow-blue-500/20 border-white/20 w-full h-full rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-blue-400"
                  >
                    {card.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm mt-4"
                  >
                    {card.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-6">
                    <img
                      src={card.imageUrl}
                      className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl border border-white/20"
                      alt={card.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
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