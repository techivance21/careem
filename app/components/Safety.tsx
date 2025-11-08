"use client";
import Image from "next/image";
import React, { useMemo } from "react";

export default function Safety() {
  const themeVars: React.CSSProperties & Record<string, string> = useMemo(
    () => ({
      "--eco": "#00F06B",      // Eco Green (keep for brand accents)
      "--dark": "#024122",     // Dark Green (text + button)
      "--ink": "#024122",      // Make main text dark green inside card
      "--paper": "#FAFFFB",    // Page background remains soft off-white
      "--skyMint": "#B3FFE4",  // NEW: Card Background
      "--lightGreen": "#DFFFEA", // NEW: Shield watermark + soft rings
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

        {/* Safety Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--skyMint)] shadow-[0_20px_60px_rgba(0,0,0,0.06)] ring-1 ring-black/5">

          {/* ✅ Soft Green Shield Watermark */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-10 h-[140%] w-auto opacity-40"
            viewBox="0 0 512 512"
            fill="none"
          >
            <path
              d="M256 32C186.1 69.6 130.8 80 64 80c0 173 83.1 298.8 192 352 108.9-53.2 192-179 192-352-66.8 0-122.1-10.4-192-48Z"
              fill="var(--lightGreen)"
            />
            <path
              d="M256 118c-42 23-76.8 29-120 29 0 114.6 53.7 197.8 120 233.2C322.3 344.8 376 261.6 376 147c-43.2 0-78-6-120-29Z"
              fill="var(--lightGreen)"
              opacity="0.55"
            />
          </svg>

          <div className="grid grid-cols-1 items-center gap-6 p-6 sm:p-8 lg:p-10 md:grid-cols-2">

            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-xl ring-8 ring-[var(--lightGreen)]">
                <Image
                  src="/safety1.png"
                  alt="Rider smiling with phone"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h2
                id="safety-heading"
                className="text-[28px] sm:text-[34px] font-extrabold tracking-tight text-[var(--dark)]"
              >
                Safety is non-negotiable.
              </h2>
              <p className="mt-4 max-w-prose text-[var(--dark)]/85">
                We put our full effort into making every ride with EcoRide safe —
                for everyone, every time — because your safety is our top priority.
              </p>

              {/* ✅ Dark Green Button */}
              <a
                href="#learn-more"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--dark)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
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
