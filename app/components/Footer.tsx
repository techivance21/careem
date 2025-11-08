"use client";
import Image from "next/image";
import {
  Globe,
  MapPin,
  HelpCircle,
  Car,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={
        {
          // Theme tokens (single source of truth)
          "--eco": "#00F06B",     // ECO GREEN
          "--light": "#DFFFEA",   // LIGHT GREEN
          "--dark": "#024122",    // DARK GREEN
          "--teal": "#3DD9A7",    // TEAL MIST
          "--mint": "#B3FFE4",    // SKY MINT
        } as React.CSSProperties
      }
    >
      {/* Embedded CSS (subtle brand animation) */}
      <style jsx>{`
        @keyframes ecoGradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes ecoBlobs {
          0% {
            transform: translate(-6%, -8%) scale(1);
            filter: blur(48px);
          }
          50% {
            transform: translate(6%, 4%) scale(1.12);
            filter: blur(52px);
          }
          100% {
            transform: translate(-6%, -8%) scale(1);
            filter: blur(48px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .eco-anim,
          .eco-blobs {
            animation: none !important;
          }
        }
      `}</style>

      {/* Subtle dark-green → teal → eco sweep */}
      <div
        className="absolute inset-0 -z-10 eco-anim"
        style={{
          background:
            "linear-gradient(120deg, rgba(2,65,34,0.98), rgba(61,217,167,0.95), rgba(0,240,107,0.92))",
          backgroundSize: "220% 220%",
          animation: "ecoGradientShift 16s ease-in-out infinite",
        }}
      />

      {/* Soft mint glows (adds depth, not rainbow) */}
      <div
        className="absolute inset-0 -z-10 eco-blobs mix-blend-screen"
        style={{
          background:
            "radial-gradient(34% 34% at 20% 30%, rgba(179,255,228,0.25) 0%, rgba(179,255,228,0) 60%)," + // sky mint
            "radial-gradient(32% 32% at 78% 26%, rgba(223,255,234,0.22) 0%, rgba(223,255,234,0) 60%)," + // light green
            "radial-gradient(36% 36% at 72% 78%, rgba(0,240,107,0.18) 0%, rgba(0,240,107,0) 60%)",
          animation: "ecoBlobs 18s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Logo + quick actions */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="sDrive"
              width={280}
              height={92}
              className="h-16 sm:h-[68px] w-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
              priority
            />
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              sDrive
            </span>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition">
              <MapPin className="h-4 w-4" /> South Africa
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition">
              <Globe className="h-4 w-4" /> English
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition">
              <HelpCircle className="h-4 w-4" /> Help Centre
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-[var(--eco)] px-4 py-2 text-sm font-semibold text-[var(--dark)] shadow-[0_10px_30px_rgba(0,240,107,0.25)] hover:brightness-95 transition">
              <Car className="h-4 w-4" /> Book your ride
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4 text-white/90 text-sm">
          <div>
            <h4 className="text-lg font-extrabold">Services</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Go
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Eat
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Courier
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  sDrive Plus
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">Partners</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Corporate packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Restaurant delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  B2B delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become a supplier
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">Join our team</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Engineering at sDrive
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore roles
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why sDrive
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">About us</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Our social impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Information security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile quick actions */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition">
            <MapPin className="h-4 w-4" />
            South Africa
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition">
            <Globe className="h-4 w-4" />
            English
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm hover:bg-white/14 transition col-span-2">
            <HelpCircle className="h-4 w-4" />
            Help Centre
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--eco)] px-4 py-2 text-sm font-semibold text-[var(--dark)] shadow-[0_10px_30px_rgba(0,240,107,0.25)] hover:brightness-95 transition col-span-2">
            <Car className="h-4 w-4" />
            Book your ride
          </button>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/25" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/90">
          <p>sDrive © {new Date().getFullYear()} — All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:opacity-90">
              Terms
            </a>
            <a href="#" className="hover:opacity-90">
              Privacy
            </a>
          </div>

          <div className="flex gap-4">
            <a aria-label="Facebook" href="#" className="hover:opacity-85">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Twitter" href="#" className="hover:opacity-85">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="#" className="hover:opacity-85">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="#" className="hover:opacity-85">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="YouTube" href="#" className="hover:opacity-85">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
