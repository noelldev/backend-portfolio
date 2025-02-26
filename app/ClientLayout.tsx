"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground cursor-none`}>
        <div className="noise" aria-hidden="true" />
        {children}
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-50"
          animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </body>
    </html>
  )
}

