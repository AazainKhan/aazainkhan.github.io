"use client"

import type React from "react"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function PlaySection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section ref={forwardedRef} className="min-h-screen py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
        >
          Project Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
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
                serverless backend, with responsive design and modern UI components that consolidate news from multiple
                sources in a single interface.
              </li>
              <li>
                Implemented AI features including article sentiment analysis with visual breakdowns, AI-powered article
                chat using Hugging Face models, and integration with AWS services like Comprehend, Polly, and Translate
                to enhance content interaction.
              </li>
              <li>
                Engineered a scalable architecture with efficient caching mechanisms, robust error handling, and
                fallback strategies to deliver a seamless user experience while managing diverse content sources and
                third-party API dependencies.
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors"
            >
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                Toronto Collision Risk Prediction
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">April 2024</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Flask
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Bootstrap
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Scikit-learn
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Pandas
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Git
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Deployed a machine learning application using Python and Flask, implementing multiple predictive models
                including Logistic Regression, Support Vector Machine, Neural Networks, and Decision Tree for collision
                risk analysis.
              </li>
              <li>
                Assembled a preprocessing pipeline with scikit-learn's Pipeline and ColumnTransformer, ensuring
                consistent data transformation across training and prediction phases, and utilized joblib for model
                serialization and deployment.
              </li>
              <li>
                Integrated the machine learning models into a user-friendly Flask web application, providing an
                interactive interface for making predictions and exploring data.
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors"
            >
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                Stock Market Dashboard
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">March 2024</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Flask
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                YFinance API
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                OpenAI API
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Created a stock market dashboard using Flask serving a REST API with React in the front end to display
                data fetched from the Yahoo Finance API.
              </li>
              <li>
                Implemented React hooks caching reducing unnecessary requests and improving performance and user
                experience.
              </li>
              <li>
                Added a financial news dashboard with a summary report using OpenAI API GPT and external API data.
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors"
            >
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/90`}
              >
                Say It - Social Network
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">September 2023</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Express
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                NodeJS
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Jira
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs rounded-full">
                Git
              </span>
            </div>
            <ul className="text-gray-600 dark:text-white/60 list-disc pl-5 space-y-2 mb-6">
              <li>
                Designed a MongoDB database schema to store user profiles, posts, comments, and social interactions for
                a social networking application.
              </li>
              <li>Ensured secure user sessions with JWT and bcrypt for user registration and authentication.</li>
              <li>
                Partnered with a team of 5 to manage project workflow using Jira for agile task tracking and sprint
                planning. Set up effective version control with Git, including branching and conflict resolution.
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex items-center text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors"
            >
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
