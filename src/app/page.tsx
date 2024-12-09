'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const introText = "Hello, I'm Nikhil Swaraj"
const roleText = "I'm a Software Developer"
const descriptionText = "Specializing in JavaScript, TypeScript, and Python"

export default function Home() {
  const [displayedIntro, setDisplayedIntro] = useState('')
  const [displayedDescription, setDisplayedDescription] = useState('')

  useEffect(() => {
    const animateText = (text: string, setFunction: React.Dispatch<React.SetStateAction<string>>, delay: number) => {
      let i = 0
      setTimeout(() => {
        const intervalId = setInterval(() => {
          if (i < text.length) {
            setFunction((prev) => prev + text.charAt(i))
            i++
          } else {
            clearInterval(intervalId)
          }
        }, 50)
      }, delay)
    }

    animateText(introText, setDisplayedIntro, 500)
    animateText(descriptionText, setDisplayedDescription, 2500)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 max-w-3xl"
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-primary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {displayedIntro}
        </motion.h2>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-playfair"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          {roleText}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {displayedDescription}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">About Me</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-16 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", description: "Creating responsive and dynamic web applications" },
            { title: "Backend Systems", description: "Designing robust server-side architectures" },
            { title: "API Integration", description: "Seamlessly connecting various services and platforms" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 bg-card rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4.5 + (index * 0.2), duration: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

