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
          src="/Судно-особой-конструкции.mp4"
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
          Судно на воздушной подушке (аэробот)
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
              <source src="/Судно-особой-конструкции.mp4" type="video/mp4" />
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

        <section className="bg-white p-6 rounded-2xl shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">О курсе</h3>
  <div className="text-gray-700 leading-relaxed space-y-4">
    <p>
      <strong>Целью подготовки</strong> судоводителя судна на воздушной подушке (СВП) является получение устойчивых знаний и практических навыков кандидатов
      для прохождения квалификационных испытаний и получения удостоверения на право управления судном на воздушной подушке определенного класса, района и условий плавания.
    </p>

    <p>
      <strong>Судном на воздушной подушке</strong> является судно, использующее давление воздуха, нагнетаемого под днище, для приподнимания судна над поверхностью воды.
    </p>

    <p>
      Подготовку могут проходить граждане Российской Федерации, иностранные граждане и лица без гражданства, достигшие 18-летнего возраста. Обучение проводится на русском языке.
    </p>

    <p>
      Подготовка включает <strong>теоретическую часть</strong> в учебном классе ВОСВОД и <strong>практическую подготовку</strong> на судне. Теоретическая часть даёт необходимые знания, а практика — опыт управления судном.
    </p>

    <p>
      Отработка практических навыков проводится на СВП по утвержденной учебным заведением методике. После завершения подготовки — сдача экзаменов и зачетов.
    </p>

    <p>
      <strong>По окончании курса</strong> слушатели получают свидетельство о прохождении обучения и отметку в удостоверении ГИМС.
    </p>
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

        <GalleryBlock images={[]} />

        <section className="bg-white p-6 rounded-2xl shadow-md mt-10">
  <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
    Видеообзор обучения
  </h3>
  <div className="flex justify-center">
    <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
      <video
        controls
        muted
        autoPlay
        loop
        className="w-full h-[400px] object-cover rounded-2xl"
      >
        <source src="/Практика_на_судне_особой_конструкции.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  </div>
</section>

        <div className="text-center mt-12">
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
          >
            Записаться на курс
          </Button>
        </div>

        <WhyVOSVOD />
      </div>
    </div>
  )
}
