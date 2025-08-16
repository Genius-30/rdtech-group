"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects-data"

const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of exceptional construction projects, each showcasing our commitment to quality and
            innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="mb-2 bg-accent">{project.category}</Badge>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
