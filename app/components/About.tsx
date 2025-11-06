"use client";
import React, { useMemo } from "react";
import Image from "next/image";

/**
 * AboutBlocks.tsx — Fonts updated (Unbounded + Work Sans)
 * No layout or logic changed
 */

export default function AboutBlocks() {
  const themeVars: React.CSSProperties & Record<string, string> = useMemo(
    () => ({
      "--eco": "#00F06B",
      "--dark": "#024122",
      "--cta": "#FFD84D",
      "--ink": "#0B0B0B",
      "--paper": "#FAFFFB",
      "--tint": "#DFFFEA",
      "--navy": "#031A35",
    }),
    []
  );

  return (
    <section
      style={themeVars}
      className="w-full bg-[var(--paper)] font-[var(--font-worksans)]"
    >
      {/* Import fonts globally inside component */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap");
        :root {
          --font-unbounded: 'Unbounded', cursive;
          --font-worksans: 'Work Sans', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-unbounded);
        }
        body, p, span, a, div, button {
          font-family: var(--font-worksans);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1: About us */}
        <div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[var(--ink)] font-[var(--font-unbounded)]">
              About us
            </h2>
            <p className="mt-3 max-w-prose text-[var(--ink)]/80">
              Our purpose is to simplify and improve everyday life and to build
              an organisation that inspires. Learn more about our purpose,
              people and services.
            </p>
            <a
              href="#about-more"
              className="mt-5 inline-flex rounded-full bg-[var(--eco)] px-4 py-2 text-sm font-semibold text-[var(--dark)]"
            >
              Read more
            </a>
          </div>
          <div className="justify-self-end">
            <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[24px] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src="/about1.png"
                alt="About - office"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Band 2: Captains */}
      <div className="relative w-full bg-gradient-to-r from-[var(--tint)] via-[var(--eco)]/75 to-[var(--eco)]">
        <div
          aria-hidden
          className="absolute -top-10 left-0 h-10 w-full bg-gradient-to-r from-[var(--tint)] via-[var(--eco)]/75 to-[var(--eco)]"
          style={{
            clipPath: "polygon(0 100%, 10% 0, 100% 0, 100% 100%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[24px] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <Image
                  src="/about2.png"
                  alt="Captains"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 520px"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 text-[var(--ink)]">
              <h3 className="text-[28px] sm:text-[32px] font-extrabold font-[var(--font-unbounded)]">
                Captains
              </h3>
              <p className="mt-3 max-w-prose text-[var(--ink)]/80">
                Drive or deliver with EcoRide and earn with every ride. Choose
                your own hours, enjoy great rewards and get professional
                training.
              </p>
              <a
                href="#captains"
                className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--dark)]"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute -bottom-10 left-0 h-10 w-full bg-gradient-to-r from-[var(--tint)] via-[var(--eco)]/75 to-[var(--eco)]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Block 3: Engineering */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-[28px] sm:text-[32px] font-extrabold text-[var(--ink)] font-[var(--font-unbounded)]">
              Engineering at EcoRide
            </h3>
            <p className="mt-3 max-w-prose text-[var(--ink)]/80">
              We craft technology every day across multiple sites in a mission
              to build a lasting tech institution that inspires.
            </p>
            <a
              href="#engineering"
              className="mt-5 inline-flex rounded-full bg-[var(--eco)] px-4 py-2 text-sm font-semibold text-[var(--dark)]"
            >
              Read more
            </a>
          </div>
          <div className="justify-self-end">
            <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[24px] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src="/about3.png"
                alt="Engineering"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block 4: Our social impact */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[24px] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src="/about4.png"
                alt="Social impact"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 520px"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-[28px] sm:text-[32px] font-extrabold text-[var(--ink)] font-[var(--font-unbounded)]">
              Our social impact
            </h3>
            <p className="mt-3 max-w-prose text-[var(--ink)]/80">
              We believe deeply in driving social and economic progress across
              our region. We use our platform to connect communities that need
              the most support.
            </p>
            <a
              href="#impact"
              className="mt-5 inline-flex rounded-full bg-[var(--eco)] px-4 py-2 text-sm font-semibold text-[var(--dark)]"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
