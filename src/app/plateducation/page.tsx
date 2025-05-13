"use client"

import Link from 'next/link'

const PaidServicesPage = () => {
  return (
    <div className="bg-gray-50 relative py-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">09. Платные образовательные услуги</h1>

          <div className="text-gray-700 space-y-6 text-base leading-relaxed">
            <p>
              <strong>Нормативное основание:</strong><br />
              Постановление от 15 августа 2013 г. № 706<br />
              <em>«Об утверждении Правил оказания платных образовательных услуг»</em>
            </p>

            <div>
              <p>
                <strong>Документы:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link href="https://vosvod.spb.ru/wp-content/uploads/2023/02/Положение-о-порядке-предоставления-платных-образователных-услуг.pdf" target="_blank" className="text-blue-700 hover:underline">
                    Положение о порядке оказания платных образовательных услуг
                  </Link>
                </li>
                <li>
                  <Link href="https://vosvod.spb.ru/wp-content/uploads/2023/02/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7-%D0%BE%D0%B1-%D1%83%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8-%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D0%BD%D0%B5%D0%BC%D1%83.pdf" target="_blank" className="text-blue-700 hover:underline">
                    Образец договора об оказании платных образовательных услуг
                  </Link>
                </li>
                <li>
                <p>
                    Приказ об утверждении стоимости по программам профессионального обучения
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PaidServicesPage;
