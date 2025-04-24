"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Award, ExternalLink } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Complete Interview Preparation",
      issuer: "GeeksforGeeks",
      date: "June 2024",
      description:
        "Acquired hands-on experience in different data structures and algorithms (basic to advanced) using C++. Gained knowledge in Aptitude and Reasoning, Resume Building, and core subjects.",
      link: "#",
    },
    {
      title: "GenAI for Everyone",
      issuer: "Fractal Analytics",
      date: "May 2024",
      description: "Comprehensive training on generative AI concepts, applications, and implementation strategies.",
      link: "#",
    },
    {
      title: "Excel Skills for Business Specialization",
      issuer: "Macquarie University",
      date: "April 2024",
      description: "Advanced Excel skills for business data analysis, visualization, and reporting.",
      link: "#",
    },
    {
      title: "The Complete Python Bootcamp From Zero to Hero",
      issuer: "Jose Portilla",
      date: "February 2024",
      description: "Comprehensive Python programming from basics to advanced concepts and practical applications.",
      link: "#",
    },
    {
      title: "Mastering Data Science and Algorithms using C++",
      issuer: "Abdul Bari",
      date: "June 2023",
      description:
        "Advanced data structures, algorithms, and their implementation in C++ for data science applications.",
      link: "#",
    },
  ]

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>Certificates</SectionHeading>

        <div className="mt-12 space-y-6">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificateCard({
  certificate,
  delay,
}: {
  certificate: {
    title: string
    issuer: string
    date: string
    description: string
    link: string
  }
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors group"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
            <div className="text-sm text-blue-400">{certificate.date}</div>
          </div>
          <p className="text-gray-400 mt-1">{certificate.issuer}</p>
          <p className="text-gray-500 mt-2">{certificate.description}</p>
        </div>

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  )
}
