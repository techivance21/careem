"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Bell, ChevronRight, MapPin } from "lucide-react";
import {
  RiInboxFill,
  RiCalendarScheduleFill,
  RiSearchLine,
  RiTruckFill,
} from "react-icons/ri";

// CSS variables type helper
type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

export default function Home() {
  const themeVars: CSSVars = useMemo(
    () => ({
      "--eco": "#00F06B",   // ECO GREEN
      "--tint": "#DFFFEA",  // LIGHT GREEN
      "--dark": "#024122",  // DARK GREEN
      "--ink": "#0B0B0B",
      "--paper": "#FFFFFF",
    }),
    []
  );

  return (
    <section
      style={themeVars}
      className="w-full bg-[var(--paper)] text-[var(--ink)]"
    >
      {/* Wider container */}
      <div className="mx-auto w-full max-w-7xl min-h-screen bg-white">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-8 pt-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--tint)] text-[var(--dark)] font-bold">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <div className="text-xs text-black/60">Home</div>
              <button className="flex items-center gap-1 text-[15px] font-semibold">
                Eiffel Tower, France
                <ChevronRight className="h-4 w-4 text-black/40" />
              </button>
            </div>
          </div>

          <button className="grid h-9 w-9 place-items-center rounded-full bg-black/5">
            <Bell className="h-5 w-5 text-black/70" />
          </button>
        </header>

        {/* What's today offers? */}
        <h2 className="px-4 md:px-8 mt-5 text-lg font-semibold">What’s today offers?</h2>

        <div className="px-4 md:px-8 mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {/* Offer Card 1 — WIDER + side-by-side so image never covers text */}
          <article className="relative overflow-hidden rounded-2xl bg-[var(--dark)] text-white p-5 md:p-7 flex flex-col md:flex-row items-center md:items-start justify-between min-h-[180px] lg:col-span-2">
            {/* Text block */}
            <div className="flex-1 z-10">
              <h3 className="text-[22px] md:text-[26px] font-extrabold leading-snug">
                First Delivery on Us!
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/90 max-w-[520px]">
                Send your first package absolutely free via Bike delivery.
              </p>
              <button className="mt-4 inline-flex items-center rounded-xl bg-white text-[var(--dark)] px-5 py-2.5 text-sm font-semibold shadow-sm hover:brightness-95 transition">
                Send Now
              </button>
            </div>

            {/* Bot image */}
            <div className="relative h-28 w-28 md:h-40 md:w-40 lg:h-48 lg:w-48 flex-shrink-0 md:ml-6 mt-4 md:mt-0">
              <Image
                src="/bot1.png"
                alt="Bot delivery"
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 192px"
                priority
              />
            </div>

            {/* subtle gradient polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--dark)]/40 to-transparent" />
          </article>

          {/* Offer Card 2 */}
          <article className="relative overflow-hidden rounded-2xl bg-[var(--tint)] text-[var(--dark)] p-4 md:p-5">
            <h3 className="text-[20px] font-extrabold">Flat 20% Off</h3>
            <p className="mt-1 text-sm text-[var(--dark)]/80">
              Book a scheduled package today and save more.
            </p>
            <button className="mt-3 inline-flex items-center rounded-xl bg-[var(--dark)] text-white px-4 py-2 text-sm font-semibold">
              Schedule
            </button>
          </article>

          {/* Optional third card for balance on lg screens */}
          <article className="hidden lg:block relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 p-4 md:p-5">
            <h3 className="text-[20px] font-extrabold text-[var(--dark)]">Same-Day Courier</h3>
            <p className="mt-1 text-sm text-[var(--ink)]/70">
              Fast pickup and delivery within your city.
            </p>
            <button className="mt-3 inline-flex items-center rounded-xl bg-[var(--eco)] text-[#024122] px-4 py-2 text-sm font-semibold">
              Book Now
            </button>
          </article>
        </div>

        {/* What are you looking for today? */}
        <h2 className="px-4 md:px-8 mt-6 text-lg font-semibold">What are you looking for today?</h2>

        <div className="px-4 md:px-8 mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Send Packages */}
          <button className="flex items-center justify-between rounded-2xl bg-white ring-1 ring-black/10 p-4 hover:ring-black/20 transition">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--tint)] text-[var(--dark)]">
                <RiInboxFill className="h-5 w-5" />
              </div>
              <span className="font-semibold">Send Packages</span>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--dark)]">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </button>

          {/* Schedule Packages */}
          <button className="flex items-center justify-between rounded-2xl bg-white ring-1 ring-black/10 p-4 hover:ring-black/20 transition">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--tint)] text-[var(--dark)]">
                <RiCalendarScheduleFill className="h-5 w-5" />
              </div>
              <span className="font-semibold">Schedule Packages</span>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--dark)]">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </button>

          {/* Track Package (icon) */}
          <button className="hidden sm:flex items-center justify-between rounded-2xl bg-white ring-1 ring-black/10 p-4 hover:ring-black/20 transition">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--tint)] text-[var(--dark)]">
                <RiSearchLine className="h-5 w-5" />
              </div>
              <span className="font-semibold">Track Package</span>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--dark)]">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </button>

          {/* Bulk Shipping (icon) */}
          <button className="hidden sm:flex items-center justify-between rounded-2xl bg-white ring-1 ring-black/10 p-4 hover:ring-black/20 transition">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--tint)] text-[var(--dark)]">
                <RiTruckFill className="h-5 w-5" />
              </div>
              <span className="font-semibold">Bulk Shipping</span>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--dark)]">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>

        {/* Our Services — EXACTLY 3 wider cards */}
        <h2 className="px-4 md:px-8 mt-6 text-lg font-semibold">Our Services</h2>

        <div className="px-4 md:px-8 mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-black/10 hover:ring-black/20 transition">
            <div className="relative h-16 w-16">
              <Image
                src="/icon5.png"
                alt="Send Parcel"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <div className="mt-3 text-center text-[14px] font-medium">Send Parcel</div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-black/10 hover:ring-black/20 transition">
            <div className="relative h-16 w-16">
              <Image
                src="/icon6.png"
                alt="Logistics"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <div className="mt-3 text-center text-[14px] font-medium">Logistics</div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-black/10 hover:ring-black/20 transition">
            <div className="relative h-16 w-16">
              <Image
                src="/icon7.png"
                alt="Bulk shipping"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <div className="mt-3 text-center text-[14px] font-medium">Bulk shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
}
