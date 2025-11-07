"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar({ current = "Services" }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only the three items you asked for
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "About us", href: "#about" },
  ];

  // Dark theme variables
  const themeVars: React.CSSProperties & Record<string, string> = {
    "--eco": "#00F06B",
    "--dark": "#0A0A0A",
    "--cta": "#FFD84D",
    "--ink": "#FFFFFF",     // text color on dark
    "--paper": "#000000",   // navbar background
    "--tint": "rgba(255,255,255,0.08)", // subtle active underline
  };

  return (
    <header
      style={themeVars}
      className={`sticky top-0 z-50 w-full transition-shadow ${
        elevated ? "shadow-[0_6px_24px_rgba(0,0,0,0.6)]" : "shadow-none"
      } bg-[var(--paper)]/90 backdrop-blur font-[var(--nav-font)]`}
    >
      <style jsx global>{`
        :root {
          --nav-font: "Unbounded", "Work Sans", sans-serif;
        }
      `}</style>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* increased navbar height */}
        <div className="flex h-28 items-center justify-between">
          {/* Bigger logo for visibility */}
          <a href="#home" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Logo"
              width={240}
              height={60}
              className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
              priority
            />
            <span className="sr-only">Home</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-2 lg:gap-4 xl:gap-6">
            {navItems.map((item) => {
              const active = current.toLowerCase() === item.label.toLowerCase();
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink)]/80 hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-2 rounded-full bg-[var(--tint)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions (adjusted for dark bg) */}
          <div className="hidden items-center gap-2 sm:gap-3 md:flex">
            <div className="relative group">
              <button className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--ink)]/90 hover:bg-white/10">
                English <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <a
              href="#signin"
              className="inline-flex items-center justify-center rounded-full bg-[var(--eco)] px-5 py-3 text-sm font-semibold text-[var(--dark)] shadow-[0_8px_30px_rgba(0,240,107,0.25)] hover:brightness-95"
            >
              Sign In
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-3 text-[var(--ink)]/90 hover:bg-white/10 md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/10 py-3">
            <div className="flex flex-col divide-y divide-white/10">
              {navItems.map((item) => {
                const active =
                  current.toLowerCase() === item.label.toLowerCase();
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between px-1 py-4 text-base ${
                      active
                        ? "text-[var(--ink)]"
                        : "text-[var(--ink)]/80 hover:text-[var(--ink)]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {active && (
                      <span className="ml-3 inline-block h-3 w-3 rounded-full bg-[var(--eco)]" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-[var(--ink)]/90 hover:bg-white/10">
                English <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="#signin"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--eco)] px-5 py-3 text-sm font-semibold text-[var(--dark)] shadow-[0_8px_30px_rgba(0,240,107,0.25)]"
                onClick={() => setOpen(false)}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* accent bar kept */}
      <div className="h-[3px] bg-[var(--eco)]" />
    </header>
  );
}
