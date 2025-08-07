"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "next-themes"

interface MobileMenuProps {
  links: {
    name: string
    onClick: () => void
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

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
        className="p-2 text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white focus:outline-none z-50 relative"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 mobile-menu-container" style={{ backgroundColor: theme === 'dark' ? '#111827' : '#ffffff', opacity: 1 }}>
            <div className="pt-20">
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
                      className="text-gray-900 dark:text-white text-2xl font-light tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
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
                  <div className="flex gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700/30 justify-center">
                    <Link href="https://github.com/aazainkhan" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors" />
                    </Link>
                    <Link href="https://linkedin.com/in/aazainkhan" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors" />
                    </Link>
                    <Link href="mailto:aazainkhan@gmail.com">
                      <Mail className="w-6 h-6 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors" />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
