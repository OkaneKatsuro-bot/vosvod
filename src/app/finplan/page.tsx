"use client"

import Link from 'next/link'

const FinancialPlanPage = () => {
  return (
    <div className="bg-gray-50 relative py-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">10. План финансово-хозяйственной деятельности</h1>

          <p className="text-gray-700 text-base leading-relaxed text-center">
            Ознакомьтесь с планом по следующей ссылке:
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/education/CCE05032017_0fhd-4.pdf"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition"
            >
              Скачать PDF
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FinancialPlanPage;
