"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * ProjectImage: High-res architectural image with reliable fallback handling
 * Gracefully switches to architectural fallbacks if external Wix image URL fails or is blocked.
 */
export default function ProjectImage({
  src,
  fallbackSrc,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const imageProps = fill
    ? { fill: true, sizes }
    : { width: width || 1200, height: height || 800 };

  return (
    <Image
      src={imgSrc || "/images/placeholder.jpg"}
      alt={alt || "STHIRATA architectural photograph"}
      {...imageProps}
      priority={priority}
      onError={handleError}
      className={`object-cover transition-transform duration-700 ease-out ${className}`}
    />
  );
}
