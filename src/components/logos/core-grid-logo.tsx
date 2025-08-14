import React from "react";
import { SafeImage } from "../ui/safe-image";

export default function CoreGridLogo({
  size = 100,
}: { readonly size?: number } = {}) {
  return (
    <div>
      <SafeImage
        src="/logos/core-grid-logo.png"
        alt="Logo"
        width={size}
        height={size}
      />
    </div>
  );
}
