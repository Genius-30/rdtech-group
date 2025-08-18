import { ArrowRight, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  companyName: string;
  slogan: string;
  description: string;
  backgroundImage: string;
  companyLogo?: React.ReactNode;
  projectsLink?: string;
  websiteLink?: string;
}

export default function HeroSection({
  companyName,
  slogan,
  description,
  backgroundImage,
  companyLogo,
  projectsLink = "#projects",
  websiteLink,
}: Readonly<HeroSectionProps>) {
  return (
    <section
      className="relative min-h-screen flex items-center bg-fixed bg-cover justify-center overflow-hidden py-12"
      data-header-theme="light"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col mt-18 sm:mt-10 items-center justify-center">
          {/* Company Logo */}
          {companyLogo && (
            <FadeIn delay={150}>
              <div className="bg-white/50 rounded-full flex items-center justify-center aspect-square">
                {companyLogo}
              </div>
            </FadeIn>
          )}

          {/* Company Name */}
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg text-shadow-black/20">
              {companyName}
            </h1>
          </FadeIn>

          {/* Slogan */}
          <FadeIn delay={300}>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-accent animate-pulse-glow text-shadow-lg text-shadow-black/20">
              {slogan}
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={400}>
            <p className="text-lg md:text-xl mb-8 text-muted max-w-2xl mx-auto font-medium text-shadow-lg text-shadow-black/40">
              {description}
            </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {projectsLink && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg btn-primary cursor-pointer shadow-lg shadow-black/15 flex items-center"
                >
                  <Link href={projectsLink}>
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}

              {websiteLink && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white px-8 py-4 text-lg bg-transparent hover-lift cursor-pointer shadow-lg shadow-black/15"
                >
                  <Link
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    Go to Site
                  </Link>
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
