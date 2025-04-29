"use client"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import ThemeToggle from "../ThemeToggle"
import { motion } from "framer-motion"
import { useState } from "react"

interface NavbarProps {
  navLinks: {
    name: string
    onClick: () => void
  }[]
}

export default function Navbar({ navLinks }: NavbarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Sleek Interactive Logo */}
        <motion.div
          className="relative cursor-pointer logo-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="block">
            <div className="flex items-center">
              {/* Unified text treatment */}
              <div className="relative overflow-hidden">
                <div className="flex items-center">
                  {["A", "A", "Z", "A", "I", "N"].map((letter, i) => (
                    <motion.span
                      key={i}
                      className={`font-light tracking-wider text-lg ${
                        i === 0 ? "text-gray-900 dark:text-white font-medium" : "text-gray-700 dark:text-white/80"
                      }`}
                      animate={{
                        opacity: isHovered ? 1 : i === 0 ? 1 : 0.85,
                        y: isHovered ? [0, i % 2 === 0 ? -2 : -1, 0] : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.03 * i,
                        ease: "easeInOut",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>

                {/* Elegant animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gray-800 via-gray-600 to-transparent dark:from-white dark:via-white/60 dark:to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.onClick}
              className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/90 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileMenu links={navLinks} />
      </div>
    </nav>
  )
}
