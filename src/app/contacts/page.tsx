"use client";

import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="p-4 md:p-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Контакты</h1>

      <div className="p-4 md:p-6 rounded-xl bg-white">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Где нас найти
        </h3>

        {/* Колонка на мобилке, строка на десктопе */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Карта */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden">
            <YMaps query={{ apikey: "ВАШ_API_КЛЮЧ", lang: "ru_RU" }}>
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
                    },
                    size: "large",
                    visible: true,
                    zoomDuration: 300,
                  }}
                />
                <Placemark
                  geometry={[59.92671606014271, 30.29866621406384]}
                  options={{
                    preset: "islands#blueCircleDotIcon",
                    iconColor: "#2563eb",
                  }}
                />
              </Map>
            </YMaps>
          </div>

          {/* Контактная информация */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-0 space-y-6">

              {/* Телефон */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                  <a
                    href="tel:+79817003974"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-base"
                  >
                    +7 (981) 700 3974
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Электронная почта</h3>
                  <a
                    href="mailto:vosvod@mail.ru"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    vosvod@mail.ru
                  </a>
                  <p className="text-sm">По всем вопросам</p>
                </div>
              </div>

              {/* Адрес */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                  <p className="text-blue-600 hover:text-blue-800 transition-colors">
                    СПб, Театральная пл., 2
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
