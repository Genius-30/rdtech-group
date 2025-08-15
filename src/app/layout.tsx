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
