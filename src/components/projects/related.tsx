import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from '../../../public/projectData'
import { SafeImage } from "../ui/safe-image"

interface RelatedProjectsProps {
  currentProjectId: string
}

export function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const relatedProjects = projects.filter((project) => project.id !== currentProjectId).slice(0, 3)

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {relatedProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="h-full">
              <Card className="group hover:shadow-xl hover:scale-105 duration-500 py-0 flex flex-col h-full">
                <div className="relative rounded-t-xl overflow-hidden">
                  <SafeImage
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white text-shadow-2xs text-shadow-black font-bold text-lg">
                      {project.title.split(" – ")[0]}
                    </h3>
                    <div className="flex text-shadow-2xs text-shadow-black justify-between items-center">
                      <p className="text-white/80 text-sm">{project.location}</p>
                      <Badge
                        variant="custom"
                        className="-mb-2 text-shadow-2xs text-shadow-black"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                    <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
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
