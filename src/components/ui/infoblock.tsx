"use client";
import { motion } from 'framer-motion';

const InfoBlock = () => {
  const sections = [
    {
      id: 'about',
      title: 'О нас',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Учебный центр ВОСВОД ведёт свою деятельность с 2004 года. За это время мы зарекомендовали себя как профессионалы и выпустили тысячи довольных клиентов, которые получили права и все необходимые документы.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Мы имеем огромный опыт по всем направлениям обучения, превосходный преподавательский состав, понятные и удобные учебные пособия, ежедневную консультацию по всем вопросам. Будь с нами – будь среди лучших!
          </p>
        </div>
      )
    },
    {
      id: 'gims-contacts',
      title: 'Контакты инспекций ГИМС',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Центр ГИМС ЛО',
                address: '188662, Ленинградская область, пос. Мурино, Оборонная ул. д. 51',
                phone: '8(813)704-32-85'
              },
              {
                title: 'Всеволожск',
                address: 'г. Всеволожск, ул. Вахрушева, д. 2',
                phone: '8 (813-79) 31-447'
              },
              {
                title: 'Гатчина',
                address: 'г. Гатчина, Красноармейский пр., д. 14',
                phone: '8 (813-71) 96-215'
              },
              {
                title: 'Сосновый Бор',
                address: 'г. Сосновый Бор, ул. Ленинградская, д. 1',
                phone: '8 (813-69) 24-671'
              },
              {
                title: 'Шлиссельбург',
                address: 'г. Шлиссельбург, ул. Жука, д. 5',
                phone: '8 (813-62) 77-677'
              }
            ].map((contact, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 p-6 rounded-lg relative overflow-hidden"
              >
                <div className="absolute bottom-2 right-2 opacity-10">
                  
                </div>
                <h4 className="font-bold text-blue-800 text-lg">{contact.title}</h4>
                <p className="text-gray-600 mt-2">{contact.address}</p>
                <a 
                  href={`tel:${contact.phone.replace(/[\(\)\s-]/g, '')}`}
                  className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 mr-2 group-hover:animate-ring" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'how-to-get',
      title: 'Как получить права ГИМС',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="font-semibold text-yellow-800">
              Внимание! Остерегайтесь мошенников. Получить права ГИМС за несколько дней без обучения невозможно.
            </p>
          </div>
          
          <p className="text-gray-700">
            Получить права ГИМС можно в Учебном Центре ВОСВОД. Всю информацию можно узнать по телефону: {' '}
            <a 
              href="tel:+79319787378" 
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              +7 (931) 978-73-78
            </a>.
          </p>
          
          <h4 className="font-bold text-lg mt-6 text-blue-900">Процесс получения прав:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Прохождение обучения по программе судоводителей</li>
            <li>Сдача внутреннего экзамена в школе</li>
            <li>Сдача экзамена в ГИМС</li>
            <li>Получение удостоверения судоводителя</li>
          </ol>
        </div>
      )
    },
    {
      id: 'certification',
      title: 'Аттестация судоводителей',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Сдача экзамена проводится в Государственной Инспекции по маломерным судам МЧС России (ГИМС).
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-blue-800 text-lg">Процедура аттестации:</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
              <li>Экзамен в форме тестирования на компьютере</li>
              <li>Продолжительность около 2 часов</li>
              <li>В комиссии присутствует представитель ВОСВОД</li>
              <li>Проводится в заранее назначенный день</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'navigation',
      title: 'Открытие навигации',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            В 2023 году губернатор Ленинградской области подписал распоряжение о начале навигации:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-6 rounded-lg border border-green-100"
            >
              <h4 className="font-bold text-green-800">Южные районы</h4>
              <p className="mt-2 text-gray-600">С 26 апреля</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
            >
              <h4 className="font-bold text-blue-800">Северные районы</h4>
              <p className="mt-2 text-gray-600">С 5 мая</p>
              <p className="text-sm text-gray-500 mt-2">
                (Бокситогорский, Волховский, Лодейнопольский, Подпорожский, Приозерский, Тихвинский районы)
              </p>
            </motion.div>
          </div>
          
          <div className="mt-6 text-gray-600">
            <p>Контакты пресс-службы:</p>
            <a 
              href="mailto:gupress-lo@mail.ru" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              gupress-lo@mail.ru
            </a>
            <br />
            <a 
              href="tel:+78126400593" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              тел.: 8 (812) 640 05 93
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'Часто задаваемые вопросы',
      content: (
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h4 className="font-bold text-lg text-blue-900">На какие суда нужны права?</h4>
            <p className="mt-2 text-gray-700">
              Удостоверение требуется для судов с двигателем мощнее 9 л.с. Длина судна - до 20 метров, количество людей на борту - не более 12.
            </p>
          </div>
          
          <div className="border-b pb-4">
            <h4 className="font-bold text-lg text-blue-900">Категории прав ГИМС:</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
              <li>Маломерное education судно (катер, мотолодка)</li>
              <li>Гидроцикл (аквабайк)</li>
              <li>Аэробот</li>
              <li>Судно на воздушной подушке</li>
              <li>Парусное и парусно-моторное судно</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-blue-900">Районы плавания:</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
              <li>Морские пути (МП)</li>
              <li>Водные пути (ВП – несудоходные реки и озера)</li>
              <li>Внутренние Водные пути РФ (ВВП – судоходные реки и озера)</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Волны внизу страницы */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-blue-100"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-blue-100"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-blue-100"
          ></path>
        </svg>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-blue-900 mb-12 relative"
      >
        <span className="relative z-10 px-4 bg-white">
          Информация для судоводителей
        </span>
        <div className="absolute w-full h-1 bg-blue-100 top-1/2 transform -translate-y-1/2"></div>
      </motion.h2>

      <div className="space-y-6">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-blue-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Кораблик в углу каждого блока */}
            <div className="absolute -right-6 -top-6 opacity-20 text-blue-400">
              <svg 
                className="w-24 h-24"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"></path>
                <path d="M21 14 10 2 3 14h18Z"></path>
                <path d="M10 2v16"></path>
              </svg>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 bg-blue-50 cursor-pointer flex items-center"
            >
              {/* Иконка спасательного круга перед заголовком */}
              <svg 
                className="w-6 h-6 mr-3 text-blue-600" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              <h3 className="text-xl font-semibold text-blue-900">
                {section.title}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 bg-white"
            >
              {section.content}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;