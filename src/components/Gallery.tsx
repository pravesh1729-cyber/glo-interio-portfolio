"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/projects/page-05.jpg", label: "Terrace Lounge", span: "col-span-2 row-span-2" },
  { src: "/images/projects/page-17.jpg", label: "Master Bedroom", span: "col-span-1 row-span-1" },
  { src: "/images/projects/page-33.jpg", label: "Bespoke Bar", span: "col-span-1 row-span-1" },
  { src: "/images/projects/page-24.jpg", label: "Kitchen", span: "col-span-1 row-span-1" },
  { src: "/images/projects/page-29.jpg", label: "Guest Room", span: "col-span-1 row-span-2" },
  { src: "/images/projects/page-22.jpg", label: "Heritage Living", span: "col-span-1 row-span-1" },
  { src: "/images/projects/page-15.jpg", label: "Daughter's Room", span: "col-span-1 row-span-1" },
  { src: "/images/projects/page-39.jpg", label: "Vinyl Lounge", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-10 bg-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-[1px] bg-gold" />
          <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">Gallery</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-charcoal tracking-tight mb-12">
          Design Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} img-hover rounded-sm transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover rounded-sm" />
              <div className="project-overlay rounded-sm" />
              <div className="project-info" style={{ padding: "1.5rem" }}>
                <span className="text-white/90 text-[0.6rem] tracking-[0.3em] uppercase">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
