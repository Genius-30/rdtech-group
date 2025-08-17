import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import RDTechLogo from "@/components/logos/rdtech-logo";
import React from "react";
import ServicesSection from "@/components/companies/services-section";

export const metadata: Metadata = {
  title: "RDTech FZE | Security Systems & ELV/ICT Solutions",
  description:
    "RDTech FZE delivers advanced security and ELV/ICT solutions across the UAE. From access control to surveillance, we safeguard critical infrastructure.",
  openGraph: {
    title: "RDTech FZE | Security Systems & ELV/ICT Solutions",
    description:
      "Discover RDTech FZE’s expertise in delivering cutting-edge security and ELV/ICT solutions to protect critical infrastructure in the UAE.",
    url: "https://www.rdtechgroup.com/companies/rdtech-fze",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-rdtech-fze.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech FZE Security Solutions",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const services = [
    "Security & RMS",
    "Audio Visuals & IP TV",
    "Network & Communication",
    "Structuring Cabling",
    "Enterprise Computing",
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="RDTech FZE"
        slogan="Security Systems & ELV/ICT Solutions"
        description="Pioneering advanced security technology to safeguard critical infrastructure across the UAE. From access control to comprehensive surveillance systems."
        backgroundImage="/rdtech-bg.jpg"
        companyLogo={<RDTechLogo />}
        projectsLink="/companies/rdtech-fze/#projects"
        websiteLink="https://www.site-technology.com"
      />

      <AboutSection
        title="About RDTech FZE"
        description={[
          "RDTech FZE is the security and technology arm of RDTech Group, specializing in cutting-edge security systems and ELV/ICT solutions. With over a decade of experience, we've secured some of the UAE's most critical infrastructure.",
          "Our team of certified engineers and security specialists work with the latest technology from global leaders to deliver solutions that exceed industry standards and client expectations.",
        ]}
        stats={[
          { value: "500+", label: "Projects Secured" },
          { value: "15+", label: "Years Experience" },
          { value: "50+", label: "Security Experts" },
        ]}
        image={{
          src: "",
          alt: "RDTech FZE Team",
        }}
      />

      <ServicesSection
        title="Our Security Solutions"
        services={services}
        image={{
          src: "",
          alt: "RDTech FZE Services",
        }}
      />

      <ClientsSection
        title="Trusted By Industry Leaders"
        subTitle="Partnering with organizations across the UAE to deliver secure and innovative technology solutions."
        rows={[
          {
            baseVelocity: 5,
            direction: 1,
            logos: [
              { name: "Client A", src: "" },
              { name: "Client B", src: "" },
              { name: "Client C", src: "" },
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              { name: "Client D", src: "" },
              { name: "Client E", src: "" },
              { name: "Client F", src: "" },
            ],
          },
        ]}
      />

      <ContactSection
        title="Secure Your Future Today"
        subtitle="Ready to implement world-class security solutions? Our experts are here to help."
        phone="+971 X XXX XXXX"
        email="info@example.com"
        address="Dubai, UAE"
      />
    </main>
  );
}
