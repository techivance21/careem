"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const HeroVideoSection: React.FC = () => {
  return (
    <section className="relative bg-[#FAFFFB] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Outer rounded card like the screenshot */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#F4EEDC] shadow-[0_24px_80px_rgba(11,11,11,0.10)]">
          
          {/* Background Video (NO overlay now) */}
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              src="/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Content (clean on top) */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-16">
            
            {/* Small Title */}
            <p className="text-[11px] font-semibold tracking-[0.28em] text-[#6E5B3C] uppercase">
              BUILT FOR MODERN MOBILITY BRANDS
            </p>

            {/* Main Title */}
            <h1 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-[#0B0B0B] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.15]">
              Launch your{" "}
              <span className="bg-gradient-to-r from-[#00F06B] via-[#3DD9A7] to-[#024122] bg-clip-text text-transparent">
                ride-hailing or fleet platform
              </span>{" "}
              in weeks not months.
            </h1>

            {/* Subtext */}
            <p className="mt-3 max-w-2xl text-sm sm:text-[15px] text-[#4C4639]">
              Build your own on-demand mobility service with driver apps, rider apps,
              fleet tools, and real-time tracking — fully branded for your business.
            </p>

            {/* CTA Button */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-[#00F06B] px-6 py-3 text-sm font-semibold text-[#024122] shadow-[0_14px_40px_rgba(0,240,107,0.30)] transition hover:bg-[#00d65f] hover:shadow-[0_18px_55px_rgba(0,240,107,0.40)]"
              >
                Book a live demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Simple road dashes — like screenshot */}
            <div className="mt-10 flex w-full items-center justify-center gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="h-[2px] w-10 rounded-full bg-[#EAD8BD]" />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
