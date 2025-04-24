"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Code, Menu, User } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 bg-black/50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Code className="w-8 h-8 text-blue-500" />
        <span className="text-white font-medium text-xl">Yash Kalbande</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#certificates">Certificates</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <User className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/90 border-b border-white/10 p-4 flex flex-col space-y-4 md:hidden"
        >
          <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="#education" onClick={() => setIsOpen(false)}>
            Education
          </MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </MobileNavLink>
          <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="#certificates" onClick={() => setIsOpen(false)}>
            Certificates
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavLink>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors py-2 block" onClick={onClick}>
      {children}
    </Link>
  )
}
