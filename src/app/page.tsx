import { HeroSection } from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
