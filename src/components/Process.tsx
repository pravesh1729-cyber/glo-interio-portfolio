"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Discovery", text: "Understanding your lifestyle, aspirations, and how you want your space to feel." },
  { num: "02", title: "Concept", text: "Mood boards, spatial layouts, and material palettes that translate your vision." },
  { num: "03", title: "Design", text: "Detailed AutoCAD drawings, 3D visualizations, and material specifications." },
  { num: "04", title: "Execution", text: "On-site coordination with vendors and craftsmen to match every detail." },
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
    <section id="process" ref={ref} style={{ padding: "80px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 1, background: "#b8976a" }} />
          <span style={{ color: "#b8976a", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>How I Work</span>
        </div>
        <h2 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a1815", marginBottom: 48 }}>
          The Process
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "24px 0",
                paddingLeft: i > 0 ? 24 : 0,
                borderLeft: i > 0 ? "1px solid rgba(26,24,21,0.06)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="font-serif" style={{ fontSize: "3rem", color: "rgba(26,24,21,0.04)", lineHeight: 1, marginBottom: 8 }}>{step.num}</div>
              <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "#1a1815", marginBottom: 8, marginTop: -16 }}>{step.title}</h3>
              <p style={{ color: "rgba(139,115,85,0.4)", fontSize: "0.8rem", lineHeight: 1.6 }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
