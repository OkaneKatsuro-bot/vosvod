'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'
import Image from 'next/image'

const SailingCoursePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)]

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
    <main className="bg-white pt-[80px] sm:pt-[100px] md:pt-[80px]">
      {/* 1. Заголовок */}
      <section className="w-full py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center text-center bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
            Курсы на управление парусным судном ГИМС
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
            Учебный Центр ВОСВОД — обучение управлению парусным судном и получение удостоверения ГИМС без ограничения площади парусов
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-800 hover:bg-blue-700 text-white text-base sm:text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </section>

      {/* 2. Модалка */}
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

      

<section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 rounded-2xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">О курсе</h2>
        <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
          <p><strong>Учебный Центр ВОСВОД</strong> предлагает пройти обучение на парусное судно с возможностью получения удостоверения ГИМС <span className="text-blue-800 font-medium">без ограничения площади парусов</span>.</p>
          <p>Время прохождения курса – 4 недели. Обучение производится по очно-заочной программе через личный кабинет на нашем сайте. Вам необходимо прочитать методический материал и пройти тестирование. После успешного прохождения тестирования требуется прибыть на школьный экзамен, донести недостающие документы (медсправку и госпошлину). После школьного экзамена проводится практической занятие с отработкой навыков управления парусным судном и назначается экзамен в ГИМС, где проходит теоретический и практический экзамены.</p>
          <p>Также приглашаем пройти курс <strong>Яхтенный рулевой</strong>, после которого можно получить права на управление парусным судном с площадью парусности до 80 кв.м. Подробнее можно прочитать по ссылкам:</p>
          <p className="text-blue-700 underline font-medium">
            <a href="/sudovoditely">Курс на моторное судно</a><br />
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
      {/* 4. Программа и День открытых дверей */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-md space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Программа обучения</h2>
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <tbody>
              {[['Программа', 'Парусное судно МП, ВП, ВВП'], ['Форма', 'Очно-заочная, 2–3 занятия/неделя'], ['Длительность', '4 недели'], ['Стоимость', '26 000 ₽'], ['Документы', 'Паспорт с пропиской'], ['Для ГИМС', 'Медсправка №003-В/у']].map(([title, desc], i) => (
                <tr key={i} className="border-b">
                  <td className="font-semibold border-r border-gray-300 p-3 w-1/3">{title}</td>
                  <td className="p-3">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-6">
            <Button className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Записаться на курс
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Галерея */}
      <GalleryBlock
        images={["/2-2-768x645.jpeg", "/img_3742.jpg", "/Фотки_обученя/1-768x576.jpg", "/Фотки_обученя/3-768x576.jpg"]}
      />

      {/* 6. Видеообзор */}
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

      {/* 7. Почему ВОСВОД */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <WhyVOSVOD />
      </section>
    </main>
  )
}

export default SailingCoursePage
