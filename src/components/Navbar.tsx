"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span
              className={`font-serif text-xl tracking-wider transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              GLO
            </span>
            <span
              className={`font-serif text-xl tracking-wider transition-colors duration-300 ${
                scrolled ? "text-gold" : "text-gold"
              }`}
            >
              INTERIO
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link text-xs tracking-[3px] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal/70 hover:text-charcoal"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/glointerio"
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-link text-xs tracking-[3px] uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal/70 hover:text-charcoal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Instagram
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[60]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-[5px] bg-white"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[5px] bg-white"
                  : scrolled
                  ? "bg-charcoal"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[55] bg-charcoal flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-white font-serif text-3xl tracking-wider hover:text-gold transition-colors"
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://www.instagram.com/glointerio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-serif text-xl tracking-wider"
        >
          @glointerio
        </a>
      </div>
    </>
  );
}
