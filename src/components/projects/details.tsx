"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ZoomIn, X } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/lib/projects-data"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <Badge className="mb-2 bg-accent">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground">
                {project.location} • {project.year}
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Similar Project
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        <img src={project.heroImage || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>

              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Duration</span>
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
                  <span className="text-sm text-muted-foreground">Budget Range</span>
                  <p className="font-medium">{project.budget}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
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
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
