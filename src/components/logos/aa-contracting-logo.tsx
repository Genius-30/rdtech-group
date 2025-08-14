import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function AAContractingLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/logos/aa-contracting-logo.png"
        alt="Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
