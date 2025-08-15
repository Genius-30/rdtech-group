import { Card, CardContent } from "@/components/ui/card";

import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import RDTechLogo from "@/components/logos/rdtech-logo";

export default function CompaniesSection() {
  const companies = [
    {
      logo: AAContractingLogo,
      name: "AA Contracting",
      subtitle: "Al Ausus Al Arbaa General Contracting",
      description:
        "Multi-disciplinary contracting firm with successful completion of several projects in the region as individual contractor and joint venture partner.",
      href: "/companies/aa-contracting",
    },
    {
      logo: CoreGridLogo,
      name: "Core Grid",
      subtitle: "Intelligent Networked Control Products",
      description:
        "Systems integration company specializing in intelligent networked control products for building automation with secure remote access solutions.",
      href: "/companies/core-grid",
    },
    {
      logo: RDTechLogo,
      name: "RDTech FZE",
      subtitle: "Security Solution & Service Provider",
      description:
        "Security systems integration company providing physical security solutions including CCTV, AI surveillance, access control, and maintenance services.",
      href: "/companies/rdtech-fze",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col py-20 snap-start bg-primary/5"
      data-header-theme="dark"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
            Our Companies
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-muted-foreground mt-1">
            Three specialized companies working together to deliver
            comprehensive technology solutions
          </p>
        </FadeIn>
      </div>

      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {companies.map((company, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-4xl shadow-lg border-none bg-primary/5 hover:bg-primary/10">
              <CardContent className="p-8 text-center h-full flex flex-col py-2">
                <div className="mb-8 flex justify-center">
                  <div className="p-4 aspect-square bg-white/80 backdrop-blur-sm rounded-3xl shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <company.logo size={72} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-4 opacity-80">
                  {company.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm">
                  {company.description}
                </p>

                <Link href={company.href} className="mt-auto">
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
