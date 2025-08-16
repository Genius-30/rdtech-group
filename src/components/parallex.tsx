'use client'
import { useEffect, useState } from "react";

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-[80vh] bg-bottom bg-cover"
      style={{
        backgroundImage: "url('/about/dubai_1.jpg')",
        backgroundPositionY: `${offsetY * 0.4}px`, // move slower than scroll
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-2xs text-shadow-black">
          Crafting Excellence Together
        </h1>
        <p className="text-white max-w-4xl text-lg text-shadow-2xs text-shadow-black">
          For over three decades, RDTech Group has been at the forefront of
          technological innovation, infrastructure excellence, and secure
          operations in the UAE and beyond. What began as a specialized
          security solutions provider has grown into a multi-disciplinary
          powerhouse — integrating ICT, ELV, construction, and automation
          expertise under one group.
        </p>
      </div>
    </section>
  );
}
