'use client'
import { LampDemo } from "@/components/cabinet-components/lampDemo"

export default function AccessibilityGuidePage() {
  return (
    <main className="flex-1">
      <div className="relative flex flex-col min-h-screen">
        <div className="relative h-full w-full overflow-hidden">
          <LampDemo />
        </div>
      </div>
    </main>
  )
}