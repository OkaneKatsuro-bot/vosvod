'use client'

import React, {useEffect, useState} from "react";
import Image from 'next/image';
import Link from "next/link";

import {motion} from "framer-motion";
import {Phone} from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

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
        <section className='relative w-screen h-screen overflow-hidden pt-24'>
            {/* Фоновое изображение */}
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
                    <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10'></div>
                </div>
            ))}

            {/* Сертификаты */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-6">
                {["/регистр.png", "/МО.png"].map((src, i) => (
                    <motion.div 
                        key={src}
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: i * 0.1}}
                        className="w-56 h-80 relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-shadow">
                        <Image
                            src={src}
                            alt="Сертификат"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Основной контент */}
            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="w-full max-w-7xl mx-auto px-4"
                >
                    <div className="w-full text-center space-y-8">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-4">
                            {slides[currentSlide].title}
                            <br />
                            <span className="font-medium text-blue-300">
                                <FlipWords 
                                    words={slides[currentSlide].words} 
                                    duration={3000}
                                    className="inline-block mx-2"
                                />
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide">
                            {slides[currentSlide].subtitle}
                        </p>
                    </div>

                    {/* Контакты */}
                    <div className="mt-16 flex justify-end">
                        <motion.div
                            initial={{scale: 0.95, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 w-full max-w-md space-y-6"
                        >
                            <div className="text-center space-y-4">
                                <div className="flex items-center gap-4 opacity-80">
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                                    <span className="text-sm uppercase tracking-[0.3em]">Контакты</span>
                                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-lg text-gray-300 font-light">
                                        {slides[currentSlide].address}
                                    </p>
                                    <a
                                        href={`tel:${slides[currentSlide].phone.replace(/\D/g, '')}`}
                                        className="inline-flex items-center gap-3 text-2xl text-white hover:text-blue-300 transition-colors font-medium"
                                    >
                                        <Phone className="w-6 h-6" />
                                        {slides[currentSlide].phone}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Кнопки действий */}
                    <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/signup" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                className="w-full px-12 py-5 bg-blue-600/90 hover:bg-blue-600 text-white rounded-full text-xl font-light tracking-wide transition-all border border-blue-400/30">
                                Записаться онлайн
                            </motion.button>
                        </Link>
                        <Link href="/test" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                className="w-full px-12 py-5 bg-transparent border-2 border-white/30 hover:border-white/50 text-white rounded-full text-xl font-light tracking-wide transition-all">
                                Личный кабинет
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Индикаторы слайдов */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                            ? 'bg-white w-8 backdrop-blur-sm' 
                            : 'bg-white/30'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}