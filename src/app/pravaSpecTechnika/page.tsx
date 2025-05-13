'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

const VehicleLicensePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
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
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
            Права на спецтехнику ГОСТЕХНАДЗОР
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Обучение машинистов на квадроциклы, погрузчики, экскаваторы, тракторы
          </p>
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>
            <video controls autoPlay className="w-full h-auto rounded-xl shadow-lg">
              <source src="/Добро-пожаловать.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
      <section className="bg-white p-6 rounded-2xl shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
    Общее описание программы
  </h3>
  <div className="text-gray-700 space-y-4 text-base leading-relaxed">
    <p><strong>Учебный Центр ВОСВОД</strong> (лицензия 78 №000948 от 08.08.2011) более 10 лет осуществляет подготовку машинистов автотранспорта, поднадзорного ГОСТЕХНАДЗОР.</p>
    <p>Наш учебный центр имеет аккредитованное структурное подразделение НОУ ДО «УЦС».</p>
    <p>Обучение включает <strong>теоретическую</strong> часть в оборудованных классах (не более 10 человек) и <strong>практическую</strong> часть на площадке с более чем 200 единицами техники.</p>
    <p>Экзамен проводится на нашей площадке инспекторами ГОСТЕХНАДЗОР. Также приветствуются дополнительные занятия с инструктором.</p>
    <p><strong>Цель:</strong> довести вас до момента получения удостоверения!</p>
  </div>

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
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Доступные категории</h3>
          <ul className="text-gray-700 text-lg space-y-3 list-disc list-inside">
            <li>Права на <strong>квадроцикл</strong>, <strong>снегоход</strong></li>
            <li>Права на <strong>погрузчик</strong></li>
            <li>Права на <strong>экскаватор</strong></li>
            <li>Права на <strong>трактор</strong></li>
          </ul>
        </section>
        <GalleryBlock
          images={[
            '/Фотки_обученя/IMG_3947-768x576.jpg',
            '/Фотки_обученя/IMG_3967-768x576.jpg',
            '/Фотки_обученя/IMG_3956-1-768x576.jpg',
            '/Фотки_обученя/IMG_3961-768x576.jpg',
          ]}
        />
        

        <WhyVOSVOD />
      </div>
    </div>
  )
}

export default VehicleLicensePage
