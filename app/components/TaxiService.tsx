"use client";

import React from "react";
import Image from "next/image";
import { Car, MapPin, ShieldCheck, Users, Eye } from "lucide-react";

const TaxiService: React.FC = () => {
  return (
    <section
      id="taxi-service"
      className="relative overflow-hidden bg-[#FAFFFB] py-16 sm:py-20 lg:py-24"
    >
      {/* LIGHT BACKGROUND DECOR */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gradients */}
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#B3FFE4]/60 blur-3xl" />
        <div className="absolute top-10 right-[-4rem] h-72 w-72 rounded-full bg-[#DFFFEA]/70 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-3rem] h-72 w-72 rounded-full bg-[#E4FFF3]/70 blur-3xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.42] mix-blend-multiply">
          <div className="h-full w-full bg-[radial-gradient(circle,_rgba(0,240,107,0.12)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes taxiDrive {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(70%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes pinPulseSoft {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes routeShimmer {
          0% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(120%);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
        {/* LEFT: STORY / COPY */}
        <div className="max-w-xl flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DFFFEA]/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#024122]/85 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Taxi Service · SDrive
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#024122] sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
            Book a ride that&apos;s safe, fair, and always nearby.
            <span className="block bg-gradient-to-r from-[#00A84C] via-[#3DD9A7] to-[#00C874] bg-clip-text text-transparent">
              Our drivers are trained, verified, and respectful.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[#255341]">
            Whether it&apos;s a school run, late-night airport trip or a quick ride
            across town, SDrive taxis are built for dignity and trust. Real-time
            GPS tracking, clear pricing and human-first training mean every
            journey feels safe — for passengers and drivers.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#B3FFE4]/80 bg-white/90 p-4 shadow-[0_12px_30px_rgba(2,65,34,0.06)]">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/12">
                <MapPin className="h-4 w-4 text-[#00A84C]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Real-time GPS tracking
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Watch your driver approach, share your trip live and know exactly
                who is picking you up and where you&apos;re going.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/80 bg-white/90 p-4 shadow-[0_12px_30px_rgba(2,65,34,0.06)]">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#B3FFE4]/32">
                <Car className="h-4 w-4 text-[#024122]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Transparent fares, no surprises
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                See your fare estimate upfront, with no hidden extras. Just clear,
                fair pricing every time you ride.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/80 bg-white/90 p-4 shadow-[0_12px_30px_rgba(2,65,34,0.06)]">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#DFFFEA]/70">
                <Users className="h-4 w-4 text-[#0D6C4A]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Family & women-friendly focus
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Choose preferred drivers, share rides with loved ones and travel
                in cars designed with safety and comfort in mind.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B3FFE4]/80 bg-white/90 p-4 shadow-[0_12px_30px_rgba(2,65,34,0.06)]">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#00F06B]/12">
                <ShieldCheck className="h-4 w-4 text-[#00A84C]" />
              </div>
              <h3 className="text-sm font-semibold text-[#024122]">
                Trained, verified drivers
              </h3>
              <p className="mt-1 text-xs text-[#255341]">
                Identity checks, onboarding and ongoing training so drivers are
                not just skilled — they&apos;re respectful and professional.
              </p>
            </div>
          </div>

          {/* TRUST MESSAGE */}
          <div className="mt-6 rounded-2xl border border-[#B3FFE4]/90 bg-[#F4FFFA] px-4 py-3 text-xs text-[#255341] shadow-[0_10px_26px_rgba(2,65,34,0.05)]">
            <div className="mb-1.5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#024122]/80">
              <Eye className="h-3.5 w-3.5 text-[#00A84C]" />
              <span>Trust at the center</span>
            </div>
            <p>
              Every passenger deserves dignity. Every driver deserves respect.
              SDrive&apos;s taxi network is built around that promise — with tools
              that protect both sides of the journey.
            </p>
          </div>

          {/* CTAS */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="#book-taxi"
              className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-4 py-2.5 text-[11px] font-semibold text-[#024122] shadow-[0_10px_30px_rgba(2,65,34,0.25)] hover:bg-[#00d65f]"
            >
              Book a taxi now
            </a>
            <button className="inline-flex items-center justify-center rounded-full border border-[#3DD9A7]/70 bg-white/0 px-4 py-2.5 text-[11px] font-medium text-[#024122]/80 hover:bg-white/80">
              See how we vet our drivers
            </button>
          </div>
        </div>

        {/* RIGHT: VIDEO + SEPARATE CAR MAP ANIMATION BELOW */}
        <div className="relative w-full max-w-xl flex-1 flex flex-col items-start gap-6">
          {/* VIDEO (shorter, full content, not cropped) */}
          <video
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[360px] sm:h-[400px] lg:h-[440px] object-contain"
          />

          {/* SEPARATE ROAD / MAP ANIMATION WITH CAR1.PNG */}
          <div className="relative w-full h-40 sm:h-44 lg:h-48">
            {/* light map background strip */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5FFFB] via-[#E8FFF5] to-[#F4FFFA]" />

            {/* dashed main road */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2">
              <div className="h-[3px] w-full rounded-full border-t-4 border-dashed border-[#00F06B]/70" />
              {/* subtle shimmer line on top */}
              <div
                className="pointer-events-none mt-[-3px] h-[2px] w-1/3 rounded-full bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#B3FFE4]"
                style={{ animation: "routeShimmer 3s linear infinite" }}
              />
            </div>

            {/* START POINT */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#00F06B] text-white shadow-md">
                <MapPin className="h-3.5 w-3.5" />
                <span
                  className="pointer-events-none absolute h-7 w-7 rounded-full border border-[#00F06B]/60"
                  style={{ animation: "pinPulseSoft 1.8s ease-out infinite" }}
                />
              </div>
              <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[#024122] shadow-sm">
                Start · Pickup
              </span>
            </div>

            {/* END POINT */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#3DD9A7] text-white shadow-md">
                <MapPin className="h-3.5 w-3.5" />
                <span
                  className="pointer-events-none absolute h-7 w-7 rounded-full border border-[#3DD9A7]/60"
                  style={{ animation: "pinPulseSoft 2.2s ease-out infinite" }}
                />
              </div>
              <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[#024122] shadow-sm">
                Destination · Dropoff
              </span>
            </div>

            {/* CAR ANIMATION ON THE ROAD */}
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-24 sm:h-14 sm:w-28"
              style={{ animation: "taxiDrive 7s ease-in-out infinite" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/car2.png"
                  alt="SDrive Taxi Car"
                  fill
                  className="object-contain drop-shadow-[0_16px_30px_rgba(2,65,34,0.38)] pointer-events-none"
                />
              </div>
            </div>

            {/* small label bottom-left */}
            <div className="absolute left-6 bottom-4 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#255341] shadow-sm">
              Safe, fair route · Live
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiService;
