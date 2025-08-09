"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface ScrollDownAnimationProps {
  targetRef: React.RefObject<HTMLElement>
}

export function ScrollDownAnimation({ targetRef }: ScrollDownAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY <= 100)
          ticking = false
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll as EventListener)
  }, [])

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <motion.button
      className="cursor-pointer z-10"
      onClick={scrollToTarget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        repeatDelay: 0.5,
      }}
      aria-label="Scroll down"
    >
      <div className="flex flex-col items-center">
        <span className="text-gray-600 dark:text-white/60 text-sm mb-2">Scroll Down</span>
        <ChevronDown className="w-6 h-6 text-gray-600 dark:text-white/60" />
      </div>
    </motion.button>
  )
}

export default ScrollDownAnimation
