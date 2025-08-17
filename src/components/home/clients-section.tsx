import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

export default function ClientsSection() {
  // Define categories & logos
  const clientCategories: Record<string, string[]> = {
    commercial: [
      "bakerHughes.webp",
      "lulu.webp",
      "maiDubai.webp",
      "meridien.webp",
      "nakheel.png",
      "nmc.webp",
      "vfs.webp",
      "warnerBros.webp",
    ],
    banking: [
      "adcb.webp",
      "adib.webp",
      "ajman.webp",
      "bob.png",
      "citi.png",
      "commercial.png",
      "mashreq.webp",
      "nbq.webp",
      "rakbank.webp",
      "sharjah.png",
    ],
    health: [
      "alZahra.webp",
      "dubaiHealth.webp",
      "emaar.png",
      "nextcare.webp",
      "wellcare.webp",
      "zulekha.webp",
    ],
    hotels: [
      "anantara.webp",
      "armani.png",
      "conrad.png",
      "habtoor.webp",
      "ibis.png",
      "jumeirah.png",
      "marriott.webp",
      "pullman.png",
      "renaissance.webp",
      "sofitel.png",
      "stRegis.webp",
    ],
    infrastructure: [
      "abuDhabiPolice.webp",
      "emaar.png",
      "rashid.webp",
      "rta.webp",
      "tdic.webp",
      "twofour54.webp",
    ],
    security: [
      "bosch.webp",
      "gantner.gif",
      "garrett.webp",
      "hid.webp",
      "honeywell.webp",
      "imron.webp",
      "samsung.png",
      "sony.webp",
    ],
    topEnterprise: [
      "accor.png",
      "dubaiHolding.png",
      "honeywell.webp",
      "landmarkGroup.webp",
      "majid.webp",
      "unionProperties.png",
    ],
  };

  // Convert categories into rows
  const clientRows = Object.entries(clientCategories).map(([category, logos]) =>
    logos.map((logo) => ({
      name: logo.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), // Format name
      src: `/clients/${category}/${logo}`,
    }))
  );

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
        <ScrollVelocityContainer className="space-y-4">
          {clientRows.map((logos, rowIndex) => (
            <ScrollVelocityRow
              key={rowIndex}
              baseVelocity={2}
              direction={rowIndex % 2 === 0 ? 1 : -1}
            >
              {logos.map((logo, i) => (
                <div
                  key={`${rowIndex}-${i}`}
                  className="flex-shrink-0 w-40 h-20 relative mx-2 flex items-center justify-center bg-white rounded-md p-2 overflow-hidden"
                >
                  <SafeImage
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={80}
                    loading="lazy"
                    quality={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </ScrollVelocityRow>
          ))}
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}
