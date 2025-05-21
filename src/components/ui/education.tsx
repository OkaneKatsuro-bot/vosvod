import { CheckCircle, Clock, UserCheck, GraduationCap, BookOpen, Globe } from 'lucide-react'

const WhyVOSVOD = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-blue-700" />,
      title: '95% успешно сдают с первого раза',
      desc: 'Высокий уровень подготовки учеников',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-700" />,
      title: 'Сопровождение до получения прав',
      desc: 'Помогаем пройти все этапы — от обучения до получения удостоверения',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-700" />,
      title: 'Теория и практика',
      desc: 'Занятия проходят в классах и на воде под руководством опытных инструкторов',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-700" />,
      title: 'Гибкая форма обучения',
      desc: 'Выберите очный или дистанционный формат занятий',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-700" />,
      title: 'Опытные преподаватели',
      desc: 'Наши инструктора — практики с многолетним стажем',
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-700" />,
      title: 'Личный кабинет 24/7',
      desc: 'Доступ к материалам и прогрессу в любое время',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-10 pb-10">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Почему именно Учебный Центр ВОСВОД?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-white"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyVOSVOD
