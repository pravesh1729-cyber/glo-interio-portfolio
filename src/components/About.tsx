"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "6+", label: "Projects Delivered" },
  { number: "5+", label: "Years Experience" },
  { number: "3", label: "Project Simultaneous" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-36 bg-cream overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
        <div className="w-full h-full font-serif text-[400px] leading-none text-charcoal flex items-center justify-center">
          M
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sand/30">
              {/* Placeholder — replace /images/mamta-portrait.jpg with actual photo */}
              <img
                src="/images/mamta-portrait.jpg"
                alt="Mamta Agarwal — Interior Designer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-charcoal/5 p-8">
                        <span style="font-family: 'Playfair Display', serif; font-size: 4rem; color: var(--color-gold); opacity: 0.6;">MA</span>
                        <span style="font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; color: var(--color-earth); margin-top: 1rem;">Interior Designer</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-charcoal text-white p-8 rounded-sm shadow-2xl max-w-[260px]">
              <span className="text-gold text-[10px] tracking-[3px] uppercase block mb-2">
                Based in
              </span>
              <span className="font-serif text-2xl">Kathmandu, Nepal</span>
              <div className="w-8 h-[1px] bg-gold/40 mt-3" />
            </div>
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-gold text-xs tracking-[5px] uppercase">
              About
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 tracking-tight leading-tight">
              Design is how I
              <br />
              <span className="italic">make people feel</span>
            </h2>

            <div className="mt-8 space-y-5 text-earth text-sm md:text-base leading-relaxed">
              <p>
                I&apos;m Mamta Agarwal, a detail-oriented interior designer with
                hands-on experience in hospital, residential, restaurant, and
                office interiors. I&apos;m involved in concept development, space
                planning, and execution support — skilled in creating functional,
                client-focused, and aesthetically refined spaces.
              </p>
              <p>
                With a Post Graduate Diploma in Interior Design from{" "}
                <strong className="text-charcoal">Pearl Academy, Delhi</strong>{" "}
                and a B.Com (Hons) from{" "}
                <strong className="text-charcoal">Hansraj College, University of Delhi</strong>,
                plus ongoing studies in Vastu and Numerology, I bring a unique
                balance of modern design thinking and holistic spatial awareness.
              </p>
              <p>
                Currently at{" "}
                <strong className="text-charcoal">
                  Innovations Design Studio, Kathmandu
                </strong>{" "}
                (since Feb 2021), I&apos;ve designed and executed 6 apartments,
                1 independent home, 1 office, and 1 hospital section — handling
                up to 3 projects at a time from concept through to handover.
                Previously at Ravish Vohra Homes, Delhi.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "AutoCAD",
                "SketchUp & Enscape",
                "Space Planning",
                "Furniture Design",
                "Material Selection",
                "Project Management",
                "3D Rendering",
                "InDesign",
                "Vendor Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] tracking-[2px] uppercase text-earth border border-sand px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a href="#contact" className="inline-block mt-10 btn-elegant">
              Let&apos;s Collaborate
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${600 + i * 150}ms` }}
            >
              <span className="font-serif text-4xl md:text-5xl text-charcoal block">
                {stat.number}
              </span>
              <span className="text-earth text-[10px] tracking-[3px] uppercase mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
