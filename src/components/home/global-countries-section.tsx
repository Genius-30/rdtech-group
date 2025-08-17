import { FadeIn } from "@/components/ui/fade-in";
import { NumberTicker } from "../magicui/number-ticker";
import SectionHeader from "./section-header";
import WorldMap from "../ui/world-map";

export default function GlobalCountriesSection() {
  // const mapDots = [
  //   // Middle East
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 24.7136, lng: 46.6753 },
  //   },
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 30.0444, lng: 31.2357 },
  //   },
  //   // Asia
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 35.6895, lng: 139.6917 },
  //   },
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 1.3521, lng: 103.8198 },
  //   },
  //   // Europe
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 51.5074, lng: -0.1278 },
  //   },
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 48.8566, lng: 2.3522 },
  //   },
  //   // Americas
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: 40.7128, lng: -74.006 },
  //   },
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: -23.5505, lng: -46.6333 },
  //   },
  //   // Africa
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: -1.2921, lng: 36.8219 },
  //   },
  //   {
  //     start: { lat: 25.276987, lng: 55.296249 },
  //     end: { lat: -33.9249, lng: 18.4241 },
  //   },
  // ];

  const mapDots = [
  // Middle East
  {
    start: { lat: 25.276987, lng: 55.296249 }, // Dubai HQ
    end: { lat: 24.7136, lng: 46.6753 }, // Riyadh, KSA (Kingdom Centre, KAIA)
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 21.4858, lng: 39.1925 }, // Jeddah, KSA (KAIA Airport)
  },
  // Africa
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 9.03, lng: 38.74 }, // Addis Ababa, Ethiopia (Airport Project)
  },
  // Central Asia
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 43.2389, lng: 76.8897 }, // Almaty, Kazakhstan (Smart City)
  },
];


  return (
    <section
      className="flex flex-col items-center py-20 max-w-7xl mx-auto"
      data-header-theme="dark"
    >
      {/* Heading */}
      <SectionHeader
        title="Global Reach"
        subTitle="Serving clients across the Middle East and around the world with
            innovative, mission-critical technology solutions."
      />

      {/* World Map */}
      <div className="container mx-auto px-4 mt-12 relative">
        <FadeIn>
          <div className="relative w-full">
            <WorldMap dots={mapDots} />

            {/* Minimal Stats Overlay */}
            <div
              className="md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 flex gap-8 px-6 py-3 
                      bg-primary/5 backdrop-blur-md rounded-full shadow-lg max-md:mx-auto max-md:w-auto max-md:mt-4"
            >
              {[
                { label: "Countries", value: 15 },
                { label: "Projects", value: 500 },
                { label: "Clients", value: 100 },
              ].map((stat, i) => (
                <div key={i} className="text-center mx-auto">
                  <div className="text-lg font-bold text-primary text-nowrap whitespace-nowrap">
                    <NumberTicker value={stat.value} className="text-current" />
                    +
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
