"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"
import { AazainAnimation } from "../AazainAnimation"
import ScrollDownAnimation from "../ScrollDownAnimation"

interface HeroSectionProps {
  targetRef: React.RefObject<HTMLDivElement>
}

export default function HeroSection({ targetRef }: HeroSectionProps) {
  const [isGameMode, setIsGameMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure hydration completes before rendering interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // If not mounted yet, render a minimal version to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-10 px-4 sm:px-8 relative">
        <div className="absolute inset-0 z-0">
          {/* Animation placeholder */}
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 pb-10 px-4 sm:px-8 relative">
      {/* Animation Background */}
      <div className="absolute inset-0 z-0">
        <AazainAnimation isGameMode={isGameMode} />
      </div>

      {/* Description text overlaid on animation - positioned lower to avoid overlap with pixels */}
      {!isGameMode && (
        <div className="absolute z-10 text-center w-full" style={{ 
          bottom: 'min(30%, calc(30% + 20px))',  
          paddingTop: '2rem' // Extra padding to ensure separation from AAZAIN animation
        }}>
          <p className="text-gray-600 dark:text-white/60 font-light tracking-wide text-lg md:text-xl 
             bg-white/30 dark:bg-black/30 py-2 px-4 rounded-lg mx-auto inline-block">
            Full-stack developer. AI/ML. Friendly neighborhood tech guy.
          </p>
        </div>
      )}

      {/* Play/Exit Button - Positioned at top right for easy access */}
      <div className="absolute top-20 right-4 sm:right-8 z-20">
        <button
          onClick={() => setIsGameMode(!isGameMode)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white/10 text-white dark:text-white/90 rounded-full 
                    shadow-md hover:bg-gray-800 dark:hover:bg-white/20 transition-all"
          aria-label={isGameMode ? "Exit Game" : "Play Pong Game"}
        >
          {isGameMode ? (
            <>
              <X className="w-4 h-4" />
              <span>Exit</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      {/* Scroll Down Animation - Only shown in non-game mode */}
      {!isGameMode && (
        <div className="absolute bottom-20 md:bottom-18 left-0 right-0 flex justify-center">
          <ScrollDownAnimation targetRef={targetRef} />
        </div>
      )}
    </section>
  )
}
