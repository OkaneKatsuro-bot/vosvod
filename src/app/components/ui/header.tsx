'use client'

import Link from "next/link"
import { Container } from './container'
import Image from 'next/image'
import { User, Search, Menu, X } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

export const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Обучение", path: "/education" },
    { name: "Информация", path: "/info" },
    { name: "Сведения об организации", path: "/about"},
    { name: "Инструкция для слабовидящих", path: "/accessibility" },
    { name: "Контакты", path: "/contacts" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent backdrop-blur-sm"
    )}>
      <Container className="px-4 sm:px-6 max-w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 rounded-full border-2 border-blue-500/30 group-hover:border-blue-500 transition-all flex items-center justify-center bg-gray-50">
                <Image 
                  src="/Rectangle.png" 
                  alt="Логотип" 
                  width={80} 
                  height={80}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  АНО ДПО "Учебный центр судовождения"
                </span>
                <span className="text-xl font-bold text-gray-900 whitespace-nowrap uppercase">
                  УЧЕБНЫЙ ЦЕНТР <br/>ВОСВОД
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive(item.path) 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span 
                    layoutId="activeNavItem"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-500 hover:bg-gray-100 rounded-full"
              aria-label="Поиск"
            >
              <Search className="h-4 w-4" />
            </Button>

            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="gap-2 text-gray-700 hover:bg-gray-100 rounded-full"
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Аккаунт</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end"
                  className="w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                >
                  <DropdownMenuItem 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => router.push('/profile')}
                  >
                    Профиль
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => router.push('/courses')}
                  >
                    Мои курсы
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => router.push('/signout')}
                  >
                    Выход
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>  
                <Button 
                  onClick={() => router.push('/signin')}
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:bg-gray-100 rounded-full hidden sm:inline-flex"
                >
                  Войти
                </Button>
                <Button 
                  onClick={() => router.push('/signup')}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4"
                >
                  Записаться
                </Button>
              </>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-500 hover:bg-gray-100 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Меню"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="pb-4 pt-2 space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    isActive(item.path) 
                      ? "bg-blue-50 text-blue-600 font-semibold" 
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                {!session && (
                  <Button 
                    onClick={() => {
                      router.push('/signin')
                      setIsOpen(false)
                    }}
                    variant="outline"
                    className="w-full py-3"
                  >
                    Войти
                  </Button>
                )}
                <Button 
                  onClick={() => {
                    router.push('/signup')
                    setIsOpen(false)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Записаться
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </header>
  )
}