import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Home } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Oops! The page you’re looking for has moved, been removed, or never existed. Return to the homepage of RDTech Group.",
  openGraph: {
    title: "404 - Page Not Found",
    description:
      "The page you’re trying to reach could not be found. Go back to RDTech Group homepage.",
    url: "https://yourdomain.com/404",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RDTech Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <FadeIn>
        <div className="p-10 max-w-lg text-center">
          <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm">
            404
          </h1>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-muted-foreground">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground">
            Oops! It seems the page you’re looking for has moved, been removed,
            or never existed.
          </p>

          {/* Button */}
          <Link href="/" className="inline-block mt-8">
            <Button
              size="lg"
              className="rounded-full px-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
