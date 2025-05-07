import type { Metadata } from 'next'
import ClientLayout from './ClientLayout'  // наш клиентский
import '@/app/globals.css'

export const metadata: Metadata = {
    title: 'VOSVOD',
    description: 'Учебный центр',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    // Server Component: просто оборачиваем в клиентский
    return <ClientLayout>{children}</ClientLayout>
}
