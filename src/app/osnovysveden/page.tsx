'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const AboutBasicInfoPage = () => {
  return (
    <div className="bg-gray-50 relative py-20">
      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            01. Основные сведения
          </h3>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <p><strong>Полное наименование:</strong> Автономная некоммерческая организация дополнительного образования «Учебный центр судовождения»</p>
            <p><strong>Сокращенное наименование:</strong> АНО ДПО «УЦС»</p>
            <p><strong>Дата создания:</strong> 05 июля 2004 года</p>
            <p><strong>Организационно-правовая форма:</strong> Частное учреждение</p>
            <p><strong>Юридический адрес:</strong> 190000, Санкт-Петербург, ул. Декабристов 32/2</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Руководство</h3>
          <div className="text-gray-700 space-y-2 text-base">
            <p><strong>Директор:</strong> Кочетов Олег Владимирович</p>
            <p><strong>Контактный телефон:</strong> 312-17-91</p>
            <p><strong>Факс:</strong> 312-17-90</p>
            <p><strong>E-mail:</strong> centervosvod@mail.ru</p>
            <p><strong>Часы приёма:</strong></p>
            <ul className="list-disc list-inside pl-4">
              <li>Понедельник: 7:00–19:00</li>
              <li>Вторник: 14:00–18:00</li>
              <li>Среда–Пятница: 9:00–16:20</li>
              <li>Четверг: 10:00–13:00</li>
            </ul>
            <p><strong>График работы:</strong> образовательная деятельность осуществляется круглогодично.</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Собственник</h3>
          <div className="text-gray-700 space-y-2 text-base">
            <p><strong>Организация-собственник:</strong></p>
            <p>Межрегиональная Санкт-Петербургская городская и Ленинградская областная общественная организация “Всероссийского общества спасания на водах” (ВОСВОД)</p>
            <p><strong>Адрес:</strong> 190000, Санкт-Петербург, ул. Декабристов 32/2</p>
            <p><strong>Председатель:</strong> Кочетов Юрий Владимирович</p>
            <p><strong>Контактный телефон:</strong> 312-17-90</p>
            <p><strong>Факс:</strong> 312-17-90</p>
            <p><strong>E-mail:</strong> vosvod@mail.ru</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutBasicInfoPage
