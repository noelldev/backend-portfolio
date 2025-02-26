"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Fullstack Javascript Developer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafting robust and scalable solutions for modern web applications.
        </p>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}

