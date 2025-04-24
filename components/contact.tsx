"use client"

import type React from "react"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I'm always open
              to discussing new projects and ideas.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<Phone className="w-5 h-5" />} title="Phone" content="+91 9302990140" />
              <ContactInfo icon={<Mail className="w-5 h-5" />} title="Email" content="Yashhkalbande12@gmail.com" />
              <ContactInfo icon={<MapPin className="w-5 h-5" />} title="Location" content="Jalandhar, Punjab, India" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-gray-400 mb-2 block">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-400 mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-gray-400 mb-2 block">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-white/5 border-white/10 text-white" />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-400 mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-white/5 border-white/10 text-white min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: string
}) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  )
}
