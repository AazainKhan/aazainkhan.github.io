"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 dark:text-white/40 text-sm">
          © {new Date().getFullYear()} Aazain Ullah Khan. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-8">
          <Link
            href="#"
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/90 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/90 transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="mailto:aazainkhan@gmail.com"
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white/90 transition-colors text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
