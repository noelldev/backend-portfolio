"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contact Me</h2>
        <motion.div
          className="bg-secondary/10 p-8 rounded-lg border border-white/10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-8 text-center text-muted-foreground">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col space-y-4 items-center">
            <motion.a
              href="mailto:johndoe@example.com"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 mr-2" />
              johndoe@example.com
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn Profile
            </motion.a>
            <motion.a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

