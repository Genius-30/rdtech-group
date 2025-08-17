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
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const flagshipProjects = [
  {
    id: "1",
    slug: "ajman-transport-vehicle-surveillance",
    title: "Ajman Transport – Vehicle Surveillance",
    description:
      "Deployment of advanced surveillance systems for over 2,600 public transport vehicles in Ajman.",
    category: "RDTech",
    location: "Ajman, UAE",
    year: "2022",
    thumbnail: "/projects/rdtech/ajmanHero.jpg",
    heroImage: "/projects/rdtech/ajmanHero.jpg",
    gallery: [
      "/projects/rdtech/ajmanG1.webp",
      "/projects/rdtech/ajmanG2.webp",
      "/projects/rdtech/ajmanG3.jpg",
    ],
    duration: "12 months",
    size: "2,600 vehicles",
    client: "Ajman Public Transport Corporation",
    budget: "$3M+",
    services: ["Vehicle Surveillance", "Fleet Security Systems"],
    features: [
      "Onboard CCTV for 2,600 vehicles",
      "Live monitoring integration",
      "Tamper-proof recording",
    ],
  },
  {
    id: "2",
    slug: "lusail-palace-bms",
    title: "Lusail Palace – Building Management System",
    description:
      "Deployment of a cutting-edge Building Management System (BMS) for Lusail Palace.",
    category: "CoreGrid",
    location: "Lusail, Qatar",
    year: "2021",
    thumbnail: "/projects/coregrid/lusailHero.jpg",
    heroImage: "/projects/coregrid/lusailHero.jpg",
    gallery: [
      "/projects/coregrid/lusailG1.webp",
      "/projects/coregrid/lusailG2.jpg",
      "/projects/coregrid/lusailG3.webp",
    ],
    duration: "20 months",
    size: "45,000 sq m",
    client: "Government of Qatar",
    budget: "$15M+",
    services: [
      "Building Management System",
      "Energy Optimization",
      "Lighting Control",
    ],
    features: [
      "Centralized HVAC monitoring",
      "Intelligent lighting automation",
      "Energy-efficient operation",
    ],
  },
  {
    id: "3",
    slug: "al-ain-club-restaurants",
    title: "Al Ain Club – Restaurants",
    description:
      "Development of a stylish, state-of-the-art restaurant located inside the Al Ain Sports Club premises.",
    category: "Al Ausus",
    location: "Al Ain – Al Sanaiya",
    year: "2020",
    thumbnail: "/projects/alAusus/alAinHero.webp",
    heroImage: "/projects/alAusus/alAinHero.webp",
    gallery: [
      "/projects/alAusus/alAinG1.webp",
      "/projects/alAusus/alAinG2.webp",
      "/projects/alAusus/alAinG3.webp",
    ],
    duration: "10 months",
    size: "3,500 sq m",
    client: "Al Ain Sports Club",
    budget: "$4M+",
    services: ["Civil Works", "Fit-out"],
    features: [
      "High-quality dining facilities",
      "Structural construction",
      "Modern finishes",
      "Durable and sustainable building solutions"
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
      className="min-h-screen flex flex-col py-20 bg-gray-100"
      data-header-theme="dark"
    >
      <div className="max-w-7xl mx-auto">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              {/* Image */}
              <div className="relative h-80 lg:h-auto max-lg:px-4 lg:pl-6">
                <SafeImage
                  src={project.heroImage}
                  alt={project.title}
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>

              {/* Details */}
              <div className="p-8 py-0">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="border-primary px-2 py-1 text-primary font-semibold">
                        {project.category}
                      </Badge>
                    </div>

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
                        {project.budget}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">
                        {project.duration}
                      </div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">
                        {project.size}
                      </div>
                      <div className="text-xs text-gray-600">Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">
                        {project.budget}
                      </div>
                      <div className="text-xs text-gray-600">Budget</div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Services
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features
                    </div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="default" className="absolute bottom-10 right-10 cursor-pointer">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Minimal navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous project"
              onClick={prevProject}
              className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition"
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
              className="p-2 rounded-full border cursor-pointer border-gray-200 bg-white hover:bg-gray-100 transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
