"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-serif text-2xl text-white tracking-wider">
              MAMTA
            </span>
            <span className="font-serif text-2xl text-gold">.</span>
            <p className="text-white/30 text-xs tracking-[2px] uppercase mt-2">
              Interior Design Studio
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-8">
            {["Projects", "About", "Process", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/40 text-xs tracking-[2px] uppercase hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Mamta Agarwal. All rights
            reserved.
          </span>
          <span className="text-white/20 text-xs tracking-wider">
            Designed with intention, built with care
          </span>
        </div>
      </div>
    </footer>
  );
}
