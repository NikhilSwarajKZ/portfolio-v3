"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

interface Repository {
  name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string
}

interface ProjectsProps {
  repositories: Repository[]
}

export function Projects({ repositories }: ProjectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {repositories.map((repo, i) => (
        <motion.div
          key={repo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-secondary/50 rounded-lg p-6 hover:bg-secondary/70 transition-colors"
        >
          {/* {console.log(repo)} */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">{repo.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Star className="w-4 h-4" />
                {repo.stargazers_count}
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{repo.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm px-2 py-1 rounded-full bg-secondary">{repo.language}</span>
            <div className="flex gap-2">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-pink-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              {repo.homepage && (
                <Link
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-pink-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

