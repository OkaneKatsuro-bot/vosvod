'use client'
import { LampDemo } from "@/components/lampDemo"

export default function AccessibilityGuidePage() {
  return (
    <main className="flex-1">
      <div className="relative flex flex-col min-h-screen">
        {/* Лампа с заголовком */}
        <div className="relative h-full w-full overflow-hidden">
          <LampDemo />
        </div>
      </div>
    </main>
  )
}