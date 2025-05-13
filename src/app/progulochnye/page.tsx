'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

const LeisureBoatsPage = () => {
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
            Прогулочные суда МИНТРАНС
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Обучение судоводителей с последующим получением свидетельства на 10 лет
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
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">О курсе</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Учебный Центр ВОСВОД объявляет набор на обучение судоводителей маломерных прогулочных судов с последующим получением прав МИНТРАНС. Обучение проводится по утвержденной программе и завершится сдачей квалификационных экзаменов в Морской квалификационной комиссии (МКК).
          </p>
        </section>
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
<section className="bg-white p-6 rounded-2xl shadow-md whitespace-pre-line">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Программа обучения</h3>
  <p className="text-gray-700 leading-relaxed">
    <strong>Учебный Центр ВОСВОД</strong> объявляет набор на обучение судоводителей маломерных прогулочных судов с последующим получением прав МИНТРАНС.{'\n\n'}
    <strong>Под прогулочным судном</strong> понимается судно, общее количество людей на котором не должно превышать восемнадцать, в том числе пассажиров не более чем двенадцать и которое используется в некоммерческих целях и предназначается для отдыха на водных объектах. Под прогулочным судном понимается судно с количеством людей на борту от 12 до 18, не занятое коммерческой деятельностью. Программа определяет минимальный объем знаний и навыков, которыми должен обладать судоводитель прогулочного судна.{'\n\n'}

    <strong>1. Нормативные основания.</strong>{'\n\n'}
    Рабочая программа профессионального обучения разработана в соответствии с Кодексом торгового мореплавания Российской Федерации (ред. от 18.07.2017) с изм. и доп., вступ. в силу с 01.11.2017; Кодексом внутреннего водного транспорта (ред. от 01.07.2017) с изм. и доп., вступ. в силу с 01.07.2017; приказом Министерства транспорта Российской Федерации от 15 марта 2012 г. № 62 (в редакции Приказа Минтранса РФ от 13.05.2015 №167) «Об утверждении Положения о дипломировании членов экипажей морских судов»; правилами Российского морского регистра судоходства, правилами Российского Речного Регистра; примерной дополнительной профессиональной программой «Подготовка по программе управления прогулочным судном» ФАМРТ 2017 года.{'\n\n'}

    <strong>2. Назначение рабочей программы и задачи курса.</strong>{'\n\n'}
    Подготовка судоводителей прогулочных судов для получения ими теоретических знаний в вопросах безопасности плавания, квалифицированного управления и эксплуатации прогулочных судов. 
    Программа определяет минимальный объем знаний и навыков, которыми должен обладать судоводитель прогулочного судна.
    По окончании курса обучения проводится итоговая аттестация. 
    Лицам, успешно прошедшим итоговую аттестацию, выдается удостоверение об успешном прохождении теоретической подготовки по программе «Управление прогулочным судном».{'\n\n'}
    <strong>Важно:</strong> выданное удостоверение <strong>не даёт права</strong> на управление судном.
    Для получения свидетельства судоводителя проводится квалификационный экзамен в <strong>Морской квалификационной комиссии (МКК)</strong>. При успешной сдаче капитаном морского порта выдается свидетельство судоводителя прогулочного судна <strong>на срок 10 лет</strong>.{'\n\n'}

    <strong>3. Общее описание профессиональной деятельности выпускников.</strong>{'\n\n'}
    Успешное завершение обучения по данной программе позволит слушателям быть компетентными в следующих сферах:
    • основы теории судна;
    • устройство и конструкция прогулочных судов;
    • обслуживание судовой энергетической установки;
    • основы навигации и определение местоположения;
    • работа навигационных приборов и радиосвязь;
    • правила плавания под флагом;
    • организация перевозки пассажиров;
    • спасение людей на воде и действия в ЧС.{'\n\n'}

    В практической части обучения слушатели научатся:
    • оценивать влияние движителя на управляемость;
    • удерживать курс, маневрировать, штормовать;
    • действовать при авариях и спасении за бортом;
    • помогать другим судам в сложных ситуациях.{'\n\n'}

    <strong>4. Уровень квалификации:</strong> 5-й уровень. Самостоятельная деятельность, требующая анализа ситуации и принятия решений.{'\n\n'}
    <strong>5. Категория слушателей:</strong> лица от 18 лет, годные по состоянию здоровья.
  </p>
</section>

<div className="mt-8 text-center">
    <button
      className="bg-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
    >
      Записаться на курс
    </button>
  </div>
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

export default LeisureBoatsPage
