'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

const YachtHelmsmanPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
      <div className="relative w-full h-screen">
        <video
          src="/Практика-на-парусном-судне2.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
          Курсы «Яхтенный рулевой» (Минтранс)
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Курс с международным дипломом и практикой на Финском заливе
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
      <section className="bg-white p-8 rounded-2xl shadow-md">
  <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
    О программе «Яхтенный рулевой» МИНТРАНС
  </h3>
  <div className="text-gray-700 text-lg leading-relaxed space-y-6 max-w-4xl mx-auto">
    <p>
      <strong>Парусные суда. Яхтенный капитан. Яхтенный рулевой. Обучение.</strong>
    </p>
    <p>
      Учебный Центр Всероссийского Общества Спасания на Водах приглашает пройти обучение по программам:
    </p>
    <ul className="list-disc list-inside pl-4">
      <li><strong>Яхтенный рулевой спортивного парусного судна</strong></li>
      <li><strong>Яхтенный капитан прибрежного плавания</strong></li>
      <li><strong>Яхтенный капитан (без ограничений)</strong></li>
    </ul>
    <p>
      Курс включает в себя <strong>теоретическую</strong> и <strong>практическую</strong> части: занятия проходят в учебных классах под руководством профессиональных преподавателей, а практика — в акватории Финского залива на учебной яхте.
    </p>
    <p className="font-semibold">
      После успешной сдачи школьных экзаменов, компьютерного тестирования и практического экзамена Вы получаете:
    </p>
    <ul className="list-disc list-inside pl-4">
      <li><strong>Государственный диплом</strong> международного образца (на русском и английском языках), действителен на всей акватории мирового океана</li>
      <li>Аналог RYA: <strong>RYA/MCA Yachtmaster Coastal</strong></li>
      <li>Аналог IYT: <strong>IYT Yachtmaster Coastal</strong></li>
      <li>Право управлять спортивными парусными судами с площадью парусности до 80 кв.м на ВВП и в море (до 50 миль от берега), <strong>действует во всём мире</strong></li>
      <li>Возможность пройти <strong>сокращённую программу</strong> и получить удостоверение на управление всеми типами маломерных судов, поднадзорных ГИМС (гидроцикл, мотолодка, катер, яхта и др.)</li>
    </ul>
  </div>
</section>

        <section className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Приглашаем на день открытых дверей</h3>
          <p className="text-gray-700 text-lg mb-6 text-center leading-relaxed">
            Каждую <strong>субботу с 12:00 до 15:00</strong>.<br />
            Запись по телефону: <strong>+7 (931) 978-73-78</strong><br />
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

        <GalleryBlock
          images={[
            '/Парусный/img_3770.jpg',
            '/Парусный/img_3742.jpg',
            '/Парусный/sb6fmuqzdh0-768x432.jpg',
            '/Парусный/vixjlzlb6fi-768x513.jpg',
          ]}
        />

        <section className="text-center mt-10">
          <Button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
          >
            Записаться на курс
          </Button>
        </section>

        <WhyVOSVOD />
      </div>
    </div>
  )
}

export default YachtHelmsmanPage
