"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Blog.tsx — matches the screenshot layout, themed to your palette
 */

export default function Blog() {
  const themeVars = useMemo(
    () => ({
      "--eco": "#00F06B",
      "--dark": "#024122",
      "--ink": "#0B0B0B",
      "--paper": "#FAFFFB",
      "--tint": "#DFFFEA",
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
    <section style={themeVars} className="w-full">
      <div className="relative w-full bg-gradient-to-r from-[var(--dark)] to-[var(--eco)]">
        <div
          aria-hidden
          className="absolute -top-10 left-0 h-10 w-full bg-gradient-to-r from-[var(--dark)] to-[var(--eco)]"
          style={{ clipPath: "polygon(0 100%, 18% 0, 100% 0, 100% 100%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[32px] sm:text-[36px] font-extrabold text-white">
              Our blog
            </h2>
            <a
              href="#view-all"
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15"
            >
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
            {posts.map((p, i) => (
              <article key={i}>
                <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[22px]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    priority={i === 0}
                  />
                </div>

                <h3 className="mt-5 text-xl sm:text-[22px] font-extrabold text-white">
                  {p.title}
                </h3>

                <p className="mt-2 text-white/90 leading-7 text-[15px]">
                  {p.body}
                </p>

                <a
                  href={p.href}
                  className="mt-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition"
                >
                  Read more
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

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
