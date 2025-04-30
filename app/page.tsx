"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import WorkSection from "@/components/sections/WorkSection"
import AchievementsSection from "@/components/sections/AchievementsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/layout/Footer"
import BackToTopButton from "@/components/BackToTopButton"

// Import the components directly without path aliases
import ProjectsSection from "../components/sections/ProjectsSection"
import PlaySection from "../components/sections/PlaySection"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  const projectsRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const playRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Using a more compatible type definition for the scrollToSection function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "About", onClick: () => scrollToSection(playRef) },
    { name: "Work", onClick: () => scrollToSection(workRef) },
    { name: "Projects", onClick: () => scrollToSection(projectsRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ]

  return (
    <div className={`min-h-screen themed-section ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`} 
         style={{ 
           backgroundColor: `rgb(var(--background-start-rgb))`,
           color: `rgb(var(--foreground-rgb))`
         }}>
      <Navbar navLinks={navLinks} />
      {/* Use type assertion to make TypeScript happy with the ref types */}
      <HeroSection targetRef={playRef as React.RefObject<HTMLDivElement>} />
      <PlaySection forwardedRef={playRef as React.RefObject<HTMLDivElement>} />

      <WorkSection forwardedRef={workRef as React.RefObject<HTMLDivElement>} />
      <ProjectsSection forwardedRef={projectsRef as React.RefObject<HTMLDivElement>} />
      <AchievementsSection />
      <ContactSection forwardedRef={contactRef as React.RefObject<HTMLDivElement>} />
      <Footer />
      <BackToTopButton />
    </div>
  )
}
