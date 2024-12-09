import { LightbulbIcon as LucideProps, Github, Linkedin } from 'lucide-react'

export const Icons = {
  gitHub: Github,
  linkedin: Linkedin,
}

export type Icon = keyof typeof Icons

