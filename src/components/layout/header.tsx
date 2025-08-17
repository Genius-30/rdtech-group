"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import AAContractingLogo from "../logos/aa-contracting-logo";
import CoreGridLogo from "../logos/core-grid-logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import RDTechGroupLogo from "../logos/rdtech-group-logo";
import RDTechLogo from "../logos/rdtech-logo";

const companies = [
  {
    name: "RDTech FZE",
    description: "Security Systems & ELV/ICT Solutions",
    logo: RDTechLogo,
    href: "/companies/rdtech-fze",
    services: [
      "Access Control",
      "CCTV Systems",
      "Fire Alarm",
      "Network Infrastructure",
    ],
  },
  {
    name: "AA Contracting",
    description: "Multi-disciplinary General Contracting",
    logo: AAContractingLogo,
    href: "/companies/aa-contracting",
    services: [
      "Civil Construction",
      "MEP Services",
      "Project Management",
      "Maintenance",
    ],
  },
  {
    name: "CoreGrid",
    description: "Building Automation & Smart Solutions",
    logo: CoreGridLogo,
    href: "/companies/core-grid",
    services: [
      "BMS Systems",
      "Lighting Control",
      "Home Automation",
      "Energy Management",
    ],
  },
];

export function Header() {
  const [showOverview, setShowOverview] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setTheme("light"); // Top of screen → white
      } else {
        setTheme("dark"); // After h-screen → black
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[99] w-full  ${
        theme === "light" ? "text-white" : "text-black"
      } ${showOverview && "text-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <RDTechGroupLogo size={120} className="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              onMouseEnter={() => setShowOverview(false)}
              className="relative text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full px-1 bg-transparent hover:bg-transparent py-1.5"
            >
              About
            </Link>

            <button
              onMouseEnter={() => setShowOverview(true)}
              className={`relative text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full px-1 bg-transparent hover:bg-transparent py-1.5 cursor-pointer ${
                showOverview && "after:w-full"
              }`}
            >
              Group Overview
            </button>

            <Link
              href="/projects"
              onMouseEnter={() => setShowOverview(false)}
              className="relative text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full px-1 bg-transparent hover:bg-transparent py-1.5"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onMouseEnter={() => setShowOverview(false)}
              className="relative text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full px-1 bg-transparent hover:bg-transparent py-1.5"
            >
              Contact
            </Link>
          </nav>

          <div
            onMouseLeave={() => setShowOverview(false)}
            className={`max-md:hidden absolute  ${
              showOverview ? "top-0" : "-top-70"
            } left-0 w-full shadow-lg bg-gradient-to-b from-black from-[0%] via-black/80 via-[90%] to-black/60 to-[100%] backdrop-blur-xs -z-[10] duration-300 transform`}
          >
            <div className="w-full grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-10 py-4">
              {companies.map((company) => {
                const Logo = company.logo;
                return (
                  <Link
                    key={company.name}
                    href={company.href}
                    className="group space-y-2 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                        <Logo />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-accent text-white">
                          {company.name}
                        </h3>
                        <p className="text-sm text-zinc-50">
                          {company.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm text-zinc-50">
                      {company.services.map((service) => (
                        <li key={service}>• {service}</li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-6 w-6 text-black" />
              </SheetTrigger>
              <SheetContent side="right" className="p-4 gap-3 z-[100]">
                {/* Logo */}
                <Link href="/" className="flex items-center mb-2">
                  <RDTechGroupLogo size={80} />
                </Link>

                <Link href="/about" className="text-foreground font-medium">
                  About
                </Link>

                <Accordion type="single" collapsible>
                  <AccordionItem value="group" className="focus:outline-none">
                    <AccordionTrigger className="py-0 text-foreground">
                      Group Overview
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {companies.map((company) => {
                          const Icon = company.logo;
                          return (
                            <Link
                              key={company.name}
                              href={company.href}
                              className="flex items-center space-x-3 rounded-lg p-2 hover:bg-gray-50"
                            >
                              <Icon />
                              <div>
                                <h3 className="text-sm font-semibold">
                                  {company.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {company.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/projects" className="text-foreground font-medium">
                  Projects
                </Link>
                <Link href="/#contact" className="text-foreground font-medium">
                  Contact
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
