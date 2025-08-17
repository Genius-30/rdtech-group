import { FadeIn } from "../ui/fade-in";

export default function SectionHeader({
  title,
  subTitle,
}: {
  readonly title: string;
  readonly subTitle: string;
}) {
  return (
    <div className="flex flex-col items-center mb-16 text-center">
      <FadeIn>
        <h2 className="text-xl md:text-3xl font-bold text-white bg-primary backdrop-blur-md py-2 px-6 rounded-full shadow-lg">
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
          {subTitle}
        </p>
      </FadeIn>
    </div>
  );
}
