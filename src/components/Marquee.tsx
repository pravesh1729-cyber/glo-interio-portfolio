"use client";

const items = [
  "Residential",
  "Terrace Design",
  "Luxury Homes",
  "Space Planning",
  "Hospitality",
  "Bespoke Furniture",
  "Material Curation",
  "3D Visualization",
];

export default function Marquee() {
  return (
    <div className="py-5 bg-charcoal overflow-hidden border-t border-b border-white/5">
      <div className="marquee-track flex items-center whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-white/20 text-[0.6rem] tracking-[0.35em] uppercase px-10">
              {item}
            </span>
            <span className="text-gold/20 text-[8px]">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
