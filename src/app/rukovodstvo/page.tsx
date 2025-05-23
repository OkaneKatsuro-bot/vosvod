'use client'

import Link from 'next/link'

const StaffPage = () => {
  return (
    <div className="bg-gray-50 relative py-20">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            06. Руководство и преподаватели
          </h1>
          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-800">Руководитель</h2>
            <p><strong>Директор:</strong> Кочетов Олег Владимирович</p>
            <p><strong>Контактный телефон:</strong> 312-17-91</p>
            <p><strong>Факс:</strong> 312-17-90</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">Преподаватели</h2>
            <p>Список штатного состава доступен по ссылке:</p>
            <Link
              href="/documents/Список-штатного-персонала-3.pdf"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              Список штатного персонала (PDF)
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StaffPage;
