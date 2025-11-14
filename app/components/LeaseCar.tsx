"use client";

import Image from "next/image";
import React from "react";
import { Car, Shield, Wallet, LineChart, MapPin } from "lucide-react";

const LeaseCar: React.FC = () => {
  return (
    <section
      id="lease-car"
      className="relative overflow-hidden bg-[#FAFFFB] py-16 sm:py-20 lg:py-24"
    >
      {/* soft animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* big soft blobs */}
        <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-[#B3FFE4]/60 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-[-4rem] h-64 w-64 rounded-full bg-[#DFFFEA]/70 blur-3xl" />

        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.48] mix-blend-multiply">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(0,240,107,0.12),_transparent_60%),repeating-linear-gradient(90deg,rgba(222,255,239,0.7)_0,rgba(222,255,239,0.7)_1px,transparent_1px,transparent_26px),repeating-linear-gradient(0deg,rgba(222,255,239,0.7)_0,rgba(222,255,239,0.7)_1px,transparent_1px,transparent_26px)]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0.16;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.7);
          }
        }

        /* car drives around a visible rectangular track */
        @keyframes carLoop {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(260px, 0px) rotate(8deg);
          }
          50% {
            transform: translate(260px, 160px) rotate(90deg);
          }
          75% {
            transform: translate(0px, 160px) rotate(190deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg);
          }
        }

        @keyframes mapPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shimmerBar {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(140%);
          }
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-10 lg:px-8">
        {/* LEFT: Animated leasing / map visual */}
        <div className="relative z-10 w-full max-w-xl flex-1">
          <div
            className="relative mx-auto h-[320px] w-full max-w-xl rounded-3xl border border-[#3DD9A7]/30 bg-gradient-to-br from-[#F5FFFB] via-[#E4FFF3] to-[#DFFFEA] p-5 shadow-[0_24px_80px_rgba(2,65,34,0.16)] sm:h-[360px] lg:h-[380px]"
            style={{ animation: "cardFloat 7s ease-in-out infinite" }}
          >
            {/* header strip */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#024122]/60">
                  SDrive · Car Leasing
                </span>
                <span className="mt-1 text-sm font-semibold text-[#024122]">
                  Choose a car that fits your journey.
                </span>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00F06B]/10">
                <Car className="h-4 w-4 text-[#00F06B]" />
                <span
                  className="pointer-events-none absolute inline-flex h-10 w-10 rounded-full bg-[#00F06B]"
                  style={{
                    animation: "glowPulse 2s ease-out infinite",
                  }}
                />
              </div>
            </div>

            {/* BIG MAP / TRACK AREA */}
            <div className="relative mt-1 h-[230px] rounded-2xl bg-[#FAFFFB] overflow-hidden">
              {/* subtle map tiles */}
              <div className="absolute inset-0 rounded-2xl border border-[#B3FFE4]/70 bg-[repeating-linear-gradient(90deg,rgba(179,255,228,0.5)_0,rgba(179,255,228,0.5)_1px,transparent_1px,transparent_26px),repeating-linear-gradient(0deg,rgba(179,255,228,0.4)_0,rgba(179,255,228,0.4)_1px,transparent_1px,transparent_26px)]" />

              {/* main horizontal + vertical roads */}
              <div className="absolute inset-6 rounded-[26px] bg-[#E9FFF6]">
                {/* horizontal road */}
                <div className="absolute left-4 right-4 top-16 h-10 rounded-full bg-[#CDEFE0] shadow-[0_4px_12px_rgba(2,65,34,0.12)]">
                  <div className="absolute inset-y-3 left-2 right-2 border-t border-dashed border-[#7FB79B]" />
                </div>
                {/* vertical road */}
                <div className="absolute top-6 bottom-6 left-24 w-10 rounded-full bg-[#CDEFE0] shadow-[0_4px_12px_rgba(2,65,34,0.12)]">
                  <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 border-l border-dashed border-[#7FB79B]" />
                </div>
              </div>

              {/* path highlight from hub to airport */}
              <div
                className="absolute left-10 top-16 h-[6px] w-44 rounded-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4] opacity-80"
                style={{ animation: "mapPulse 2.6s ease-in-out infinite" }}
              />

              {/* map pins */}
              <div className="absolute left-10 top-10 flex flex-col items-center gap-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00F06B] text-white shadow-md">
                  <MapPin className="h-3 w-3" />
                </div>
                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium text-[#024122]/80 shadow-sm">
                  Hub · CBD
                </span>
              </div>

              <div className="absolute right-10 bottom-10 flex flex-col items-center gap-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3DD9A7] text-white shadow-md">
                  <MapPin className="h-3 w-3" />
                </div>
                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium text-[#024122]/80 shadow-sm">
                  Airport Zone
                </span>
              </div>

              {/* CAR + TRACK (separate, wide path) */}
              <div
                className="absolute left-10 top-20 h-[170px] w-[280px]"
                style={{
                  animation: "carLoop 8s linear infinite",
                  transformOrigin: "center center",
                }}
              >
                <div className="relative h-16 w-24">
                  <Image
                    src="/car1.png" // make sure this file is in /public
                    alt="SDrive Lease Car"
                    fill
                    sizes="96px"
                    className="object-contain pointer-events-none drop-shadow-[0_8px_18px_rgba(2,65,34,0.35)]"
                  />
                </div>
              </div>

              {/* leasing info pill inside map */}
              <div className="absolute left-6 bottom-6 flex items-center gap-3 rounded-2xl bg-white/95 px-3 py-2 shadow-[0_14px_30px_rgba(2,65,34,0.35)]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#024122]">
                    Weekly from
                  </span>
                  <span className="text-sm font-bold text-[#00A84C]">
                    ₦XX,000
                  </span>
                </div>
                <div className="h-8 w-px bg-[#E1F8EE]" />
                <div className="flex flex-col text-[10px] text-[#024122]/80">
                  <span>Insurance included</span>
                  <span>Service & tracking covered</span>
                </div>
              </div>

              {/* utilization chip */}
              <div className="absolute right-6 top-6 rounded-2xl bg-[#024122]/90 px-3 py-2 text-[10px] text-[#DFFFEA] shadow-[0_14px_30px_rgba(2,65,34,0.6)]">
                <span className="text-[10px] font-semibold text-[#B3FFE4]">
                  Fleet health · Live
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-bold text-[#00F06B]">96%</span>
                  <div className="relative h-2 w-20 overflow-hidden rounded-full bg-[#042118]">
                    <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4]">
                      <div
                        className="h-full w-1/3 rounded-full bg-white/30"
                        style={{
                          animation: "shimmerBar 2.4s linear infinite",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* small footer descriptor */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-[#024122]/70">
              <span>Clear pricing. No hidden surprises.</span>
              <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-[#024122]/80">
                Lease · Drive · Upgrade
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Copy / Details */}
        <div className="relative z-10 max-w-xl flex-1 lg:max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DFFFEA]/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#024122]/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Lease a car with SDrive
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#024122] sm:text-3xl lg:text-[2.1rem] lg:leading-[1.1] font-[var(--nav-font)]">
            Flexible car leasing with clear pricing and no hidden surprises.
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[#063322]">
            Choose a car that fits your journey. SDrive leasing gives you
            flexible weekly or monthly plans, clean contracts and a fleet
            that&apos;s ready for serious work or everyday family life.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#B3FFE4]/70 bg-white/80 p-4">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/10">
                <Wallet className="h-4 w-4 text-[#00A84C]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Easy weekly or monthly payments
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Align your payments with how you earn. Predictable lease
                payments, easy-to-understand terms and no surprise deductions.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/70 bg-white/80 p-4">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#B3FFE4]/25">
                <Car className="h-4 w-4 text-[#024122]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Cars ready for business or family
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                From fuel-efficient city sedans to spacious SUVs, choose
                vehicles that are optimized for ride-hailing, logistics or
                family movement.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/70 bg-white/80 p-4">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#3DD9A7]/20">
                <Shield className="h-4 w-4 text-[#0C7E55]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Tracked, insured & protected
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Every car is tracked, insured and monitored so that drivers,
                riders and partners know each trip is backed by SDrive systems.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/70 bg-white/80 p-4">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#DFFFEA]/70">
                <LineChart className="h-4 w-4 text-[#0D6C4A]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Maintained to world-class standards
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Scheduled servicing, preventative repairs and health checks keep
                your leased car performing like a professional tool, not just a
                vehicle.
              </p>
            </div>
          </div>

          {/* investor / reassurance note */}
          <div className="mt-6 rounded-2xl border border-[#B3FFE4]/80 bg-[#F4FFFA] px-4 py-3 text-xs text-[#255341]">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#024122]/80">
              For drivers, families & investors
            </span>
            <p className="mt-1.5">
              Every car is tracked, insured and maintained to world-class
              standards — giving drivers confidence on the road, families peace
              of mind and investors a fleet that holds its value over time.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="#apply-lease"
              className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-4 py-2.5 text-[11px] font-semibold text-[#024122] shadow-[0_10px_35px_rgba(2,65,34,0.25)] hover:bg-[#00d65f]"
            >
              Start your lease application
            </a>
            <button className="inline-flex items-center justify-center rounded-full border border-[#3DD9A7]/70 bg-white/0 px-4 py-2.5 text-[11px] font-medium text-[#024122]/80 hover:bg-white/70">
              View sample fleet options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseCar;
