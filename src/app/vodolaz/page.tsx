'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import WhyVOSVOD from '@/components/ui/education'
import GalleryBlock from '@/components/slideimg'
import Image from 'next/image'
import CallButton from '@/components/button'

const DiverTrainingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
      <section className="w-full py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center text-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
          Курсы водолазов и дайверов CMAS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
          Обучение водолазов 4–7 разряда и дайверов CMAS 1 и 2 звезды — теория и практика в Учебном Центре ВОСВОД
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-800 hover:bg-blue-700 text-white text-base sm:text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </section>
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
              <source src="/diving-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

<section className="bg-white p-8 rounded-2xl shadow-md">
  <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Приглашаем на день открытых дверей</h3>
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

      <div className="space-y-10 w-full mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">О программе</h2>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <p><strong>Учебный Центр ВОСВОД</strong> производит обучение водолазов 4–7 разряда и дайверов категорий CMAS:</p>
            <ul className="list-disc pl-6">
              <li>Водолаз 4 разряда</li>
              <li>Водолаз 5 разряда</li>
              <li>Водолаз 6 разряда</li>
              <li>Водолаз 7 разряда</li>
              <li>Diver CMAS 1 звезда</li>
              <li>Diver CMAS 2 звезды</li>
            </ul>
            <p><strong>Форма обучения:</strong> очная, с преподавателем. Обучение включает теоретические и практические занятия. Срок — от 1 до 3 месяцев в зависимости от категории.</p>
          </div>
          <div className="mt-8 text-center">
          <CallButton/>
          </div>
        </section>
        <GalleryBlock
          images={[
            '/Фотки_обученя/IMG_3947-768x576.jpg',
            '/Фотки_обученя/IMG_3956-1-768x576.jpg',
            '/Фотки_обученя/IMG_3961-768x576.jpg',
            '/Фотки_обученя/IMG_3967-768x576.jpg',
          ]}
        />

        <section className="bg-white p-6 rounded-2xl shadow-md mt-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Видеообзор обучения
          </h3>
          <div className="flex justify-center">
            <video
              controls
              poster="/video-preview-1.jpg"
              className="w-full max-w-3xl h-[400px] object-cover rounded-2xl shadow-lg"
            >
              <source src="/Практика-на-парусном-судне.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <WhyVOSVOD />
      </div>
    </div>
  )
}

export default DiverTrainingPage
