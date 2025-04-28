"use client"

import type React from "react"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { Button } from "@/components/ui/button"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8">
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
            <div className="pt-8">
              <p className="text-gray-500 dark:text-white/60 mb-4">Location</p>
              <p className="text-gray-700 dark:text-white/80 text-xl">Toronto, Ontario, Canada</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-600 dark:text-white/60 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-800 dark:text-white/80 focus:outline-none focus:border-gray-500 dark:focus:border-white/40 placeholder:text-gray-400 dark:placeholder:text-white/40"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-600 dark:text-white/60 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-800 dark:text-white/80 focus:outline-none focus:border-gray-500 dark:focus:border-white/40 placeholder:text-gray-400 dark:placeholder:text-white/40"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-600 dark:text-white/60 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-md p-3 text-gray-800 dark:text-white/80 focus:outline-none focus:border-gray-500 dark:focus:border-white/40 placeholder:text-gray-400 dark:placeholder:text-white/40"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button className="w-full rounded-md py-3 bg-gray-200 dark:bg-white/20 hover:bg-gray-300 dark:hover:bg-white/30 text-gray-800 dark:text-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
