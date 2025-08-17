import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Project } from "../../../public/projectData" 
import { SafeImage } from "../ui/safe-image"

export function ProjectDetail({ project }: { project: Project }) {

  return (
    <div className="min-h-screen" data-header-theme="light">
      {/* Header */}
      <div className="bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="flex items-center py-4 pt-2 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-xl tracking-wide text-muted-foreground">
                {project.location} • {project.year}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="relative max-w-7xl mx-auto rounded-xl h-96 md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-xl transform scale-110"
          style={{ backgroundImage: `url(${project.heroImage || ""})` }}
        />
        <SafeImage
          src={project.heroImage || ""}
          alt={project.title}
          width={2266}
          height={675}
          className="relative z-10 h-full w-full object-contain "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {project?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-4">
            <Card className="p-6 shadow-xl border-l-4 border-l-primary rounded-l-none">
              <h3 className="font-bold text-xl">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">
                    Duration
                  </span>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Size</span>
                  <p className="font-medium">{project.size}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    Budget Range
                  </span>
                  <p className="font-medium">{project.budget}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-2xl border-l-4 border-l-primary rounded-l-none">
              <h3 className="font-bold text-xl">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project?.services?.map((service, index) => (
                  <Badge key={index} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project?.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <SafeImage
                  src={image || ""}
                  alt={`${project.title} gallery ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
