"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Discovery", text: "Understanding your lifestyle, aspirations, and how you want your space to feel. Every great design starts with listening." },
  { num: "02", title: "Concept", text: "Mood boards, spatial layouts, and material palettes that translate your vision into a cohesive design story." },
  { num: "03", title: "Design", text: "Detailed AutoCAD drawings, 3D visualizations in SketchUp & Enscape, and precise material specifications." },
  { num: "04", title: "Execution", text: "On-site coordination with vendors, contractors, and craftsmen — ensuring every detail matches the vision." },
];

export default function Process() {
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
    <section id="process" ref={ref} className="py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-gold" />
          <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">How I Work</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal tracking-tight mb-16 md:mb-24">
          The Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative py-10 md:py-0 md:px-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${i > 0 ? "border-t md:border-t-0 md:border-l border-charcoal/10" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-serif text-6xl md:text-7xl text-charcoal/[0.04] block mb-4 leading-none">
                {step.num}
              </span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 -mt-6 md:-mt-8">
                {step.title}
              </h3>
              <p className="text-earth/50 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
