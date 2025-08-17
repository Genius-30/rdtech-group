import { Metadata } from "next";
import ProjectsGrid from "@/components/projects/grid";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore RDTech Group’s landmark projects spanning government institutions, private enterprises, and transformative innovations built over 30+ years.",
  openGraph: {
    title: "Projects",
    description:
      "Discover how RDTech Group has turned vision into reality through projects that redefine industries and set new standards of excellence.",
    url: "https://yourdomain.com/projects",
    siteName: "RDTech Group",
    images: [
      {
        url: "/projects/skyline.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech Group Projects",
      },
    ],
    type: "website",
  },
};

function page() {
  return (
    <>
      {/* Parallex Section */}
      <section
        className="relative h-[80vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/projects/skyline.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs text-shadow-black">
            Turning Vision Into Reality
          </h1>
          <p className="text-white max-w-4xl text-lg text-shadow-2xs text-shadow-black">
            For over 30 years, RDTech Group has executed projects that redefine
            industries and elevate standards. From government institutions to
            private enterprises, our track record reflects excellence,
            innovation, and trust across every sector we serve.
          </p>
        </div>
      </section>

      <ProjectsGrid />
    </>
  );
}

export default page;
