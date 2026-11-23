"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

// Only play video on wider screens for users who haven't asked for reduced motion.
const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function HeroMedia({ image, alt, video }: { image: string; alt: string; video: string | null }) {
  const allowVideo = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false, // server render: image only, so there's no layout shift
  );

  return (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        preload
        sizes="100vw"
        quality={90}
        className="object-cover object-[72%_center]"
      />
      {video && allowVideo && (
        <video
          className="absolute inset-0 size-full object-cover object-[72%_center]"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      )}
    </>
  );
}
