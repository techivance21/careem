"use client";

import React from "react";
import { Car, Bike, Bolt, Navigation, Package } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020A06] py-16 sm:py-20 lg:py-24"
    >
      {/* soft gradient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#00F06B]/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-[#3DD9A7]/15 blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#B3FFE4]/30 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes driveDiagonal {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(18px, -8px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes driveReverse {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-18px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes blinkDot {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-10 lg:px-8">
        {/* LEFT: Text / Content */}
        <div className="relative z-10 max-w-xl lg:max-w-lg">
          {/* mini pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DFFFEA]/20 bg-[#024122]/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#B3FFE4]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Electric-first, human-centred mobility
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1] font-[var(--nav-font)]">
            SDrive is more than transport.
            <span className="block bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4] bg-clip-text text-transparent">
              It&apos;s a movement across Africa.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/70">
            SDrive is building a network of safe, dignified and electric mobility
            for every city we touch. Cars, bikes, taxis and charging stations —
            all working together so movement feels simple, modern and fair.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] text-[#DFFFEA]/90">
            Whether you&apos;re a driver, a passenger, or a partner,
            <span className="text-[#00F06B]"> we&apos;re here to move you forward.</span>
          </p>

          {/* quick choices buttons */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap gap-3">
              <a
                href="#lease-car"
                className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-5 py-3 text-sm font-semibold text-[#024122] shadow-[0_10px_35px_rgba(0,240,107,0.26)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#00d65f]"
              >
                Lease a Car
              </a>
              <a
                href="#lease-bike"
                className="inline-flex items-center justify-center rounded-full border border-[#3DD9A7]/60 bg-white/5 px-5 py-3 text-sm font-semibold text-[#DFFFEA] hover:bg-white/10"
              >
                Lease a Bike
              </a>
              <a
                href="#book-taxi"
                className="inline-flex items-center justify-center rounded-full border border-[#B3FFE4]/60 bg-[#024122]/60 px-5 py-3 text-sm font-semibold text-[#B3FFE4] hover:bg-[#024122]/80"
              >
                Book a Taxi
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-[13px]">
              <a
                href="#delivery"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 font-medium text-white/80 hover:bg-white/5"
              >
                <Package className="mr-2 h-4 w-4" />
                Send a Delivery
              </a>
              <a
                href="#charger"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 font-medium text-white/80 hover:bg-white/5"
              >
                <Bolt className="mr-2 h-4 w-4 text-[#00F06B]" />
                Find a Charger
              </a>
            </div>
          </div>

          {/* trust / subline */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00F06B]/10 text-[10px] font-semibold text-[#00F06B]">
                EV
              </span>
              <span>Electric-ready fleet for modern African cities.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1 w-8 rounded-full bg-gradient-to-r from-[#00F06B] to-[#3DD9A7]" />
              <span>Designed for drivers, riders & partners.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Animated city / vehicles */}
        <div className="relative z-10 w-full max-w-xl flex-1 lg:max-w-none">
          <div className="relative mx-auto h-[320px] w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-[#06130E] via-[#02120C] to-[#020A06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.7)] sm:h-[360px] lg:h-[380px]">
            {/* map grid */}
            <div className="absolute inset-4 rounded-2xl border border-[#DFFFEA]/10 bg-gradient-to-tr from-[#024122]/60 via-[#020A06] to-[#02120C]/80" />
            <div className="pointer-events-none absolute inset-6">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(0,240,107,0.12),_transparent_60%),_repeating-linear-gradient(90deg,_rgba(179,255,228,0.13)_0,_rgba(179,255,228,0.13)_1px,_transparent_1px,_transparent_22px),_repeating-linear-gradient(0deg,_rgba(179,255,228,0.09)_0,_rgba(179,255,228,0.09)_1px,_transparent_1px,_transparent_22px)] opacity-80" />
            </div>

            {/* charging hub card */}
            <div
              className="absolute left-6 top-5 flex items-center gap-3 rounded-2xl bg-[#020A06]/90 px-3 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.7)]"
              style={{ animation: "floatSoft 4.8s ease-in-out infinite" }}
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[#024122]">
                <Bolt className="h-4 w-4 text-[#00F06B]" />
                <span
                  className="pointer-events-none absolute inline-flex h-8 w-8 rounded-full border border-[#00F06B]/30"
                  style={{ animation: "pulseRing 1.8s ease-out infinite" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#DFFFEA]">
                  Charging hub
                </span>
                <span className="text-[10px] text-[#B3FFE4]/80">
                  12 EVs connected · Live
                </span>
              </div>
            </div>

            {/* moving car */}
            <div
              className="absolute left-10 bottom-16 flex items-center gap-2 rounded-2xl bg-[#020A06]/95 px-3 py-2 shadow-[0_10px_32px_rgba(0,0,0,0.8)]"
              style={{ animation: "driveDiagonal 5s ease-in-out infinite" }}
            >
              <div className="flex h-7 w-9 items-center justify-center rounded-xl bg-[#00F06B]">
                <Car className="h-4 w-4 text-[#024122]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-white">
                  Trip in progress
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#DFFFEA]/80">
                  <Navigation className="h-3 w-3 text-[#B3FFE4]" />
                  Yaba → Victoria Island
                </span>
              </div>
            </div>

            {/* moving bike */}
            <div
              className="absolute right-10 bottom-10 flex items-center gap-2 rounded-2xl bg-[#020A06]/95 px-3 py-2 shadow-[0_10px_32px_rgba(0,0,0,0.8)]"
              style={{ animation: "driveReverse 4.4s ease-in-out infinite" }}
            >
              <div className="flex h-7 w-9 items-center justify-center rounded-xl bg-[#3DD9A7]">
                <Bike className="h-4 w-4 text-[#024122]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-white">
                  2-min pickup
                </span>
                <span className="text-[10px] text-[#DFFFEA]/80">
                  Ikeja · EcoBike
                </span>
              </div>
            </div>

            {/* delivery tag */}
            <div
              className="absolute right-7 top-16 flex items-center gap-2 rounded-2xl bg-[#024122]/90 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              style={{ animation: "floatSoft 5.4s ease-in-out infinite", animationDelay: "0.7s" }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#00F06B]/10">
                <Package className="h-3.5 w-3.5 text-[#B3FFE4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-medium text-[#DFFFEA]">
                  Parcel en route
                </span>
                <span className="text-[10px] text-[#B3FFE4]/80">
                  14 min · Guaranteed
                </span>
              </div>
            </div>

            {/* partner stats */}
            <div className="absolute inset-x-10 bottom-3 flex items-center justify-between rounded-2xl border border-white/8 bg-[#020A06]/85 px-4 py-3 text-[10px] text-[#DFFFEA]/80">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-white">
                  3,200+
                </span>
                <span>Active drivers</span>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#00F06B]">
                  68%
                </span>
                <span>Electric / hybrid</span>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div className="flex flex-col text-right">
                <span className="text-[11px] font-semibold text-[#B3FFE4]">
                  50+ cities
                </span>
                <span>across Africa</span>
              </div>
            </div>

            {/* blinking route dots */}
            <div className="pointer-events-none absolute inset-10">
              <div
                className="absolute left-8 top-24 h-2 w-2 rounded-full bg-[#00F06B]"
                style={{ animation: "blinkDot 1.8s ease-in-out infinite" }}
              />
              <div
                className="absolute left-1/2 top-12 h-2 w-2 rounded-full bg-[#B3FFE4]"
                style={{
                  animation: "blinkDot 2.2s ease-in-out infinite",
                  animationDelay: "0.4s",
                }}
              />
              <div
                className="absolute right-10 top-32 h-2 w-2 rounded-full bg-[#3DD9A7]"
                style={{
                  animation: "blinkDot 2s ease-in-out infinite",
                  animationDelay: "0.9s",
                }}
              />
              <div
                className="absolute left-14 bottom-14 h-2 w-2 rounded-full bg-[#00F06B]"
                style={{
                  animation: "blinkDot 2.4s ease-in-out infinite",
                  animationDelay: "0.2s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
