import { CircleCheck } from "lucide-react";
import { SafeImage } from "../ui/safe-image";

interface ServicesSectionProps {
  title: string;
  services: string[];
  image: {
    src: string;
    alt: string;
  };
}

export default function ServicesSection({
  title,
  services,
  image,
}: Readonly<ServicesSectionProps>) {
  return (
    <section className="py-10 bg-white max-sm:px-4" data-header-theme="dark">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="relative min-h-[300px] lg:min-h-[400px] w-full">
          <SafeImage
            src={image.src}
            alt={image.alt}
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="py-4">
          <h3 className="font-heading text-4xl font-bold text-gray-600 mb-6">
            {title}
          </h3>
          <div className="flex flex-col items-start gap-2">
            {services.map((service) => (
              <p
                key={service}
                className="text-gray-600 text-lg leading-relaxed flex items-center gap-1"
              >
                <CircleCheck className="mr-2 h-4 w-4 text-accent" />
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
