"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import { FloatingIcons } from "@/components/floating-icons"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Hero() {
  const words = [
    { text: "Hello,", className: "text-blue-500" },
    { text: "I'm", className: "text-blue-500" },
    { text: "Yash", className: "text-blue-500" },
    { text: "Kalbande", className: "text-blue-500" },
  ]

  const roles = [
    { text: "Data", className: "text-purple-500" },
    { text: "Analyst", className: "text-purple-500" },
    { text: "&", className: "text-purple-500" },
    { text: "Developer", className: "text-purple-500" },
  ]

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex flex-col items-center justify-center h-40">
              <TypewriterEffect words={words} className="text-4xl md:text-6xl lg:text-7xl font-bold" />
              <TypewriterEffect words={roles} className="text-2xl md:text-3xl lg:text-4xl mt-4" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Passionate about data analysis, visualization, and building innovative solutions with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <SocialButton icon={<Mail />} href="mailto:Yashhkalbande12@gmail.com" />
              <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/yash-kalbande-0b2b15237" />
              <SocialButton icon={<Github />} href="https://github.com/Yashh2385" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
    >
      {icon}
    </motion.a>
  )
}
