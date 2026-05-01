"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1815", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {/* Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
              <span className="font-serif" style={{ fontSize: 18, color: "#fff", letterSpacing: "0.2em" }}>GLO</span>
              <span className="font-serif" style={{ fontSize: 18, color: "#b8976a", letterSpacing: "0.2em" }}>INTERIO</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem", lineHeight: 1.6, maxWidth: 280 }}>
              Interior design studio by Mamta Agarwal. Crafting spaces that breathe.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {["Work", "About", "Process", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase() === "work" ? "projects" : l.toLowerCase()}`}
                style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="mailto:glointeriobymamta@gmail.com" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", textDecoration: "none" }}>
              glointeriobymamta@gmail.com
            </a>
            <a href="tel:+919560918430" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", textDecoration: "none" }}>
              +91 95609 18430
            </a>
            <a href="https://www.instagram.com/glointerio" target="_blank" rel="noopener noreferrer" style={{ color: "#b8976a", fontSize: "0.75rem", textDecoration: "none", opacity: 0.6 }}>
              @glointerio
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.08)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            &copy; {new Date().getFullYear()} Glo Interio by Mamta Agarwal
          </span>
          <span style={{ color: "rgba(255,255,255,0.08)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            Designed with intention
          </span>
        </div>
      </div>
    </footer>
  );
}
