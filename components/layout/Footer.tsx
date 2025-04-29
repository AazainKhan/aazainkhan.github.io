"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 dark:text-white/40 text-sm">
          © {new Date().getFullYear()} Aazain Ullah Khan
        </p>
      </div>
    </footer>
  )
}
