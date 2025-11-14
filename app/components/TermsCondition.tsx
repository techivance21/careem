"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, FileText, Scale, Lock, ArrowRight } from "lucide-react";

const TermsCondition: React.FC = () => {
  return (
    <section
      id="terms-conditions"
      className="relative overflow-hidden bg-[#FAFFFB] py-16 sm:py-20 lg:py-24"
    >
      {/* LIGHT BG + VERY SOFT ANIMATION */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft tinted layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,107,0.08),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(223,255,234,0.9),_rgba(250,255,251,1))]" />

        {/* gentle moving blob */}
        <style jsx>{`
          @keyframes termsBlob {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.4;
            }
            50% {
              transform: translate3d(40px, -20px, 0);
              opacity: 0.8;
            }
          }
        `}</style>
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#B3FFE4]/70 blur-3xl"
          style={{ animation: "termsBlob 18s ease-in-out infinite" }}
        />

        {/* light grid overlay */}
        <div className="absolute inset-0 opacity-[0.28] mix-blend-multiply">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(214,246,233,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,246,233,0.7)_1px,transparent_1px)] bg-[size:26px_26px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="max-w-3xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DFFFEA]/80 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#024122]/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#00F06B]" />
            Legal · Terms & Conditions
          </div>

          <h2
            className="mt-4 text-2xl sm:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-[#024122]"
            style={{ fontFamily: '"Unbounded", system-ui, sans-serif' }}
          >
            SDrive Terms &amp; Conditions
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] text-[#255341]">
            These Terms govern your use of the SDrive platform, apps and related
            services. By using SDrive, you agree to ride and drive with respect,
            follow local law and accept the legal framework below.
          </p>

          <p className="mt-2 text-xs sm:text-[13px] text-[#3A6C58]">
            <span className="font-semibold">Last updated:</span> November 4, 2025 ·
            SDrive a division of Summer Set Continental Group.
          </p>
        </header>

        {/* TOP FOUR CARDS – LIKE “PROCESS” STYLE */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 – Platform & Relationship */}
          <div className="rounded-[28px] border border-[#FFD84D]/60 bg-white/95 p-5 shadow-[0_18px_50px_rgba(2,65,34,0.06)]">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/image1.png"
                  alt="Platform & relationship"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F58634]">
                  01. Platform & Relationship
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#024122]">
                  How SDrive connects riders and drivers
                </h3>
                <p className="mt-2 text-xs text-[#255341]">
                  SDrive is a digital platform that connects <strong>Users</strong> with
                  independent <strong>Drivers</strong> using electric vehicles. SDrive does not
                  operate as a transport carrier Drivers provide services, while
                  SDrive powers the technology and payment rails.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 – Eligibility & Accounts */}
          <div className="rounded-[28px] border border-[#3DD9A7]/60 bg-white/95 p-5 shadow-[0_18px_50px_rgba(2,65,34,0.06)]">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/image2.png"
                  alt="Eligibility and account"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0C7E55]">
                  02. Eligibility &amp; Accounts
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#024122]">
                  Who can use SDrive and how
                </h3>
                <p className="mt-2 text-xs text-[#255341]">
                  You must be at least <strong>18</strong> and legally able to enter contracts.
                  Your account must contain accurate details, and you&apos;re
                  responsible for keeping login credentials secure and for all
                  activity under your profile.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 – Safety & Conduct */}
          <div className="rounded-[28px] border border-[#FFB3A0]/65 bg-white/95 p-5 shadow-[0_18px_50px_rgba(2,65,34,0.06)]">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/image3.png"
                  alt="Safety and conduct"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4572E]">
                  03. Safety &amp; Conduct
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#024122]">
                  Respectful rides for riders & drivers
                </h3>
                <p className="mt-2 text-xs text-[#255341]">
                  Harassment, discrimination, violence or illegal activity are never
                  allowed. Drivers can cancel trips for safety reasons, and SDrive
                  may suspend accounts following breaches, misconduct or
                  consistently low ratings.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 – Pricing, Data & Legal */}
          <div className="rounded-[28px] border border-[#B3FFE4]/80 bg-white/95 p-5 shadow-[0_18px_50px_rgba(2,65,34,0.06)]">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/image4.png"
                  alt="Pricing, data and legal"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0D6C4A]">
                  04. Pricing, Data &amp; Legal
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#024122]">
                  Fares, privacy and dispute handling
                </h3>
                <p className="mt-2 text-xs text-[#255341]">
                  Fares are calculated dynamically based on distance, time and
                  demand. Payments are processed by third-party providers. Data is
                  handled under the SDrive Privacy Notice, and disputes are governed
                  by UAE law with arbitration in Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE GRID – INSPIRED BY SECOND IMAGE */}
        <div className="rounded-[32px] border border-[#DFFFEA]/90 bg-white/95 p-6 sm:p-8 shadow-[0_22px_60px_rgba(2,65,34,0.06)]">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Column 1 */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-[#024122]">
                <FileText className="h-4 w-4 text-[#00A84C]" />
                Your use of the SDrive Platform
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-[#255341]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00F06B]" />
                  <span>
                    Use the Services only for lawful purposes no illegal goods,
                    fraud or misuse of the platform.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00F06B]" />
                  <span>
                    Do not impersonate others, interfere with security, or attempt
                    to reverse engineer the app or backend systems.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00F06B]" />
                  <span>
                    Ride requests, cancellations and fees follow the rules shown in
                    the app; repeated abuse can lead to suspension.
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-[#024122]">
                <ShieldCheck className="h-4 w-4 text-[#F58634]" />
                Safety, ratings &amp; community
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-[#255341]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD84D]" />
                  <span>
                    Riders and Drivers can rate each trip. Consistently low scores
                    or serious complaints may result in deactivation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD84D]" />
                  <span>
                    SDrive may offer in-app safety tools so you can share trips
                    with trusted contacts or reach local authorities quickly.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD84D]" />
                  <span>
                    Promotions, referral codes and loyalty rewards can change or
                    be withdrawn at any time if misused.
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-[#024122]">
                <Scale className="h-4 w-4 text-[#0D6C4A]" />
                Payments, data &amp; legal terms
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-[#255341]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DD9A7]" />
                  <span>
                    You agree to pay all applicable trip charges, including
                    surcharges, tolls, and valid cancellation or cleaning fees.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DD9A7]" />
                  <span>
                    SDrive processes personal data (identity, location, trips,
                    payments) under its Privacy Notice and may share it with
                    Drivers, partners or authorities where required.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DD9A7]" />
                  <span>
                    Liability is limited to the amount you paid for the relevant
                    ride. Disputes are governed by UAE law with arbitration in
                    Dubai, unless local law states otherwise.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FOOTER ROW */}
          <div className="mt-6 flex flex-col gap-3 border-t border-[#E1F7ED] pt-4 text-xs text-[#255341] sm:flex-row sm:items-center sm:justify-between">
            <p>
              This section is a visual summary. For full legal details, please read
              the complete Terms &amp; Conditions and Privacy Notice.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-1 rounded-full border border-[#00F06B]/70 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#024122] hover:bg-[#E9FFF6]"
              >
                View full Terms PDF
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 rounded-full border border-[#3DD9A7]/60 bg-white/0 px-3 py-1.5 text-[11px] font-medium text-[#024122]/80 hover:bg-white"
              >
                Read Privacy Notice
                <Lock className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
