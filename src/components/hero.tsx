// components/hero.tsx
'use client'

import React from "react";
import {FlipWords} from "./ui/flip-words";
import {motion} from "framer-motion";
import {Phone} from "lucide-react";

export const Hero = () => {
    const content = {
        title: "Получить права на",
        words: ["катер", "лодку", "гидроцикл", "водолаза"],
        subtitle: "в Санкт-Петербурге",
        address: "ул. Декабристов д.32/2 (Театральная площадь д.2)",
        phone: "+7 (931) 978-73-78"
    };

    return (
        <section className='relative w-full h-screen pt-20'>
            {/* Основной контент */}
            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center px-4 py-16">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="w-full max-w-7xl mx-auto px-4"
                >
                    <div className="w-full text-center">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
                            {content.title} <br/>
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"></span>
                                <span className="relative text-blue-400">
                                    <FlipWords 
                                        words={content.words} 
                                        duration={3000}
                                        className="font-extrabold tracking-tight"
                                    />
                                </span>
                            </span>
                        </h1>

                        <motion.p
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                        >
                            {content.subtitle}
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
                                    {content.address}
                                </p>

                                <a
                                    href={`tel:${content.phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center gap-3 text-3xl font-extrabold text-white hover:text-blue-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                >
                                    <Phone className="w-7 h-7 stroke-2" />
                                    {content.phone}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}