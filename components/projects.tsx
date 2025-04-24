"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { BarChart3, ImageIcon, PieChart, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Image Classification",
      description:
        "Built a machine learning model to classify images into predefined categories using supervised learning techniques. Implemented algorithms such as Convolutional Neural Networks (CNNs) for feature extraction and image classification.",
      icon: <ImageIcon className="w-6 h-6" />,
      date: "July 2024",
      tools: ["Machine Learning", "CNNs", "Python"],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "iPhone Sales Analysis",
      description:
        "Created comprehensive visualizations using Matplotlib to analyze trends in active iPhone product sales, providing insights into market performance over time. Developed key sales performance metrics by analyzing sales data.",
      icon: <BarChart3 className="w-6 h-6" />,
      date: "May 2024",
      tools: ["Tableau", "Power BI", "Data Analysis"],
      color: "from-green-500/20 to-blue-500/20",
    },
    {
      title: "Personal Finance Dashboard",
      description:
        "Developed a comprehensive dashboard to track and analyze personal finances, including income, expenses, and savings trends using interactive visualizations. Implemented data aggregation, filtering, and visual analytics for financial insights.",
      icon: <PieChart className="w-6 h-6" />,
      date: "March 2024",
      tools: ["Power BI", "Data Visualization"],
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: {
    title: string
    description: string
    icon: React.ReactNode
    date: string
    tools: string[]
    color: string
  }
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden h-full flex flex-col group hover:border-blue-500/50 transition-colors"
    >
      <div className={`p-6 bg-gradient-to-br ${project.color}`}>
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
            {project.icon}
          </div>
          <div className="flex items-center text-sm text-white/70">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span key={index} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>

        <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 justify-start">
          View Project <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}
