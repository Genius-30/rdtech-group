import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects-data"

interface RelatedProjectsProps {
  currentProjectId: string
}

export function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const relatedProjects = projects.filter((project) => project.id !== currentProjectId).slice(0, 3)

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent">{project.category}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                    <span className="text-sm font-medium text-primary">{project.year}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
