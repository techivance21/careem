"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

export default function Blog() {
  const themeVars: CSSVars = useMemo(
    () => ({
      "--eco": "#00F06B",   // Eco Green
      "--dark": "#024122",  // Deep Premium Green (button base)
      "--ink": "#0B0B0B",   // Rich Black/Grey
      "--paper": "#F9FDFB", // Softer Off White
      "--tint": "#DFFFEA",  // Light mint wash
      "--overlay": "rgba(255,255,255,0.15)",
    }),
    []
  );

  const posts = [
    {
      img: "/blog1.png",
      title: "Valentine’s Day, made easy with EcoRide",
      body:
        "Valentine’s Day should be about love, not last-minute stress. Whether you need a romantic dinner, flowers, or a thoughtful gift, our curated Valentine’s Day offers have you covered.",
      href: "#",
    },
    {
      img: "/blog2.png",
      title: "Zero fees & member-only FX rates",
      body:
        "We’re super excited to introduce zero fees on international remittance as well as FX rates cheaper than Google for first-time senders — exclusive to EcoRide Plus members.",
      href: "#",
    },
    {
      img: "/blog3.png",
      title: "Dig in, DineOut, spend less",
      body:
        "With EcoRide DineOut you don’t have to choose between great food and great savings—you get both!",
      href: "#",
    },
  ];

  return (
    <section style={themeVars} className="w-full font-[var(--font-worksans)]">
      {/* TOP GRADIENT */}
      <div className="relative w-full bg-gradient-to-r from-[var(--dark)] via-[var(--eco)]/55 to-[var(--eco)]">
        <div
          aria-hidden
          className="absolute -top-10 left-0 h-10 w-full bg-gradient-to-r from-[var(--dark)] via-[var(--eco)]/55 to-[var(--eco)]"
          style={{ clipPath: "polygon(0 100%, 16% 0, 100% 0, 100% 100%)" }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Heading Row */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[32px] sm:text-[36px] font-extrabold text-white">
              Our blog
            </h2>

            {/* View all — subtle glass */}
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition"
            >
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[22px] shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-black/20 transition">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover group-hover:scale-[1.03] transition"
                    priority={i === 0}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl sm:text-[22px] font-extrabold text-white tracking-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-white/85 leading-7 text-[15px]">
                  {post.body}
                </p>

                {/* CTA — DARK GREEN BUTTON */}
                <a
                  href={post.href}
                  className="mt-4 inline-flex rounded-full bg-[var(--dark)] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_14px_rgba(0,240,107,0.35)] hover:bg-[var(--dark)]/90 transition"
                >
                  Read more
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* SOFT MINT SWEEP */}
      <div className="relative w-full bg-gradient-to-r from-[var(--tint)] via-[var(--paper)] to-[var(--tint)]">
        <div
          aria-hidden
          className="h-8 w-full bg-gradient-to-r from-[var(--tint)] via-[var(--paper)] to-[var(--tint)]"
          style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
        />
      </div>
    </section>
  );
}
