import ClientsSection from "@/components/home/clients-section";
import CompaniesSection from "@/components/home/companies-section";
import ContactSection from "@/components/home/contact-section";
import GlobalCountriesSection from "@/components/home/global-countries-section";
import HeroSection from "@/components/home/hero-section";
import { IndustriesSection } from "@/components/home/industries-section";
import ProjectsSection from "@/components/home/projects-section";
import ServicesSection from "@/components/home/services-section";
import WhyRDTechSection from "@/components/home/whyRDTech-group-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CompaniesSection />
      <IndustriesSection />
      <ProjectsSection />
      <WhyRDTechSection />
      <ClientsSection />
      <GlobalCountriesSection />
      <ContactSection />
    </main>
  );
}
