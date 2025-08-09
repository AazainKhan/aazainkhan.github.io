"use client"

import { motion } from "framer-motion"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { useScrollAnimation, slideUpVariants, staggerContainerVariants, staggerItemVariants } from "@/hooks/use-scroll-animation"

export default function AchievementsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ delay: 100 })
  const { ref: achievementsRef, isInView: achievementsInView } = useScrollAnimation({ delay: 200 })
  
  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto">
        <motion.div ref={titleRef}>
          <motion.h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
            variants={slideUpVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Achievements
          </motion.h2>
        </motion.div>
        
        <motion.div 
          ref={achievementsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={achievementsInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4" variants={staggerItemVariants}>
            <div>
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80`}
              >
                Google Developer Student Clubs Hackathon Winner
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">May 2024</span>
            </div>
            <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-2">
              <li>
                Led DevOps stream—built CI/CD pipeline, Terraform + Azure Web App deployment, and monitoring dashboards in Application Insights.
              </li>
              <li>
                Tackled obstacles like connecting frontend to backend, deploying the application, and managing a CI/CD pipeline.
              </li>
              <li>
                Collaborated with teammates from different streams to deliver an innovative solution using modern development practices.
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={staggerItemVariants}>
            <div>
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80`}
              >
                Academic Excellence
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">2022 - 2024</span>
            </div>
            <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-2">
              <li>
                Maintained high academic performance throughout university studies in Computer Science and Technology.
              </li>
              <li>
                Completed multiple advanced courses in machine learning, data structures, algorithms, and software engineering.
              </li>
              <li>
                Actively participated in university tech clubs and coding competitions to enhance practical skills.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
