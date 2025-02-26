"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-commerce API",
    description: "Developed a high-performance RESTful API for an e-commerce platform using Node.js and Express.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Data Processing Pipeline",
    description: "Built a scalable data processing pipeline using Python and Apache Kafka for real-time analytics.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented a microservices-based backend system using Docker and Kubernetes.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-secondary/10 rounded-lg border border-white/10 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

