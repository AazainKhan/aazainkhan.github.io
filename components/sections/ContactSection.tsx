"use client"

import type React from "react"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section ref={forwardedRef} className="py-20 px-4 sm:px-8 pb-32">
      <div className="container mx-auto">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
        >
          Get In Touch
        </h2>
        <div className="space-y-8 max-w-2xl">
          <p className="text-gray-600 dark:text-white/60 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-gray-500 dark:text-white/60" />
              <a
                href="mailto:aazainkhan@gmail.com"
                className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                aazainkhan@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-gray-500 dark:text-white/60" />
              <a
                href="https://linkedin.com/in/aazainkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                linkedin.com/in/aazainkhan
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-gray-500 dark:text-white/60" />
              <a
                href="https://github.com/aazainkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                github.com/aazainkhan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
