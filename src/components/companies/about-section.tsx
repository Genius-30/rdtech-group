import { SafeImage } from "../ui/safe-image";

interface Stat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  title: string;
  description: string[];
  stats: Stat[];
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export default function AboutSection({
  title,
  description,
  stats,
  image,
}: Readonly<AboutSectionProps>) {
  return (
    <section className="py-14 md:py-24 bg-white" data-header-theme="dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              {title}
            </h2>

            {/* Render description paragraphs */}
            {description.map((para, idx) => (
              <p
                key={idx}
                className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-8"
              >
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-start">
                  <div className="font-heading text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <SafeImage
              src={image.src}
              alt={image.alt}
              width={image.width || 600}
              height={image.height || 400}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
