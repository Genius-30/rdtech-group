import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";

import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

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

  const clientLogos2 = [
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
      <SectionHeader
        title="Our Clients"
        subTitle="Trusted by leading organizations across industries for mission-critical technology solutions."
      />

      <div className="container mx-auto px-4 relative z-10 mt-12">
        <ScrollVelocityContainer className="space-y-8">
          {/* Row 1 */}
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            {clientLogos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-20 relative mx-2">
                <SafeImage
                  src={logo.src || ""}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-contain rounded-md"
                />
              </div>
            ))}
          </ScrollVelocityRow>

          {/* Row 2 */}
          <ScrollVelocityRow baseVelocity={5} direction={-1}>
            {clientLogos2.map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-20 relative mx-2">
                <SafeImage
                  src={logo.src || ""}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-contain rounded-md"
                />
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}
