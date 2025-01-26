import { motion } from "framer-motion"
import { Code2, Database, Server } from "lucide-react"

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript","BASH"],
    icon: Code2,
  },
  {
    category: "Frameworks",
    items: ["React.js", "Next.js", "Express.js", "FastAPI"],
    icon: Server,
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "PostgreSQL", "MongoDB", "Linux"],
    icon: Database,
  },
]

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300">
            I'm a Software Developer and Cyber Security Enthusiast with a passion for building robust and secure
            applications. My expertise spans across various programming languages and frameworks, with a particular
            focus on Python and web technologies.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.category} className="bg-secondary/50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-5 h-5 text-pink-500" />
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

