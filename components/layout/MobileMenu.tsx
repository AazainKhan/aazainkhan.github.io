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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md pt-20"
          >
            <div className="container mx-auto px-6">
              <nav className="flex flex-col items-center space-y-8 py-8">
                {links.map((link, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    onClick={() => {
                      link.onClick()
                      setIsOpen(false)
                    }}
                    className="text-gray-800 dark:text-white text-2xl font-light tracking-wide"
                  >
                    {link.name}
                  </motion.button>
                ))}

                {/* Theme Toggle in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <ThemeToggle />
                </motion.div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-white/20 w-48">
                  <Link href="https://github.com/aazainkhan" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white/90 transition-colors" />
                  </Link>
                  <Link href="https://linkedin.com/in/aazainkhan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white/90 transition-colors" />
                  </Link>
                  <Link href="mailto:aazainkhan@gmail.com">
                    <Mail className="w-6 h-6 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white/90 transition-colors" />
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
