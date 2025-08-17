import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ServicesSection from "@/components/companies/services-section";

export const metadata: Metadata = {
  title: "AA Contracting | Al Ausus Al Arbaa General Contracting",
  description:
    "AA Contracting delivers comprehensive civil, electromechanical, and construction services across the UAE. Building tomorrow’s infrastructure with precision, quality, and reliability.",
  openGraph: {
    title: "AA Contracting | Al Ausus Al Arbaa General Contracting",
    description:
      "Explore AA Contracting’s expertise in civil works, electromechanical projects, project management, and large-scale construction solutions across the UAE.",
    url: "https://www.rdtechgroup.com/companies/aa-contracting",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-aa-contracting.jpg",
        width: 1200,
        height: 630,
        alt: "AA Contracting Services",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const services = [
    "Civil Works",
    "Electromechanical Works",
    "Preliminary Investigations",
    "Environment Assessment",
    "Detailed Designs",
    "Quality Assurance",
    "Quantity Surveying and Estimating",
    "Preparation of Contract Documents",
    "Project Management",
    "Construction Supervision",
    "Maintenance Planning",
    "Technical Assistance",
    "Training",
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="AA Contracting"
        slogan="Al Ausus Al Arbaa General Contracting"
        description="Delivering comprehensive construction and contracting services with precision and reliability. Building the infrastructure of tomorrow across the UAE."
        backgroundImage="/general/aa/crane_2.jpg"
        companyLogo={<AAContractingLogo />}
        projectsLink="/companies/aa-contracting/#projects"
        websiteLink=""
      />

      <AboutSection
        title="About AA Contracting"
        description={[
          "Al Ausus Al Arbaa General Contracting is the construction arm of RDTech Group, specializing in multi-disciplinary contracting services. We combine traditional craftsmanship with modern construction techniques to deliver exceptional results.",
          "From commercial buildings to residential complexes, our experienced team manages every aspect of construction with attention to detail, quality, and timely delivery.",
        ]}
        stats={[
          { value: "300+", label: "Projects Completed" },
          { value: "12+", label: "Years Experience" },
          { value: "80+", label: "Construction Experts" },
        ]}
        image={{
          src: "/general/aa/crane.jpg",
          alt: "AA Contracting Team",
        }}
      />

      <ServicesSection
        title="Our Construction Services"
        services={services}
        image={{ 
          src: "/general/aa/plan.webp",
          alt: "AA Contracting Services"
        }}
      />

      <ClientsSection
        title="Building Trust With Every Project"
        subTitle="Partnering with developers, government agencies, and enterprises across the UAE to deliver world-class infrastructure and construction solutions."
        rows={[
          {
            baseVelocity: 5,
            direction: 1,
            logos: [
              "health/alZahra.webp",
              "health/dubaiHealth.webp",
              "health/zulekha.webp",
              "hotels/jumeirah.png",
              "hotels/anantara.webp"
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              "hotels/armani.png",
              "hotels/marriott.webp",
              "hotels/pullman.png",
              "topEnterprise/majid.webp",
              "topEnterprise/accor.png",
            ],
          },
        ]}
      />

      <ContactSection
        title="Build Your Vision With Us"
        subtitle=" Ready to start your construction project? Let's discuss how we can bring your vision to life."
        phone="+971 X XXX XXXX"
        email="info@example.com"
        address="Dubai, UAE"
      />
    </main>
  );
}
