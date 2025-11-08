"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  key: "ride" | "delivery" | "courier";
  image: string;
  objectPosition?: string;
  heading: string[];
  cta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    key: "ride",
    image: "/hero1.png",
    objectPosition: "50% 40%",
    heading: ["Fair rides", "for the price you", "both agree on"],
    cta: { label: "Download the app", href: "#download" },
  },
  {
    key: "delivery",
    image: "/hero2.png",
    objectPosition: "50% 45%",
    heading: ["Fair deals", "in delivery,", "cargo and food"],
    cta: { label: "Check them all", href: "#delivery" },
  },
  {
    key: "courier",
    image: "/hero3.png", // update if you have a different courier image
    objectPosition: "50% 45%",
    heading: ["Fast courier", "reliable hand-to-hand", "drop-offs"],
    cta: { label: "Send a package", href: "#courier" },
  },
];

export default function Hero() {
  const [active, setActive] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabsWrapRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  // THEME — your palette
  const themeVars: React.CSSProperties & Record<string, string> = useMemo(
    () => ({
      "--eco": "#00F06B",   // ECO GREEN
      "--dark": "#024122",  // DARK GREEN
      "--ink": "#0B0B0B",
      "--paper": "#FAFFFB",
      "--tint": "#DFFFEA",  // LIGHT GREEN
    }),
    []
  );

  useEffect(() => {
    let id: number | null = null;
    if (!isPaused) {
      id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000);
    }
    return () => { if (id !== null) window.clearInterval(id); };
  }, [isPaused]);

  const positionIndicator = useCallback(() => {
    const wrap = tabsWrapRef.current;
    const indicator = indicatorRef.current;
    const btn = btnRefs.current[active];
    if (!wrap || !indicator || !btn) return;
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const left = btnRect.left - wrapRect.left + wrap.scrollLeft;
    indicator.style.width = `${btnRect.width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }, [active]);

  useEffect(() => { positionIndicator(); }, [positionIndicator]);

  useEffect(() => {
    const wrap = tabsWrapRef.current;
    const obs = new ResizeObserver(() => positionIndicator());
    if (wrap) {
      obs.observe(wrap);
      const onScroll = () => positionIndicator();
      wrap.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", positionIndicator);
      const t = window.setTimeout(() => positionIndicator(), 50);
      return () => {
        wrap.removeEventListener("scroll", onScroll);
        obs.disconnect();
        window.removeEventListener("resize", positionIndicator);
        window.clearTimeout(t);
      };
    }
    return () => obs.disconnect();
  }, [positionIndicator]);

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <section
      style={themeVars}
      className="relative isolate w-full overflow-hidden bg-[var(--paper)] font-[var(--font-worksans)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap");
        :root {
          --font-unbounded: 'Unbounded', cursive;
          --font-worksans: 'Work Sans', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 { font-family: var(--font-unbounded); }
        body, p, button, a, span, div { font-family: var(--font-worksans); }
      `}</style>

      {/* Slides */}
      <div className="relative h-[58vh] min-h-[420px] md:h-[68vh] lg:h-[78vh] w-full">
        {SLIDES.map((s, idx) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={idx !== active}
          >
            <Image
              src={s.image}
              alt={s.key}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.objectPosition || "50% 50%" }}
              priority={idx === active}
            />
            {/* Dark-green tinted veil for readability, matching theme */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--dark)]/35 via-black/15 to-[var(--dark)]/35" />
          </div>
        ))}

        {/* Copy */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:max-w-2xl text-white">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl font-[var(--font-unbounded)]">
              {SLIDES[active].heading.map((line, i) => (
                <span key={i} className="relative inline-block">
                  <span className="bg-[var(--eco)] text-black px-1.5 sm:px-2 -rotate-1 inline-block">
                    {line.split(" ")[0]}{" "}
                  </span>
                  <span className="pl-1">
                    {line.split(" ").slice(1).join(" ")}
                  </span>
                  <br />
                </span>
              ))}
            </h1>

            {/* CTA: Dark Green, white text */}
            <a
              href={SLIDES[active].cta.href}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--dark)] px-5 py-3 text-white font-semibold transition hover:brightness-110 font-[var(--font-worksans)]"
            >
              {SLIDES[active].cta.label}
            </a>
          </div>
        </div>

        {/* Prev/Next — themed */}
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-[var(--tint)]/90 p-2 hover:bg-[var(--tint)] sm:inline-flex"
        >
          <ChevronLeft className="h-6 w-6 text-[var(--dark)]" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-[var(--tint)]/90 p-2 hover:bg-[var(--tint)] sm:inline-flex"
        >
          <ChevronRight className="h-6 w-6 text-[var(--dark)]" />
        </button>
      </div>

      {/* Tabs */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={tabsWrapRef}
          className="relative -mt-10 mb-2 flex items-center gap-5 rounded-2xl bg-[var(--tint)]/95 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-x-auto no-scrollbar snap-x font-[var(--font-worksans)]"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              ref={(el) => { btnRefs.current[i] = el; }}
              className={`relative shrink-0 snap-start px-1 pb-2 text-sm sm:text-[15px] font-semibold transition-colors ${
                i === active ? "text-[var(--dark)]" : "text-[var(--ink)]/70 hover:text-[var(--dark)]"
              }`}
              onClick={() => setActive(i)}
            >
              {titleCase(s.key)}
            </button>
          ))}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]">
            <div
              ref={indicatorRef}
              className="absolute h-[3px] rounded-full bg-[var(--eco)] transition-all"
              style={{ width: 64, transform: "translateX(0px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function titleCase(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}
