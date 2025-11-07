"use client";
import React from "react";
import { Smile } from "lucide-react";
import { ArrowRight } from "lucide-react";

/**
 * Section.tsx — Fonts updated (Unbounded + Work Sans)
 * No layout or logic changed
 */

type Item = {
  titleTop: string;
  titleBottom: string;
  bullets: string[];
  bg: string;
  text: string;
};

const ITEMS: Item[] = [
  {
    titleTop: "Go",
    titleBottom: "anywhere",
    bullets: ["Rides", "Taxi", "Bike", "CarRental", "SchoolRides"],
    bg: "bg-[#3E37E5]",
    text: "text-white",
  },
  {
    titleTop: "Eat",
    titleBottom: "anytime",
    bullets: ["Food", "DineOut"],
    bg: "bg-[#DFFFEA]",
    text: "text-[#024122]",
  },
  {
    titleTop: "Courier",
    titleBottom: "anywhere",
    bullets: ["Send Parcel", "Documents", "Boxes", "Door-to-Door"],
    bg: "bg-[#7B61FF]",
    text: "text-[#E9FFF4]",
  },
  {
    titleTop: "Pay",
    titleBottom: "anyone",
    bullets: ["Pay", "Donations", "Send money"],
    bg: "bg-[#031A35]",
    text: "text-white",
  },
];

export default function Section() {
  return (
    <section
      style={
        {
          "--eco": "#00F06B",
          "--dark": "#024122",
          "--cta": "#FFD84D",
          "--ink": "#0B0B0B",
          "--paper": "#FAFFFB",
          "--tint": "#DFFFEA",
        } as React.CSSProperties
      }
      className="w-full bg-[var(--paper)] font-[var(--font-worksans)]"
    >
      {/* Add fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap");
        :root {
          --font-unbounded: 'Unbounded', cursive;
          --font-worksans: 'Work Sans', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-unbounded);
        }
        body, p, span, li, button, a, div {
          font-family: var(--font-worksans);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {ITEMS.map((card) => (
            <Card key={card.titleTop} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ titleTop, titleBottom, bullets, bg, text }: Item) {
  const bulletColor = text.includes("#024122")
    ? "text-[#024122]"
    : "text-white";

  return (
    <div
      className={`relative ${bg} ${text} rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 overflow-hidden min-h-[320px] flex`}
    >
      <div className="flex flex-col">
        <h3 className="text-5xl leading-none font-extrabold tracking-tight font-[var(--font-unbounded)]">
          {titleTop}
        </h3>
        <div className="mt-1 text-3xl font-extrabold tracking-tight font-[var(--font-unbounded)]">
          {titleBottom}
        </div>

        <ul className="mt-6 space-y-3 text-base/6 font-[var(--font-worksans)]">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Smile className={`${bulletColor} h-4 w-4`} />
              <span className="font-semibold opacity-95">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow bottom-right */}
      <div className="absolute right-5 bottom-5">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
          <ArrowRight
            className={
              text.includes("#024122") ? "text-[#024122]" : "text-white"
            }
          />
        </div>
      </div>
    </div>
  );
}
