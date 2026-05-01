"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{ padding: "80px 24px", background: "#f5f0e8", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div style={{ flex: "0 0 auto", maxWidth: 420, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{ width: 32, height: 1, background: "#b8976a" }} />
              <span style={{ color: "#b8976a", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>Get in Touch</span>
            </div>

            <h2 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#1a1815", lineHeight: 1.2, marginBottom: 16 }}>
              Let&apos;s Create
              <br />
              <em style={{ color: "rgba(184,151,106,0.7)" }}>Something Beautiful</em>
            </h2>

            <p style={{ color: "rgba(139,115,85,0.5)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 32 }}>
              Whether you&apos;re planning a new home, renovating a space, or need
              design consultation — I&apos;d love to hear about your project.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Email", value: "glointeriobymamta@gmail.com", href: "mailto:glointeriobymamta@gmail.com" },
                { label: "Phone", value: "+91 95609 18430", href: "tel:+919560918430" },
                { label: "Instagram", value: "@glointerio", href: "https://www.instagram.com/glointerio" },
                { label: "Location", value: "Kathmandu, Nepal" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(139,115,85,0.3)", marginBottom: 2 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-serif" style={{ fontSize: "1rem", color: "#1a1815", textDecoration: "none" }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-serif" style={{ fontSize: "1rem", color: "#1a1815" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Form */}
          <div style={{ flex: 1, minWidth: 0, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.2s" }}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "60px 0" }}>
                <span className="font-serif" style={{ fontSize: "1.5rem", color: "#1a1815", marginBottom: 8 }}>Thank you</span>
                <p style={{ color: "rgba(139,115,85,0.5)", fontSize: "0.85rem" }}>I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-field"><input type="text" placeholder=" " required /><label>Your Name</label></div>
                <div className="form-field"><input type="email" placeholder=" " required /><label>Email Address</label></div>
                <div className="form-field"><input type="text" placeholder=" " /><label>Project Type</label></div>
                <div className="form-field"><textarea rows={4} placeholder=" " style={{ resize: "none" }} /><label>Tell me about your vision</label></div>
                <button type="submit" className="btn-primary" style={{ width: "100%", maxWidth: 280 }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
