"use client";

import React from "react";
import Image from "next/image";
import { Bike, Package, Shield, Users, Zap } from "lucide-react";

const LeaseBike: React.FC = () => {
  return (
    <section
      id="lease-bike"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* ===========================
          CREATIVE BRAND BG (NO IMAGE)
      ============================ */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient base */}
        <div
          className="absolute inset-0"
          // layered gradients using your palette
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 0%, rgba(0,240,107,0.16), transparent 55%),
              radial-gradient(circle at 80% 100%, rgba(61,217,167,0.18), transparent 55%),
              linear-gradient(135deg, #0B0B0B 0%, #020A06 45%, #02150E 75%, #031913 100%)
            `,
          }}
        />

        {/* Soft tech grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(250,255,251,0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(250,255,251,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Left accent strip */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#00F06B] via-[#3DD9A7] to-transparent opacity-80" />

        {/* Floating eco orbs */}
        <div
          className="absolute -right-24 -top-16 h-72 w-72 rounded-full bg-[#00F06B]/11 blur-3xl"
          style={{ animation: "bgOrbFloat 22s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-10 -bottom-24 h-64 w-64 rounded-full bg-[#3DD9A7]/12 blur-3xl"
          style={{ animation: "bgOrbFloatReverse 26s ease-in-out infinite" }}
        />

        {/* Bottom vignette to anchor content */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020805] via-transparent to-transparent" />
      </div>

      {/* ===========================
          GLOBAL ANIMATIONS
      ============================ */}
      <style jsx>{`
        @keyframes spinRoute {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmerStrip {
          0% {
            transform: translateX(-30%);
          }
          100% {
            transform: translateX(130%);
          }
        }

        @keyframes onlinePulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes spinBikeGlow {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes bikeAura {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }

        @keyframes speedStreak {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          50% {
            opacity: 1;
            transform: translateX(10px);
          }
          100% {
            opacity: 0;
            transform: translateX(30px);
          }
        }

        @keyframes speedStreakReverse {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          50% {
            opacity: 1;
            transform: translateX(-10px);
          }
          100% {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        /* 🔹 New subtle BG motion for the glowing orbs */
        @keyframes bgOrbFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-18px, 14px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes bgOrbFloatReverse {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(18px, -10px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
        {/* ===========================
              LEFT SIDE — ANIMATION STORY
        ============================ */}
        <div className="relative w-full max-w-xl flex-1">
          {/* 1) Circular bike map animation */}
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-[#02110C]/80 shadow-[0_22px_70px_rgba(0,0,0,0.9)] border border-[#00F06B]/10 backdrop-blur-md">
            {/* outer glowing ring */}
            <div className="absolute h-60 w-60 rounded-full border border-[#00F06B]/25" />
            <div className="absolute h-52 w-52 rounded-full border border-[#3DD9A7]/25" />

            {/* spinning dashed route */}
            <div
              className="absolute h-44 w-44 rounded-full border-[3px] border-dashed border-[#B3FFE4]/80"
              style={{ animation: "spinRoute 20s linear infinite" }}
            />

            {/* neon radial inner grid */}
            <div className="absolute h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(0,240,107,0.25),transparent_70%)] opacity-60" />

            {/* ICON POINTS ON THE MAP */}
            <div className="absolute left-10 top-16">
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#00F06B] text-[#020A06] shadow-md">
                <Zap className="h-3 w-3" />
                <span
                  className="pointer-events-none absolute h-6 w-6 rounded-full border border-[#00F06B]/40"
                  style={{ animation: "onlinePulse 1.8s ease-out infinite" }}
                />
              </div>
            </div>

            <div className="absolute right-8 bottom-14">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3DD9A7] text-[#020A06] shadow-md">
                <Package className="h-3 w-3" />
              </div>
            </div>

            {/* 🌟 PREMIUM UPGRADED BIKE ANIMATION */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating Neon Glow Ring Behind Bike */}
              <div
                className="absolute h-40 w-40 sm:h-48 sm:w-48 rounded-full border-[3px] border-[#00F06B]/25"
                style={{ animation: "spinBikeGlow 14s linear infinite" }}
              />

              {/* Pulsing Aura */}
              <div
                className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-[#00F06B]/10 blur-2xl"
                style={{ animation: "bikeAura 2.6s ease-in-out infinite" }}
              />

              {/* Reflective glow floor */}
              <div className="absolute bottom-8 h-10 w-32 sm:w-40 rounded-full bg-[#00F06B]/20 blur-2xl opacity-60" />

              {/* The BIKE PNG — Bigger + Centered */}
              <div
                className="relative h-28 w-48 sm:h-32 sm:w-56"
                style={{ animation: "floatSoft 3.4s ease-in-out infinite" }}
              >
                <Image
                  src="/bike1.png"
                  alt="SDrive Bike"
                  fill
                  className="object-contain drop-shadow-[0_30px_55px_rgba(0,240,107,0.45)] pointer-events-none"
                />
              </div>

              {/* Speed streak lines - left */}
              <div
                className="absolute left-10 h-1 w-16 rounded-full bg-gradient-to-r from-transparent to-[#00F06B]/50 blur-sm"
                style={{ animation: "speedStreak 0.8s linear infinite" }}
              />
              <div
                className="absolute left-12 h-1 w-10 rounded-full bg-gradient-to-r from-transparent to-[#3DD9A7]/40 blur-sm"
                style={{ animation: "speedStreak 1.1s linear infinite 0.2s" }}
              />

              {/* Speed streak lines - right */}
              <div
                className="absolute right-10 h-1 w-16 rounded-full bg-gradient-to-l from-transparent to-[#00F06B]/50 blur-sm"
                style={{ animation: "speedStreakReverse 0.8s linear infinite" }}
              />
              <div
                className="absolute right-12 h-1 w-10 rounded-full bg-gradient-to-l from-transparent to-[#3DD9A7]/40 blur-sm"
                style={{
                  animation: "speedStreakReverse 1.1s linear infinite 0.2s",
                }}
              />
            </div>

            {/* labels */}
            <div className="absolute bottom-4 left-6 rounded-full bg-black/60 px-3 py-1 text-[10px] text-[#DFFFEA] backdrop-blur-sm">
              Perfect for delivery riders
            </div>
            <div className="absolute top-4 right-5 rounded-full bg-[#024122]/90 px-3 py-1 text-[10px] text-[#B3FFE4]">
              Lease-to-own · Empowerment
            </div>
          </div>

          {/* 2) Community activity strip */}
          <div className="relative mt-8 rounded-2xl border border-[#3DD9A7]/25 bg-[#031913]/70 px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Riders online */}
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#00F06B]/10">
                  <Users className="h-5 w-5 text-[#00F06B]" />
                  <span
                    className="pointer-events-none absolute h-10 w-10 rounded-full border border-[#00F06B]/40"
                    style={{ animation: "onlinePulse 2s ease-out infinite" }}
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B3FFE4]/80">
                    Riders online
                  </span>
                  <p className="text-sm font-semibold text-white">
                    1,240+ electric & petrol delivery bikes active now
                  </p>
                </div>
              </div>

              {/* Earnings progress bar */}
              <div className="mt-2 w-full sm:mt-0 sm:w-60">
                <div className="flex items-center justify-between text-[10px] text-[#B3FFE4]/70">
                  <span>Daily earnings</span>
                  <span>Goal</span>
                </div>
                <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-[#042218]">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4]">
                    <div
                      className="h-full w-1/3 rounded-full bg-white/40"
                      style={{ animation: "shimmerStrip 2.6s linear infinite" }}
                    />
                  </div>
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-[#DFFFEA]/70">
                  <span>₦XX,XXX earned</span>
                  <span className="text-[#00F06B]">Lease-to-own progress</span>
                </div>
              </div>
            </div>

            {/* Community message */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-[#B3FFE4]/80">
              <span className="rounded-full bg-[#021912]/80 px-2 py-1 text-[#DFFFEA] backdrop-blur">
                Your bike is your livelihood. We protect that.
              </span>
              <span className="hidden h-1 w-10 rounded-full bg-gradient-to-r from-[#00F06B] to-[#3DD9A7] sm:inline-flex" />
              <span>We help riders earn, grow & move freely.</span>
            </div>
          </div>
        </div>

        {/* ===========================
            RIGHT SIDE – TEXT CONTENT
        ============================ */}
        <div className="relative z-10 max-w-xl flex-1 lg:max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3DD9A7]/30 bg-black/30 px-3 py-1 text-[11px] text-[#DFFFEA] backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Bike Leasing · SDrive
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.1rem] lg:leading-[1.1]">
            Your bike is your livelihood.
            <span className="block bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4] bg-clip-text text-transparent">
              We make it easy to own or lease, with safety & dignity built in.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[#DFFFEA]/80">
            From early-morning deliveries to late-night routes, SDrive empowers
            riders with flexible plans, reliable bikes, and a community that
            supports them every step of the way.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#3DD9A7]/30 bg-[#02150E]/70 p-4 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/15">
                <Bike className="h-4 w-4 text-[#00F06B]" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                Built for delivery riders
              </h3>
              <p className="mt-1 text-xs text-[#DFFFEA]/80">
                Strong, efficient bikes built for real African traffic.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3DD9A7]/30 bg-[#031912]/70 p-4 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#3DD9A7]/20">
                <Shield className="h-4 w-4 text-[#3DD9A7]" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                Safety & dignity built in
              </h3>
              <p className="mt-1 text-xs text-[#DFFFEA]/80">
                We ensure protection, not just a lease agreement.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3DD9A7]/30 bg-[#021A12]/70 p-4 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#B3FFE4]/20">
                <Zap className="h-4 w-4 text-[#B3FFE4]" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                Lease-to-own empowerment
              </h3>
              <p className="mt-1 text-xs text-[#DFFFEA]/80">
                Turn daily work into long-term ownership.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3DD9A7]/30 bg-[#02120F]/70 p-4 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/15">
                <Users className="h-4 w-4 text-[#00F06B]" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                Strong rider community
              </h3>
              <p className="mt-1 text-xs text-[#DFFFEA]/80">
                A support network that helps riders earn & grow.
              </p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="#apply-bike"
              className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-4 py-2.5 text-[#024122] font-semibold shadow-[0_10px_30px_rgba(0,240,107,0.3)] hover:bg-[#00d65f]"
            >
              Start bike lease application
            </a>

            <button className="inline-flex items-center justify-center rounded-full border border-[#3DD9A7]/70 bg-transparent px-4 py-2.5 text-[#DFFFEA]/85 hover:bg-[#043122]/50">
              See lease-to-own options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseBike;
