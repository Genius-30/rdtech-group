import type { Metadata } from "next";
import React from "react";
import { privacyPolicy } from "../../../public/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  openGraph: {
    images: [
      {
        url: "/public/logo/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/public/logo/preview.jpg"],
  },
};

function page() {
  return (
    <main className="container mx-auto my-4 mt-16">
      <h1 className="font-bold text-3xl mb-4">Privacy Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </main>
  );
}

export default page;
