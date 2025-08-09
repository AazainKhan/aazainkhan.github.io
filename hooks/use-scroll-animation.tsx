"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, type Variants } from "framer-motion"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    once = true,
    delay = 0
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once,
    amount: threshold
  })
  
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, delay])

  return {
    ref,
    isInView: hasAnimated || isInView,
    hasAnimated
  }
}

// Animation variants for different types of animations
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const slideInFromLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const slideInFromRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}
