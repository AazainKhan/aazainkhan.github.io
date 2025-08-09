"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import DynamicFrameLayout from "../DynamicFrameLayout"
import { useScrollAnimation, slideUpVariants, fadeInVariants } from "@/hooks/use-scroll-animation"

export default function PlaySection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ delay: 100 })
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ delay: 200 })
  
  return (
    <section ref={forwardedRef} className="min-h-screen py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <motion.div ref={titleRef}>
          <motion.h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
            variants={slideUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            About
          </motion.h2>
        </motion.div>
        
        <motion.div 
          ref={contentRef}
          className="h-[70vh] md:h-[80vh]"
          variants={fadeInVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <DynamicFrameLayout />
        </motion.div>
      </div>
    </section>
  )
}
