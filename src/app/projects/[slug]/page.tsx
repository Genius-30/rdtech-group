import { ProjectDetail } from "@/components/projects/details"
import { RelatedProjects } from "@/components/projects/related"
import { projects } from "../../../../public/projectData"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen my-12">
      <ProjectDetail project={project} />
      <RelatedProjects currentProjectId={project.id} />
    </main>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
