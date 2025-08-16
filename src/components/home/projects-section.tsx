"use client";

import {
  Award,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "../ui/safe-image";
import { useState } from "react";

const flagshipProjects = [
  {
    id: 1,
    title: "Dubai International Airport Terminal 4",
    category: "Security & ELV Systems",
    client: "Dubai Airports",
    location: "Dubai, UAE",
    year: "2023",
    value: "AED 45M",
    description:
      "Comprehensive security infrastructure including advanced access control, CCTV surveillance, and fire alarm systems for the new terminal expansion.",
    image: "",
    stats: [
      { label: "Security Cameras", value: "2,500+" },
      { label: "Access Points", value: "800+" },
      { label: "Coverage Area", value: "150,000 sqm" },
    ],
    technologies: [
      "Biometric Access Control",
      "AI-Powered CCTV",
      "Integrated Fire Systems",
      "Network Infrastructure",
    ],
  },
  {
    id: 2,
    title: "Emirates NBD Headquarters",
    category: "Building Automation",
    client: "Emirates NBD",
    location: "Dubai, UAE",
    year: "2023",
    value: "AED 28M",
    description:
      "Smart building automation system with energy management, lighting control, and integrated security for the bank's flagship headquarters.",
    image: "",
    stats: [
      { label: "Energy Savings", value: "35%" },
      { label: "Smart Zones", value: "120+" },
      { label: "Building Floors", value: "40" },
    ],
    technologies: [
      "BMS Integration",
      "Smart Lighting",
      "Energy Analytics",
      "IoT Sensors",
    ],
  },
  {
    id: 3,
    title: "Burj Al Arab Hotel Renovation",
    category: "General Contracting",
    client: "Jumeirah Group",
    location: "Dubai, UAE",
    year: "2022",
    value: "AED 65M",
    description:
      "Complete renovation and upgrade of luxury suites with MEP services, smart room automation, and premium finishes.",
    image: "",
    stats: [
      { label: "Suites Renovated", value: "202" },
      { label: "Project Duration", value: "18 months" },
      { label: "Team Members", value: "150+" },
    ],
    technologies: [
      "Smart Room Controls",
      "Premium MEP",
      "Luxury Finishes",
      "Integrated Systems",
    ],
  },
];

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const project = flagshipProjects[currentProject];

  const nextProject = () =>
    setCurrentProject((p) => (p + 1) % flagshipProjects.length);
  const prevProject = () =>
    setCurrentProject(
      (p) => (p - 1 + flagshipProjects.length) % flagshipProjects.length
    );

  return (
    <section
      className="min-h-screen flex flex-col py-20 bg-primary/5"
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

      {/* Project showcase */}
      <div className="container mx-auto px-4 mt-12">
        <Card className="relative overflow-hidden rounded-3xl shadow-lg border-none bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 lg:h-auto max-lg:px-4 lg:pl-6">
              <SafeImage
                src={project.image || ""}
                alt={project.title}
                width={1600}
                height={1200}
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {project.category}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      {project.value}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Key Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Minimal navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            aria-label="Previous project"
            onClick={prevProject}
            className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-2">
            {flagshipProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProject(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === currentProject ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next project"
            onClick={nextProject}
            className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
