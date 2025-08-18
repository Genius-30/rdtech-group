import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function RDTechGroupLogo({
  iconSize = 50,
  textSize = 50,
  className = "",
}: {
  readonly iconSize?: number;
  readonly textSize?: number;
  readonly className?: string;
} = {}) {
  return (
    <div className="flex items-center gap-1">
      <SafeImage
        src="/logos/rdtech-group-logo1.png"
        alt="Logo"
        width={iconSize}
        height={iconSize}
      />
      <SafeImage
        src="/logos/rdtech-group-logo2.png"
        alt="Logo"
        width={textSize}
        height={textSize}
        className={className}
      />
    </div>
  );
}
