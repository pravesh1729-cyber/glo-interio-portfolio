"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="font-serif text-2xl text-white tracking-[0.2em]">GLO</span>
              <span className="font-serif text-2xl text-gold tracking-[0.2em]">INTERIO</span>
            </div>
            <p className="text-white/20 text-sm leading-relaxed max-w-sm">
              Crafting spaces that balance luxury with calmness, and elegance with warmth.
              Interior design studio by Mamta Agarwal, based in Kathmandu, Nepal.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/20 block mb-6">Navigation</span>
            <div className="space-y-3">
              {["Work", "About", "Process", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase() === "work" ? "projects" : link.toLowerCase()}`}
                  className="block text-white/40 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/20 block mb-6">Contact</span>
            <div className="space-y-3">
              <a href="mailto:glointeriobymamta@gmail.com" className="block text-white/40 text-sm hover:text-gold transition-colors duration-300">
                glointeriobymamta@gmail.com
              </a>
              <a href="tel:+919560918430" className="block text-white/40 text-sm hover:text-gold transition-colors duration-300">
                +91 95609 18430
              </a>
              <a
                href="https://www.instagram.com/glointerio"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gold/60 text-sm hover:text-gold transition-colors duration-300"
              >
                @glointerio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/10 text-xs tracking-[0.15em]">
            &copy; {new Date().getFullYear()} Glo Interio by Mamta Agarwal
          </span>
          <span className="text-white/10 text-xs tracking-[0.15em]">
            Designed with intention
          </span>
        </div>
      </div>
    </footer>
  );
}
