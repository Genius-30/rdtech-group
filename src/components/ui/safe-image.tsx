"use client";

import NextImage, { ImageProps } from "next/image";

import { useState } from "react";

export function SafeImage({
  src,
  alt,
  ...props
}: ImageProps & { src?: string | null }) {
  const [imgSrc, setImgSrc] = useState(
    src && src.trim() !== "" ? src : "/placeholder.png"
  );

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => setImgSrc("/placeholder.png")}
    />
  );
}
