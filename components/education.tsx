"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Jul 2022 - Jul 2026",
      location: "Jalandhar, Punjab",
      gpa: "Current CGPA: 7.57",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: "Kailashpat Singhania High School, Vijaygram",
      degree: "Higher Secondary Schooling (Class XII)",
      period: "Apr 2021 - Apr 2022",
      location: "Chhindwara, Madhya Pradesh",
      gpa: "CGPA: 7.84",
      icon: <School className="w-6 h-6" />,
    },
    {
      institution: "Little Step English Higher Secondary School",
      degree: "Secondary Schooling (Class X)",
      period: "Apr 2019 - Apr 2020",
      location: "Chhindwara, Madhya Pradesh",
      gpa: "CGPA: 8.23",
      icon: <School className="w-6 h-6" />,
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>Education</SectionHeading>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform md:translate-x-px"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <TimelineItem key={index} data={item} isLeft={index % 2 === 0} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  data,
  isLeft,
  delay,
}: {
  data: {
    institution: string
    degree: string
    period: string
    location: string
    gpa: string
    icon: React.ReactNode
  }
  isLeft: boolean
  delay: number
}) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-black transform -translate-x-2 md:-translate-x-2.5"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`md:w-1/2 ${isLeft ? "md:pr-12 ml-8 md:ml-0" : "md:pl-12 ml-8 md:ml-auto"}`}
      >
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-4">
              {data.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{data.institution}</h3>
              <p className="text-blue-400">{data.period}</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">{data.degree}</h4>
          <p className="text-gray-400">{data.location}</p>
          <p className="text-gray-300 mt-2 font-medium">{data.gpa}</p>
        </div>
      </motion.div>
    </div>
  )
}
