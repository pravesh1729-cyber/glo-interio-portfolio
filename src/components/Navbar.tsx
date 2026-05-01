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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3 bg-warm-white/95 backdrop-blur-xl" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-1.5">
            <span className={`font-serif text-lg tracking-[0.2em] transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-white"}`}>
              GLO
            </span>
            <span className="font-serif text-lg tracking-[0.2em] text-gold">
              INTERIO
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-charcoal/60 hover:text-charcoal" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/glointerio"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-500 ${
                scrolled ? "text-gold" : "text-gold"
              }`}
            >
              @glointerio
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden z-[60] w-8 h-8 flex flex-col items-end justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span className={`block h-[1px] transition-all duration-500 ${open ? "w-6 rotate-45 translate-y-[3px] bg-white" : scrolled ? "w-6 bg-charcoal" : "w-6 bg-white"}`} />
            <span className={`block h-[1px] transition-all duration-500 ${open ? "w-0 opacity-0" : scrolled ? "w-4 bg-charcoal" : "w-4 bg-white"}`} />
            <span className={`block h-[1px] transition-all duration-500 ${open ? "w-6 -rotate-45 -translate-y-[3px] bg-white" : scrolled ? "w-5 bg-charcoal" : "w-5 bg-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[55] bg-charcoal transition-all duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-white/90 tracking-wider hover:text-gold transition-colors duration-300"
              style={{
                transitionDelay: open ? `${i * 60 + 200}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${open ? i * 60 + 200 : 0}ms, transform 0.4s ease ${open ? i * 60 + 200 : 0}ms, color 0.3s ease`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/glointerio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-gold/60 text-xs tracking-[0.3em] uppercase"
          >
            @glointerio
          </a>
        </div>
      </div>
    </>
  );
}
