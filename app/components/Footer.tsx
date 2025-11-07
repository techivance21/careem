"use client";
import Image from "next/image";
import { Globe, MapPin, HelpCircle, Car, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* ANIMATED BRAND BACKGROUND (embedded CSS) */}
      <style jsx>{`
        @keyframes ecoGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ecoBlobs {
          0% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(8%, 6%) scale(1.18); }
          100% { transform: translate(-10%, -10%) scale(1); }
        }
      `}</style>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, #00F06B, #3DD9A7, #DFFFEA, #024122, #00F06B)",
          backgroundSize: "300% 300%",
          animation: "ecoGradientShift 14s ease-in-out infinite",
        }}
      />

      <div
        className="absolute inset-0 -z-10 mix-blend-screen blur-2xl"
        style={{
          background:
            "radial-gradient(40% 40% at 20% 30%, #DFFFEA88 0%, transparent 60%)," +
            "radial-gradient(40% 40% at 80% 25%, #3DD9A788 0%, transparent 60%)," +
            "radial-gradient(45% 45% at 70% 75%, #00F06B88 0%, transparent 60%)," +
            "radial-gradient(45% 45% at 30% 80%, #02412288 0%, transparent 60%)",
          animation: "ecoBlobs 18s ease-in-out infinite",
        }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">

        {/* LOGO + BUTTONS */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="sDrive"
              width={240}
              height={80}
              className="h-16 w-auto drop-shadow-lg"
              priority
            />
            <span className="text-4xl font-extrabold tracking-tight">sDrive</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm hover:bg-white/30 transition">
              <MapPin className="h-4 w-4" /> South Africa
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm hover:bg-white/30 transition">
              <Globe className="h-4 w-4" /> English
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm hover:bg-white/30 transition">
              <HelpCircle className="h-4 w-4" /> Help Centre
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#024122] shadow-sm">
              <Car className="h-4 w-4" /> Book your ride
            </button>
          </div>
        </div>

        {/* FOOTER LINK COLUMNS */}
        <div className="mt-14 grid grid-cols-2 gap-10 sm:grid-cols-4 text-white/90 text-sm">
          <div>
            <h4 className="text-lg font-extrabold">Services</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:underline">Go</a></li>
              <li><a href="#" className="hover:underline">Eat</a></li>
              <li><a href="#" className="hover:underline">Courier</a></li>
              <li><a href="#" className="hover:underline">Pay</a></li>
              <li><a href="#" className="hover:underline">sDrive Plus</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">Partners</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:underline">Corporate packages</a></li>
              <li><a href="#" className="hover:underline">Restaurant delivery</a></li>
              <li><a href="#" className="hover:underline">B2B delivery</a></li>
              <li><a href="#" className="hover:underline">Become a supplier</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">Join our team</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Engineering at sDrive</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Explore roles</a></li>
              <li><a href="#" className="hover:underline">Why sDrive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">About us</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:underline">Our social impact</a></li>
              <li><a href="#" className="hover:underline">Information security</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-white/30" />

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/90">
          <p>sDrive © {new Date().getFullYear()} — All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>

          <div className="flex gap-4">
            <Facebook className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            <Instagram className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            <Linkedin className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            <Youtube className="h-5 w-5 hover:opacity-80 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
