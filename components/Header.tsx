"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          John Doe
        </Link>
        <ul className="flex space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

