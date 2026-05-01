"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "rgba(250,248,244,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "baseline", gap: 6, textDecoration: "none" }}>
            <span className="font-serif" style={{ fontSize: 16, letterSpacing: "0.15em", color: scrolled ? "#1a1815" : "#fff", transition: "color 0.5s" }}>
              GLO
            </span>
            <span className="font-serif" style={{ fontSize: 16, letterSpacing: "0.15em", color: "#b8976a" }}>
              INTERIO
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: scrolled ? "rgba(26,24,21,0.5)" : "rgba(255,255,255,0.6)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = scrolled ? "#1a1815" : "#fff"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = scrolled ? "rgba(26,24,21,0.5)" : "rgba(255,255,255,0.6)"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            style={{ zIndex: 60, width: 28, height: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 5, background: "none", border: "none", cursor: "pointer" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 1.5,
                  background: open ? "#fff" : scrolled ? "#1a1815" : "#fff",
                  width: i === 1 ? (open ? 0 : 16) : 22,
                  marginLeft: "auto",
                  transition: "all 0.4s ease",
                  transform: open ? (i === 0 ? "rotate(45deg) translateY(3.5px)" : i === 2 ? "rotate(-45deg) translateY(-3.5px)" : "") : "",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 55,
            background: "#1a1815",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif"
              style={{ fontSize: "2rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", letterSpacing: "0.1em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/glointerio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 16, color: "#b8976a", fontSize: "0.7rem", letterSpacing: "0.3em", textDecoration: "none", textTransform: "uppercase" }}
          >
            @glointerio
          </a>
        </div>
      )}
    </>
  );
}
