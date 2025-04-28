"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ThemeToggle from "../ThemeToggle"

interface MobileMenuProps {
  links: {
    name: string
    onClick: () => void
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Hamburger button - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-800 dark:text-white/80 hover:text-gray-900 dark:hover:text-white focus:outline-none fixed top-4 right-6 z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Background layer - this ensures we have a solid background */}
          <div 
            className="absolute inset-0 bg-gray-800 dark:bg-gray-100" 
            style={{ 
              backgroundColor: 'var(--menu-bg-color, #1f2937)', 
              opacity: 1 
            }}
          />
          
          {/* Content layer */}
          <div className="relative z-10 h-full pt-20 overflow-y-auto">
            <div 
              className="container mx-auto px-6"
              style={{ backgroundColor: 'inherit' }}
            >
              <nav className="flex flex-col items-center space-y-8 py-8">
                {links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      link.onClick()
                      setIsOpen(false)
                    }}
                    className="text-white dark:text-gray-900 text-2xl font-light tracking-wide hover:opacity-75 transition-opacity"
                    style={{ color: 'var(--menu-text-color, white)' }}
                  >
                    {link.name}
                  </button>
                ))}

                {/* Theme Toggle in Mobile Menu */}
                <div className="mt-4">
                  <ThemeToggle />
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-8 pt-8 border-t border-gray-600 dark:border-gray-300 w-48">
                  <Link href="https://github.com/aazainkhan" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-white dark:text-gray-800 hover:opacity-75 transition-opacity" />
                  </Link>
                  <Link href="https://linkedin.com/in/aazainkhan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-white dark:text-gray-800 hover:opacity-75 transition-opacity" />
                  </Link>
                  <Link href="mailto:aazainkhan@gmail.com">
                    <Mail className="w-6 h-6 text-white dark:text-gray-800 hover:opacity-75 transition-opacity" />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
