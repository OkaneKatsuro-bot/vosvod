"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Spotlight = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "pointer-events-none absolute -top-40 left-0 h-[200px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-xl",
        className
      )}
    />
  )
}