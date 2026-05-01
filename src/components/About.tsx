"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stats = [
  { value: "6+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Simultaneous Projects" },
  { value: "100%", label: "Client Satisfaction" },
];

const skills = [
  "AutoCAD", "SketchUp & Enscape", "Space Planning", "Furniture Design",
  "Material Selection", "Project Management", "3D Rendering", "InDesign", "Vendor Management",
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="bg-charcoal text-white overflow-hidden">
      {/* Stats bar */}
      <div className="border-b border-white/5 py-16 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={i === 0 ? ref : undefined}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-4xl md:text-5xl text-gold block mb-2">{s.value}</span>
              <span className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main about content */}
      <div className="py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Image */}
            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="overflow-hidden rounded-sm aspect-[4/5] max-w-[500px]">
                <img
                  src="/images/projects/page-01.jpg"
                  alt="Mamta Agarwal — Glo Interio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-gold/40" />
                <span className="text-white/30 text-[0.6rem] tracking-[0.3em] uppercase">
                  Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* Right — Text */}
            <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-gold" />
                <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">About</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-snug mb-8">
                Design is how I<br />
                <em className="text-gold/80">make people feel</em>
              </h2>

              <div className="space-y-4 text-white/45 text-sm leading-relaxed">
                <p>
                  I&apos;m Mamta Agarwal, founder of <strong className="text-white/75">Glo Interio</strong>.
                  Detail-oriented interior designer with hands-on experience in residential,
                  hospitality, restaurant, and office interiors — from concept development
                  through space planning to full execution.
                </p>
                <p>
                  Post Graduate Diploma from <strong className="text-white/75">Pearl Academy, Delhi</strong>.
                  B.Com (Hons) from <strong className="text-white/75">Hansraj College, University of Delhi</strong>.
                  Currently studying Vastu &amp; Numerology to blend modern design with holistic spatial awareness.
                </p>
                <p>
                  At <strong className="text-white/75">Innovations Design Studio, Kathmandu</strong> since
                  2021 — executed 6 apartments, 1 independent home, 1 office, and 1 hospital
                  section, handling up to 3 projects simultaneously.
                </p>
              </div>

              {/* Education */}
              <div className="mt-10 space-y-4 border-l border-gold/20 pl-6">
                {[
                  { year: "2020", title: "PG Diploma — Interior Design", place: "Pearl Academy, Delhi" },
                  { year: "2017", title: "B.Com (Hons)", place: "Hansraj College, Delhi" },
                  { year: "Ongoing", title: "Vastu & Numerology", place: "Academy of Vedic Vidya" },
                ].map((ed) => (
                  <div key={ed.year}>
                    <span className="text-gold/50 text-[0.55rem] tracking-[0.2em] uppercase block mb-1">{ed.year}</span>
                    <span className="text-white/70 text-sm block">{ed.title}</span>
                    <span className="text-white/25 text-xs">{ed.place}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-10 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-[0.55rem] tracking-[0.15em] uppercase text-white/25 border border-white/10 px-3 py-1.5 rounded-full"
                  >
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
