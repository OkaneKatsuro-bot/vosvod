"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'
import CallButton from '@/components/button'

export default function HovercraftPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)]


  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const handlePlay = (index: number) => {
    videoRefs.forEach((ref, i) => {
      const vid = ref.current
      if (vid) {
        if (i === index) {
          vid.muted = false
          vid.paused ? vid.play() : vid.pause()
        } else {
          vid.pause()
          vid.currentTime = 0
          vid.muted = true
        }
      }
    })
  }

  return (
    <div className="bg-gray-50 relative">
      {/* Hero section */}
      <section className="w-full py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center text-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
          Судоводитель судна на воздушной подушке (ГИМС)
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
          Судно на воздушной подушке (аэробот)
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
      <div className="space-y-10 w-full mx-auto px-4 py-8">
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
              <strong>Целью подготовки</strong> судоводителя судна на воздушной подушке (СВП) является получение устойчивых знаний и практических навыков кандидатов для прохождения квалификационных испытаний и получения удостоверения на право управления судном на воздушной подушке определенного класса, района и условий плавания.
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

          <CallButton/>
        </section>

        <GalleryBlock
        images={["/Pinto.jpg", "/img_3742.jpg", "/Фотки_обученя/1-768x576.jpg", "/Фотки_обученя/3-768x576.jpg"]}
      />
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Видеообзор обучения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['/Практика-на-парусном-судне.mp4', '/Практика-на-парусном-судне2.mp4'].map((src, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <video
                  ref={videoRefs[idx]}
                  className="w-full h-[240px] sm:h-[300px] object-cover rounded-2xl bg-black"
                  muted
                  playsInline
                  poster="/preview.jpg"
                >
                  <source src={src} type="video/mp4" />
                </video>
                <button
                  onClick={() => handlePlay(idx)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"
                >
                  ▶
                </button>
              </div>
            </div>
          ))}
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
