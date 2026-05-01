"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/projects/page-25.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <div
        className={`relative max-w-3xl mx-auto px-6 md:px-10 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-[1px] h-12 bg-gold/40 mx-auto mb-10" />
        <p className="font-serif text-xl md:text-3xl text-white/90 leading-relaxed tracking-tight italic">
          &ldquo;Every detail is carefully planned to balance luxury with calmness,
          and elegance with comfort. A home should support the way you live,
          rest, and grow — that is what I design for.&rdquo;
        </p>
        <div className="mt-10">
          <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase block">Mamta Agarwal</span>
          <span className="text-white/25 text-[0.55rem] tracking-[0.3em] uppercase mt-1 block">Founder, Glo Interio</span>
        </div>
      </div>
    </section>
  );
}
