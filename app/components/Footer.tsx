"use client";
import Image from "next/image";
import { Globe, MapPin, HelpCircle, Car, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

/**
 * Footer.tsx — Careem-like footer, themed to Eco Green
 * - No store badges (as requested)
 * - Logo: /logo.png
 * - Fonts: use Unbounded for headings, Work Sans for body (apply via global classes if using next/font)
 */

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Go", href: "#" },
      { label: "Eat", href: "#" },
      { label: "Get", href: "#" },
      { label: "Pay", href: "#" },
      { label: "EcoRide Plus", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Corporate packages", href: "#" },
      { label: "Restaurant delivery", href: "#" },
      { label: "B2B delivery", href: "#" },
      { label: "Become a supplier", href: "#" },
    ],
  },
  {
    title: "Join our team",
    links: [
      { label: "About us", href: "#" },
      { label: "Engineering at EcoRide", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Explore open roles", href: "#" },
      { label: "Why EcoRide", href: "#" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Our social impact", href: "#" },
      { label: "Information security", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={
        {
          // theme tokens
          "--eco": "#00F06B",
          "--dark": "#024122",
          "--ink": "#0B0B0B",
          "--paper": "#FAFFFB",
          "--tint": "#DFFFEA",
        } as React.CSSProperties
      }
      className="relative w-full bg-white text-[var(--ink)]"
    >
      {/* Top mint diagonal strip */}
      <div
        aria-hidden
        className="h-[56px] w-full bg-[var(--tint)]"
        style={{ clipPath: "polygon(0 0, 100% 12%, 100% 100%, 0 100%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo + (empty space where badges would be) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="EcoRide"
              width={132}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Right controls (country / language / quick-help) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
              <MapPin className="h-4 w-4" />
              U.A.E.
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
              <Globe className="h-4 w-4" />
              English
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
              <HelpCircle className="h-4 w-4" />
              Help Centre
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
              <Car className="h-4 w-4" />
              Book your ride
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-[unbounded] text-[var(--dark)] text-lg font-extrabold">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 font-[work_sans] text-[15px] text-[var(--ink)]/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-[var(--ink)]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile quick controls (below columns) */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
            <MapPin className="h-4 w-4" />
            U.A.E.
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80">
            <Globe className="h-4 w-4" />
            English
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80 col-span-2">
            <HelpCircle className="h-4 w-4" />
            Help Centre
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-[var(--ink)]/80 col-span-2">
            <Car className="h-4 w-4" />
            Book your ride
          </button>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-black/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--ink)]/70">
            All rights reserved. EcoRide © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-6 text-sm text-[var(--ink)]/80">
            <a href="#" className="hover:text-[var(--ink)]">Terms of Service</a>
            <a href="#" className="hover:text-[var(--ink)]">Privacy Notices</a>
          </div>

          <div className="flex items-center gap-3 text-[var(--ink)]/70">
            <a aria-label="Facebook" href="#"><Facebook className="h-5 w-5" /></a>
            <a aria-label="Twitter" href="#"><Twitter className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#"><Instagram className="h-5 w-5" /></a>
            <a aria-label="LinkedIn" href="#"><Linkedin className="h-5 w-5" /></a>
            <a aria-label="YouTube" href="#"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
