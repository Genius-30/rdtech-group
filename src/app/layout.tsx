import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700"], // Use SemiBold & Bold for headings
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home | RDTech Group",
    template: "%s | RDTech Group",
  },
  description:
    "Leading the way in Security, Contracting, and Building Automation across the UAE.",

  // Keywords for SEO
  keywords: [
    "RDTech Group",
    "Security Solutions UAE",
    "Contracting UAE",
    "Building Automation",
    "Smart Homes UAE",
    "CCTV Installation",
    "Access Control Systems",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://www.rdtechgroup.com",
  },

  // OpenGraph (for link previews: Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    url: "https://www.rdtechgroup.com",
    title: "RDTech Group - Security, Contracting & Automation in UAE",
    description:
      "RDTech Group specializes in Security, Contracting, and Building Automation services across the UAE.",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech Group Office",
      },
    ],
    locale: "en_US",
  },

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
  },

  // Robots (control search engine indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Theme colors
  themeColor: "#007cf7",
  colorScheme: "light",

  // MetadataBase for relative URLs (optional, helps with OpenGraph)
  metadataBase: new URL("https://www.rdtechgroup.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
