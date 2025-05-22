'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'

const CallButton = () => {
  return (
    <div className="mt-8 text-center">
      <Link
        href="tel:+79319787378"
        className="inline-flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition-colors duration-200"
      >
        <Phone className="w-5 h-5 text-white" />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-base font-semibold">+7 (931) 978-73-78</span>
          <span className="text-sm text-white/80">Позвонить сейчас</span>
        </div>
      </Link>
    </div>
  )
}

export default CallButton
