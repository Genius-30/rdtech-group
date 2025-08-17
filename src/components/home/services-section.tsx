import { Building, Camera, Network, Server, Shield, Wifi } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "../ui/safe-image";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Security & RMS",
      description:
        "Comprehensive security solutions including CCTV, access control, and threat detection systems.",
      video:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
    {
      icon: Network,
      title: "Network & Communication",
      description:
        "End-to-end structured cabling, converged data & voice solutions with redundant failover technology.",
      video:
        "https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
    {
      icon: Building,
      title: "Building Automation",
      description:
        "Intelligent networked control products for smart building management and automation.",
      video:
        "https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
    {
      icon: Server,
      title: "Enterprise Computing",
      description:
        "Complete range of enterprise servers, storage solutions, and disaster recovery systems.",
      video:
        "https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
    {
      icon: Wifi,
      title: "Mobility Infrastructure",
      description:
        "Corporate wireless coverage with support for multiple mobility applications and location tracking.",
      video:
        "https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
    {
      icon: Camera,
      title: "Audio Visual Solutions",
      description:
        "Professional AV systems, background music, and large format display solutions.",
      video:
        "https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4",
      thumbnail: "/general/rdtech/cctv.webp",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col py-20 max-w-7xl mx-auto "
      data-header-theme="dark"
    >
      {/* Heading row */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
            Our Solutions
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-muted-foreground max-w-xl text-center mt-1">
            Comprehensive technology solutions tailored to empower and transform modern enterprises
          </p>
        </FadeIn>
      </div>

      {/* Services Grid */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
              <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <service.icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-center">{service.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
