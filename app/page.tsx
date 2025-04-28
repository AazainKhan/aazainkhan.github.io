"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import WorkSection from "@/components/sections/WorkSection"
import PlaySection from "@/components/sections/PlaySection"
import AchievementsSection from "@/components/sections/AchievementsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/layout/Footer"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  const projectsRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const playRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const navLinks = [
    { name: "Projects", onClick: () => scrollToSection(projectsRef) },
    { name: "Work", onClick: () => scrollToSection(workRef) },
    { name: "Play", onClick: () => scrollToSection(playRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ]

  return (
    <div className={`min-h-screen bg-white dark:bg-black ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <Navbar navLinks={navLinks} />
      <HeroSection targetRef={projectsRef} />
      <ProjectsSection forwardedRef={projectsRef} />
      <WorkSection forwardedRef={workRef} />
      <PlaySection forwardedRef={playRef} />
      <AchievementsSection />
      <ContactSection forwardedRef={contactRef} />
      <Footer />
    </div>
  )
}
