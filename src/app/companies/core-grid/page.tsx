import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ServicesSection from "@/components/companies/services-section";

export const metadata: Metadata = {
  title: "CoreGrid | Building Automation & Smart Solutions",
  description:
    "CoreGrid transforms buildings into intelligent, efficient spaces with cutting-edge automation and control systems. Creating smarter, sustainable environments for better living and working.",
  openGraph: {
    title: "CoreGrid | Building Automation & Smart Solutions",
    description:
      "Discover CoreGrid’s expertise in smart building automation, IoT integration, and energy management solutions for sustainable and efficient environments.",
    url: "https://www.rdtechgroup.com/companies/core-grid",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-coregrid.jpg",
        width: 1200,
        height: 630,
        alt: "CoreGrid Smart Building Solutions",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const services = [
    "User Interface",
    "Room Automation",
    "Lightning Control",
    "HAVC Control",
    "I/O Controller",
    "Energy Management Metering",
    "Gateways",
    "Network Infrastructure",
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="CoreGrid Solutions"
        slogan="Building Automation & Smart Solutions"
        description="Transforming buildings into intelligent, efficient spaces through cutting-edge automation and control systems. Creating smarter environments for better living and working."
        backgroundImage="/general/coregrid/realState.png"
        companyLogo={<CoreGridLogo />}
        projectsLink="/companies/core-grid/#projects"
        websiteLink="https://www.loytec.com"
      />

      <AboutSection
        title="About CoreGrid Solutions"
        description={[
          "CoreGrid Solutions is the smart building and automation division of RDTech Group, specializing in intelligent building management systems, home automation, and energy optimization solutions.",
          " We leverage IoT technology, AI-driven analytics, and advanced control systems to create environments that are not only smart but also sustainable, efficient, and user-friendly.",
        ]}
        stats={[
          { value: "200+", label: "Smart Buildings" },
          { value: "8+", label: "Years Innovation" },
          { value: "30+", label: "Automation Experts" },
        ]}
        image={{
          src: "/general/coregrid/control.webp",
          alt: "CoreGrid Smart Building",
        }}
      />

      <ServicesSection
        title="Our Smart Solutions"
        services={services}
        image={{
          src: "/general/coregrid/thermostate.webp",
          alt: "CoreGrid Services",
        }}
      />

      <ClientsSection
        title="Empowering Smart Partnerships"
        subTitle="Trusted by forward-thinking organizations to build intelligent, efficient, and sustainable spaces."
        rows={[
          {
            baseVelocity: 5,
            direction: 1,
            logos: [
              "Commercial/bakerHughes.webp",
              "Commercial/lulu.webp",
              "Commercial/nakheel.png",
              "Commercial/vfs.webp",
              "Commercial/warnerBros.webp"
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              "infrastructure/abuDhabiPolice.webp",
              "infrastructure/rta.webp",
              "infrastructure/twofour54.webp",
              "infrastructure/tdic.webp",
              "Commercial/nmc.webp"
            ],
          },
        ]}
      />

      <ContactSection
        title="Make Your Building Smart"
        subtitle="Ready to transform your space with intelligent automation? Let's create a smarter future together."
        phone="+971 X XXX XXXX"
        email="info@example.com"
        address="Dubai, UAE"
      />
    </main>
  );
}
