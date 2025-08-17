import {
  Cable,
  Clock,
  Cpu,
  DollarSign,
  Gauge,
  Key,
  Layers,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { FadeIn } from "../ui/fade-in";
import SectionHeader from "./section-header";

const features = [
  {
    icon: Key,
    title: "Turnkey Solutions",
    subtitle: "End-to-end integration & delivery",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    subtitle: "Round-the-clock support",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    subtitle: "Optimized, value-driven solutions",
  },
  {
    icon: Layers,
    title: "Modular & Scalable",
    subtitle: "Future-ready system upgrades",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    subtitle: "Latest hardware & software",
  },
  {
    icon: Gauge,
    title: "Fast Implementation",
    subtitle: "Zero-downtime delivery",
  },
  {
    icon: Cable,
    title: "In-House Cabling",
    subtitle: "Civil, MEP & networking expertise",
  },
  {
    icon: Users,
    title: "Expert Support Team",
    subtitle: "Certified engineers & specialists",
  },
];


export default function WhyRDTechGroup() {
  return (
    <section className="py-20 w-full max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <SectionHeader
        title="Why RDTech Group"
        subTitle="The trusted technology partner delivering value-driven, reliable, and
          innovative solutions."
      />

      {/* Enhanced Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <FadeIn key={i} delay={i * 80}>
            <Card className="h-full group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-0">
              <CardContent className="p-6 flex flex-col items-start">
                {/* Icon with gradient background */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                {feature.subtitle && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.subtitle}
                  </p>
                )}

                {/* Decorative gradient underline */}
                <div className="mt-4 h-1 w-2/3 rounded-full bg-gradient-to-r from-primary to-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
