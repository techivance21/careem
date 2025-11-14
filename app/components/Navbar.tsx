"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Car } from "lucide-react";

export default function Navbar({ current = "Services" }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "About us", href: "#about" },
  ];

  // SDrive theme
  const themeVars: React.CSSProperties & Record<string, string> = {
    "--eco": "#00F06B", // ECO GREEN
    "--light": "#DFFFEA", // LIGHT GREEN
    "--dark-green": "#024122", // DARK GREEN
    "--teal": "#3DD9A7", // TEAL MIST
    "--sky": "#B3FFE4", // SKY MINT
    "--ink": "#FFFFFF",
    "--paper": "#020A06", // deep dark green/black mix
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

        @keyframes carFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes shimmerRoute {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(140%);
          }
        }
      `}</style>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Logo + SDrive brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="SDrive Logo"
                width={240}
                height={60}
                className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
                priority
              />

              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1">
                  <Car
                    className="h-4 w-4 text-[var(--eco)] animate-[carFloat_2.2s_ease-in-out_infinite]"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-semibold tracking-tight text-[var(--ink)]">
                    SDrive
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--sky)]/80">
                  <div className="relative inline-flex h-[3px] w-14 overflow-hidden rounded-full bg-[var(--light)]/15">
                    <span className="absolute inset-y-0 w-1/2 rounded-full bg-[var(--eco)]/90 animate-[shimmerRoute_2.4s_linear_infinite]" />
                  </div>
                  <span>Smart city rides</span>
                </div>
              </div>
            </div>
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
                      ? "text-[var(--eco)]"
                      : "text-[var(--ink)]/80 hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                  {/* underline removed */}
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 sm:gap-3 md:flex">
            <div className="relative group">
              <button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--ink)]/85 hover:bg-white/10">
                English <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <a
              href="#signin"
              className="inline-flex items-center justify-center rounded-full bg-[var(--eco)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#00d65f]"
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
                        ? "text-[var(--eco)]"
                        : "text-[var(--ink)]/80 hover:text-[var(--ink)]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[var(--ink)]/90 hover:bg_white/10">
                English <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="#signin"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--eco)] px-5 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[#00d65f]"
                onClick={() => setOpen(false)}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* bottom green bar removed */}
    </header>
  );
}
