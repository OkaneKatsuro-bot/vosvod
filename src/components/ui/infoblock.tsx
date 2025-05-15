"use client";
import {motion} from 'framer-motion';
import Image from "next/image";
import {useState} from "react";

const InfoBlock = () => {
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
                        деятельность, направленную, прежде всего, на обеспечение безаварийной эксплуатации маломерных
                        судов и безопасности людей на водных объектах с 2002 г., являясь продолжателем традиций
                        преподавания советских морских школ ВОСВОД.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        АНО ДПО «УЦС» признана МИНТРАНС РФ МОРСКОЙ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИЕЙ (Соглашение от
                        04.07.2024 г. №10-38-17) и наделена полномочиями по подготовке экипажей морских судов в
                        соответствии с Конвенцией ПНДВ. Система стандартов качества освидетельствована Российским
                        морским регистром судоходства – Акт освидетельствования стандартов качества Российский морской
                        регистр судоходства № 1840035 от 14.09.2018 г.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Система менеджмента качества применительно к услугам в сфере образования соответствует
                        требованиям стандарта: ГОСТ ISO9001-2015 (ISO 9001:2015) (решение экспертной комиссии №31248 от
                        29 марта 2022 г. Номер в едином реестре системы №00031248И.)
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
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`Image ${index + 1}`}
                                    width={400}
                                    height={200}
                                    className="rounded-xl w-full h-auto object-cover cursor-pointer"
                                    priority
                                    onClick={() => handleImageClick(imageSrc)} // Открытие картинки в модальном окне при клике
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
                                whileHover={{scale: 1.02}}
                                className="bg-blue-50 p-6 rounded-lg relative overflow-hidden"
                            >
                                <h4 className="font-bold text-blue-800 text-lg">{contact.title}</h4>
                                <p className="text-gray-600 mt-2">{contact.address}</p>
                                <a
                                    href={`tel:${contact.phone.replace(/[\(\)\s-]/g, '')}`}
                                    className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2 group-hover:animate-ring"
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
        },
        {
            id: 'how-to-get',
            title: 'Как получить права ГИМС',
            content: (
                <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800">
                            Внимание! Остерегайтесь мошенников. Получить права ГИМС за несколько дней без обучения
                            невозможно.
                        </p>
                    </div>

                    <p className="text-gray-700">
                        Получить права ГИМС можно в Учебном Центре ВОСВОД. Всю информацию можно узнать по
                        телефону: {' '}
                        <a
                            href="tel:+79319787378"
                            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            +7 (931) 978-73-78
                        </a>.
                    </p>

                    <h4 className="font-bold text-lg mt-6 text-blue-900">Процесс получения прав:</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>Прохождение обучения по программе судоводителей</li>
                        <li>Сдача внутреннего экзамена в школе</li>
                        <li>Сдача экзамена в ГИМС</li>
                        <li>Получение удостоверения судоводителя</li>
                    </ol>
                </div>
            )
        },
        {
            id: 'certification',
            title: 'Аттестация судоводителей',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Сдача экзамена проводится в Государственной Инспекции по маломерным судам МЧС России (ГИМС).
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-bold text-blue-800 text-lg">Процедура аттестации:</h4>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                            <li>Экзамен в форме тестирования на компьютере</li>
                            <li>Продолжительность около 2 часов</li>
                            <li>В комиссии присутствует представитель ВОСВОД</li>
                            <li>Проводится в заранее назначенный день</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="w-full bg-white px-4 py-12 mt-16 relative"> {/* Увеличен верхний отступ mt-16 */}
            {/* Модальное окно для изображения */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Закрытие модального окна при клике вне изображения
                >
                    <div className="relative max-w-4xl mx-auto">
                        <motion.img
                            src={selectedImage}
                            alt="Selected"
                            className="rounded-xl w-full h-auto"
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3}}
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2"
                            onClick={closeModal} // Кнопка для закрытия модального окна
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
            <motion.h2
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="text-3xl font-bold text-center text-blue-900 mb-12 relative"
            >
        <span className="relative z-10 px-4 bg-white">
          Информация для судоводителей
        </span>
                <div className="absolute w-full h-1 bg-blue-100 top-1/2 transform -translate-y-1/2"></div>
            </motion.h2>

            <div className="space-y-6">
                {sections.map((section) => (
                    <motion.div
                        key={section.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                        className="border border-blue-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow relative"
                    >
                        <motion.div
                            whileHover={{scale: 1.01}}
                            className="p-6 bg-blue-50 cursor-pointer flex items-center"
                        >
                            <h3 className="text-xl font-semibold text-blue-900">
                                {section.title}
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className="p-6 bg-white"
                        >
                            {section.content}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InfoBlock;