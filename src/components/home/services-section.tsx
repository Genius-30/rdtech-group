import { Building, Hammer, Factory, Network, Server, Shield } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

export default function ServicesSection() {
  const services = [
  // RDTech
  {
    icon: Shield,
    title: "Security & Surveillance",
    description:
      "CCTV, facial recognition, access control, and AI-powered surveillance for mission-critical security.",
    thumbnail: "/general/rdtech/cctv.png",
  },
  {
    icon: Network,
    title: "Network & Communication",
    description:
      "End-to-end structured cabling, converged voice & data, and 24/7 enterprise-grade network solutions.",
    thumbnail: "/general/rdtech/fiber.webp"
  },

  // Al Ausus
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Multi-disciplinary contracting services across civil, MEP, and infrastructure projects.",
    thumbnail: "/general/aa/plan_3.webp",
  },
  {
    icon: Factory,
    title: "Infrastructure Development",
    description:
      "End-to-end project delivery including design, fit-out, and large-scale construction works.",
    thumbnail: "/general/aa/worker.webp",
  },

  // CoreGrid
  {
    icon: Building,
    title: "Building Automation",
    description:
      "Smart control systems for real estate and infrastructure with secure remote access and data visualization.",
    thumbnail: "/general/coregrid/realState_2.webp",
  },
  {
    icon: Server,
    title: "Data & Control Solutions",
    description:
      "Intelligent integration for monitoring, storage, and automated facility management.",
    thumbnail: "/general/rdtech/dataCenter_2.webp",
  },
];


  return (
    <section
      id="services"
      className="min-h-screen flex flex-col py-20 max-w-7xl mx-auto "
      data-header-theme="dark"
    >
      {/* Heading row */}
      <SectionHeader
        title="Our Solutions"
        subTitle="Comprehensive technology solutions tailored to empower and transform modern enterprises"
      />

      {/* Services Grid */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="relative w-full h-72 overflow-hidden group cursor-pointer rounded-4xl shadow-lg">
              <SafeImage
                src={service.thumbnail}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full transition-all duration-300 object-cover object-center group-hover:scale-105"
              />

              {/* Overlay with icon & text */}
              <div className="absolute inset-0 text-shadow-2xs text-shadow-black bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <service.icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl  font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-center">{service.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
