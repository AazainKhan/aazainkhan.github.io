"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
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

  // Prevent scrolling when menu is open and add blur effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("menu-open")
    } else {
      document.body.style.overflow = ""
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Hamburger button - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-800 dark:text-white/80 hover:text-gray-900 dark:hover:text-white focus:outline-none z-50 relative"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay with stronger blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-lg"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content - directly connected to navbar */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-0 z-40 mobile-nav"
            >
              {/* Top gradient overlay to blend with navbar */}
              <div className="h-16 bg-gradient-to-b from-white/80 to-white/95 dark:from-[#141414]/80 dark:to-[#141414]/95 backdrop-blur-sm"></div>
              
              {/* Menu content panel */}
              <div className="w-full bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md shadow-lg pt-16 pb-6">
                <nav className="container mx-auto px-6 flex flex-col items-center space-y-7 py-8">
                  {links.map((link, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.07 * index }}
                      onClick={() => {
                        link.onClick()
                        setIsOpen(false)
                      }}
                      className="text-gray-800 dark:text-white/90 text-xl font-light tracking-wide hover:text-gray-600 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                  
                  {/* Theme Toggle in Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-1"
                  >
                    <ThemeToggle />
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
