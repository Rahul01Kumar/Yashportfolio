"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, BarChart, PieChart, FileText, Table, LineChart, GitBranch } from "lucide-react"

export function FloatingIcons({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  const icons = [
    <Code key="code" className="w-8 h-8 text-blue-400/50" />,
    <Database key="database" className="w-8 h-8 text-blue-400/50" />,
    <BarChart key="barChart" className="w-8 h-8 text-blue-400/50" />,
    <PieChart key="pieChart" className="w-8 h-8 text-blue-400/50" />,
    <FileText key="fileText" className="w-8 h-8 text-blue-400/50" />,
    <Table key="table" className="w-8 h-8 text-blue-400/50" />,
    <LineChart key="lineChart" className="w-8 h-8 text-blue-400/50" />,
    <GitBranch key="gitBranch" className="w-8 h-8 text-blue-400/50" />,
  ]

  useEffect(() => {
    // Update dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            {icons[i % icons.length]}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
