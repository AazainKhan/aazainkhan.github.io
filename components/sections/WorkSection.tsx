"use client"

import type React from "react"

import { ppEditorialNewUltralightItalic } from "@/app/fonts"

export default function WorkSection({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section ref={forwardedRef} className="min-h-screen py-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-gray-800 dark:text-white/80 tracking-tighter mb-16`}
        >
          Work
        </h2>

        {/* Timeline layout for work experience */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gray-300 dark:bg-white/20"></div>

          <div className="space-y-16 pl-8 md:pl-16">
            {/* Job 1 */}
            <div className="relative">
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
            </div>

            {/* Job 2 */}
            <div className="relative">
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
                    IT Technical Analyst
                  </h3>
                  <h4 className="text-gray-700 dark:text-white/70 text-lg mb-4">
                    Ministry of Public and Business Service Delivery
                  </h4>
                  
                  {/* Date displayed in mobile view right after company name */}
                  <div className="block md:hidden mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                      May 2024 – Aug 2024
                    </span>
                  </div>
                  
                  <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-3">
                    <li>
                      Transformed legacy system migration by taking initiative beyond role expectations, identifying
                      pain points and implementing solutions without waiting for formal approvals.
                    </li>
                    <li>
                      Built internal tools with scrappy, founder-like mentality, creating solutions that bypassed
                      bureaucratic hurdles and delivered immediate value to users.
                    </li>
                    <li>
                      Rapidly prototyped and iterated on data visualization dashboards, continuously refining based on
                      user feedback rather than following rigid specifications.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block md:w-48 shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                    May 2024 – Aug 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="relative">
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
                    Wireless Consultant
                  </h3>
                  <h4 className="text-gray-700 dark:text-white/70 text-lg mb-4">Staples</h4>
                  
                  {/* Date displayed in mobile view right after company name */}
                  <div className="block md:hidden mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                      Jun 2023 – Feb 2024
                    </span>
                  </div>
                  
                  <ul className="text-gray-600 dark:text-white/50 leading-relaxed list-disc pl-5 space-y-3">
                    <li>
                      Leveraged expertise in wireless and wire-line solutions for consumer and small business needs,
                      providing open-ended consulting, contract estimates, and after-sales support to enhance customer
                      retention.
                    </li>
                    <li>
                      Coordinated with cross-functional teams to design and deploy promotional campaigns, resulting in a
                      25% increase in weekly customer engagement and sales conversions.
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block md:w-48 shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 rounded-full text-sm">
                    Jun 2023 – Feb 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-24 bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-lg">
          <h3
            className={`${ppEditorialNewUltralightItalic.className} text-2xl md:text-3xl text-gray-800 dark:text-white/80 mb-6`}
          >
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Languages
              </h4>
              <p className="text-gray-600 dark:text-white/50">
                Python, Java, JavaScript, C++, SQL, PL/SQL, HTML 5, CSS, PHP, Bash
              </p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Frameworks
              </h4>
              <p className="text-gray-600 dark:text-white/50">
                React, NodeJS, Express, Flask, Pytest, Bootstrap, TailwindCSS
              </p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Tools
              </h4>
              <p className="text-gray-600 dark:text-white/50">
                Power BI, Power Platform, Git, Docker, Postman, Jira, GitHub, GitLab, Jupyter Notebook, Office 365,
                Pipelines
              </p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Libraries
              </h4>
              <p className="text-gray-600 dark:text-white/50">
                Mongoose, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow
              </p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                ML/AI
              </h4>
              <p className="text-gray-600 dark:text-white/50">Scikit-learn, TensorFlow, PyTorch, Keras</p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Databases
              </h4>
              <p className="text-gray-600 dark:text-white/50">MongoDB, MySQL</p>
            </div>
            <div>
              <h4 className="text-gray-700 dark:text-white/70 text-lg mb-3 border-b border-gray-200 dark:border-white/20 pb-2">
                Operating Systems
              </h4>
              <p className="text-gray-600 dark:text-white/50">Windows, UNIX, Linux, MacOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
