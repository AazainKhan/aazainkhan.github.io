"use client"

import type React from "react"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import DynamicFrameLayout from "../DynamicFrameLayout"

export default function ProjectsSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section ref={forwardedRef} className="min-h-screen py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
        >
          Selected Projects
        </h2>
        <div className="h-[70vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </section>
  )
}
