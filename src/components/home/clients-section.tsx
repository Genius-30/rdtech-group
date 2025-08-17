"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import { SafeImage } from "../ui/safe-image";

export default function ClientsSection() {
  const clientLogos = [
    { name: "Dubai Health Authority", src: "" },
    { name: "UAE Ministries", src: "" },
    { name: "Civil Defense", src: "" },
    { name: "Transportation Authorities", src: "" },
    { name: "Bank of Baroda", src: "" },
    { name: "Major UAE Banks", src: "" },
    { name: "Emaar Properties", src: "" },
    { name: "Burj Khalifa", src: "" },
    { name: "Nakheel", src: "" },
    { name: "Eastern Mangroves Resort", src: "" },
    { name: "Energy Companies", src: "" },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden bg-gray-100"
      data-header-theme="dark"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <FadeIn>
          <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
            Our Clients
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-muted-foreground mt-1">
            Trusted by leading organizations across industries for
            mission-critical technology solutions.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-12">
        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-marquee space-x-12">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 relative">
                <SafeImage
                  src={logo.src || ""}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[50]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[50]" />
        </div>

        {/* Marquee Row 2 (reverse) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-reverse space-x-12">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 relative">
                <SafeImage
                  src={logo.src || ""}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[50]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[50]" />
        </div>
      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
