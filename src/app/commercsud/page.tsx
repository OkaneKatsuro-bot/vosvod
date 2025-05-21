"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

export default function HovercraftPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">

<section className="w-full py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center text-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
          Коммерческие суда МИНТРАНС
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
          Обучение на судоводителя маломерного судна (коммерческого использования)
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-800 hover:bg-blue-700 text-white text-base sm:text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </section>

      {/* Модалка */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500 z-10"
              aria-label="Закрыть видео"
            >
              ✕
            </button>
            <video controls autoPlay className="w-full rounded-xl shadow-lg bg-black">
              <source src="/Практика-на-парусном-судне.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
      {/* Content */}
      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Чему вы научитесь</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Управлять судном на воздушной подушке, сдавать экзамены в ГИМС и получать удостоверение соответствующего класса.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md mt-10 space-y-6">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Программа профессионального обучения</h3>
  
  <p className="text-gray-700 leading-relaxed">
    <strong>1. Нормативные основания.</strong><br />
    Рабочая программа профессионального обучения разработана в соответствии с нормативно-правовыми актами Минтранса РФ, включая кодексы мореплавания и внутреннего водного транспорта, а также приказами №62 и №87. Основой служат правила Речного и Морского регистров, а также федеральные стандарты подготовки 2017 года.
  </p>

  <p className="text-gray-700 leading-relaxed">
    <strong>2. Назначение и задачи курса.</strong><br />
    Подготовка судоводителей маломерных судов для получения знаний по безопасности, квалифицированному управлению и эксплуатации судов в коммерческих целях. Курс завершается итоговой аттестацией с выдачей удостоверения. Далее проходит практическая подготовка на учебных судах.
  </p>

  <p className="text-gray-700 leading-relaxed">
    <strong>3. Описание профессиональной деятельности выпускников.</strong><br />
    Выпускники смогут:<br />
    — понимать теорию судна и конструкцию;<br />
    — управлять энергетическими установками и навигацией;<br />
    — использовать радиосвязь и соблюдать правила эксплуатации;<br />
    — проводить спасательные операции, управлять пассажирскими перевозками и действовать в нештатных ситуациях.
  </p>

  <p className="text-gray-700 leading-relaxed">
    <strong>4. Уровень квалификации:</strong><br />
    5-й уровень — самостоятельное принятие решений в практических ситуациях, включая анализ обстановки.
  </p>

  <p className="text-gray-700 leading-relaxed">
    <strong>5. Категория слушателей:</strong><br />
    Граждане от 18 лет, годные по состоянию здоровья.
  </p>

  <div className="mt-8 text-center">
    <button
      className="bg-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
    >
      Записаться на курс
    </button>
  </div>
</section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Приглашаем на день открытых дверей</h3>
          <p className="text-gray-700 text-lg mb-6 text-center leading-relaxed">
            Приглашаем Вас на <strong>день открытых дверей каждую субботу с 12:00 до 15:00</strong>.<br />
            Запись по телефону: <strong>+7 (931) 978-73-78</strong>.<br />
            Код домофона: <strong>#9898</strong>
          </p>
          <div className="flex justify-center">
            <Image
              src="/5d5bb48d10de9a13911f451a_60b746c0a1691-2048x450.jpg"
              alt="День открытых дверей"
              width={1200}
              height={600}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Программа обучения</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-gray-800">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top w-1/3">Программа обучения</td>
                  <td className="p-4">Судоводитель маломерного судна коммерческого использования</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Форма обучения</td>
                  <td className="p-4">Очное с использованием дистанционных технологий</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Длительность</td>
                  <td className="p-4">1,5 месяца</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Стоимость</td>
                  <td className="p-4">38000 рублей</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Необходимые документы</td>
                  <td className="p-4">
                  Паспорт или копия паспорта (с пропиской)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
              Записаться на курс
            </Button>
          </div>
        </section>

        <GalleryBlock
  images={[
    '/2-2-768x645.jpeg',
    '/1-768x576.jpg',
    '/3-768x576.jpg',
    '/Фотки_обученя/IMG_3947-768x576.jpg',
    '/Фотки_обученя/IMG_3956-1-768x576.jpg',
    '/Фотки_обученя/IMG_3961-768x576.jpg',
    '/Фотки_обученя/IMG_3967-768x576.jpg',
    '/Фотки_обученя/IMG_3969-768x576.jpg',
    '/Фотки_обученя/IMG_3976-768x576.jpg',
    '/Фотки_обученя/IMG_3988-768x576.jpg',
  ]}
/>

        

        <WhyVOSVOD />
      </div>
    </div>
  )
}
