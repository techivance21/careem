"use client";

import Image from "next/image";
import { useState } from "react";

type MenuLink = {
  label: string;
  href: string;
};

const NAV_LINKS: MenuLink[] = [
  { label: "Home", href: "#" },
  { label: "Pages", href: "#pages" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LINKS: MenuLink[] = [
  { label: "Our Services", href: "#services-overview" },
  { label: "Web Designing", href: "#web-designing" },
  { label: "Web Development", href: "#web-development" },
  { label: "Web Application", href: "#web-application" },
  { label: "Content Writing", href: "#content-writing" },
  { label: "Design Branding", href: "#design-branding" },
  { label: "Digital Marketing", href: "#digital-marketing" },
];

const ACCENT_HEX = "#F73A8D";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleCloseMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0E1522] text-white">
      <DecorationLayers />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="w-full border-b border-white/10 bg-[rgba(11,16,26,0.78)] shadow-[0_18px_48px_rgba(7,9,15,0.6)] backdrop-blur-xl">
          <div className="mx-auto flex h-[92px] w-full max-w-[1200px] items-center justify-between px-6">
            <BrandMark />
            <DesktopNavigation accentHex={ACCENT_HEX} />
            <DesktopActions accentHex={ACCENT_HEX} />
            <MobileActions
              accentHex={ACCENT_HEX}
              mobileOpen={mobileOpen}
              onOpen={() => setMobileOpen(true)}
            />
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 pb-24 pt-28 lg:pt-36">
          <div className="max-w-[620px] text-center lg:text-left">
            <p className="text-[13px] font-semibold uppercase tracking-[0.55em] text-white/60">
              Crafted For Creative Agencies
            </p>
            <h1 className="mt-6 text-4xl font-black uppercase leading-[1.1] tracking-[0.24em] text-white sm:text-5xl lg:text-6xl">
              Building Memorable Digital Experiences
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
              This hero area is intentionally minimal so the navigation can take
              center stage. Swap in your own copy, imagery, or calls to action
              once you have aligned the rest of the page with the provided
              navigation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <button
                type="button"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.32em] text-[#111827] shadow-[0_20px_40px_rgba(12,18,32,0.45)] transition hover:bg-slate-100"
              >
                Explore Work
              </button>
              <button
                type="button"
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.32em] text-white transition hover:border-white hover:bg-white/10"
              >
                Watch Reel
              </button>
            </div>
          </div>
        </main>
      </div>

      <MobileMenu
        accentHex={ACCENT_HEX}
        open={mobileOpen}
        servicesOpen={mobileServicesOpen}
        onClose={handleCloseMobile}
        toggleServices={() => setMobileServicesOpen((prev) => !prev)}
      />
    </div>
  );
}

function DecorationLayers() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,58,141,0.28),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(92,120,255,0.32),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,15,0.88)_0%,rgba(6,9,15,0.92)_55%,rgba(5,8,12,0.96)_100%)]" />
    </>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-[64px] w-[64px] shrink-0">
        <Image
          src="/logo-placeholder.svg"
          alt="Flyweb placeholder logo"
          fill
          sizes="64px"
          priority
        />
      </div>
      <div className="hidden flex-col leading-[1.1] uppercase tracking-[0.24em] lg:flex">
        <span className="text-[26px] font-black text-white">Flyweb</span>
        <span className="text-[12px] font-semibold tracking-[0.38em] text-white/65">
          Inspiring Web
        </span>
      </div>
    </div>
  );
}

function DesktopNavigation({ accentHex }: { accentHex: string }) {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {NAV_LINKS.map((item) => {
        if (item.label === "Services") {
          return (
            <div key={item.label} className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 uppercase tracking-[0.28em]"
                style={{
                  fontSize: "14px",
                  fontWeight: item.label === "Home" ? 700 : 600,
                  color: item.label === "Home" ? accentHex : "rgba(255,255,255,0.8)",
                }}
              >
                <span>Services</span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  className="text-current"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 1.5 6 6l4.5-4.5"
                    fill="none"
                    stroke={accentHex}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%+28px)] min-w-[260px] -translate-x-1/2 rounded-[22px] bg-white py-6 opacity-0 shadow-[0_35px_80px_rgba(10,16,30,0.45)] transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="flex flex-col gap-2 px-7 text-left">
                  {SERVICES_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        className="block rounded-[12px] px-2 py-2 text-[15px] font-semibold tracking-tight text-[#1F2734] transition hover:bg-[#F5F7FB]"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }

        return (
          <a
            key={item.label}
            className={`uppercase tracking-[0.28em] transition ${
              item.label === "Home"
                ? "text-[14px] font-semibold text-[#F73A8D]"
                : "text-[14px] font-semibold text-white/75 hover:text-white"
            }`}
            href={item.href}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

function DesktopActions({ accentHex }: { accentHex: string }) {
  return (
    <div className="hidden items-center gap-6 lg:flex">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/8 backdrop-blur">
        <CartIcon />
        <span
          className="absolute -right-2.5 -top-2.5 flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] font-bold shadow-[0_12px_24px_rgba(45,6,32,0.45)]"
          style={{ backgroundColor: accentHex }}
        >
          0
        </span>
      </div>
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-white/80 transition hover:bg-white/12"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
      <button
        type="button"
        className="rounded-[16px] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_24px_45px_rgba(255,58,141,0.35)] transition hover:brightness-110"
        style={{ backgroundColor: accentHex }}
      >
        Free Quote
      </button>
    </div>
  );
}

function MobileActions({
  accentHex,
  mobileOpen,
  onOpen,
}: {
  accentHex: string;
  mobileOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="flex items-center gap-4 lg:hidden">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/8">
        <CartIcon />
        <span
          className="absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full text-[10px] font-bold shadow-[0_10px_18px_rgba(45,6,32,0.45)]"
          style={{ backgroundColor: accentHex }}
        >
          0
        </span>
      </div>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-white/80 transition hover:bg-white/12"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-[12px] text-white shadow-[0_18px_32px_rgba(110,16,73,0.55)] transition hover:brightness-110"
        onClick={onOpen}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        style={{ backgroundColor: accentHex }}
      >
        <span className="sr-only">Open navigation</span>
        <BurgerIcon />
      </button>
    </div>
  );
}

function MobileMenu({
  accentHex,
  open,
  servicesOpen,
  toggleServices,
  onClose,
}: {
  accentHex: string;
  open: boolean;
  servicesOpen: boolean;
  toggleServices: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-40 transition duration-300 ease-in-out lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <nav
        id="mobile-navigation"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[360px] flex-col bg-white text-[#1B2331] shadow-[0_35px_60px_rgba(0,0,0,0.35)] transition duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-[#E6E8EF] px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="relative h-[52px] w-[52px]">
              <Image
                src="/logo-placeholder.svg"
                alt="Flyweb placeholder logo"
                fill
                sizes="52px"
              />
            </div>
            <div className="flex flex-col uppercase leading-[1.05]">
              <span className="text-[20px] font-black tracking-[0.24em]">
                Flyweb
              </span>
              <span className="text-[10px] font-semibold tracking-[0.36em] text-[#6B7280]">
                Inspiring Web
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F5F8]">
              <CartIcon color="#1B2331" />
              <span
                className="absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: accentHex }}
              >
                0
              </span>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F5F8] text-[#1B2331]"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-[12px] text-white shadow-[0_18px_28px_rgba(247,58,141,0.45)] transition hover:brightness-110"
              onClick={onClose}
              aria-label="Close navigation"
              style={{ backgroundColor: accentHex }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-12 pt-2">
          <ul>
            {NAV_LINKS.map((item) => {
              const isServices = item.label === "Services";
              const isActive = item.label === "Home";

              if (isServices) {
                return (
                  <li key={item.label} className="border-b border-[#ECEEF4]">
                    <button
                      type="button"
                      onClick={toggleServices}
                      className="flex w-full items-center justify-between py-[22px]"
                    >
                      <span
                        className={`text-[15px] font-semibold uppercase tracking-[0.28em] ${
                          isActive ? "text-[#F73A8D]" : "text-[#1B2331]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-[24px] font-semibold leading-none"
                        style={{ color: accentHex }}
                        aria-hidden="true"
                      >
                        {servicesOpen ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      className={`grid transform-gpu transition-[max-height,opacity,margin] duration-300 ${
                        servicesOpen
                          ? "max-h-[320px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-3 bg-[#F6F8FB] px-5 py-5">
                        {SERVICES_LINKS.map((link) => (
                          <li key={link.label}>
                            <a
                              className="block rounded-[12px] px-2 py-2 text-[14px] font-semibold text-[#1E2836]"
                              href={link.href}
                              onClick={onClose}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-[#ECEEF4]">
                  <a
                    className="flex items-center justify-between py-[22px]"
                    href={item.href}
                    onClick={onClose}
                  >
                    <span
                      className={`text-[15px] font-semibold uppercase tracking-[0.28em] ${
                        isActive ? "text-[#F73A8D]" : "text-[#1B2331]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-[24px] font-semibold leading-none ${
                        isActive ? "text-[#F73A8D]" : "text-[#C6C9D3]"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

function CartIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 6.5V5.75a4 4 0 1 1 8 0v.75M4.75 6.5h11.5l.75 11a1.5 1.5 0 0 1-1.5 1.5H5.5a1.5 1.5 0 0 1-1.5-1.5l.75-11Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.875 13.875 17 17m-2.75-7.125a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 2h18M2 9h14M2 16h18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="m3 3 12 12M15 3 3 15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}