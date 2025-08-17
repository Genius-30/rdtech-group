import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover RDTech Group – delivering excellence in Security, Contracting, and Building Automation solutions across the UAE.",
  openGraph: {
    title: "About Us",
    description:
      "Learn more about RDTech Group’s mission, vision, and expertise in Security, Contracting, and Building Automation.",
    url: "https://www.rdtechgroup.com/about",
    siteName: "RDTech Group",
    locale: "en_US",
    type: "website",
  },
};

function page() {
  return (
    <main>
      <About />
    </main>
  );
}

export default page;
