"use client";

import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start"
      data-header-theme="light"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            } ${ index === 2 ? "bg-bottom": "bg-top"}
            `}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}
      </div>

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
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg btn-primary cursor-pointer shadow-lg shadow-black/15 flex items-center"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white px-8 py-4 text-lg bg-transparent hover-lift cursor-pointer shadow-lg shadow-black/15"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          {/* <FadeIn delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-10 border-t border-white/20 text-shadow-lg text-shadow-black/30">
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  <NumberTicker value={30} className="text-current" />+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  <NumberTicker value={100} className="text-current" />+
                </div>
                <div className="text-sm text-gray-300">
                  Million AED Turnover
                </div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  <NumberTicker value={120} className="text-current" />+
                </div>
                <div className="text-sm text-gray-300">Employees</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  <NumberTicker value={100} className="text-current" />+
                </div>
                <div className="text-sm text-gray-300">Customers Served</div>
              </div>
            </div>
          </FadeIn> */}
        </div>
      </div>

      {/* Dash Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 sm:left-20 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${
              current === idx ? "bg-white w-6 sm:w-8" : "bg-white/50 w-3 sm:w-5"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}
