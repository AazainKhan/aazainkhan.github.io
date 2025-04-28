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
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

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

      {/* Menu with solid background */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
            zIndex: 40,
            paddingTop: '5rem',
            opacity: 1
          }}
        >
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '0 1.5rem'
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              paddingTop: '2rem',
              paddingBottom: '2rem'
            }}>
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    link.onClick()
                    setIsOpen(false)
                  }}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    color: isDarkMode ? '#ffffff' : '#1f2937',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {link.name}
                </button>
              ))}

              {/* Theme Toggle in Mobile Menu */}
              <div style={{ marginTop: '1rem' }}>
                <ThemeToggle />
              </div>

              {/* Social Icons */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(229, 231, 235, 1)',
                width: '12rem'
              }}>
                <Link href="https://github.com/aazainkhan" target="_blank" rel="noopener noreferrer">
                  <Github style={{ 
                    width: '1.5rem', 
                    height: '1.5rem',
                    color: isDarkMode ? '#ffffff' : '#4b5563'
                  }} />
                </Link>
                <Link href="https://linkedin.com/in/aazainkhan" target="_blank" rel="noopener noreferrer">
                  <Linkedin style={{
                    width: '1.5rem', 
                    height: '1.5rem',
                    color: isDarkMode ? '#ffffff' : '#4b5563'
                  }} />
                </Link>
                <Link href="mailto:aazainkhan@gmail.com">
                  <Mail style={{
                    width: '1.5rem', 
                    height: '1.5rem',
                    color: isDarkMode ? '#ffffff' : '#4b5563'
                  }} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
