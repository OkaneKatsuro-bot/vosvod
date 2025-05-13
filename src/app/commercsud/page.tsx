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
      {/* Hero section */}
      <div className="relative w-full h-screen">
        <video
          src="/Добро-пожаловать.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Судоводитель судна на воздушной подушке (ГИМС)
          </h1>
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
          Обучение на судоводителя маломерного судна (коммерческого использования)
          </h1>
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </div>

      {/* Модалка */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >✕</button>
            <video controls autoPlay className="w-full h-auto rounded-xl shadow-lg">
              <source src="/Добро-пожаловать.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
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
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top w-1/3">Тип судна</td>
                  <td className="p-4">Судно на воздушной подушке (СВП)</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Форма обучения</td>
                  <td className="p-4">Очно-заочная, с личным кабинетом, теорией и практикой</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Длительность</td>
                  <td className="p-4">1 месяц</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Стоимость</td>
                  <td className="p-4">26 000 рублей</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Необходимые документы</td>
                  <td className="p-4">
                    Копия паспорта (на первом визите)<br />
                    Медицинская справка формы № 003-В/у — можно донести позже
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

        {/* <section className="bg-white p-6 rounded-2xl shadow-md mt-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Видеообзор обучения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <video controls muted autoPlay loop className="w-full h-[300px] object-cover rounded-2xl">
                <source src="/СВП-практика.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <video controls muted autoPlay loop className="w-full h-[300px] object-cover rounded-2xl">
                <source src="/СВП-теория.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section> */}

        {/* <div className="text-center mt-12">
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
          >
            Записаться на курс
          </Button>
        </div> */}

        <WhyVOSVOD />
      </div>
    </div>
  )
}
