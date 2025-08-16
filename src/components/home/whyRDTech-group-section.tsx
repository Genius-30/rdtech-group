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

const features = [
  {
    icon: Key,
    title: "Turnkey Solution Provider",
    subtitle: "& integrator",
  },
  {
    icon: Clock,
    title: "24/7",
    subtitle: "Support",
  },
  {
    icon: DollarSign,
    title: "Cost-effective solutions",
  },
  {
    icon: Layers,
    title: "Focus on core needs &",
    subtitle: "Modular Upgrades",
  },
  {
    icon: Cpu,
    title: "Hardware & Software",
    subtitle: "Updated",
  },
  {
    icon: Gauge,
    title: "Fast Implementation Downtime",
    subtitle: "Solution Delivery",
  },
  {
    icon: Cable,
    title: "Own Cabling and Networking",
    subtitle: "CIVIL & MEP Work Team",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    subtitle: "& Converged Network Engineers",
  },
  {
    icon: ThumbsUp,
    title: "Highest level of partnership with the",
    subtitle: "Vendor",
  },
];

export default function WhyRDTechGroup() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <FadeIn>
            <h2 className="w-auto text-xl md:text-2xl font-bold text-white bg-primary backdrop-blur-md py-2 px-4 rounded-full shadow-md">
              Why RDTech Group
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-muted-foreground mt-1 max-w-2xl text-center">
              The trusted technology partner delivering value-driven, reliable,
              and innovative solutions.
            </p>
          </FadeIn>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i}>
              <Card
                className={`h-full rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform flex py-0 justify-center`}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <feature.icon />
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <p className="text-muted-foreground">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
