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
    <section ref={ref} style={{ position: "relative", padding: "100px 24px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src="/images/projects/page-25.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,24,21,0.88)" }} />
      </div>

      <div
        ref={ref}
        style={{
          position: "relative",
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease",
        }}
      >
        <div style={{ width: 1, height: 40, background: "rgba(184,151,106,0.3)", margin: "0 auto 32px" }} />

        <p className="font-serif" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontStyle: "italic" }}>
          &ldquo;Every detail is carefully planned to balance luxury with calmness,
          and elegance with comfort. A home should support the way you live,
          rest, and grow — that is what I design for.&rdquo;
        </p>

        <div style={{ marginTop: 32 }}>
          <div style={{ color: "#b8976a", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>Mamta Agarwal</div>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 4 }}>Founder, Glo Interio</div>
        </div>
      </div>
    </section>
  );
}
