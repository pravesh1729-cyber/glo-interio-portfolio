"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/images/projects/page-09.jpg",
  "/images/projects/page-22.jpg",
  "/images/projects/page-25.jpg",
  "/images/projects/page-33.jpg",
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-charcoal">
      {/* Cycling background images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover scale-105"
            style={{
              transform: current === i ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      {/* Side accent line */}
      <div
        className="absolute left-6 md:left-10 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 1.5s ease 1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-12 md:pb-20">
        {/* Tagline */}
        <div
          style={{ opacity: ready ? 1 : 0, transform: ready ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.3s" }}
        >
          <span className="text-gold/70 text-[0.55rem] tracking-[0.5em] uppercase">
            Interior Design Studio
          </span>
        </div>

        {/* Big headline — each word reveals */}
        <div className="mt-4 mb-6">
          {["Crafting", "Spaces That", "Breathe"].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <h1
                className="font-serif text-white"
                style={{
                  fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  transform: ready ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.12}s`,
                }}
              >
                {i === 1 ? (
                  <>
                    <em className="text-gold">Spaces</em> That
                  </>
                ) : (
                  line
                )}
              </h1>
            </div>
          ))}
        </div>

        {/* Bottom row: tagline + CTA + image counter */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-4 border-t border-white/10"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease 1.3s" }}
        >
          <p className="text-white/35 text-sm max-w-md leading-relaxed">
            Balancing luxury with calmness and elegance with warmth.
            Residential, hospitality &amp; bespoke spaces.
          </p>

          <div className="flex items-center gap-8">
            {/* Image dots */}
            <div className="flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    current === i ? "bg-gold w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <a href="#projects" className="btn-light">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
