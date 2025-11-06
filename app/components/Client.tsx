"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

/**
 * Client.tsx — Story slider + services grid (theme: Eco Green)
 *
 * Assets expected in /public:
 *  - client1.png, client2.png
 *  - icon1.png, icon2.png, icon3.png, icon4.png
 */

// -----------------------------
// Data
// -----------------------------

type Story = {
  id: number;
  image: string; // client image path
  location: string;
  role: string;
  countryCount: number;
  quote: string;
};

const STORIES: Story[] = [
  {
    id: 1,
    image: "/client1.png",
    location: "San Luis Potosí, México",
    role: "Liliana, driver",
    countryCount: 48,
    quote: "After 40, no one will give you a job. This platform saved me.",
  },
  {
    id: 2,
    image: "/client2.png",
    location: "Kafr El Zayat, Egypt",
    role: "Retal, food courier",
    countryCount: 48,
    quote: "I found flexible work and community support when I needed it most.",
  },
];

const SERVICES = [
  {
    icon: "/icon1.png",
    title: "City rides",
    blurb: "Forever good rides for a fair price",
    links: ["For Riders ›"],
  },
  {
    icon: "/icon2.png",
    title: "City to city",
    blurb: "Choose comfort at fair price all the way long",
    links: ["For Travellers ›"],
  },
  {
    icon: "/icon3.png",
    title: "Delivery",
    blurb: "Express delivery for business and people.",
    links: ["For Clients ›", "For Couriers ›", "For Business ›"],
  },
  {
    icon: "/icon4.png",
    title: "EcoRide.Money",
    blurb: "Feel more freedom with fair loans.",
    links: ["For Drivers ›"],
  },
];

// -----------------------------
// Component
// -----------------------------

export default function Client() {
  const [idx, setIdx] = useState(0);
  const isFirstRender = useRef(true);
  const intervalRef = useRef<number | null>(null);

  // Theme tokens
  const themeVars: React.CSSProperties & Record<string, string> = useMemo(
    () => ({
      "--eco": "#00F06B", // Primary Eco Green
      "--dark": "#024122", // Dark Green
      "--ink": "#0B0B0B", // Dark grey
      "--paper": "#FAFFFB", // Off white background
      "--tint": "#DFFFEA", // Light green tint
      "--butter": "#FFF8D9", // pale background similar to screenshot
    }),
    []
  );

  // autoplay
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % STORIES.length);
    }, 6000);
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, []);

  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + STORIES.length) % STORIES.length);

  return (
    <section style={themeVars} className="w-full bg-[var(--butter)]">
      {/* Top Copy */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <p className="text-center text-[13px] font-semibold tracking-wide text-[var(--dark)]">Challenging injustice to make the world fairer for</p>
        <h2 className="mt-2 text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--ink)]">1 Billion People</h2>
      </div>

      {/* Slider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* left spacer card for alignment like screenshot */}
          <div className="hidden md:block rounded-2xl bg-white/60 ring-1 ring-black/5 h-[360px]" />

          {/* main card */}
          <div className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 sm:p-6 md:col-span-1 h-[420px] overflow-hidden">
            {/* lime diamond background */}
            <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rotate-45 rounded-lg bg-[var(--eco)]/90" />
            <div className="pointer-events-none absolute left-32 -bottom-20 h-56 w-56 rotate-45 rounded-lg bg-[var(--tint)]" />

            {STORIES.map((s, i) => (
              <article
                key={s.id}
                className={`absolute inset-0 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
                aria-hidden={i !== idx}
              >
                {/* Person image */}
                <div className="relative order-2 sm:order-1 h-full flex items-end sm:items-center">
                  <div className="relative h-48 w-48 sm:h-64 sm:w-64 mx-auto sm:mx-0 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                    <Image src={s.image} alt={s.location} fill sizes="(max-width: 640px) 192px, 256px" className="object-cover" />
                  </div>
                </div>

                {/* Text panel */}
                <div className="order-1 sm:order-2 flex flex-col justify-center">
                  {/* badge */}
                  <div className="inline-flex items-baseline gap-2 rounded-xl bg-[var(--butter)] px-3 py-1 text-[var(--ink)] w-max">
                    <span className="text-xl font-extrabold">{s.countryCount}</span>
                    <span className="text-xs uppercase tracking-wide text-[var(--ink)]/70">countries</span>
                  </div>

                  {/* quote */}
                  <p className="mt-3 rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-[var(--ink)]/80">“{s.quote}”</p>

                  {/* location */}
                  <p className="mt-5 flex items-center gap-2 text-white drop-shadow-sm font-semibold">
                    <MapPin className="h-4 w-4" /> {s.location}
                  </p>
                  <p className="text-white/90 text-xs -mt-1 drop-shadow-sm">{s.role}</p>

                  <a href="#story" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white hover:bg-black">
                    See the full story
                  </a>
                </div>
              </article>
            ))}

            {/* slider controls */}
            <div className="absolute left-1/2 -bottom-6 flex -translate-x-1/2 items-center gap-2">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow ring-1 ring-black/10">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow ring-1 ring-black/10">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* right spacer card for alignment */}
          <div className="hidden md:block rounded-2xl bg-white/60 ring-1 ring-black/5 h-[360px]" />
        </div>
      </div>

      {/* Services headline */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <div className="mx-auto w-max rounded-full bg-black text-white text-xs px-3 py-1">EcoRide app</div>
        <h3 className="mt-3 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)]">One app, many services</h3>
      </div>

      {/* Services grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 mb-16 grid grid-cols-1 gap-5 md:grid-cols-2">
        {SERVICES.map((svc) => (
          <div key={svc.title} className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-5 sm:p-6 flex gap-4">
            <div className="relative h-20 w-24 shrink-0">
              <Image src={svc.icon} alt="icon" fill className="object-contain" sizes="96px" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[var(--ink)]">{svc.title}</h4>
              <p className="mt-1 text-sm text-[var(--ink)]/70">{svc.blurb}</p>
              <div className="mt-3 space-y-1 text-sm font-medium text-[var(--dark)]">
                {svc.links.map((l) => (
                  <div key={l}><a href="#" className="hover:underline">{l}</a></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
