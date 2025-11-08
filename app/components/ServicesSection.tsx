"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RiCarFill, RiTakeawayFill, RiTruckFill } from "react-icons/ri";

// CSS variables helper for theme
type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

export default function ServicesSection() {
  const themeVars: CSSVars = useMemo(
    () => ({
      "--eco": "#00F06B",  // ECO GREEN
      "--tint": "#DFFFEA", // LIGHT GREEN
      "--dark": "#024122", // DARK GREEN
      "--ink": "#0B0B0B",
      "--paper": "#FFFFFF",
    }),
    []
  );

  const services = [
    {
      icon: <RiCarFill className="h-6 w-6" />,
      title: "Book Ride",
      subtitle: "Book a comfortable ride to your destination",
    },
    {
      icon: <RiTakeawayFill className="h-6 w-6" />,
      title: "Food Delivery",
      subtitle: "Order food from your favorite restaurants",
    },
    {
      icon: <RiTruckFill className="h-6 w-6" />,
      title: "Courier",
      subtitle: "Send packages quickly and safely",
    },
  ];

  return (
    <section style={themeVars} className="w-full bg-[var(--paper)]">
      {/* Centered, responsive container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Promo Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--tint)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-5 sm:p-6 md:p-8">
            {/* Copy */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark)]">
                Enjoy 10% Off
                <br />
                Your First Ride
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--dark)]/80">
                Valid for 10 days
              </p>

              <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--eco)] px-5 py-2.5 text-sm font-semibold text-[var(--dark)] shadow-[0_8px_24px_rgba(0,240,107,0.25)] hover:brightness-95 transition">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Image */}
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
              <Image
                src="/service1.png"
                alt="First ride promotion"
                fill
                className="object-contain md:object-right"
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
            </div>
          </div>

          {/* subtle top-left light */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
        </div>

        {/* Our Services */}
        <h4 className="mt-6 sm:mt-8 text-xl font-semibold text-[var(--dark)]">
          Our Services
        </h4>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <article
              key={i}
              className="flex items-center justify-between rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:ring-black/15 transition"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--tint)] text-[var(--dark)]">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[16px] sm:text-[17px] font-extrabold text-[var(--ink)]">
                    {s.title}
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-black/60">
                    {s.subtitle}
                  </div>
                </div>
              </div>

              {/* CTA pill */}
              <button
                aria-label={`Go to ${s.title}`}
                className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--dark)] hover:brightness-110 transition"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
