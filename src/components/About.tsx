"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="bg-charcoal text-white">
      {/* Stats row */}
      <div className="border-b border-white/5 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "6+", l: "Projects Delivered" },
            { v: "5+", l: "Years Experience" },
            { v: "3", l: "Simultaneous Projects" },
            { v: "100%", l: "Client Satisfaction" },
          ].map((s, i) => (
            <div
              key={s.l}
              ref={i === 0 ? ref : undefined}
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${i * 0.1}s` }}
            >
              <div className="font-serif text-4xl text-gold mb-1">{s.v}</div>
              <div className="text-white/25 text-[10px] tracking-[3px] uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[4px] uppercase">About</span>
          </div>

          {/* Two column: image + text */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Image */}
            <div className="w-full lg:w-[340px] flex-shrink-0" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/images/projects/page-01.jpg"
                  alt="Mamta Agarwal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-6 h-px bg-gold/30" />
                <span className="text-white/20 text-[10px] tracking-[3px] uppercase">Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Text — this is the part that was overflowing. Using min-w-0 to fix flex overflow */}
            <div className="min-w-0 flex-1" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.4s" }}>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-snug mb-6">
                Design is how I
                <br />
                <em className="text-gold/70">make people feel</em>
              </h2>

              <div className="space-y-4 text-white/40 text-sm leading-relaxed">
                <p>
                  I&apos;m Mamta Agarwal, founder of <strong className="text-white/70">Glo Interio</strong>. Detail-oriented interior designer with hands-on experience in residential, hospitality, restaurant, and office interiors — from concept development through space planning to full execution.
                </p>
                <p>
                  Post Graduate Diploma from <strong className="text-white/70">Pearl Academy, Delhi</strong>. B.Com (Hons) from <strong className="text-white/70">Hansraj College, University of Delhi</strong>. Currently studying Vastu &amp; Numerology to blend modern design with holistic spatial awareness.
                </p>
                <p>
                  At <strong className="text-white/70">Innovations Design Studio, Kathmandu</strong> since 2021 — executed 6 apartments, 1 independent home, 1 office, and 1 hospital section, handling up to 3 projects simultaneously.
                </p>
              </div>

              {/* Education */}
              <div className="mt-8 border-l border-gold/20 pl-5 space-y-4">
                {[
                  { y: "2020", t: "PG Diploma — Interior Design", p: "Pearl Academy, Delhi" },
                  { y: "2017", t: "B.Com (Hons)", p: "Hansraj College, Delhi" },
                  { y: "Ongoing", t: "Vastu & Numerology", p: "Academy of Vedic Vidya" },
                ].map((ed) => (
                  <div key={ed.y}>
                    <span className="text-gold/40 text-[10px] tracking-[2px] uppercase">{ed.y}</span>
                    <div className="text-white/60 text-sm">{ed.t}</div>
                    <div className="text-white/20 text-xs">{ed.p}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["AutoCAD", "SketchUp", "Enscape", "Space Planning", "Furniture Design", "3D Rendering", "InDesign", "Project Mgmt", "Vendor Mgmt"].map((s) => (
                  <span key={s} className="text-[10px] tracking-[1px] uppercase text-white/20 border border-white/8 px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
