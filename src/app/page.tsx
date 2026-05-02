"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/* ── Animate on scroll ── */
function R({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={r} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

/* ── Projects data ── */
const projects = [
  { title: "The Sky Terrace", tag: "Rooftop Living · 2024", images: ["/images/projects/page-09.jpg", "/images/projects/page-05.jpg", "/images/projects/page-07.jpg", "/images/projects/page-06.jpg", "/images/projects/page-08.jpg"] },
  { title: "Warm Earth Apartment", tag: "Family Residence · 2024", images: ["/images/projects/page-12.jpg", "/images/projects/page-14.jpg", "/images/projects/page-15.jpg", "/images/projects/page-16.jpg", "/images/projects/page-17.jpg", "/images/projects/page-18.jpg", "/images/projects/page-13.jpg"] },
  { title: "Heritage Brick House", tag: "Independent Home · 2023", images: ["/images/projects/page-22.jpg", "/images/projects/page-21.jpg", "/images/projects/page-23.jpg", "/images/projects/page-24.jpg", "/images/projects/page-25.jpg", "/images/projects/page-26.jpg", "/images/projects/page-27.jpg", "/images/projects/page-28.jpg", "/images/projects/page-29.jpg", "/images/projects/page-30.jpg", "/images/projects/page-31.jpg", "/images/projects/page-32.jpg"] },
  { title: "The Entertainment Suite", tag: "Bespoke Renovation · 2023", images: ["/images/projects/page-33.jpg", "/images/projects/page-35.jpg", "/images/projects/page-36.jpg", "/images/projects/page-37.jpg", "/images/projects/page-38.jpg", "/images/projects/page-39.jpg", "/images/projects/page-34.jpg"] },
];

/* ── Project gallery ── */
function PG({ p }: { p: typeof projects[0] }) {
  const [i, setI] = useState(0);
  return (
    <R>
      <div style={{ marginBottom: 96 }}>
        <div style={{ position: "relative", cursor: "pointer", marginBottom: 16 }} onClick={() => setI((i + 1) % p.images.length)}>
          <img src={p.images[i]} alt={p.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(0,0,0,0.6)", borderRadius: 4, padding: "4px 12px" }}>
            <span style={{ fontSize: 12, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{i + 1} / {p.images.length}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", marginBottom: 16 }}>
          {p.images.map((img, j) => (
            <button key={j} onClick={() => setI(j)} style={{ flexShrink: 0, width: 72, height: 48, padding: 0, border: "none", outline: i === j ? "2px solid #222" : "2px solid transparent", outlineOffset: 2, opacity: i === j ? 1 : 0.4, overflow: "hidden", transition: "all 0.2s", background: "none" }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
          <h3 className="font-serif" style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 400 }}>{p.title}</h3>
          <span style={{ fontSize: 12, color: "#999", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>{p.tag}</span>
        </div>
      </div>
    </R>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [hi, setHi] = useState(0);
  const hImgs = ["/images/projects/page-09.jpg", "/images/projects/page-22.jpg", "/images/projects/page-25.jpg", "/images/projects/page-33.jpg"];

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  useEffect(() => { const t = setInterval(() => setHi(p => (p + 1) % hImgs.length), 5000); return () => clearInterval(t); }, [hImgs.length]);

  return (
    <>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #eee", padding: "0 clamp(20px, 4vw, 48px)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span className="font-serif" style={{ fontSize: 18, fontWeight: 400, color: "#222", letterSpacing: "0.08em" }}>Glo Interio</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 36px)" }}>
          {[["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: 13, color: "#666", letterSpacing: "0.06em" }}>{l}</a>
          ))}
          <a href="https://www.instagram.com/glointerio" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#222", fontWeight: 500 }}>IG</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "100dvh", position: "relative", overflow: "hidden", background: "#111" }}>
        {hImgs.map((src, i) => (
          <img key={src} src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: hi === i ? 0.7 : 0, transition: "opacity 1.5s ease" }} />
        ))}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px) clamp(40px, 6vh, 72px)" }}>
          <p style={{ fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12, opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>Interior Design Studio</p>
          {["Crafting", "Spaces That", "Breathe"].map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <h1 className="font-serif" style={{ fontSize: "clamp(40px, 9vw, 96px)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em", transform: loaded ? "none" : "translateY(110%)", transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.1}s` }}>{line}</h1>
            </div>
          ))}
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 24, opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.8s" }}>
            <a href="#work" style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "12px 32px" }}>View Work</a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Siliguri, India</span>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* WORK */}
        <section id="work" style={{ paddingTop: 120, paddingBottom: 40 }}>
          <R>
            <p style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Selected Work</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, marginBottom: 64 }}>Projects</h2>
          </R>
          {projects.map(p => <PG key={p.title} p={p} />)}
        </section>

        {/* ═══════════════════════════════════════════
            ABOUT — Complete redesign
            ═══════════════════════════════════════════ */}
        <section id="about" style={{ paddingTop: 40, paddingBottom: 120 }}>

          {/* Section label */}
          <R>
            <p style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", marginBottom: 48 }}>About the Designer</p>
          </R>

          {/* Full-width statement image */}
          <R>
            <div style={{ position: "relative", marginBottom: 64 }}>
              <img
                src="/images/projects/page-01.jpg"
                alt="Mamta Agarwal — Glo Interio"
                style={{ width: "100%", aspectRatio: "16/7", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "clamp(20px, 4vw, 48px)", left: "clamp(20px, 4vw, 48px)", right: "clamp(20px, 4vw, 48px)" }}>
                <h2 className="font-serif" style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 400, color: "#fff", lineHeight: 1.15 }}>
                  Mamta Agarwal
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 8, letterSpacing: "0.1em" }}>
                  Founder &amp; Principal Designer, Glo Interio
                </p>
              </div>
            </div>
          </R>

          {/* Two-column: Philosophy + Bio */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20" style={{ marginBottom: 64 }}>
            <R className="flex-1 min-w-0">
              <h3 className="font-serif" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, lineHeight: 1.35, marginBottom: 20 }}>
                I believe design should feel like home before you even move in.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "#666" }}>
                Every project begins with listening — understanding not just what a space should look like, but how it should make people feel. I design for real life: the morning coffee ritual, the quiet evening read, the way sunlight falls at 4pm. These are the moments that shape a home, and these are the moments I design around.
              </p>
            </R>
            <R delay={0.1} className="flex-1 min-w-0">
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "#666", marginBottom: 20 }}>
                With over five years of hands-on experience spanning residential apartments, independent homes, hospitality spaces, and healthcare facilities, I bring a rare combination of creative vision and practical execution. From the first sketch to the final walkthrough, I&apos;m there — coordinating vendors, selecting materials, managing timelines, and ensuring every detail is exactly right.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "#666" }}>
                My work is rooted in warmth: natural materials, layered textures, earthy palettes, and spaces that feel both refined and deeply comfortable. Whether it&apos;s a terrace wrapped in bamboo and greenery or a living room anchored by exposed brick and timber beams — every space tells a story.
              </p>
            </R>
          </div>

          {/* Stats bar */}
          <R>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, marginBottom: 64, background: "#eee" }}>
              {[
                ["6+", "Projects Delivered"],
                ["5+", "Years of Experience"],
                ["3", "Projects at Once"],
                ["100%", "Client Satisfaction"],
              ].map(([v, l]) => (
                <div key={l} style={{ background: "#fff", padding: "clamp(20px, 3vw, 40px)", textAlign: "center" }}>
                  <div className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#222", marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 11, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </R>

          {/* Experience + Education side by side */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20" style={{ marginBottom: 64 }}>
            {/* Experience */}
            <R className="flex-1 min-w-0">
              <h4 style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 24 }}>Experience</h4>

              <div style={{ borderTop: "1px solid #eee", paddingTop: 20, marginBottom: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <h5 style={{ fontSize: 16, fontWeight: 600, color: "#222" }}>Innovations Design Studio</h5>
                  <span style={{ fontSize: 12, color: "#999" }}>2021 — Present</span>
                </div>
                <p style={{ fontSize: 13, color: "#999", marginBottom: 12 }}>Interior Designer · Siliguri</p>
                <ul style={{ fontSize: 14, lineHeight: 1.8, color: "#666", paddingLeft: 18, listStyleType: "disc" }}>
                  <li>Designed and executed 6 apartments, 1 independent home, 1 office, and 1 hospital section</li>
                  <li>Managed up to 3 projects simultaneously from concept through handover</li>
                  <li>Full ownership of client presentations, 3D renders, AutoCAD drawings, and site execution</li>
                  <li>Vendor coordination, material selection, and budget management</li>
                </ul>
              </div>

              <div style={{ borderTop: "1px solid #eee", paddingTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <h5 style={{ fontSize: 16, fontWeight: 600, color: "#222" }}>Ravish Vohra Homes</h5>
                  <span style={{ fontSize: 12, color: "#999" }}>Jul — Dec 2020</span>
                </div>
                <p style={{ fontSize: 13, color: "#999", marginBottom: 12 }}>Interior Designer · Delhi</p>
                <ul style={{ fontSize: 14, lineHeight: 1.8, color: "#666", paddingLeft: 18, listStyleType: "disc" }}>
                  <li>Design concepts and client presentations</li>
                  <li>Team collaboration on residential projects</li>
                </ul>
              </div>
            </R>

            {/* Education */}
            <R delay={0.1} className="flex-1 min-w-0">
              <h4 style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 24 }}>Education</h4>

              {[
                { year: "2020", title: "Post Graduate Diploma in Interior Design", school: "Pearl Academy, Delhi", note: "India's leading design institution" },
                { year: "2017", title: "B.Com (Honours)", school: "Hansraj College, University of Delhi", note: "One of India's top commerce colleges" },
                { year: "2026", title: "Vastu Shastra & Numerology", school: "Academy of Vedic Vidya", note: "Ongoing — blending traditional spatial science with modern design" },
              ].map((ed, i) => (
                <div key={ed.year} style={{ borderTop: "1px solid #eee", paddingTop: 20, marginBottom: 24 }}>
                  <span style={{ fontSize: 12, color: "#999" }}>{ed.year}</span>
                  <h5 style={{ fontSize: 16, fontWeight: 600, color: "#222", marginTop: 4, marginBottom: 2 }}>{ed.title}</h5>
                  <p style={{ fontSize: 14, color: "#666" }}>{ed.school}</p>
                  <p style={{ fontSize: 13, color: "#999", fontStyle: "italic", marginTop: 4 }}>{ed.note}</p>
                </div>
              ))}

              {/* Skills */}
              <h4 style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 16, marginTop: 16 }}>Technical Skills</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["AutoCAD", "SketchUp", "Enscape", "Space Planning", "Furniture Design", "3D Visualization", "Adobe InDesign", "Material Curation", "Vendor Management", "Project Management"].map(s => (
                  <span key={s} style={{ fontSize: 12, color: "#666", border: "1px solid #e5e5e5", padding: "6px 16px", borderRadius: 3 }}>{s}</span>
                ))}
              </div>
            </R>
          </div>

          {/* Reference */}
          <R>
            <div style={{ borderTop: "1px solid #eee", paddingTop: 32 }}>
              <h4 style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: 12 }}>Reference</h4>
              <p style={{ fontSize: 15, color: "#222" }}>
                <strong>Rishhi Saraf</strong> — Director, Innovations Design Studio
              </p>
              <p style={{ fontSize: 14, color: "#666" }}>
                +977 985 103 3895 · innovations73@gmail.com
              </p>
            </div>
          </R>
        </section>

        {/* QUOTE */}
        <R>
          <div style={{ textAlign: "center", padding: "60px 0 80px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
            <p className="font-serif" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.7, color: "#444", maxWidth: 640, margin: "0 auto" }}>
              &ldquo;Every detail is carefully planned to balance luxury with calmness, and elegance with comfort.&rdquo;
            </p>
            <p style={{ marginTop: 20, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" }}>Mamta Agarwal</p>
          </div>
        </R>

        {/* CONTACT */}
        <section id="contact" style={{ paddingTop: 80, paddingBottom: 100 }}>
          <R>
            <p style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Contact</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, marginBottom: 40 }}>Get in touch</h2>
          </R>
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <R className="flex-1 min-w-0">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px" }}>
                {[
                  ["Email", "glointeriobymamta@gmail.com", "mailto:glointeriobymamta@gmail.com"],
                  ["Phone", "+91 95609 18430", "tel:+919560918430"],
                  ["Instagram", "@glointerio", "https://www.instagram.com/glointerio"],
                  ["Location", "Siliguri, India", ""],
                ].map(([label, value, href]) => (
                  <div key={label}>
                    <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: 4 }}>{label}</div>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 15, color: "#222" }}>{value}</a> : <span style={{ fontSize: 15, color: "#222" }}>{value}</span>}
                  </div>
                ))}
              </div>
            </R>
            <R delay={0.1} className="flex-1 min-w-0">
              <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {["Name", "Email", "Project Type"].map(label => (
                  <input key={label} type={label === "Email" ? "email" : "text"} placeholder={label}
                    style={{ padding: "12px 0", fontSize: 14, border: "none", borderBottom: "1px solid #e5e5e5", background: "transparent", outline: "none", fontFamily: "inherit", color: "#222" }}
                    onFocus={e => e.target.style.borderBottomColor = "#222"} onBlur={e => e.target.style.borderBottomColor = "#e5e5e5"} />
                ))}
                <textarea placeholder="About your project" rows={3}
                  style={{ padding: "12px 0", fontSize: 14, border: "none", borderBottom: "1px solid #e5e5e5", background: "transparent", outline: "none", fontFamily: "inherit", color: "#222", resize: "none" }}
                  onFocus={e => e.target.style.borderBottomColor = "#222"} onBlur={e => e.target.style.borderBottomColor = "#e5e5e5"} />
                <button type="submit"
                  style={{ alignSelf: "flex-start", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 40px", border: "1px solid #222", background: "#222", color: "#fff", fontFamily: "inherit", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#222"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = "#222"; (e.target as HTMLElement).style.color = "#fff"; }}>
                  Send Message
                </button>
              </form>
            </R>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #eee", padding: "40px clamp(20px, 4vw, 48px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <span className="font-serif" style={{ fontSize: 15, color: "#222" }}>Glo Interio</span>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} style={{ fontSize: 12, color: "#999" }}>{l}</a>
            ))}
            <a href="https://www.instagram.com/glointerio" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#999" }}>Instagram</a>
          </div>
          <span style={{ fontSize: 11, color: "#ccc" }}>&copy; 2025 Mamta Agarwal</span>
        </div>
      </footer>
    </>
  );
}
