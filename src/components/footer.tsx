"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  DocumentTextIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('2024');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-blue-50 border-t border-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Логотип и контакты */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
            <img 
                src="/logo-vosvod.png" 
                alt="Логотип ВОСВОД" 
                className="w-12 h-12 object-contain" // Настраиваем размеры
              />
              <span className="text-xl font-bold text-blue-900">ВОСВОД</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <PhoneIcon className="w-5 h-5 mt-1 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">+7 (931) 978-73-78</p>
                  <p className="text-sm text-blue-600">Пн-Сб с 10:00 до 19:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <EnvelopeIcon className="w-5 h-5 mt-1 text-blue-600" />
                <a href="mailto:vosvod@mail.ru" className="text-blue-600 hover:text-blue-800">
                  vosvod@mail.ru
                </a>
              </div>
              <div className="flex items-start gap-2">
                <CalendarIcon className="w-5 h-5 mt-1 text-blue-600" />
                <p className="text-sm text-blue-600">
                  Прием документов по предварительной записи
                </p>
              </div>
            </div>
          </div>

          {/* Документация */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">Документы</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/payment-rules" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <DocumentTextIcon className="w-5 h-5" />
                  Правила оплаты
                </Link>
              </li>
              <li>
                <Link href="/license" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <DocumentTextIcon className="w-5 h-5" />
                  Образовательная лицензия
                </Link>
              </li>
              <li>
                <Link href="/payment-systems" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <CreditCardIcon className="w-5 h-5" />
                  Платежные системы
                </Link>
              </li>
            </ul>
          </div>

          {/* Обучение */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">Обучение</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-blue-600 hover:text-blue-800">
                  Курсы первой помощи
                </Link>
              </li>
              <li>
                <Link href="/certification" className="text-blue-600 hover:text-blue-800">
                  Сертификация
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-blue-600 hover:text-blue-800">
                  Расписание занятий
                </Link>
              </li>
            </ul>
          </div>

          {/* Полезные ссылки */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">Ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-600 hover:text-blue-800">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-600 hover:text-blue-800">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-blue-600 hover:text-blue-800">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-blue-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-600 text-sm">
                Лицензия №Л035-01271-78/00755931 от 2 ноября 2023 года
              </p>
              <p className="text-blue-600 text-sm mt-2">
                © {currentYear} ВОСВОД. Все права защищены
              </p>
            </div>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => setIsOfferModalOpen(true)} 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Договор оферты
              </button>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальные окна (аналогичные вашему исходному коду с измененными реквизитами) */}
      {isOfferModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Содержимое модального окна оферты с реквизитами ВОСВОД */}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Содержимое модального окна соглашения */}
        </div>
      )}
    </footer>
  );
};

export default Footer;