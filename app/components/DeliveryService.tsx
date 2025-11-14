"use client";

import React from "react";
import Image from "next/image";
import {
  Clock3,
  Smartphone,
  Store,
} from "lucide-react";

const DeliveryService: React.FC = () => {
  return (
    <section
      id="delivery-service"
      className="relative overflow-hidden bg-[#F9FFFC] py-16 sm:py-20 lg:py-24"
    >
      {/* LIGHT PLAYFUL BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft blobs */}
        <div className="absolute -top-24 left-[-4rem] h-64 w-64 rounded-full bg-[#B3FFE4]/60 blur-3xl" />
        <div className="absolute top-24 right-[-5rem] h-72 w-72 rounded-full bg-[#DFFFEA]/70 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-2rem] h-64 w-64 rounded-full bg-[#FFF4C9]/70 blur-3xl" />

        {/* subtle diagonal grid */}
        <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply">
          <div className="h-full w-full bg-[linear-gradient(115deg,rgba(222,255,239,0.7)_1px,transparent_0),linear-gradient(295deg,rgba(222,255,239,0.7)_1px,transparent_0)] bg-[length:32px_32px]" />
        </div>
      </div>

      <style jsx>{`
        :root {
          --delivery-display-font: "Unbounded", system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          --delivery-body-font: "DM Sans", system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        @keyframes floatPhone {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(4px);
          }
        }

        @keyframes floatCar {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulseDot {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        @keyframes dashMove {
          0% {
            stroke-dashoffset: 140;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes shimmerBadge {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        @keyframes floatTag {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
        {/* LEFT: ANIMATED ILLUSTRATION AREA */}
        <div className="w-full max-w-xl flex-1">
          <div className="relative mx-auto h-[320px] w-full max-w-lg rounded-[28px] bg-gradient-to-br from-[#F5FFFB] via-[#E9FFF6] to-[#FFF9E3] p-5 shadow-[0_24px_70px_rgba(2,65,34,0.12)]">
            {/* soft inner glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/70" />

            {/* floating chips */}
            <div
              className="absolute left-6 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-[#024122]"
              style={{ animation: "floatTag 4s ease-in-out infinite" }}
            >
              <Clock3 className="h-3.5 w-3.5 text-[#00A84C]" />
              <span>Same-day delivery</span>
            </div>

            <div
              className="absolute right-5 top-14 inline-flex items-center gap-2 rounded-full bg-[#024122] px-3 py-1 text-[10px] font-medium text-[#DFFFEA]"
              style={{ animation: "floatTag 4.8s ease-in-out infinite" }}
            >
              <Smartphone className="h-3.5 w-3.5 text-[#B3FFE4]" />
              <span>Live app tracking</span>
            </div>


            {/* SVG MAP PATH BEHIND IMAGE */}
            <div className="pointer-events-none absolute inset-10">
              <svg
                viewBox="0 0 260 160"
                className="h-full w-full"
                aria-hidden="true"
              >
                {/* light map background blocks */}
                <rect
                  x="10"
                  y="15"
                  width="70"
                  height="40"
                  rx="8"
                  fill="#DFFFEA"
                  opacity="0.45"
                />
                <rect
                  x="180"
                  y="18"
                  width="60"
                  height="52"
                  rx="10"
                  fill="#B3FFE4"
                  opacity="0.38"
                />
                <rect
                  x="40"
                  y="90"
                  width="80"
                  height="50"
                  rx="12"
                  fill="#E4FFF3"
                  opacity="0.55"
                />

                {/* dashed route path */}
                <path
                  d="M30 40 C 90 10, 150 30, 190 60 S 230 120, 210 130"
                  fill="none"
                  stroke="#FF4F6A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                  style={{ strokeDashoffset: 140, animation: "dashMove 6s linear infinite" }}
                />
              </svg>
            </div>

            {/* PHONE + CAR ILLUSTRATION (service1.png) */}
            <div
              className="absolute inset-0 flex items-end justify-center"
              style={{ animation: "floatPhone 6s ease-in-out infinite" }}
            >
              <div className="relative h-[230px] w-[360px] sm:h-[250px] sm:w-[380px]">
                <Image
                  src="/image5.png"
                  alt="SDrive Delivery illustration"
                  fill
                  className="object-contain drop-shadow-[0_26px_50px_rgba(2,65,34,0.32)] pointer-events-none"
                />
              </div>
            </div>

            {/* animated pulsing dot near pin */}
            <div className="pointer-events-none absolute left-[26%] top-[26%]">
              <span
                className="absolute h-6 w-6 rounded-full bg-[#FF4F6A]/40"
                style={{ animation: "pulseDot 2s ease-out infinite" }}
              />
              <span className="relative block h-3.5 w-3.5 rounded-full bg-[#FF4F6A]" />
            </div>
             {/* small partnership chip */}
            <div className="absolute right-6 bottom-8 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-[#255341] shadow-sm">
              <Store className="h-3.5 w-3.5 text-[#00A84C]" />
              <span>For local businesses</span>
            </div>
            {/* small legend bottom-left */}
            <div className="absolute left-5 bottom-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] text-[#255341] shadow-sm">
              <span className="inline-flex h-1.5 w-6 rounded-full bg-[repeating-linear-gradient(to_right,#FF4F6A_0,#FF4F6A_4px,transparent_4px,transparent_8px)]" />
              <span>Smart delivery routes</span>
            </div>
          </div>
        </div>

        {/* RIGHT: TEXT / DETAILS */}
        <div className="max-w-xl flex-1">
          {/* tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DFFFEA]/80 bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#024122]/85 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Delivery Service · SDrive
          </div>

          <h2
            className="mt-4 text-2xl font-semibold tracking-tight text-[#024122] sm:text-3xl lg:text-[2.15rem] lg:leading-tight"
            style={{ fontFamily: "var(--delivery-display-font)" }}
          >
            From groceries to parcels, we deliver with speed and care.
            <span className="block bg-gradient-to-r from-[#00A84C] via-[#3DD9A7] to-[#00C874] bg-clip-text text-transparent">
              Businesses trust us, families rely on us.
            </span>
          </h2>

          <p
            className="mt-3 text-sm sm:text-[15px] text-[#255341]"
            style={{ fontFamily: "var(--delivery-body-font)" }}
          >
            SDrive Delivery turns everyday trips into reliable logistics. Whether
            it&apos;s a fragile parcel, a last-minute grocery run or stock for your
            shop, our couriers are trained to handle deliveries with care,
            professionalism and clear communication.
          </p>

        

          {/* CTAS */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="#schedule-delivery"
              className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-4 py-2.5 text-[11px] font-semibold text-[#024122] shadow-[0_10px_30px_rgba(2,65,34,0.25)] hover:bg-[#00d65f]"
            >
              Schedule a delivery
            </a>
            <button className="inline-flex items-center justify-center rounded-full border border-[#3DD9A7]/70 bg-white/0 px-4 py-2.5 text-[11px] font-medium text-[#024122]/80 hover:bg-white/80">
              Explore business delivery plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryService;
