import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function RDTechLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/logos/rdtech-logo.png"
        alt="Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
