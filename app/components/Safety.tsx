"use client";
import Image from "next/image";
import React, { useMemo } from "react";

/**
 * Safety.tsx — Eco Green themed safety banner
 * Assets: /public/safety1.png
 *
 * Layout:
 * - Pale page background
 * - Large rounded card in Eco palette with shield watermark
 * - Left: person image
 * - Right: heading, copy, CTA
 */

export default function Safety() {
  // Theme tokens
  const themeVars: React.CSSProperties & Record<string, string> = useMemo(
    () => ({
      "--eco": "#00F06B",   // Eco Green
      "--dark": "#024122",  // Dark Green
      "--ink": "#0B0B0B",   // Dark Grey
      "--paper": "#FAFFFB", // Off White
      "--tint": "#DFFFEA",  // Light Green
      // a lime-ish fill derived from eco for the big panel
      "--lime": "color-mix(in srgb, #00F06B 55%, #C7FF3D)",
      "--limeSoft": "color-mix(in srgb, #00F06B 25%, white)",
    }),
    []
  );

  return (
    <section
      style={themeVars}
      className="w-full bg-[var(--paper)]"
      aria-labelledby="safety-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Big rounded safety block */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--lime)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* Shield watermark */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-10 h-[140%] w-auto opacity-25"
            viewBox="0 0 512 512"
            fill="none"
          >
            <path
              d="M256 32C186.1 69.6 130.8 80 64 80c0 173 83.1 298.8 192 352 108.9-53.2 192-179 192-352-66.8 0-122.1-10.4-192-48Z"
              fill="white"
            />
            <path
              d="M256 118c-42 23-76.8 29-120 29 0 114.6 53.7 197.8 120 233.2C322.3 344.8 376 261.6 376 147c-43.2 0-78-6-120-29Z"
              fill="url(#g)"
              opacity="0.65"
            />
            <defs>
              <linearGradient id="g" x1="256" y1="118" x2="256" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.55" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 items-center gap-6 p-6 sm:p-8 lg:p-10 md:grid-cols-2">
            {/* Left: image */}
            <div className="order-2 md:order-1">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-xl ring-8 ring-[var(--limeSoft)]">
                <Image
                  src="/safety1.png"
                  alt="Rider holding a phone, smiling"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: copy */}
            <div className="order-1 md:order-2">
              <h2
                id="safety-heading"
                className="text-[28px] sm:text-[34px] font-extrabold tracking-tight text-[var(--ink)]"
              >
                Safety is non-negotiable.
              </h2>
              <p className="mt-4 max-w-prose text-[var(--ink)]/85">
                We put our full effort into making every ride with EcoRide safe — for everyone, every time —
                because your safety is our top priority.
              </p>

              <a
                href="#learn-more"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
