'use client'

import Link from "next/link"
import { Container } from './ui/container'
import Image from 'next/image'
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "framer-motion"

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'education' | 'organization' | null>(null)

  const navItems = [
    { name: "Информация", path: "/information" },
    { name: "Версия для слабовидящих", path: "/accessibility" },
    { name: "Контакты", path: "/contacts" },
  ]

  const organizationItems = [
    { name: "01. Основные сведения", path: "/osnovysveden" },
    { name: "02. Структура и органы управления", path: "/structura" },
    { name: "03. Документы", path: "/document" },
    { name: "04. Образование", path: "/education" },
    { name: "05. Образовательные стандарты", path: "/obrazstandart" },
    { name: "06. Руководство и Педагогический состав", path: "/rukovodstvo" },
    { name: "07. Материально-техническое обеспечение и оснащённость образовательного процесса", path: "/material" },
    { name: "08. Стипендии и иные виды материальной поддержки", path: "/support" },
    { name: "09. Платные образовательные услуги", path: "/plateducation" },
    { name: "10. Финансово-хозяйственная деятельность", path: "/finplan" },
    { name: "11. Вакантные места для приема (перевода)", path: "/perevod" },
    { name: "12. Доступная среда", path: "/sreda" },
    { name: "13. Международная деятельность", path: "/intern" },
  ]

  const educationItems = [
    { name: "Судоводители ГИМС", path: "/sudovoditely" },
    { name: "Парусные суда ГИМС", path: "/parusniesyda" },
    { name: "Суда особой конструкции ГИМС", path: "/sudaosoboyconst" },
    { name: "Коммерческие суда МИНТРАНС", path: "/commercsud" },
    { name: "Прогулочные суда Минтранс", path: "/progulochnye" },
    { name: "Яхтенный рулевой Минтранс", path: "/yachtrulevoy" },
    { name: "Спасатели", path: "/spasately" },
    { name: "Права на спецтехнику", path: "/pravaSpecTechnika" },
    { name: "Обучение водолазов дайверов", path: "/vodolaz" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
    )}>
      <Container className="px-6 max-w-screen-2xl">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link href="/public" className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-full border border-blue-600/30 group-hover:border-blue-600 transition-all flex items-center justify-center bg-gray-50">
              <Image src="/logo-vosvod.png" alt="Логотип" width={56} height={56} className="rounded-full object-cover" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700 whitespace-nowrap">АНО ДПО {`"Учебный центр"`}</span>
              <span className="text-xl font-bold text-black uppercase tracking-tight">ВОСВОД</span>
            </div>
          </Link>

          {/* Навигация */}
          <nav className="flex items-center gap-6 relative z-50">
            {/* Обучение */}
            <div
  className="relative"
  onMouseEnter={() => setOpenMenu('education')}
  onMouseLeave={() => setOpenMenu(null)}
>
  <span className="text-base text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition-colors">
    Обучение
  </span>
  <AnimatePresence>
    {openMenu === 'education' && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 bg-white shadow-xl border rounded-2xl w-80 p-2 z-50"
      >
        {educationItems.map((item) => (
          <button
            key={item.path}
            onClick={() => {
              router.push(item.path)
              setOpenMenu(null)
            }}
            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50/80 transition-all rounded-lg text-sm"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>

            {/* Информация */}
            <Link
              href="/information"
              className={cn(
                "text-base font-medium text-gray-700 hover:text-blue-700",
                pathname === "/information" && "text-blue-800"
              )}
            >
              Информация
            </Link>

            {/* Сведения */}
            <div
  className="relative"
  onMouseEnter={() => setOpenMenu('organization')}
  onMouseLeave={() => setOpenMenu(null)}
>
  <span className="text-base text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition-colors">
    Сведения об организации
  </span>
  <AnimatePresence>
    {openMenu === 'organization' && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 bg-white shadow-xl border rounded-2xl w-96 p-2 z-50"
      >
        {organizationItems.map((item) => (
          <button
            key={item.path}
            onClick={() => {
              router.push(item.path)
              setOpenMenu(null)
            }}
            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50/80 transition-all rounded-lg text-sm"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>
            {/* Прочие пункты */}
            {navItems.filter(i => i.path !== "/information").map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-base font-medium text-gray-700 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}

            {/* Личный кабинет */}
            <Button
              onClick={() => router.push('/cabinet')}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-10 text-base"
            >
              Личный кабинет
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}
