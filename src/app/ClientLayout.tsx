'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isTest = pathname.startsWith('/testtest')

  return (
    <html lang="ru">
      <body className="font-sans relative">
        {!isTest && (

          <div className="fixed inset-0 -z-10">
            <Image
              src="/Rectangle.png"
              alt="Фон сайта"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-blue-900/30" />
          </div>
        )}


        {!isTest && <Header />}


        <main className="relative">{children}</main>

        {!isTest && <Footer />}
      </body>
    </html>
  )
}
