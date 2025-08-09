"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation, slideUpVariants, staggerContainerVariants, staggerItemVariants, scaleInVariants } from "@/hooks/use-scroll-animation"

export default function ProjectSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ delay: 100 })
  const { ref: projectsRef, isInView: projectsInView } = useScrollAnimation({ delay: 200 })
  
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
            Projects
          </motion.h2>
        </motion.div>
        
        <motion.div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            variants={staggerItemVariants}
          >
            <div className="mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                IntelliFeed: AI News Aggregator
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">April 2025</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Chalice
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                TailwindCSS
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                AWS
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Hugging Face
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Developed a full-stack smart RSS aggregator using React/TailwindCSS frontend and Python/AWS Chalice
                backend, implementing real-time article ingestion and intelligent categorization systems.
              </li>
              <li>
                Built semantic search capabilities using Hugging Face transformers to deliver personalized content
                recommendations based on user reading preferences and interaction patterns.
              </li>
              <li>
                Architected serverless AWS infrastructure with automated deployment pipelines, ensuring scalable
                content processing and 99.9% uptime for continuous news aggregation.
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AazainKhan/intellifeed"
                className="inline-flex items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            variants={staggerItemVariants}
          >
            <div className="mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                MLPredictor
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">September 2024</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Streamlit
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Scikit-learn
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Pandas
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                NumPy
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Built an interactive web application that democratizes machine learning by allowing users to build,
                train, and evaluate ML models through an intuitive drag-and-drop interface.
              </li>
              <li>
                Implemented automated data preprocessing, feature engineering, and model selection algorithms that
                optimize performance without requiring deep ML expertise from end users.
              </li>
              <li>
                Designed real-time visualization dashboards using Streamlit for model performance metrics, prediction
                confidence intervals, and feature importance analysis.
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AazainKhan/MLPredictor"
                className="inline-flex items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                GitHub
              </Link>
              <Link
                href="https://mlpredictor-aazain.streamlit.app"
                className="inline-flex items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            variants={staggerItemVariants}
          >
            <div className="mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                Spotify Song Recommendation System
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">January 2024</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Scikit-learn
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Spotify API
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Matplotlib
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Seaborn
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Engineered a hybrid recommendation system combining collaborative filtering and content-based algorithms
                to deliver personalized music suggestions with 85% user satisfaction rate.
              </li>
              <li>
                Processed and analyzed 50,000+ song features using advanced data science techniques, implementing
                dimensionality reduction and clustering algorithms for pattern recognition.
              </li>
              <li>
                Integrated Spotify Web API for real-time music data retrieval and created comprehensive evaluation
                frameworks to measure recommendation accuracy and user engagement metrics.
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AazainKhan/spotify-recommendation-system"
                className="inline-flex items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            variants={staggerItemVariants}
          >
            <div className="mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                Task Management Web App
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">August 2023</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Express
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                JWT
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Developed a full-stack MERN application with intuitive drag-and-drop functionality for task
                organization, implementing real-time updates and collaborative features for team productivity.
              </li>
              <li>
                Built secure user authentication system using JWT tokens and bcrypt encryption, ensuring data privacy
                and session management for multi-user environments.
              </li>
              <li>
                Implemented RESTful API architecture with comprehensive CRUD operations, error handling, and data
                validation, supporting scalable task management workflows.
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AazainKhan/task-management-app"
                className="inline-flex items-center text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                GitHub
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
