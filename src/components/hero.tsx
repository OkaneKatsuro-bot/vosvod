'use client'

import React, {useEffect, useState} from "react";
import Image from 'next/image';
import {FlipWords} from "./ui/flip-words";
import {motion} from "framer-motion";
import {Phone} from "lucide-react";

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/Rectangle.png",
            title: "Получить права на",
            words: ["катер", "лодку", "гидроцикл", "водолаза"],
            subtitle: "в Санкт-Петербурге",
            address: "ул. Декабристов д.32/2 (Театральная площадь д.2)",
            phone: "+7 (931) 978-73-78"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className='relative w-screen h-screen overflow-hidden pt-20'>
            {/* Фоновые изображения */}
            {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='absolute inset-0 top-25 h-[calc(100vh-5rem)]'> {/* Добавлено здесь */}
        <Image
          src={slide.image}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
          priority={index === 0}
        />
      </div>
      <div className='absolute inset-0 z-10'></div>
    </div>
  ))}

            {/* Сертификаты слева */}
            <div className="absolute left-20 top-[60%] -translate-y-[40%] z-30 hidden md:flex flex-col gap-3">
                <motion.div 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    className="w-40 h-56 relative">
                    <Image
                        src="/регистр.png"
                        alt="Сертификат 1"
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{x: -50, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.2}}
                    className="w-40 h-56 relative">
                    <Image
                        src="/МО.png"
                        alt="Сертификат 2"
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Основной контент */}
            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center px-4 py-16">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="w-full max-w-7xl mx-auto px-4"
                >
                    <div className="w-full text-center">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
                            {slides[currentSlide].title} <br/>
                            <span className="text-blue-400">
                                <FlipWords words={slides[currentSlide].words} duration={3000}/>
                            </span>
                        </h1>

                        <motion.p
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                    </div>

                    {/* Блок контактов */}
                    <div className="w-full flex justify-center">
                        <motion.div
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            transition={{delay: 0.2, type: "spring"}}
                            className="bg-black/60 backdrop-blur-lg rounded-xl p-8 border border-white/30 shadow-2xl w-full max-w-xl"
                        >
                            <div className="text-white text-center">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="h-[2px] w-16 bg-white/40 flex-1"></div>
                                    <span className="text-lg uppercase tracking-widest font-medium text-white/90">
                                        Контакты
                                    </span>
                                    <div className="h-[2px] w-16 bg-white/40 flex-1"></div>
                                </div>

                                <p className="text-2xl font-bold mb-2 text-white">
                                    Санкт-Петербург
                                </p>

                                <p className="text-gray-200 text-lg mb-6 font-medium">
                                    {slides[currentSlide].address}
                                </p>

                                <a
                                    href={`tel:${slides[currentSlide].phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center gap-3 text-3xl font-extrabold text-white hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                >
                                    <Phone className="w-7 h-7 stroke-2" />
                                    {slides[currentSlide].phone}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}