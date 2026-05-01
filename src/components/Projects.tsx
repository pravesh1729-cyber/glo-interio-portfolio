"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Sky Terrace",
    category: "Terrace Design",
    description:
      "A rooftop sanctuary focused on comfort, flow, and positive energy. Bamboo-clad ceilings, curated tropical greenery, rattan pendant lights, a custom bar with water feature wall, and a sunken fire pit lounge — every detail balances luxury with calmness.",
    heroImage: "/images/projects/page-05.jpg",
    gallery: [
      "/images/projects/page-06.jpg",
      "/images/projects/page-07.jpg",
      "/images/projects/page-08.jpg",
      "/images/projects/page-09.jpg",
    ],
    tags: ["Outdoor Living", "Bamboo & Rattan", "Fire Pit", "Bar Design"],
    year: "2024",
  },
  {
    id: 2,
    title: "Warm Earth Apartment",
    category: "Apartment Design",
    description:
      "A family apartment where warm earthy tones, wooden beam ceilings, and custom bookshelf walls create a home that breathes. From the vibrant orange-sofa living area with teal accents to a daughter's pink floral bedroom and a serene olive-green master suite.",
    heroImage: "/images/projects/page-12.jpg",
    gallery: [
      "/images/projects/page-13.jpg",
      "/images/projects/page-14.jpg",
      "/images/projects/page-15.jpg",
      "/images/projects/page-17.jpg",
      "/images/projects/page-18.jpg",
    ],
    tags: ["Residential", "Custom Joinery", "Warm Palette", "Layered Lighting"],
    year: "2024",
  },
  {
    id: 3,
    title: "Heritage Brick House",
    category: "House Design",
    description:
      "A home designed with intention — exposed brick walls, timber beam ceilings, a courtyard with lap pool, rattan-detailed kitchen, tropical guest room with mural wallpaper, and a family room with Egyptian-inspired wall art. Clear zoning between active and quiet areas.",
    heroImage: "/images/projects/page-22.jpg",
    gallery: [
      "/images/projects/page-21.jpg",
      "/images/projects/page-23.jpg",
      "/images/projects/page-24.jpg",
      "/images/projects/page-25.jpg",
      "/images/projects/page-27.jpg",
      "/images/projects/page-29.jpg",
      "/images/projects/page-31.jpg",
    ],
    tags: ["Full Home", "Brick & Timber", "Courtyard", "Lap Pool"],
    year: "2023",
  },
  {
    id: 4,
    title: "The Entertainment Suite",
    category: "Other Renovations",
    description:
      "A bespoke entertainment floor: F1-themed game room with race track wall art and pool table, curved onyx bar with mosaic tile backdrop, a backlit vinyl record lounge with music station, and a bold geometric-tiled foyer — designed for a client who lives for experiences.",
    heroImage: "/images/projects/page-33.jpg",
    gallery: [
      "/images/projects/page-34.jpg",
      "/images/projects/page-35.jpg",
      "/images/projects/page-36.jpg",
      "/images/projects/page-37.jpg",
      "/images/projects/page-38.jpg",
      "/images/projects/page-39.jpg",
    ],
    tags: ["F1 Game Room", "Curved Bar", "Vinyl Lounge", "Bespoke"],
    year: "2023",
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
  const [activeImg, setActiveImg] = useState(0);

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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      {/* Hero image — full width */}
      <div className="project-card rounded-sm mb-8">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="overlay" />
          <div className="card-content absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gold text-xs tracking-[3px] uppercase">
                {project.category}
              </span>
              <div className="flex-1 h-[1px] bg-white/20 max-w-32" />
              <span className="text-white/50 text-xs tracking-wider">
                {project.year}
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Content + Gallery row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Description */}
        <div className="lg:col-span-2">
          <p className="text-earth leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[2px] uppercase text-earth/70 border border-sand px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery thumbnails */}
        <div className="lg:col-span-3">
          {/* Active large preview */}
          <div className="aspect-[16/10] overflow-hidden rounded-sm mb-3">
            <img
              src={project.gallery[activeImg]}
              alt={`${project.title} detail`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          {/* Thumbnail strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-sm overflow-hidden transition-all duration-300 ${
                  activeImg === i
                    ? "ring-2 ring-gold opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
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
        <div className="space-y-28 md:space-y-40">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
