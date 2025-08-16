import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { SafeImage } from "../ui/safe-image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Dubai Health Authority",
      category: "Healthcare Infrastructure",
      location: "Dubai, UAE",
      year: "2023",
      description:
        "Complete security and communication infrastructure for healthcare facilities.",
      image: "/placeholder.png",
    },
    {
      title: "Burj Khalifa Systems",
      category: "Commercial Infrastructure",
      location: "Dubai, UAE",
      year: "2022",
      description:
        "Advanced building automation and security systems for the world's tallest building.",
      image: "/placeholder.png",
    },
    {
      title: "Eastern Mangroves Resort",
      category: "Hospitality",
      location: "Abu Dhabi, UAE",
      year: "2023",
      description:
        "Integrated resort communication and security infrastructure.",
      image: "/placeholder.png",
    },
    {
      title: "Banking Sector Solutions",
      category: "Financial Services",
      location: "UAE",
      year: "2023",
      description:
        "Mission-critical security and communication systems for major banks.",
      image: "/placeholder.png",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col py-20 bg-gray-50 snap-start"
      data-header-theme="dark"
    >
      {/* Heading */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
            Featured Projects
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-muted-foreground mt-1 max-w-2xl text-center">
            Showcasing our expertise in delivering mission-critical technology
            solutions across diverse industries
          </p>
        </FadeIn>
      </div>

      {/* Projects Grid */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="group relative overflow-hidden rounded-3xl shadow-lg border-none bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 py-0">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <SafeImage
                  src={project.image || ""}
                  alt={project.title}
                  width={400}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  {/* Always visible: Title & Category */}
                  <div>
                    <h3 className="text-xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {project.category}
                    </p>
                  </div>

                  {/* Hidden until hover: Meta & Description */}
                  <div className="mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-white/80 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
