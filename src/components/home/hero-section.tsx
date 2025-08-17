"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  const images = [
    "/home/hero/alAususHero.png",
    "/home/hero/dubai_2.png",
    "/home/hero/rdTechHero.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-cover ${
        current === 2 ? "bg-bottom" : "bg-top"
      }`}
      data-header-theme="light"
      style={{
        backgroundImage: `url('${images[current]}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Background Carousel */}
      {/* <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            } ${index === 2 ? "bg-bottom" : "bg-top"}
            `}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col mt-18 sm:mt-10 items-center justify-center">
          <FadeIn delay={200}>
            <h1 className="font-mono text-5xl md:text-7xl font-bold mb-6 text-shadow-lg text-shadow-black/20">
              Leading Technology{" "}
              <span className="block text-accent animate-pulse-glow">
                Solutions Provider
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl mb-8 text-muted max-w-2xl mx-auto font-medium text-shadow-lg text-shadow-black/20">
              Over 30 years at the forefront of technological innovation in ICT
              and ELV, serving enterprises across UAE and beyond.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-primary hover:text-white hover:border-transparent px-8 py-4 text-lg bg-transparent hover-lift cursor-pointer shadow-lg shadow-black/15 flex items-center"
              >
                <Link className="flex items-center gap-2" href="/#services">
                  <span>Explore Our Services</span>
                  <Play className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Dash Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 sm:left-20 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              current === idx ? "bg-white w-6 sm:w-8" : "bg-white/50 w-3 sm:w-5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
