"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";

export default function FoBlock() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const sections = [
        {
            id: 'about',
            title: 'О нас',
            content: (
                <div className="space-y-10">
                    <p className="text-gray-700 leading-relaxed">
                        АНО ДПО «УЦС» является структурным подразделением ВОСВОД и осуществляет образовательную
                        деятельность с 2002 года, обеспечивая безопасность на водных объектах и подготовку экипажей.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Организация признана МИНТРАНС РФ и действует согласно Конвенции ПНДВ, а её стандарты
                        подтверждены Российским морским регистром судоходства.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Система менеджмента качества сертифицирована по ГОСТ ISO9001-2015 (ISO 9001:2015).
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "/Фото комплект 1/соглашение о признании.PNG",
                            "/Фото комплект 1/Лицензия.PNG",
                            "/Фото комплект 1/0479_250428170120_001-1.png",
                            "/Фото комплект 1/0478_250428170035_001-1.png",
                            "/Фото комплект 1/0477_250428165914_001-1.png"
                        ].map((imageSrc, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`Документ ${index + 1}`}
                                    width={400}
                                    height={200}
                                    className="rounded-xl w-full h-auto object-cover cursor-pointer"
                                    onClick={() => handleImageClick(imageSrc)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'gims-contacts',
            title: 'Контакты инспекций ГИМС',
            content: (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Центр ГИМС ЛО',
                                address: '188662, Ленинградская область, пос. Мурино, Оборонная ул. д. 51',
                                phone: '8(813)704-32-85'
                            },
                            {
                                title: 'Всеволожск',
                                address: 'г. Всеволожск, ул. Вахрушева, д. 2',
                                phone: '8 (813-79) 31-447'
                            },
                            {
                                title: 'Гатчина',
                                address: 'г. Гатчина, Красноармейский пр., д. 14',
                                phone: '8 (813-71) 96-215'
                            },
                            {
                                title: 'Сосновый Бор',
                                address: 'г. Сосновый Бор, ул. Ленинградская, д. 1',
                                phone: '8 (813-69) 24-671'
                            },
                            {
                                title: 'Шлиссельбург',
                                address: 'г. Шлиссельбург, ул. Жука, д. 5',
                                phone: '8 (813-62) 77-677'
                            }
                        ].map((contact, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="bg-blue-50 p-6 rounded-lg relative overflow-hidden"
                            >
                                <h4 className="font-bold text-blue-800 text-lg">{contact.title}</h4>
                                <p className="text-gray-600 mt-2">{contact.address}</p>
                                <a
                                    href={`tel:${contact.phone.replace(/[\(\)\s-]/g, '')}`}
                                    className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    {contact.phone}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="bg-white w-full">
            <div className="container mx-auto px-4 py-12">
                {sections.map((section) => (
                    <div key={section.id} id={section.id} className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                        {section.content}
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Modal image"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
