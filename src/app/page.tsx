"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/* ── Fade-in wrapper ── */
function FI({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(30px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Label ── */
function Label({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ width: 28, height: 1, background: "#b5956b" }} />
      <span style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#b5956b" }}>{children}</span>
    </div>
  );
}

/* ── Data ── */
const projects = [
  {
    title: "The Sky Terrace",
    tag: "Rooftop Living · 2024",
    desc: "Bamboo-clad ceilings, tropical greenery, rattan pendants, a custom bar with water feature wall, and a sunken fire pit lounge.",
    images: ["/images/projects/page-09.jpg", "/images/projects/page-05.jpg", "/images/projects/page-07.jpg", "/images/projects/page-06.jpg", "/images/projects/page-08.jpg"],
  },
  {
    title: "Warm Earth Apartment",
    tag: "Family Residence · 2024",
    desc: "Wooden beam ceilings, custom bookshelf walls, warm earthy palette, daughter's pink floral bedroom, and olive-green master suite.",
    images: ["/images/projects/page-12.jpg", "/images/projects/page-14.jpg", "/images/projects/page-15.jpg", "/images/projects/page-16.jpg", "/images/projects/page-17.jpg", "/images/projects/page-18.jpg", "/images/projects/page-13.jpg"],
  },
  {
    title: "Heritage Brick House",
    tag: "Independent Home · 2023",
    desc: "Exposed brick, timber beams, courtyard with lap pool, rattan kitchen, guest room with tropical mural, Egyptian-inspired family room.",
    images: ["/images/projects/page-22.jpg", "/images/projects/page-21.jpg", "/images/projects/page-23.jpg", "/images/projects/page-24.jpg", "/images/projects/page-25.jpg", "/images/projects/page-26.jpg", "/images/projects/page-27.jpg", "/images/projects/page-28.jpg", "/images/projects/page-29.jpg", "/images/projects/page-30.jpg", "/images/projects/page-31.jpg", "/images/projects/page-32.jpg"],
  },
  {
    title: "The Entertainment Suite",
    tag: "Bespoke Renovation · 2023",
    desc: "F1-themed game room, curved onyx bar with mosaic backdrop, backlit vinyl record lounge, geometric foyer, and music room.",
    images: ["/images/projects/page-33.jpg", "/images/projects/page-35.jpg", "/images/projects/page-36.jpg", "/images/projects/page-37.jpg", "/images/projects/page-38.jpg", "/images/projects/page-39.jpg", "/images/projects/page-34.jpg"],
  },
];

/* ── Project Section ── */
function Project({ p, i }: { p: typeof projects[0]; i: number }) {
  const [active, setActive] = useState(0);
  const next = () => setActive((active + 1) % p.images.length);

  return (
    <FI>
      <div style={{ marginBottom: 80 }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
          <span className="font-serif" style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 0.85, color: "rgba(26,23,20,0.04)", fontWeight: 400 }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b5956b", marginBottom: 4 }}>{p.tag}</div>
            <h3 className="font-serif" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}>{p.title}</h3>
          </div>
        </div>

        {/* Main image — click to advance */}
        <div
          onClick={next}
          style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden", marginBottom: 12, position: "relative" }}
        >
          <img
            src={p.images[active]}
            alt={`${p.title} view ${active + 1}`}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", transition: "opacity 0.4s" }}
          />
          {/* Image counter */}
          <div style={{ position: "absolute", bottom: 16, right: 20, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "6px 14px" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>
              {active + 1} / {p.images.length}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          {p.images.map((img, j) => (
            <button
              key={j}
              onClick={() => setActive(j)}
              style={{
                flexShrink: 0,
                width: 72,
                height: 48,
                borderRadius: 4,
                overflow: "hidden",
                border: active === j ? "2px solid #b5956b" : "2px solid transparent",
                opacity: active === j ? 1 : 0.35,
                transition: "all 0.3s",
                cursor: "pointer",
                background: "none",
                padding: 0,
              }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>

        {/* Description */}
        <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: "#9e9282", maxWidth: 560 }}>{p.desc}</p>
      </div>
    </FI>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════ */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [heroImg, setHeroImg] = useState(0);
  const heroImages = ["/images/projects/page-09.jpg", "/images/projects/page-22.jpg", "/images/projects/page-25.jpg", "/images/projects/page-33.jpg"];

  useEffect(() => { setTimeout(() => setLoaded(true), 200); }, []);
  useEffect(() => {
    const t = setInterval(() => setHeroImg((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <>
      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "18px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        mixBlendMode: "difference",
      }}>
        <a href="#" style={{ display: "flex", gap: 6 }}>
          <span className="font-serif" style={{ fontSize: 15, letterSpacing: "0.18em", color: "#fff" }}>GLO</span>
          <span className="font-serif" style={{ fontSize: 15, letterSpacing: "0.18em", color: "#d4b896" }}>INTERIO</span>
        </a>
        <div style={{ display: "flex", gap: 28 }} className="hidden md:flex">
          {[["Work", "#projects"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", opacity: 0.7 }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ height: "100dvh", position: "relative", overflow: "hidden", background: "#1a1714" }}>
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              opacity: heroImg === i ? 0.55 : 0,
              transition: "opacity 1.5s ease",
            }}
          />
        ))}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,23,20,0.7) 0%, transparent 40%, rgba(26,23,20,0.3) 100%)" }} />

        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px",
        }}>
          <div style={{ overflow: "hidden", marginBottom: 6 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(213,185,150,0.6)", transform: loaded ? "none" : "translateY(100%)", transition: "transform 0.7s ease 0.3s" }}>
              Interior Design Studio
            </div>
          </div>
          {["Crafting", "Spaces That", "Breathe"].map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
                  color: "#fff",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  transform: loaded ? "none" : "translateY(110%)",
                  transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.1}s`,
                }}
              >
                {line === "Spaces That" ? <><em style={{ color: "#d4b896" }}>Spaces</em> That</> : line}
              </h1>
            </div>
          ))}
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 1s" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", maxWidth: 360, lineHeight: 1.6 }}>
              Balancing luxury with calmness. Residential, hospitality &amp; bespoke interiors.
            </p>
            <a href="#projects" style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 28px", transition: "all 0.3s" }}>
              View Work
            </a>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ paddingTop: 100 }}>
          <FI>
            <Label>Selected Work</Label>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 60 }}>Projects</h2>
          </FI>
          {projects.map((p, i) => <Project key={p.title} p={p} i={i} />)}
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ paddingTop: 60, paddingBottom: 100 }}>
          <FI>
            <Label>About</Label>
          </FI>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }} className="lg:flex-row lg:gap-16">
            {/* Image */}
            <FI delay={0.1} className="lg:w-[360px] shrink-0">
              <div style={{ borderRadius: 6, overflow: "hidden", aspectRatio: "3/4" }}>
                <img
                  src="/images/projects/page-01.jpg"
                  alt="Mamta Agarwal"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </FI>

            {/* Text */}
            <FI delay={0.2} className="flex-1 min-w-0">
              <h2 className="font-serif" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3, marginBottom: 20 }}>
                Design is how I <em style={{ color: "#b5956b" }}>make people feel</em>
              </h2>

              <div style={{ fontSize: 14, lineHeight: 1.8, color: "#9e9282" }}>
                <p style={{ marginBottom: 12 }}>
                  I&apos;m <strong style={{ color: "#1a1714" }}>Mamta Agarwal</strong>, founder of Glo Interio. Interior designer with experience in residential, hospitality, restaurant, and office interiors — concept to execution.
                </p>
                <p style={{ marginBottom: 12 }}>
                  PG Diploma from <strong style={{ color: "#1a1714" }}>Pearl Academy, Delhi</strong>. B.Com (Hons) from <strong style={{ color: "#1a1714" }}>Hansraj College, University of Delhi</strong>.
                </p>
                <p>
                  At <strong style={{ color: "#1a1714" }}>Innovations Design Studio, Kathmandu</strong> since 2021 — 6 apartments, 1 independent home, 1 office, 1 hospital section.
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 32, borderTop: "1px solid #eee8de", paddingTop: 24 }}>
                {[["6+", "Projects"], ["5+", "Years"], ["3", "Parallel"], ["100%", "Satisfaction"]].map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div className="font-serif" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#b5956b" }}>{v}</div>
                    <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9e9282", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 24 }}>
                {["AutoCAD", "SketchUp", "Enscape", "Space Planning", "Furniture Design", "3D Rendering", "InDesign", "Project Mgmt"].map((s) => (
                  <span key={s} style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9e9282", border: "1px solid #eee8de", padding: "5px 12px", borderRadius: 20 }}>
                    {s}
                  </span>
                ))}
              </div>
            </FI>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ paddingBottom: 80 }}>
          <FI><Label>How I Work</Label></FI>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginTop: 24 }}>
            {[
              ["Discovery", "Understanding your lifestyle and how you want your space to feel."],
              ["Concept", "Mood boards, layouts, and material palettes that translate your vision."],
              ["Design", "AutoCAD drawings, 3D renders, and detailed specifications."],
              ["Execution", "On-site coordination with vendors and craftsmen."],
            ].map(([t, d], i) => (
              <FI key={t} delay={i * 0.1}>
                <div style={{ padding: "20px 0", borderTop: "1px solid #eee8de" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b5956b" }}>0{i + 1}</span>
                  <h4 className="font-serif" style={{ fontSize: 20, marginTop: 8, marginBottom: 6 }}>{t}</h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#9e9282" }}>{d}</p>
                </div>
              </FI>
            ))}
          </div>
        </section>

        {/* ── QUOTE ── */}
        <FI>
          <div style={{ textAlign: "center", padding: "60px 0 80px", borderTop: "1px solid #eee8de" }}>
            <div style={{ width: 1, height: 40, background: "#b5956b", opacity: 0.3, margin: "0 auto 28px" }} />
            <p className="font-serif" style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)", fontStyle: "italic", color: "#1a1714", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              &ldquo;Every detail is carefully planned to balance luxury with calmness, and elegance with comfort.&rdquo;
            </p>
            <div style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b5956b" }}>
              Mamta Agarwal
            </div>
          </div>
        </FI>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ paddingBottom: 80 }}>
          <FI><Label>Get in Touch</Label></FI>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }} className="lg:gap-16">
            <FI delay={0.1} className="flex-1 min-w-[280px]">
              <h2 className="font-serif" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.3, marginBottom: 24 }}>
                Let&apos;s create <em style={{ color: "#b5956b" }}>something beautiful</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  ["Email", "glointeriobymamta@gmail.com", "mailto:glointeriobymamta@gmail.com"],
                  ["Phone", "+91 95609 18430", "tel:+919560918430"],
                  ["Instagram", "@glointerio", "https://www.instagram.com/glointerio"],
                  ["Location", "Kathmandu, Nepal", ""],
                ].map(([label, value, href]) => (
                  <div key={label}>
                    <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9e9282", marginBottom: 2 }}>{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-serif" style={{ fontSize: 16, color: "#1a1714" }}>
                        {value}
                      </a>
                    ) : (
                      <span className="font-serif" style={{ fontSize: 16, color: "#1a1714" }}>{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </FI>
            <FI delay={0.2} className="flex-1 min-w-[280px]">
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[["text", "Name"], ["email", "Email"], ["text", "Project Type"]].map(([type, label]) => (
                  <input
                    key={label}
                    type={type}
                    placeholder={label}
                    style={{
                      padding: "14px 0",
                      fontSize: 14,
                      border: "none",
                      borderBottom: "1px solid #eee8de",
                      background: "transparent",
                      outline: "none",
                      fontFamily: "inherit",
                      color: "#1a1714",
                    }}
                  />
                ))}
                <textarea
                  placeholder="Tell me about your vision"
                  rows={3}
                  style={{
                    padding: "14px 0",
                    fontSize: 14,
                    border: "none",
                    borderBottom: "1px solid #eee8de",
                    background: "transparent",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "#1a1714",
                    resize: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "14px 36px",
                    border: "1px solid #1a1714",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#1a1714"; (e.target as HTMLElement).style.color = "#f9f6f1"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#1a1714"; }}
                >
                  Send Message
                </button>
              </form>
            </FI>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1a1714", padding: "48px 24px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="font-serif" style={{ fontSize: 16, color: "#fff", letterSpacing: "0.2em" }}>GLO</span>
              <span className="font-serif" style={{ fontSize: 16, color: "#b5956b", letterSpacing: "0.2em" }}>INTERIO</span>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <a href="mailto:glointeriobymamta@gmail.com" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>glointeriobymamta@gmail.com</a>
              <a href="https://www.instagram.com/glointerio" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(213,185,150,0.4)" }}>@glointerio</a>
            </div>
          </div>
          <div style={{ paddingTop: 16, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.08)", letterSpacing: "0.1em" }}>&copy; 2025 Glo Interio by Mamta Agarwal</span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.08)", letterSpacing: "0.1em" }}>Designed with intention</span>
          </div>
        </div>
      </footer>
    </>
  );
}
