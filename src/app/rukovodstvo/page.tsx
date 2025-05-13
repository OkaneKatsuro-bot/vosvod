"use client"

import { useState } from 'react'
import Link from 'next/link'

const StaffPage = () => {
  return (
    <div className="bg-gray-50 relative py-20">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">06. Руководство и преподаватели</h1>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-800">Руководитель</h2>
            <p><strong>Директор:</strong> Кочетов Олег Владимирович</p>
            <p><strong>Контактный телефон:</strong> 312-17-91</p>
            <p><strong>Факс:</strong> 312-17-90</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Преподаватели</h2>
            <p>Список штатного состава доступен по ссылке:</p>
            <Link href="https://vosvod.spb.ru/wp-content/uploads/2023/03/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D1%88%D1%82%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D0%B0.pdf" target="_blank" className="text-blue-700 hover:underline">
              Список штатного персонала (PDF)
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StaffPage;
