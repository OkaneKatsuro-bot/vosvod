import type {Metadata} from "next"
import {Montserrat_Alternates} from "next/font/google"
import {Header} from "@/components/header"
import '@/app/globals.css'

const sans = Montserrat_Alternates({
    subsets: ["cyrillic"],
    weight: ["900", "800", "600", "200"]
})

export const metadata: Metadata = {
    title: "VOSVOD",
    description: "Учебный центр",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
        <body className={sans.className}>
        <Header/>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}