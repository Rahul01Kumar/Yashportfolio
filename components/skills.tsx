"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Code, BarChart, PieChart, Layers, Braces } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++", "Python", "Java", "R", "SQL"],
    },
    {
      title: "Data Analysis",
      icon: <BarChart className="w-6 h-6" />,
      skills: ["Data Visualization", "Data Analytics", "Data Validation", "Data Integrity", "Analytical Skills"],
    },
    {
      title: "Technologies & Frameworks",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Apache Spark", "dplyr / ggplot2 (R)", "Github"],
    },
    {
      title: "Tools",
      icon: <PieChart className="w-6 h-6" />,
      skills: ["Excel", "Tableau", "Power BI", "SQL", "Google Analytics", "Jupyter Notebook", "R Studio"],
    },
    {
      title: "Soft Skills",
      icon: <Braces className="w-6 h-6" />,
      skills: ["Communication", "Problem Solving", "Data Structure & Algorithms", "Presentation"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  icon,
  skills,
  delay,
}: {
  title: string
  icon: React.ReactNode
  skills: string[]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all group"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillItem({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="flex items-center"
    >
      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
      <p className="text-gray-300">{skill}</p>
    </motion.div>
  )
}
