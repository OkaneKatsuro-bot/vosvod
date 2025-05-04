'use client'

import Link from "next/link"
import {Container} from './ui/container'
import Image from 'next/image'
import {User, Search, Menu, X} from "lucide-react"
import {useRouter, usePathname} from "next/navigation"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import {cn} from "@/lib/utils"
import {Button} from "./ui/button"
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@radix-ui/react-dropdown-menu"

export const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [session] = useState<boolean>(false)
    const navItems = [
        {name: "Обучение", path: "/education"},
        {name: "Информация", path: "/information"},
        {name: "Сведения об организации", path: "/about"},
        {name: "Версия для слабовидящих", path: "/accessibility"},
        {name: "Контакты", path: "/contacts"},
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
            isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
        )}>
            <Container className="px-4 sm:px-6 max-w-full">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        className="flex items-center gap-4"
                    >
                        <Link href="/public" className="flex items-center gap-4 group">
                            <div
                                className="w-16 h-16 rounded-full border-2 border-blue-600/30 group-hover:border-blue-600 transition-all flex items-center justify-center bg-gray-50">
                                <Image
                                    src="/Rectangle.png"
                                    alt="Логотип"
                                    width={64}
                                    height={64}
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-700 whitespace-nowrap">
                                    АНО ДПО &#34;Учебный центр судовождения&#34;
                                </span>
                                <span className="text-2xl font-bold text-black whitespace-nowrap uppercase tracking-tight">
                                    УЧЕБНЫЙ ЦЕНТР ВОСВОД
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative px-5 py-3 text-base font-medium rounded-lg transition-colors",
                                    isActive(item.path)
                                        ? "text-blue-800 bg-blue-50 font-semibold"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <motion.span
                                        layoutId="activeNavItem"
                                        className="absolute left-0 bottom-0 w-full h-1 bg-blue-600"
                                        transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-gray-700 hover:bg-gray-100 rounded-full p-3"
                            aria-label="Поиск"
                        >
                            <Search className="h-6 w-6"/>
                        </Button>

                        {session ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="gap-2 text-gray-700 hover:bg-gray-100 rounded-full p-3"
                                    >
                                        <User className="h-6 w-6"/>
                                        <span className="hidden sm:inline text-base">Аккаунт</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                >
                                    <DropdownMenuItem
                                        className="px-4 py-3 text-base text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => router.push('/profile')}
                                    >
                                        Профиль
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="px-4 py-3 text-base text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => router.push('/courses')}
                                    >
                                        Мои курсы
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="px-4 py-3 text-base text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => router.push('/signout')}
                                    >
                                        Выход
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button
                                onClick={() => router.push('/cabinet')}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-12 text-base"
                            >
                                Личный кабинет
                            </Button>
                        )}

                        <Button
                            variant="ghost"
                            size="lg"
                            className="md:hidden text-gray-700 hover:bg-gray-100 rounded-full p-3"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Меню"
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.2}}
                        className="md:hidden overflow-hidden bg-white shadow-lg"
                    >
                        <div className="py-4 space-y-2 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={cn(
                                        "block px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                                        isActive(item.path)
                                            ? "bg-blue-50 text-blue-800 font-semibold"
                                            : "text-gray-700 hover:bg-gray-100"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-3">
                                {!session && (
                                    <Button
                                        onClick={() => {
                                            router.push('/signin')
                                            setIsOpen(false)
                                        }}
                                        variant="outline"
                                        className="w-full py-3 text-base h-14"
                                    >
                                        Войти
                                    </Button>
                                )}
                                <Button
                                    onClick={() => {
                                        router.push('/signup')
                                        setIsOpen(false)
                                    }}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base h-14"
                                >
                                    Записаться на курс
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </Container>
        </header>
    )
}