"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Sky Terrace",
    subtitle: "Rooftop Living",
    description: "Bamboo-clad ceilings, tropical greenery, rattan pendants, a custom bar with water feature wall, and a sunken fire pit lounge.",
    images: [
      "/images/projects/page-09.jpg",
      "/images/projects/page-05.jpg",
      "/images/projects/page-07.jpg",
      "/images/projects/page-06.jpg",
      "/images/projects/page-08.jpg",
    ],
    year: "2024",
  },
  {
    id: 2,
    title: "Warm Earth Apartment",
    subtitle: "Family Residence",
    description: "Wooden beam ceilings, custom bookshelf walls, orange-sofa living area, daughter's pink floral bedroom, and olive-green master suite.",
    images: [
      "/images/projects/page-12.jpg",
      "/images/projects/page-13.jpg",
      "/images/projects/page-14.jpg",
      "/images/projects/page-15.jpg",
      "/images/projects/page-16.jpg",
      "/images/projects/page-17.jpg",
      "/images/projects/page-18.jpg",
    ],
    year: "2024",
  },
  {
    id: 3,
    title: "Heritage Brick House",
    subtitle: "Independent Home",
    description: "Exposed brick, timber beams, courtyard with lap pool, rattan kitchen, tropical guest room, Egyptian-inspired family room.",
    images: [
      "/images/projects/page-22.jpg",
      "/images/projects/page-21.jpg",
      "/images/projects/page-23.jpg",
      "/images/projects/page-24.jpg",
      "/images/projects/page-25.jpg",
      "/images/projects/page-26.jpg",
      "/images/projects/page-27.jpg",
      "/images/projects/page-28.jpg",
      "/images/projects/page-29.jpg",
      "/images/projects/page-30.jpg",
      "/images/projects/page-31.jpg",
      "/images/projects/page-32.jpg",
    ],
    year: "2023",
  },
  {
    id: 4,
    title: "The Entertainment Suite",
    subtitle: "Bespoke Renovation",
    description: "F1-themed game room, curved onyx bar, backlit vinyl record lounge, geometric-tiled foyer, and music room.",
    images: [
      "/images/projects/page-33.jpg",
      "/images/projects/page-34.jpg",
      "/images/projects/page-35.jpg",
      "/images/projects/page-36.jpg",
      "/images/projects/page-37.jpg",
      "/images/projects/page-38.jpg",
      "/images/projects/page-39.jpg",
    ],
    year: "2023",
  },
];

function ProjectBlock({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
    >
      {/* Number + Title bar */}
      <div className="flex items-baseline gap-6 mb-6">
        <span className="font-serif text-7xl md:text-8xl text-charcoal/[0.06] leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <span className="text-gold text-[0.55rem] tracking-[0.4em] uppercase block mb-1">{project.subtitle}</span>
          <h3 className="font-serif text-2xl md:text-4xl text-charcoal tracking-tight">{project.title}</h3>
        </div>
        <span className="text-earth/30 text-[0.6rem] tracking-[0.2em] uppercase hidden md:block">{project.year}</span>
      </div>

      {/* Main image */}
      <div
        className="img-hover rounded-sm cursor-pointer mb-3"
        onClick={() => setActive((active + 1) % project.images.length)}
      >
        <div className="aspect-[16/9] overflow-hidden rounded-sm bg-cream">
          <img
            src={project.images[active]}
            alt={`${project.title} — view ${active + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="project-overlay rounded-sm" />
        <div className="project-info">
          <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="thumb-strip">
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-10 md:w-24 md:h-14 rounded-sm overflow-hidden transition-all duration-300 ${
              active === i ? "ring-1 ring-gold ring-offset-1 ring-offset-warm-white opacity-100" : "opacity-30 hover:opacity-60"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className={`flex items-end justify-between mb-16 md:mb-24 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-gold text-[0.55rem] tracking-[0.4em] uppercase">Selected Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight">Projects</h2>
          </div>
          <span className="text-earth/30 text-[0.55rem] tracking-[0.2em] uppercase hidden md:block">
            {projects.length} Projects
          </span>
        </div>

        <div className="space-y-24 md:space-y-36">
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
