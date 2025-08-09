"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { Mail, Linkedin, Github } from "lucide-react"
import { useScrollAnimation, slideUpVariants, staggerContainerVariants, staggerItemVariants, fadeInVariants } from "@/hooks/use-scroll-animation"

export default function ContactSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ delay: 100 })
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ delay: 200 })
  
  return (
    <section ref={forwardedRef} className="min-h-screen py-20 px-4 sm:px-8 flex items-center">
      <div className="container mx-auto">
        <motion.div ref={titleRef}>
          <motion.h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16 text-center`}
            variants={slideUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Get In Touch
          </motion.h2>
        </motion.div>
        
        <motion.div 
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-600 dark:text-white/60 text-lg md:text-xl leading-relaxed mb-12"
            variants={staggerItemVariants}
          >
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a chat about technology and development. Feel free to reach out!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={staggerItemVariants}
          >
            <motion.a
              href="mailto:aazain.codes@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Email Me
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/aazainkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/AazainKhan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
