import {
  Building,
  Factory,
  GraduationCap,
  Hotel,
  Landmark,
  Plane,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Button } from "../ui/button";
import { FadeIn } from "../ui/fade-in";
import Link from "next/link";
import { SafeImage } from "../ui/safe-image";

const industries = [
  {
    name: "Airports & Transportation",
    icon: Plane,
    image: "", //industry-airport.png
    description: "Critical infrastructure security and automation systems",
  },
  {
    name: "Banking & Finance",
    icon: Landmark,
    image: "", //industry-banking.png
    description: "High-security solutions for financial institutions",
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    image: "", //industry-energy.png
    description: "Power generation and distribution facility management",
  },
  {
    name: "Hospitality & Tourism",
    icon: Hotel,
    image: "", // industry-hospitality.png
    description: "Smart building solutions for hotels and resorts",
  },
  {
    name: "Government & Public",
    icon: Building,
    image: "", // industry-government.png
    description: "Secure and efficient public sector infrastructure",
  },
  {
    name: "Industrial & Manufacturing",
    icon: Factory,
    image: "", // industry-manufacturing.png
    description: "Automated systems for manufacturing facilities",
  },
  {
    name: "Education & Healthcare",
    icon: GraduationCap,
    image: "", // industry-education.png
    description: "Safe and smart environments for learning and care",
  },
  {
    name: "Retail & Commercial",
    icon: ShoppingBag,
    image: "", // industry-retail.png
    description: "Comprehensive solutions for commercial spaces",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-6 rounded-full shadow-lg">
              Industries We Serve
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Delivering specialized solutions across diverse sectors, from
              critical infrastructure to commercial spaces.
            </p>
          </FadeIn>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pt-0 pb-6"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={industry.image || ""}
                    alt={industry.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardContent className="px-6">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Don&#39;t See Your Industry?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We work across many sectors and are always ready to tackle new
              challenges. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default">
                <Link href="/#contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" className="hover:bg-white/10">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
