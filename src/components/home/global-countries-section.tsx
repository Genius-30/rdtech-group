"use client";

import { Building, Globe, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { FadeIn } from "@/components/ui/fade-in";
import WorldMap from "../ui/world-map";

export default function GlobalCountriesSection() {
  const regions = [
    {
      name: "United Arab Emirates",
      description: "Headquarters and primary operations",
      projects: "200+",
      icon: Building,
    },
    {
      name: "Middle East",
      description: "Regional expansion and partnerships",
      projects: "50+",
      icon: Globe,
    },
    {
      name: "Global Network",
      description: "International collaborations",
      projects: "25+",
      icon: Users,
    },
  ];

  const mapDots = [
    // Middle East
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 24.7136, lng: 46.6753 },
    }, // Dubai → Riyadh
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 30.0444, lng: 31.2357 },
    }, // Dubai → Cairo
    // Asia
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 35.6895, lng: 139.6917 },
    }, // Dubai → Tokyo
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 1.3521, lng: 103.8198 },
    }, // Dubai → Singapore
    // Europe
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 51.5074, lng: -0.1278 },
    }, // Dubai → London
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 48.8566, lng: 2.3522 },
    }, // Dubai → Paris
    // Americas
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: 40.7128, lng: -74.006 },
    }, // Dubai → New York
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: -23.5505, lng: -46.6333 },
    }, // Dubai → São Paulo
    // Africa
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: -1.2921, lng: 36.8219 },
    }, // Dubai → Nairobi
    {
      start: { lat: 25.276987, lng: 55.296249 },
      end: { lat: -33.9249, lng: 18.4241 },
    }, // Dubai → Cape Town
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center py-20 snap-start"
      data-header-theme="dark"
    >
      {/* Heading */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
            Global Presence
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-muted-foreground mt-2 text-center max-w-2xl">
            Serving clients across the Middle East and around the world with
            innovative, mission-critical technology solutions.
          </p>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-16 flex flex-col items-center">
        {/* World Map */}
        <FadeIn direction="left">
          <div className="relative w-full">
            <WorldMap dots={mapDots} />
          </div>
        </FadeIn>

        {/* Region Cards */}
        <FadeIn direction="right">
          <div className="flex items-center gap-4">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-3xl border-none bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <region.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {region.description}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {region.projects} Projects
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
