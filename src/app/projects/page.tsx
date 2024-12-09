import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

async function getGitHubProjects() {
  const res = await fetch('https://api.github.com/users/NikhilSwarajKZ/repos', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 } // Revalidate every hour
  })

  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }

  return res.json()
}

export default async function ProjectsPage() {
  const projects = await getGitHubProjects()

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-playfair">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work and side projects
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: any) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description || 'No description available'}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics && project.topics.map((topic: string) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Language: {project.language || 'Not specified'}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source
                </Link>
                {project.homepage && (
                  <Link
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

