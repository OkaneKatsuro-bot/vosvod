'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'
import CallButton from '@/components/button'

const LeisureBoatsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-gray-50 relative">
      <section className="w-full py-8 sm:py-10 md:py-14 lg:py-16 flex items-center justify-center text-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
            Матрос-спасатель (спасатель на воде)
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
            ПО ВСЕМ ВОПРОСАМ ПО СПАСАТЕЛЯМ И ИНСТРУКТОРАМ ЗВОНИТЬ 8-921-860-69-66
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
        {/* Все курсы обучения */}
<section className="space-y-10">
  {/* Матрос-спасатель */}
  <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-md space-y-6">
    <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Матрос-спасатель (спасатель на воде)</h2>
    <table className="min-w-full border border-gray-300 text-sm sm:text-base">
      <tbody>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3 w-1/3">Программа</td>
          <td className="p-3">Матрос-спасатель (спасатель на воде)</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Форма</td>
          <td className="p-3">Очно-заочная</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Длительность</td>
          <td className="p-3">3 недели</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Описание</td>
          <td className="p-3">Курс обучения включает в себя полный спектр навыков для обеспечения безопасности и спасания на водных объектах, местах массового отдыха людей на водах, аквапарках, бассейнах,SPA-зонах, детских оздоровительных лагерей и т.д. Нормативно-правовая база деятельности спасателя в РФ.</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">По окончании курса вы получаете</td>
          <td className="p-3">Полный спектр знаний по квалификации «матрос-спасатель»</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>
    <CallButton/>
  </div>

  {/* Инструктор-методист */}
  <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-md space-y-6">
    <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Инструктор по плаванию и спасанию.</h2>
    <table className="min-w-full border border-gray-300 text-sm sm:text-base">
      <tbody>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3 w-1/3">Программа</td>
          <td className="p-3">Инструктор по плаванию и спасанию.</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Форма</td>
          <td className="p-3">Очно-заочная</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Длительность</td>
          <td className="p-3">2 месяца</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Описание</td>
          <td className="p-3">Курс обучения включает в себя полный спектр навыков для обеспечения безопасности и спасания на водных объектах, местах массового отдыха людей на водах, аквапарках, бассейнах,SPA-зонах, детских оздоровительных лагерей и т.д.
          Курс дает возможность стать Инструктором ВОСВОД, обучать плаванию и спасанию, присваивать квалификацию матрос-спасатель в системе ВОСВОД.</td>
        </tr>
        <tr>
          <td className="font-semibold border-r border-gray-300 p-3">По окончании курса вы получаете</td>
          <td className="p-3">Диплом с присвоением квалификации «Инструктор по плаванию и спасанию»</td>
        </tr>
      </tbody>
    </table>
    <CallButton/>
  </div>

  {/* Судоводитель маломерного судна */}
  <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 rounded-2xl shadow-md space-y-6">
    <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Международный спасатель</h2>
    <table className="min-w-full border border-gray-300 text-sm sm:text-base">
      <tbody>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3 w-1/3">Программа</td>
          <td className="p-3">Международный спасатель</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Форма</td>
          <td className="p-3">Очно-заочная</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Длительность</td>
          <td className="p-3">1 месяц</td>
        </tr>
        <tr className="border-b">
          <td className="font-semibold border-r border-gray-300 p-3">Описание</td>
          <td className="p-3">Курс обучения включает в себя полный спектр навыков для обеспечения безопасности и спасания на водных объектах, местах массового отдыха людей на водах, аквапарках, бассейнах,SPA-зонах, детских оздоровительных лагерей и т.д. Нормативно-правовая база деятельности спасателя в РФ и по всему миру, их отличия. Курс включает в себя навыки спасания и под водой для обеспечения безопасности дайверских спусков.</td>
        </tr>
        <tr>
          <td className="font-semibold border-r border-gray-300 p-3">По окончании курса вы получаете</td>
          <td className="p-3">
          Сертификат международного спасателя с возможностью работы по всему миру.
          </td>
        </tr>
      </tbody>
    </table>
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

export default LeisureBoatsPage
