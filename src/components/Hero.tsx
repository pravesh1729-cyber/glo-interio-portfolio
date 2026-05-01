"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — warm earthy interior matching Mamta's design style */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury warm interior with natural materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-xs tracking-[5px] uppercase">
              Interior Design Studio
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
            Crafting
            <br />
            <span className="italic text-gold/90">Spaces</span> That
            <br />
            Breathe
          </h1>

          <p className="mt-8 text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
            Where comfort meets intention — designing homes that balance luxury
            with calmness, and elegance with warmth.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 items-center">
            <a href="#projects" className="btn-elegant">
              View Projects
            </a>
            <a
              href="#contact"
              className="text-white/50 text-xs tracking-[3px] uppercase hover:text-gold transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/40 text-[10px] tracking-[4px] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
