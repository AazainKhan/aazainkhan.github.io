"use client"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-white/5">
      <div className="container mx-auto">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
        >
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
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
                Leveraged diverse skill sets to collaborate effectively on a large project. Gained proficiency in
                managing REST APIs, QR code data processing, and CI/CD deployment strategies.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80`}
              >
                Thinking North Smart Cities Hackathon Winner
              </h3>
              <span className="text-gray-500 dark:text-white/40 text-sm">May 2023</span>
            </div>
            <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-2">
              <li>
                Developed a city-wide IoT proof-of-concept; published technical white paper highlighting Azure IoT Hub security model and data pipeline.
              </li>
              <li>
                Effectively presented goals and solutions to stakeholders, judges, and members from The Centre for
                Addiction and Mental Health (CAMH).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
