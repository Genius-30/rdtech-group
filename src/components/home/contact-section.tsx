"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "../ui/fade-in";
import { Input } from "@/components/ui/input";
import type React from "react";
import SectionHeader from "./section-header";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const company = (document.getElementById("company") as HTMLSelectElement)
      ?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const subject = encodeURIComponent(
      "New Technical Support Request from " + name
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}\n\n--\n`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center py-20 bg-gray-100"
      data-header-theme="dark"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <SectionHeader
          title="Get in Touch"
          subTitle="Ready to transform your business with cutting-edge technology
              solutions?
              <br /> We’re here to help."
        />

        {/* Layout */}
        <div className="px-4 mt-12 w-full grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <FadeIn direction="left" className="h-full">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md space-y-6 h-full"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-600 mb-1"
                  >
                    Name
                  </label>
                  <Input id="name" required placeholder="Jane Smith" />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-600 mb-1"
                  >
                    Company
                  </label>
                  <Input id="company" required placeholder="Acme Corp" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-600 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-600 mb-1"
                  >
                    Phone
                  </label>
                  <Input id="phone" placeholder="+971 4 XXX XXXX" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us about your project or requirements..."
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="px-6">
                  Send Message
                </Button>
              </div>
            </form>
          </FadeIn>

          {/* Contact Info & Map */}
          <FadeIn direction="right">
            <div className="space-y-6">
              {/* Info Card */}
              <div className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md space-y-4">
                <div className="flex items-center gap-3 text-slate-800">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:info@rdtechgroup.ae"
                    className="tracking-wider hover:underline"
                  >
                    info@rdtechgroup.ae
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:+971426669974"
                    className="tracking-wide hover:underline"
                  >
                    +971 4 XXX XXXX
                  </a>
                </div>
                <div className="flex items-start gap-3 text-slate-800">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    Dubai, United Arab Emirates
                    <br />
                    Abu Dhabi Office Available
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <iframe
                  title="RDTech Group Office Map"
                  src="https://www.google.com/maps?q=AFZ%20Office%201038,%20Ajman%20Free%20Zone,%20UAE&output=embed"
                  className="w-full h-[280px]"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
