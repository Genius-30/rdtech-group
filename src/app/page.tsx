import ClientsSection from "@/components/home/clients-section";
import CompaniesSection from "@/components/home/companies-section";
import GlobalCountriesSection from "@/components/home/global-countries-section";
import { HeroSection } from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import ServicesSection from "@/components/home/services-section";

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
      <HeroSection />
      <ServicesSection />
      <CompaniesSection />
      <ProjectsSection />
      <ClientsSection />
      <GlobalCountriesSection />
    </main>
  );
}
