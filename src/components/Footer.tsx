"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-white tracking-wider">
                GLO
              </span>
              <span className="font-serif text-2xl text-gold tracking-wider">
                INTERIO
              </span>
            </div>
            <p className="text-white/30 text-xs tracking-[2px] uppercase mt-2">
              By Mamta Agarwal
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8">
            {["Projects", "About", "Process", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/40 text-xs tracking-[2px] uppercase hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="https://www.instagram.com/glointerio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs tracking-[2px] uppercase hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Glo Interio by Mamta Agarwal. All
            rights reserved.
          </span>
          <span className="text-white/20 text-xs tracking-wider">
            Designed with intention, built with care
          </span>
        </div>
      </div>
    </footer>
  );
}
