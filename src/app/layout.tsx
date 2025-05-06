// app/layout.tsx
import type {Metadata} from "next"
import {Montserrat_Alternates} from "next/font/google"
import {Header} from "@/components/header"
import '@/app/globals.css'
import Footer from "@/components/footer"
import Image from "next/image" 

const sans = Montserrat_Alternates({
    subsets: ["cyrillic"],
    weight: ["900", "800", "600", "200"]
})

export const metadata: Metadata = {
    title: "VOSVOD",
    description: "Учебный центр",
}

// ... остальной импорт

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
        <body className={`${sans.className} relative`}>
            {/* Фоновое изображение для всего сайта */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 h-full w-full">
                    <Image
                        src="/Rectangle.png"
                        alt="Фон сайта"
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full"
                        priority
                    />
                    {/* Изменено на синее затемнение */}
                    <div className="absolute inset-0 bg-blue-900/30"></div>
                </div>
            </div>
            
            <Header/>
            <main className="relative">
                {children}
            </main>
            <Footer/>
        </body>
        </html>
    )
}