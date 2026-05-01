"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Sky Terrace",
    subtitle: "Rooftop Living",
    description:
      "A rooftop sanctuary focused on comfort, flow, and positive energy. Bamboo-clad ceilings, curated tropical greenery, rattan pendant lights, a custom bar with water feature wall, and a sunken fire pit lounge.",
    images: [
      "/images/projects/page-09.jpg",
      "/images/projects/page-05.jpg",
      "/images/projects/page-07.jpg",
      "/images/projects/page-06.jpg",
      "/images/projects/page-08.jpg",
    ],
    year: "2024",
    location: "Kathmandu",
  },
  {
    id: 2,
    title: "Warm Earth Apartment",
    subtitle: "Family Residence",
    description:
      "Warm earthy tones, wooden beam ceilings, custom bookshelf walls, a vibrant living area with orange sofa and teal accents, a daughter's pink floral bedroom, and a serene olive-green master suite.",
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
    location: "Kathmandu",
  },
  {
    id: 3,
    title: "Heritage Brick House",
    subtitle: "Independent Home",
    description:
      "Exposed brick walls, timber beam ceilings, a courtyard with lap pool, rattan-detailed kitchen, tropical guest room with mural wallpaper, family room with Egyptian-inspired wall art, and a daughter's studio.",
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
    location: "Kathmandu",
  },
  {
    id: 4,
    title: "The Entertainment Suite",
    subtitle: "Bespoke Renovation",
    description:
      "F1-themed game room with race track wall art and pool table, curved onyx bar with mosaic tile backdrop, backlit vinyl record lounge, bold geometric-tiled foyer, and a music room.",
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
    location: "Kathmandu",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ProjectSection({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, visible } = useInView(0.1);
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (i: number) => {
    setActiveImg(i);
    scrollRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: "150ms" }}
    >
      {/* Project header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase block mb-2">
            {String(index + 1).padStart(2, "0")} — {project.subtitle}
          </span>
          <h3 className="font-serif text-3xl md:text-5xl text-charcoal tracking-tight">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-8 text-[0.6rem] tracking-[0.2em] uppercase text-earth/60">
          <span>{project.year}</span>
          <span>{project.location}</span>
          <span>{project.images.length} Views</span>
        </div>
      </div>

      {/* Hero image — full width cinematic */}
      <div className="img-hover rounded-sm mb-4 cursor-pointer" onClick={() => scrollTo((activeImg + 1) % project.images.length)}>
        <div className="aspect-[21/9] md:aspect-[2.4/1] overflow-hidden rounded-sm">
          <img
            src={project.images[activeImg]}
            alt={`${project.title} — view ${activeImg + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="project-overlay rounded-sm" />
        <div className="project-info">
          <p className="text-white/70 text-sm max-w-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Thumbnail strip — horizontal scroll */}
      <div ref={scrollRef} className="horizontal-scroll pb-2" style={{ padding: 0, gap: "0.5rem" }}>
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`relative flex-shrink-0 overflow-hidden rounded-sm transition-all duration-500 ${
              activeImg === i ? "ring-1 ring-gold opacity-100" : "opacity-40 hover:opacity-70"
            }`}
            style={{ width: "clamp(80px, 10vw, 120px)", aspectRatio: "16/10" }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useInView(0.05);

  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section intro */}
        <div
          ref={ref}
          className={`mb-20 md:mb-28 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">Selected Work</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-earth/60 text-sm md:text-base max-w-xl leading-relaxed">
            From intimate apartments to expansive homes and bespoke entertainment
            spaces — each crafted to support how people live, rest, and grow.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-44">
          {projects.map((p, i) => (
            <ProjectSection key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
