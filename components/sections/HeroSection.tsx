"use client"

import type React from "react"
import AazainAnimation from "../AazainAnimation"
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

      {/* Description text overlaid on animation - positioned lower */}
      <div className="absolute z-10 text-center w-full" style={{ bottom: '25%' }}>
        <p className="text-gray-600 dark:text-white/60 font-light tracking-wide text-lg md:text-xl">
          Full-stack developer. AI/ML. Friends/family tech guy.
        </p>
      </div>

      {/* Scroll Down Animation - Centered at bottom */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <ScrollDownAnimation targetRef={targetRef} />
      </div>
    </section>
  )
}
