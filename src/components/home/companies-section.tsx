import { Card, CardContent, CardFooter } from "@/components/ui/card";

import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import RDTechLogo from "@/components/logos/rdtech-logo";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

export default function CompaniesSection() {
  const companies = [
    {
      name: "RDTech FZE",
      tagline: "Security Systems & ELV/ICT Solutions",
      description:
        "Pioneering advanced security technology to safeguard critical infrastructure across the UAE. From access control to comprehensive surveillance systems.",
      icon: RDTechLogo,
      href: "/rdtech-fze",
      image: "/general/rdtech/controlRoom.webp",
      services: [
        "Access Control Systems",
        "CCTV & Surveillance",
        "Fire Alarm Systems",
        "Network Infrastructure",
      ],
      color: "bg-green-600",
      buttonLabel: "RDTech FZE",
    },
    {
      name: "Al Ausus Al Arbaa General Contracting",
      tagline: "Multi-disciplinary Contracting Excellence",
      description:
        "Delivering comprehensive construction and contracting services with precision and reliability.",
      icon: AAContractingLogo,
      href: "/aa-contracting",
      image: "/general/aa/mep.webp",
      services: [
        "Civil Construction",
        "MEP Services",
        "Project Management",
        "Facility Maintenance",
      ],
      color: "bg-blue-600",
      buttonLabel: "AA Contracting",
    },
    {
      name: "CoreGrid Solutions",
      tagline: "Building Automation & Smart Solutions",
      description:
        "Transforming buildings into intelligent, efficient spaces through cutting-edge automation and control systems.",
      icon: CoreGridLogo,
      href: "/coregrid",
      image: "/general/rdtech/facial.webp",
      services: [
        "Lighting Control",
        "Home Automation",
        "Energy Management",
        "Building Management",
      ],
      color: "bg-purple-600",
      buttonLabel: "CoreGrid Solutions",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col py-20 bg-gray-100"
      data-header-theme="dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <SectionHeader
          title="Our Companies"
          subTitle="Three specialized companies working together to deliver comprehensive solutions across security, construction, and automation sectors."
        />

        {/* Cards */}
        <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {companies.map((company) => {
            const Logo = company.icon;
            return (
              <FadeIn key={company.name} delay={200} className="h-full">
                <Card
                  key={company.name}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 py-0 h-full pb-6"
                >
                  <div className="relative h-64 overflow-hidden">
                    <SafeImage
                      src={company.image || ""}
                      alt={company.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="aspect-square absolute top-4 left-4 rounded-full bg-white p-1 flex items-center justify-center">
                      <Logo size={60} />
                    </div>
                  </div>

                  <CardContent className="px-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">
                          {company.name}
                        </h3>
                        <p className="text-primary font-semibold">
                          {company.tagline}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {company.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">
                          Key Services:
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {company.services.map((service) => (
                            <div
                              key={service}
                              className="text-sm text-muted-foreground"
                            >
                              • {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      className="w-full group-hover:bg-primary/90 transition-colors duration-300"
                    >
                      <Link href={`/companies/${company.href}`}>
                        Explore {company.buttonLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
