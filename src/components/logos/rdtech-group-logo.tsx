import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function RDTechGroupLogo({
  size = 100,
  className = "",
}: { readonly size?: number; readonly className?: string } = {}) {
  return (
    <div>
      <SafeImage
        src="/logos/rdtech-group-logo.png"
        alt="Logo"
        width={size}
        height={size}
        className={className}
      />
    </div>
  );
}
