"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Sky Terrace",
    category: "Terrace Design",
    description:
      "A rooftop sanctuary focused on comfort, flow, and positive energy. Bamboo-clad ceilings, curated tropical greenery, rattan pendants, a custom bar with water feature wall, and a sunken fire pit lounge — every detail balances luxury with calmness.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    tags: ["Outdoor Living", "Bamboo & Rattan", "Fire Pit Lounge", "Bar Design"],
    area: "1,200 sq ft",
    year: "2024",
    scope: "Full terrace — seating, bar, greenery, lighting",
  },
  {
    id: 2,
    title: "Warm Earth Apartment",
    category: "Apartment Design",
    description:
      "A family apartment with warm earthy tones, wooden beam ceilings, custom bookshelf walls, and thoughtfully designed rooms — from a vibrant living-dining area with orange sofa and teal accents to a daughter's pink bedroom with floral wallpaper and a serene olive-green master suite.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    tags: ["Residential", "Custom Joinery", "Layered Lighting", "Warm Palette"],
    area: "2,400 sq ft",
    year: "2024",
    scope: "Living, dining, master bedroom, daughter's room, TV unit",
  },
  {
    id: 3,
    title: "Heritage Brick House",
    category: "House Design",
    description:
      "A full home with exposed brick walls, timber beam ceilings, a courtyard, and a lap pool. Features include a rattan-accented kitchen, a master bedroom with chevron patterns, a tropical guest room with mural wallpaper, a daughter's studio, a study nook, and a family room with Egyptian-inspired wall art.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Full Home", "Brick & Timber", "Courtyard", "Lap Pool"],
    area: "4,500 sq ft",
    year: "2023",
    scope: "Entrance, living, dining, kitchen, 3 bedrooms, study, family room",
  },
  {
    id: 4,
    title: "The Entertainment Suite",
    category: "Other Renovations",
    description:
      "A bespoke entertainment floor featuring an F1-themed game room with race track wall art and pool table, a curved onyx bar with mosaic tile backdrop, a vinyl record lounge with backlit display wall, and a music room — all designed for a client who lives for experiences.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    tags: ["F1 Game Room", "Curved Bar", "Vinyl Lounge", "Bespoke"],
    area: "3,200 sq ft",
    year: "2023",
    scope: "Bar, game room, pool table room, music lounge, entrance foyer",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      {/* Image */}
      <div className={`project-card rounded-sm ${isEven ? "" : "lg:order-2"}`}>
        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="overlay" />
          <div className="card-content absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[2px] uppercase text-white/70 border border-white/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={isEven ? "" : "lg:order-1"}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-xs tracking-[3px] uppercase">
            {project.category}
          </span>
          <div className="flex-1 h-[1px] bg-sand/50" />
        </div>

        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-tight leading-tight">
          {project.title}
        </h3>

        <p className="mt-6 text-earth leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-8">
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-earth/60 block mb-1">
              Area
            </span>
            <span className="font-serif text-lg text-charcoal">
              {project.area}
            </span>
          </div>
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-earth/60 block mb-1">
              Year
            </span>
            <span className="font-serif text-lg text-charcoal">
              {project.year}
            </span>
          </div>
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-earth/60 block mb-1">
              Scope
            </span>
            <span className="text-sm text-charcoal">
              {project.scope}
            </span>
          </div>
        </div>

        <button className="mt-8 btn-elegant text-xs">View Project</button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-gold text-xs tracking-[5px] uppercase">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4 tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-4 text-earth text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            From intimate apartments to expansive homes and bespoke entertainment
            spaces — each project is crafted to support how people live, rest, and grow.
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Project list */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
