"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Interior background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Quote mark */}
        <span className="font-serif text-gold/30 text-8xl md:text-9xl leading-none block mb-4">
          &ldquo;
        </span>

        <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed tracking-tight italic">
          Every detail is carefully planned to balance luxury with calmness, and
          elegance with comfort. A home should support the way you live, rest,
          and grow — that is what I design for.
        </p>

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="w-12 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[4px] uppercase mt-4">
            Mamta Agarwal
          </span>
          <span className="text-white/40 text-xs tracking-[2px]">
            Interior Designer
          </span>
        </div>
      </div>
    </section>
  );
}
