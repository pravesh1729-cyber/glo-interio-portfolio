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
  { value: "6+", label: "Projects\nDelivered" },
  { value: "5+", label: "Years\nExperience" },
  { value: "3", label: "Simultaneous\nProjects" },
  { value: "100%", label: "Client\nSatisfaction" },
];

const skills = [
  "AutoCAD", "SketchUp & Enscape", "Space Planning", "Furniture Design",
  "Material Selection", "Project Management", "3D Rendering", "InDesign", "Vendor Management",
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="py-24 md:py-40 bg-charcoal text-white overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top: Image + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image column */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="relative">
              <div className="img-hover rounded-sm overflow-hidden aspect-[3/4]">
                <img
                  src="/images/projects/page-01.jpg"
                  alt="Mamta Agarwal — Glo Interio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-gold text-charcoal px-8 py-6 rounded-sm">
                <span className="text-[0.55rem] tracking-[0.3em] uppercase block mb-1 opacity-70">Based in</span>
                <span className="font-serif text-xl">Kathmandu</span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">About</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Design is how I<br />
              <em className="text-gold/80">make people feel</em>
            </h2>

            <div className="space-y-5 text-white/50 text-[0.9rem] leading-relaxed max-w-xl">
              <p>
                I&apos;m Mamta Agarwal, founder of <strong className="text-white/80">Glo Interio</strong>.
                Detail-oriented interior designer with hands-on experience in residential,
                hospitality, restaurant, and office interiors — from concept development
                through space planning to full execution.
              </p>
              <p>
                Post Graduate Diploma from <strong className="text-white/80">Pearl Academy, Delhi</strong>.
                B.Com (Hons) from <strong className="text-white/80">Hansraj College, University of Delhi</strong>.
                Currently studying Vastu &amp; Numerology to blend modern design with holistic spatial awareness.
              </p>
              <p>
                At <strong className="text-white/80">Innovations Design Studio, Kathmandu</strong> since
                2021 — executed 6 apartments, 1 independent home, 1 office, and 1 hospital
                section, handling up to 3 projects simultaneously.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10 space-y-4 border-l border-gold/20 pl-6">
              {[
                { year: "2020", title: "PG Diploma — Interior Design", place: "Pearl Academy, Delhi" },
                { year: "2017", title: "B.Com (Hons)", place: "Hansraj College, University of Delhi" },
                { year: "Ongoing", title: "Vastu & Numerology", place: "Academy of Vedic Vidya" },
              ].map((ed) => (
                <div key={ed.year} className="flex items-baseline gap-4">
                  <span className="text-gold/60 text-[0.55rem] tracking-[0.2em] uppercase shrink-0 w-16">{ed.year}</span>
                  <div>
                    <span className="text-white/80 text-sm block">{ed.title}</span>
                    <span className="text-white/30 text-xs">{ed.place}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-[0.55rem] tracking-[0.2em] uppercase text-white/30 border border-white/10 px-4 py-2 rounded-full hover:border-gold/40 hover:text-gold/60 transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-24 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${800 + i * 100}ms` }}
            >
              <span className="font-serif text-4xl md:text-5xl text-gold block mb-2">{s.value}</span>
              <span className="text-white/30 text-[0.55rem] tracking-[0.25em] uppercase whitespace-pre-line leading-relaxed">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
