"use client"

import { Server, Database, Code, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  { name: "Node.js", icon: <Server className="w-8 h-8" /> },
  { name: "Python", icon: <Code className="w-8 h-8" /> },
  { name: "SQL & NoSQL Databases", icon: <Database className="w-8 h-8" /> },
  { name: "Cloud Services (AWS, GCP)", icon: <Cloud className="w-8 h-8" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-secondary/10 p-8 rounded-lg border border-white/10 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-primary">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

