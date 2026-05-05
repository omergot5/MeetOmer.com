"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  readonly src?: string;
  readonly alt: string;
}

export default function ProfileImage({
  src = "/profile.jpg",
  alt,
}: ProfileImageProps) {
  const [errored, setErrored] = useState<boolean>(false);

  if (errored) {
    // Fallback: stylized OG monogram on gradient.
    return (
      <div
        role="img"
        aria-label={alt}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/40 shadow-glass"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-7xl font-extrabold tracking-tight text-white/95 drop-shadow-md">
            OG
          </span>
        </div>
        <p className="absolute inset-x-0 bottom-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
          Add public/profile.jpg
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/40 shadow-glass">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 320px, 80vw"
        className="object-cover"
        priority
        onError={() => setErrored(true)}
      />
      {/* subtle inner gradient for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10"
      />
    </div>
  );
}
