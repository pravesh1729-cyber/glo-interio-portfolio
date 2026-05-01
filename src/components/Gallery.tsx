"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/projects/page-05.jpg", label: "Terrace Lounge" },
  { src: "/images/projects/page-17.jpg", label: "Master Bedroom" },
  { src: "/images/projects/page-33.jpg", label: "Bespoke Bar" },
  { src: "/images/projects/page-24.jpg", label: "Kitchen" },
  { src: "/images/projects/page-29.jpg", label: "Guest Room" },
  { src: "/images/projects/page-22.jpg", label: "Heritage Living" },
  { src: "/images/projects/page-39.jpg", label: "Vinyl Lounge" },
  { src: "/images/projects/page-15.jpg", label: "Daughter's Room" },
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
    <section ref={ref} style={{ padding: "80px 24px", background: "#f5f0e8", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 32, height: 1, background: "#b8976a" }} />
          <span style={{ color: "#b8976a", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>Gallery</span>
        </div>
        <h2 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a1815", letterSpacing: "-0.01em", marginBottom: 40 }}>
          Design Moments
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="img-hover"
              style={{
                borderRadius: 4,
                aspectRatio: "4/3",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.08}s`,
              }}
            >
              <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4, display: "block" }} />
              <div className="project-overlay" style={{ borderRadius: 4 }} />
              <div className="project-info" style={{ padding: 20 }}>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
