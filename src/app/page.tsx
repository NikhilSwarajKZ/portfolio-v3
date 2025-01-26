"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <motion.p
            className="text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Developer, Cyber Security Enthusiast
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Nikhil Swaraj
          </motion.h1>
          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="https://github.com" className="hover:text-pink-500 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="hover:text-pink-500 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contact@example.com" className="hover:text-pink-500 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

