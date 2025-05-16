'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import WhyVOSVOD from '@/components/ui/education'

const DiverTrainingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
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
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
            Курсы водолазов и дайверов CMAS
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Обучение водолазов 4–7 разряда и дайверов CMAS 1 и 2 звезды — теория и практика в Учебном Центре ВОСВОД
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
              <source src="/diving-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
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
            <p className="text-blue-800 font-semibold text-center">По всем вопросам звоните: +7 (921) 860-69-66</p>
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
              Записаться на курс
            </Button>
          </div>
        </section>
        <WhyVOSVOD />
      </div>
    </div>
  )
}

export default DiverTrainingPage
