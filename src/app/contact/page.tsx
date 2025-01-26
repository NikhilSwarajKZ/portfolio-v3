"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-gray-300 mb-8">
          I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out through
          any of the following channels:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="https://github.com/NikhilSwarajKZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <Github className="w-5 h-5" />
              <h2 className="font-semibold">GitHub</h2>
            </div>
            <p className="text-sm text-gray-400">Check out my projects and contributions</p>
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <Linkedin className="w-5 h-5" />
              <h2 className="font-semibold">LinkedIn</h2>
            </div>
            <p className="text-sm text-gray-400">Connect with me professionally</p>
          </Link>

          <Link
            href="mailto:nikhilswaraj.official@gmail.com"
            className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5" />
              <h2 className="font-semibold">Email</h2>
            </div>
            <p className="text-sm text-gray-400">Send me a message directly</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

