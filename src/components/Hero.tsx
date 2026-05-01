"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/projects/page-09.jpg"
          alt="The Sky Terrace by Glo Interio"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
      </div>

      {/* Content — bottom-left aligned like top studios */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
        {/* Tagline */}
        <div
          className="overflow-hidden mb-4"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-gold/80 text-[0.6rem] tracking-[0.4em] uppercase">
              Interior Design Studio — Kathmandu
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="overflow-hidden">
          <h1
            className="font-serif text-white leading-[0.95]"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              transform: ready ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s cubic-bezier(0.25, 0, 0.25, 1) 0.4s",
            }}
          >
            Crafting
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="font-serif text-white leading-[0.95]"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              transform: ready ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s cubic-bezier(0.25, 0, 0.25, 1) 0.55s",
            }}
          >
            <em className="text-gold/80">Spaces</em> That
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className="font-serif text-white leading-[0.95]"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              transform: ready ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s cubic-bezier(0.25, 0, 0.25, 1) 0.7s",
            }}
          >
            Breathe
          </h1>
        </div>

        {/* Subline + CTA */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease 1.2s" }}
        >
          <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed tracking-wide">
            Where comfort meets intention — designing homes that
            balance luxury with calmness, and elegance with warmth.
          </p>
          <a href="#projects" className="btn-light shrink-0">
            View Work
          </a>
        </div>
      </div>

      {/* Scroll line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease 1.5s" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/40 to-gold" />
      </div>
    </section>
  );
}
