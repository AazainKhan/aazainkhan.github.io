"use client"

import type React from "react"
import { AazainAnimation } from "../AazainAnimation"
import ScrollDownAnimation from "../ScrollDownAnimation"

interface HeroSectionProps {
  targetRef: React.RefObject<HTMLDivElement>
}

export default function HeroSection({ targetRef }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-10 px-4 sm:px-8 relative">
      {/* Animation Background */}
      <div className="absolute inset-0 z-0">
        <AazainAnimation />
      </div>

      {/* Description text overlaid on animation - positioned lower to avoid overlap with pixels */}
      <div className="absolute z-10 text-center w-full" style={{ 
        bottom: 'min(30%, calc(30% + 20px))',  
        paddingTop: '2rem' // Extra padding to ensure separation from AAZAIN animation
      }}>
        <p className="text-gray-600 dark:text-white/60 font-light tracking-wide text-lg md:text-xl 
           bg-white/30 dark:bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg mx-auto inline-block">
          Full-stack developer. AI/ML. Friendly neighborhood tech guy.
        </p>
      </div>

      {/* Scroll Down Animation - Positioned even higher from bottom */}
      <div className="absolute bottom-32 md:bottom-28 left-0 right-0 flex justify-center">
        <ScrollDownAnimation targetRef={targetRef} />
      </div>
    </section>
  )
}
