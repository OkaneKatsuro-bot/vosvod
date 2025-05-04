'use client'

import React, {useEffect, useState} from "react";
import Image from 'next/image';
import Link from "next/link";
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
        <section className='relative w-screen h-screen  overflow-hidden'>
            {/* Фоновые изображения с анимацией */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={slide.image}
                        alt="Background"
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full"
                        priority={index === 0}
                    />
                    <div className='absolute inset-0 bg-black/40 z-10'></div>
                </div>
            ))}

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

                        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-10">
                            {slides[currentSlide].subtitle}
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        <motion.div
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            transition={{delay: 0.2, type: "spring"}}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl w-full max-w-2xl"
                        >
                            <div className="text-white text-center">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="h-1 w-16 bg-blue-400 flex-1"></div>
                                    <span className="text-lg uppercase tracking-widest font-medium">Контакты</span>
                                    <div className="h-1 w-16 bg-blue-400 flex-1"></div>
                                </div>

                                <p className="text-2xl font-bold mb-2">
                                    Санкт-Петербург
                                </p>

                                <p className="text-gray-300 text-lg mb-6">
                                    {slides[currentSlide].address}
                                </p>

                                <a
                                    href={`tel:${slides[currentSlide].phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center gap-3 text-3xl font-extrabold text-white hover:text-blue-300 transition-colors"
                                >
                                    <Phone className="w-7 h-7"/>
                                    {slides[currentSlide].phone}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/signup" className="w-full sm:w-auto">
                            <button
                                className="w-full px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/30">
                                Записаться онлайн
                            </button>
                        </Link>
                        <Link href="/test" className="w-full sm:w-auto">
                            <button
                                className="w-full px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full text-2xl font-bold transition-all transform hover:scale-105">
                                Личный кабинет
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Индикаторы слайдов */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
                        aria-label={`Перейти к слайду ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}