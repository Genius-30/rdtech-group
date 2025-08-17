'use client'
import { FadeIn } from "@/components/ui/fade-in";
import { NumberTicker } from "../magicui/number-ticker";
import SectionHeader from "./section-header";
import WorldMap from "../ui/world-map";
import { motion } from "framer-motion";

export default function GlobalCountriesSection() {
  const mapDots = [
  // UAE — across all seven emirates (Dubai as central hub)
  {
    start: { lat: 25.276987, lng: 55.296249 }, // Dubai HQ
    end: { lat: 25.2048, lng: 55.2708 }, // Abu Dhabi
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 25.4052, lng: 55.5136 }, // Sharjah
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 25.4111, lng: 56.2482 }, // Fujairah
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 25.6741, lng: 55.9804 }, // Ras Al Khaimah
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 25.1215, lng: 56.3414 }, // Umm Al Quwain
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 24.1302, lng: 56.3220 }, // Ajman
  },

  // GCC — Saudi Arabia, Oman, Qatar, Bahrain
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 24.7136, lng: 46.6753 }, // Riyadh, KSA
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 21.4858, lng: 39.1925 }, // Jeddah, KSA
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 23.5880, lng: 58.3829 }, // Muscat, Oman
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 25.276987, lng: 51.5200 }, // Doha, Qatar
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 26.2235, lng: 50.5876 }, // Manama, Bahrain
  },

  // Partnerships — Europe
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 52.5200, lng: 13.4050 }, // Berlin, Germany
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 48.8566, lng: 2.3522 }, // Paris, France
  },

  // Partnerships — North America
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 40.7128, lng: -74.0060 }, // New York, USA
  },

  // Partnerships — Asia
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
  },
  {
    start: { lat: 25.276987, lng: 55.296249 },
    end: { lat: 1.3521, lng: 103.8198 }, // Singapore
  },
];

const regions = [
  {
    title: "UAE (All Seven Emirates)",
    countries: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Fujairah",
      "Ras Al Khaimah",
      "Umm Al Quwain",
      "Ajman",
    ],
  },
  {
    title: "GCC (Gulf Cooperation Council)",
    countries: ["Saudi Arabia", "Oman", "Qatar", "Bahrain"],
  },
  {
    title: "Global Partnerships",
    countries: [
      "Germany",
      "France",
      "United States",
      "Japan",
      "Singapore",
    ],
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
      subTitle="Serving clients across the UAE, GCC, and through strong partnerships with technology vendors in Europe, North America, and Asia."
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
              { label: "Countries", value: 20 },
              { label: "Projects", value: 500 },
              { label: "Clients", value: 100 },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4 mx-auto">
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

     {/* Countries List with Animation */}
      <motion.div
        className="mt-8 grid md:grid-cols-3 gap-6 w-full px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {regions.map((region, i) => (
          <motion.div
            key={i}
            className="bg-primary/5 rounded-2xl shadow-lg p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-primary mb-3">{region.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {region.countries.map((country, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: j * 0.1 }}
                  viewport={{ once: true }}
                >
                  • {country}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
  </section>
);
}