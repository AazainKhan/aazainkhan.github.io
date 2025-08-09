"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import { useScrollAnimation, slideUpVariants, staggerContainerVariants, staggerItemVariants, slideInFromLeftVariants } from "@/hooks/use-scroll-animation"

export default function WorkSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ delay: 100 })
  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation({ delay: 200 })
  
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
            Work
          </motion.h2>
        </motion.div>

        {/* Timeline layout for work experience */}
        <motion.div 
          ref={timelineRef}
          className="relative"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/20"
            variants={slideInFromLeftVariants}
          />

          <div className="space-y-16 pl-8 md:pl-16">
            {/* Job 1 */}
            <motion.div className="relative" variants={staggerItemVariants}>
              {/* Modern timeline marker - horizontal line with gradient */}
              <div className="absolute -left-8 md:-left-16 top-4">
                <div className="h-px w-8 md:w-10 bg-gradient-to-r from-gray-400 dark:from-white/60 to-transparent"></div>
                <div className="absolute left-0 top-0 w-1.5 h-1.5 rounded-sm bg-gray-400 dark:bg-white/60 transform -translate-y-1/2"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80 mb-2`}
                  >
                    Junior Developer
                  </h3>
                  <h4 className="text-gray-700 dark:text-white/70 text-lg mb-4">
                    Ministry of Public and Business Service Delivery
                  </h4>
                  
                  {/* Date displayed in mobile view right after company name */}
                  <div className="block md:hidden mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                      Aug 2024 – Dec 2024
                    </span>
                  </div>
                  
                  <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-3">
                    <li>
                      Single-handedly architected and built an end-to-end analytics portal using React, TypeScript, and
                      modern AI development tools, making independent roadmap decisions that improved user experience
                      without PM oversight.
                    </li>
                    <li>
                      Designed and implemented intuitive UI components focused on user experience, reducing learning
                      curve for non-technical staff while maintaining clean, maintainable code architecture.
                    </li>
                    <li>
                      Built RESTful APIs independently, making key technical decisions that optimized performance while
                      prioritizing user needs over unnecessary complexity or architectural purity.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block md:w-48 shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                    Aug 2024 – Dec 2024
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Job 2 */}
            <motion.div className="relative" variants={staggerItemVariants}>
              {/* Modern timeline marker - horizontal line with gradient */}
              <div className="absolute -left-8 md:-left-16 top-4">
                <div className="h-px w-8 md:w-10 bg-gradient-to-r from-gray-400 dark:from-white/60 to-transparent"></div>
                <div className="absolute left-0 top-0 w-1.5 h-1.5 rounded-sm bg-gray-400 dark:bg-white/60 transform -translate-y-1/2"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80 mb-2`}
                  >
                    Full-Stack Developer (Contract)
                  </h3>
                  <h4 className="text-gray-700 dark:text-white/70 text-lg mb-4">Ministry of Health</h4>
                  
                  {/* Date displayed in mobile view right after company name */}
                  <div className="block md:hidden mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                      May 2024 – Jul 2024
                    </span>
                  </div>
                  
                  <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-3">
                    <li>
                      Built a modern web application using React, TypeScript, and Tailwind CSS for internal staff
                      management, replacing outdated legacy systems with improved user experience.
                    </li>
                    <li>
                      Designed and implemented responsive UI components that work across devices, ensuring accessibility
                      for government employees with varying technical skills and device preferences.
                    </li>
                    <li>
                      Developed secure authentication systems and database integrations while following government
                      security protocols and data protection requirements.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block md:w-48 shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                    May 2024 – Jul 2024
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Job 3 */}
            <motion.div className="relative" variants={staggerItemVariants}>
              {/* Modern timeline marker - horizontal line with gradient */}
              <div className="absolute -left-8 md:-left-16 top-4">
                <div className="h-px w-8 md:w-10 bg-gradient-to-r from-gray-400 dark:from-white/60 to-transparent"></div>
                <div className="absolute left-0 top-0 w-1.5 h-1.5 rounded-sm bg-gray-400 dark:bg-white/60 transform -translate-y-1/2"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80 mb-2`}
                  >
                    Coding Instructor & Mentor
                  </h3>
                  <h4 className="text-gray-700 dark:text-white/70 text-lg mb-4">Code Ninjas</h4>
                  
                  {/* Date displayed in mobile view right after company name */}
                  <div className="block md:hidden mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                      Sep 2022 – Apr 2024
                    </span>
                  </div>
                  
                  <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-3">
                    <li>
                      Taught programming fundamentals to 50+ students aged 8-18, using game-based learning to make
                      coding concepts accessible and engaging for different learning styles.
                    </li>
                    <li>
                      Mentored students through complex projects including mobile apps and web games, developing
                      patient communication skills while helping them debug and problem-solve independently.
                    </li>
                    <li>
                      Created custom lesson plans and coding challenges that balanced technical rigor with age-appropriate
                      engagement, fostering both technical skills and creative problem-solving abilities.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block md:w-48 shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                    Sep 2022 – Apr 2024
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div 
          className="mt-20"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
        >
          <motion.h3
            className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-8`}
            variants={staggerItemVariants}
          >
            Technical Skills
          </motion.h3>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerItemVariants}>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 font-medium mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-700 dark:text-white/70 font-medium mb-4">Backend & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Node.js", "Express", "PostgreSQL", "Git", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-700 dark:text-white/70 font-medium mb-4">AI/ML & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Data Analysis", "AWS", "Cloud Functions", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
