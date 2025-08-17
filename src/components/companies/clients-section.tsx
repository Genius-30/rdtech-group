"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";

import { SafeImage } from "../ui/safe-image";

interface RowConfig {
  baseVelocity: number;
  direction: 1 | -1;
  logos: string[];
}

interface ClientsSectionProps {
  title: string;
  subTitle: string;
  rows: RowConfig[];
}

export default function ClientsSection({
  title,
  subTitle,
  rows,
}: Readonly<ClientsSectionProps>) {
  return (
    <section className="py-10 max-sm:px-4 bg-gray-100" data-header-theme="dark">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-center">
        {/* Left Content */}
        <div className="p-4">
          <h3 className="font-heading text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">{subTitle}</p>
        </div>

        {/* Logos with scroll velocity */}
        <div className="container mx-auto p-4 relative z-10">
          <ScrollVelocityContainer className="space-y-8">
            {rows.map((row, idx) => (
              <ScrollVelocityRow
                key={idx}
                baseVelocity={row.baseVelocity}
                direction={row.direction}
              >
                {row.logos.map((src, i) => {
                  const altName = src
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase());

                  return (
                    <div
                      key={`${idx}-${i}`}
                      className="flex-shrink-0 w-40 h-20 relative mx-2 flex items-center justify-center bg-white rounded-md p-2 overflow-hidden"
                    >
                      <SafeImage
                        src={`/clients/${src}`}
                        alt={altName}
                        width={160}
                        height={80}
                        loading="lazy"
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </ScrollVelocityRow>
            ))}
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}
