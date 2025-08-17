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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/fade-in";
import Link from "next/link";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

const industries = [
  {
    name: "Airports & Transportation",
    icon: Plane,
    image: "/industry/airport.webp",
    description: "Mission-critical security, communication, and automation for safe travel.",
  },
  {
    name: "Banking & Finance",
    icon: Landmark,
    image: "/industry/banking.webp",
    description: "High-reliability surveillance and access solutions for financial institutions.",
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    image: "/industry/power.webp",
    description: "Intelligent systems for power plants, utilities, and critical infrastructure.",
  },
  {
    name: "Hospitality & Tourism",
    icon: Hotel,
    image: "/industry/hospitality.webp",
    description: "Smart building management and security for hotels, resorts, and attractions.",
  },
  {
    name: "Government & Public Sector",
    icon: Building,
    image: "/industry/government.webp",
    description: "Secure, connected, and efficient solutions for ministries and public services.",
  },
  {
    name: "Industrial & Manufacturing",
    icon: Factory,
    image: "/industry/industry.webp",
    description: "Automation, monitoring, and safety systems for production environments.",
  },
  {
    name: "Education & Healthcare",
    icon: GraduationCap,
    image: "/industry/healthcare.webp",
    description: "Safe, secure, and connected environments for schools, universities, and hospitals.",
  },
  {
    name: "Retail & Commercial",
    icon: ShoppingBag,
    image: "/industry/retail.webp",
    description: "End-to-end technology solutions for malls, offices, and commercial hubs.",
  },
];


export function IndustriesSection() {
  return (
    <section className="py-24 pb-0 bg-white ">
      <div className="container mx-auto px-4 max-w-7xl ">
        {/* Section Header */}
        <SectionHeader
          title="Industries We Serve"
          subTitle=" Delivering specialized solutions across diverse sectors, from
              critical infrastructure to commercial spaces."
        />

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
                  <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
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
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-primary/10 p-8 md:p-12">
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
            <Button asChild variant="outline" className="hover:bg-white/5">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
