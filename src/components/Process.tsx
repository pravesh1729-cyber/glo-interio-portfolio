"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your lifestyle, aspirations, and how you want your space to feel. Every great design begins with listening.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Translating your vision into mood boards, spatial layouts, and material palettes that tell a cohesive story.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Detailed AutoCAD drawings, 3D visualizations in SketchUp & Enscape, and precise material specifications.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "On-site coordination with vendors, contractors, and craftsmen — ensuring every detail matches the vision.",
    icon: "◆",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-24 md:py-36 bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs tracking-[5px] uppercase">
            How I Work
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-4 tracking-tight">
            The Design Process
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-[1px] bg-white/10 translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 p-8 border border-white/10 rounded-sm hover:border-gold/40 transition-all duration-500 bg-charcoal">
                <span className="text-gold/30 font-serif text-5xl block mb-4 group-hover:text-gold/60 transition-colors">
                  {step.icon}
                </span>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gold text-[10px] tracking-[3px]">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
