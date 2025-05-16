"use client"


import {YMaps, Map, Placemark, ZoomControl, Polygon} from '@pbe/react-yandex-maps';
import {Mail, MapPin, Phone} from "lucide-react";

export default function ContactsPage() {
    return (
        <div>
            <h1 style={{fontSize: 32, marginBottom: 20}}>Контакты</h1>
            <div className="bg-white p-6  shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6"/>
                    Где нас найти
                </h3>
                <div className="relative w-full h-96  overflow-hidden flex flex-row gap-5 mb-8">
                    <div className='w-1/2 h-96 rounded-xl bg-white'>
                        <YMaps
                        query={{apikey: 'ВАШ_API_КЛЮЧ', lang: 'ru_RU'}}>
                        <Map
                            defaultState={{
                                center: [59.9343, 30.3351],
                                zoom: 12,
                                controls: [],
                            }}
                            width="100%"
                            height="100%"
                        >
                            <ZoomControl
                                options={{
                                    position: {
                                        top: "20px",
                                        right: "20px",
                                        bottom: "auto",
                                        left: "auto"
                                    },
                                    size: "large",
                                    visible: true,
                                    zoomDuration: 300
                                }}
                            />
                            {/* Метки городов */}
                            {[
                                [59.92671606014271, 30.29866621406384], // СПб
                            ].map((coord, index) => (
                                <Placemark
                                    key={index}
                                    geometry={coord}
                                    options={{
                                        preset: 'islands#blueCircleDotIcon',
                                        iconColor: '#2563eb',
                                    }}
                                />
                            ))}

                            {/* Область покрытия */}
                            <Polygon
                                geometry={[[/* координаты границ РФ */]]}
                                options={{
                                    fillColor: '#2563eb22',
                                    strokeColor: '#2563eb',
                                    strokeWidth: 1,
                                    opacity: 0.5
                                }}
                            />
                        </Map>
                    </YMaps></div>
                    <div className='w-1/2 h-full flex '>
                        <div>
                            {/* Контактная информация */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="space-y-6">
                                    {/* Телефон */}
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-blue-600 mt-1"/>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                Телефон
                                            </h3>
                                            <a
                                                href="tel:+789210112794"
                                                className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                                            >
                                                +7 (981) 700 3974
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-blue-600 mt-1"/>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                Электронная почта
                                            </h3>
                                            <div className="space-y-2">
                                                <div>
                                                    <a
                                                        href="mailto:vosvod@mail.ru"
                                                        className="text-blue-600 hover:text-blue-800 transition-colors"
                                                    >
                                                        vosvod@mail.ru
                                                    </a>
                                                    <p className="text-sm text-gray-500 mt-1">По всем вопросам</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Сотрудничество */}
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-blue-600 mt-1"/>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                Адрес
                                            </h3>
                                            <div className="space-y-2">
                                                <a
                                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                                >
                                                    СПб,Театральная пл., 2
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
