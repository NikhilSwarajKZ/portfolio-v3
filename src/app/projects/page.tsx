import { Projects } from "@/components/projects"
import { getRepositories } from "@/lib/github"

export default async function ProjectsPage() {
  const repositories = await getRepositories()

  return (
    <main className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-400 mb-8">A selection of my recent work and open source projects.</p>
        <Projects repositories={repositories} />
      </div>
    </main>
  )
}

