"use client";

import React from "react";
import { BatteryCharging, MapPin, ShieldCheck, Users, RadioTower, ArrowRight } from "lucide-react";

const ChargingStations: React.FC = () => {
  return (
    <section
      id="charging-stations"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* ===========================
          CREATIVE BRAND BG
      ============================ */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient base */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 10%, rgba(0,240,107,0.18), transparent 55%),
              radial-gradient(circle at 85% 80%, rgba(179,255,228,0.22), transparent 55%),
              linear-gradient(135deg, #050707 0%, #020A06 40%, #02150E 70%, #031913 100%)
            `,
          }}
        />

        {/* Soft grid + vertical beams */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(250,255,251,0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(250,255,251,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Animated vertical energy beams on sides */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[10%] w-px bg-gradient-to-b from-transparent via-[#00F06B] to-transparent"
          style={{ animation: "beamSweep 7s linear infinite" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-[12%] w-px bg-gradient-to-b from-transparent via-[#3DD9A7] to-transparent"
          style={{ animation: "beamSweep 9s linear infinite 1.2s" }}
        />

        {/* Glowing orbs */}
        <div
          className="absolute -right-28 -top-24 h-72 w-72 rounded-full bg-[#00F06B]/10 blur-3xl"
          style={{ animation: "bgOrbFloat 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-20 -bottom-32 h-64 w-64 rounded-full bg-[#3DD9A7]/14 blur-3xl"
          style={{ animation: "bgOrbFloatReverse 24s ease-in-out infinite" }}
        />

        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020805] via-transparent to-transparent" />
      </div>

      {/* ===========================
          ANIMATIONS
      ============================ */}
      <style jsx>{`
        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }
          70% {
            transform: scale(1.7);
            opacity: 0;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes orbitDot {
          0% {
            transform: rotate(0deg) translateX(70px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(70px) rotate(-360deg);
          }
        }

        @keyframes orbitDotSlow {
          0% {
            transform: rotate(0deg) translateX(95px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(95px) rotate(360deg);
          }
        }

        @keyframes shimmerStrip {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(140%);
          }
        }

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
            transform: translate3d(18px, -12px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes beamSweep {
          0% {
            opacity: 0;
            transform: translateY(20%);
          }
          30% {
            opacity: 0.8;
          }
          70% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-20%);
          }
        }

        @keyframes pingDot {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
        {/* ===========================
              LEFT — INTERACTIVE MAP FEEL
        ============================ */}
        <div className="relative w-full max-w-xl flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3DD9A7]/30 bg-black/35 px-3 py-1 text-[11px] text-[#DFFFEA] backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            BYD EV · Charging Network
          </div>

          {/* Map Orb */}
          <div className="mt-5 flex items-center justify-center">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(0,240,107,0.18),transparent_65%)] blur-lg" />

              {/* Main orb surface */}
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-[#00F06B]/25 bg-[radial-gradient(circle_at_30%_20%,rgba(179,255,228,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(0,240,107,0.16),transparent_55%),linear-gradient(145deg,#020805,#031913)] shadow-[0_28px_80px_rgba(0,0,0,0.9)] backdrop-blur">
                {/* Lat/long grid */}
                <div className="pointer-events-none absolute inset-6 rounded-full opacity-40">
                  <div className="absolute inset-0 rounded-full border border-[#B3FFE4]/10" />
                  <div className="absolute inset-[18%] rounded-full border border-[#B3FFE4]/8" />
                  <div className="absolute inset-[34%] rounded-full border border-[#B3FFE4]/6" />
                  <div className="absolute inset-[50%] rounded-full border border-[#B3FFE4]/4" />
                  {/* Vertical + horizontal lines */}
                  <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#DFFFEA]/30 to-transparent" />
                  <div className="absolute top-1/2 left-[16%] w-[68%] h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#DFFFEA]/25 to-transparent" />
                </div>

                {/* Central charger "hub" */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#020805] shadow-[0_0_40px_rgba(0,240,107,0.6)]">
                  <div className="absolute h-14 w-14 rounded-2xl border border-[#00F06B]/40" />
                  <BatteryCharging className="relative h-7 w-7 text-[#00F06B]" />

                  {/* Pulsing ring */}
                  <span
                    className="pointer-events-none absolute h-16 w-16 rounded-full border border-[#00F06B]/45"
                    style={{ animation: "pulseRing 2.2s ease-out infinite" }}
                  />
                </div>

                {/* Orbiting charger dots (chargers across city) */}
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  style={{ animation: "floatSoft 7s ease-in-out infinite" }}
                >
                  {/* orbit ring 1 */}
                  <div className="relative h-40 w-40 rounded-full border border-[#3DD9A7]/30">
                    <div
                      className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F06B]"
                      style={{ animation: "orbitDot 11s linear infinite" }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD84D]"
                      style={{ animation: "orbitDot 7s linear infinite 1.2s" }}
                    />
                  </div>

                  {/* orbit ring 2 */}
                  <div className="absolute h-52 w-52 rounded-full border border-[#B3FFE4]/20">
                    <div
                      className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3DD9A7]"
                      style={{ animation: "orbitDotSlow 15s linear infinite" }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FAFFFB]"
                      style={{ animation: "orbitDotSlow 10s linear infinite 2.1s" }}
                    />
                  </div>
                </div>

                {/* Little pinned cities */}
                <div className="pointer-events-none absolute left-7 top-10 flex flex-col items-center gap-1 text-[9px] text-[#DFFFEA]/80">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-[#00F06B] shadow-md" />
                    <span
                      className="absolute inset-0 rounded-full border border-[#00F06B]/50"
                      style={{ animation: "pingDot 2.2s ease-out infinite" }}
                    />
                  </div>
                  <span>Lagos</span>
                </div>

                <div className="pointer-events-none absolute right-6 bottom-10 flex flex-col items-center gap-1 text-[9px] text-[#DFFFEA]/80">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-[#3DD9A7] shadow-md" />
                    <span
                      className="absolute inset-0 rounded-full border border-[#3DD9A7]/60"
                      style={{ animation: "pingDot 2.8s ease-out infinite" }}
                    />
                  </div>
                  <span>Nairobi</span>
                </div>

                <div className="pointer-events-none absolute top-1/2 right-9 -translate-y-1/2 flex flex-col items-center gap-1 text-[9px] text-[#DFFFEA]/80">
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#FFD84D] shadow-md" />
                    <span
                      className="absolute inset-0 rounded-full border border-[#FFD84D]/60"
                      style={{ animation: "pingDot 3s ease-out infinite" }}
                    />
                  </div>
                  <span>Accra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mini info strip under orb */}
          <div className="mt-6 rounded-2xl border border-[#3DD9A7]/30 bg-[#02150E]/80 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.75)] backdrop-blur">
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#DFFFEA]/85">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#00F06B]" />
                <span>Find BYD chargers in seconds with our interactive map.</span>
              </div>
              <span className="hidden h-1 w-10 rounded-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4] sm:inline-flex" />
              <div className="flex items-center gap-2">
                <RadioTower className="h-3.5 w-3.5 text-[#B3FFE4]" />
                <span>Real-time availability & smart routing for EV fleets.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            RIGHT — TEXT & HIGHLIGHTS
        ============================ */}
        <div className="relative z-10 max-w-xl flex-1 lg:max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B3FFE4]/85">
            CHARGING STATIONS · BYD EV FOCUS
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.1rem] lg:leading-[1.1]">
            Power up your future.
            <span className="block bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4] bg-clip-text text-transparent">
              Safe, smart BYD charging — always close by.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[#DFFFEA]/80">
            Whether you manage a fleet or drive solo, our BYD-ready charging
            network keeps every route powered, protected, and predictable. Fast
            chargers, smart subscriptions, and trained staff make every stop
            feel effortless.
          </p>

          {/* Highlights grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
           {/* Interactive Map (Compact Version) */}
<div className="rounded-2xl border border-[#3DD9A7]/35 bg-[#02150E]/80 p-3 backdrop-blur">
  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#00F06B]/15">
    <MapPin className="h-4 w-4 text-[#00F06B]" />
  </div>
  <h3 className="text-[13px] font-semibold text-white">
    Interactive charger map
  </h3>
</div>

{/* Subscription plans (Compact Version) */}
<div className="rounded-2xl border border-[#3DD9A7]/35 bg-[#031913]/80 p-3 backdrop-blur">
  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#3DD9A7]/20">
    <Users className="h-4 w-4 text-[#3DD9A7]" />
  </div>
  <h3 className="text-[13px] font-semibold text-white">
    Fleet subscriptions
  </h3>
</div>

            {/* Safety manuals & staff (Compact Version) */}
<div className="rounded-2xl border border-[#3DD9A7]/35 bg-[#021A12]/80 p-3 backdrop-blur">
  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#B3FFE4]/18">
    <ShieldCheck className="h-4 w-4 text-[#B3FFE4]" />
  </div>
  <h3 className="text-[13px] font-semibold text-white">
    Safety-first operations
  </h3>
</div>


            {/* Green promise */}
            <div className="rounded-2xl border border-[#3DD9A7]/35 bg-[#02120F]/80 p-4 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/15">
                <BatteryCharging className="h-4 w-4 text-[#00F06B]" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                Green city promise
              </h3>
            </div>
          </div>

          {/* Green promise highlight strip */}
          <div className="mt-5 rounded-2xl border border-[#00F06B]/30 bg-gradient-to-r from-[#02150E] via-[#022616] to-[#031913] px-4 py-3 text-xs text-[#DFFFEA] shadow-[0_16px_45px_rgba(0,0,0,0.7)] backdrop-blur">
            <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#00F06B]/20">
              <span className="h-2 w-2 rounded-full bg-[#00F06B]" />
            </span>
            Every charge is a step toward cleaner, sustainable cities — designed
            for real people, real streets, and a better tomorrow.
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="#find-charger"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00F06B] px-4 py-2.5 text-[#024122] font-semibold shadow-[0_10px_30px_rgba(0,240,107,0.3)] hover:bg-[#00d65f]"
            >
              Find a nearby charger
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3DD9A7]/70 bg-transparent px-4 py-2.5 text-[#DFFFEA]/85 hover:bg-[#043122]/55">
              View fleet plans
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingStations;
