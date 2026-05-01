"use client";

const words = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Terrace Design",
  "Space Planning",
  "Luxury Interiors",
  "Furniture Design",
  "Material Curation",
];

export default function Marquee() {
  return (
    <div className="py-6 bg-charcoal overflow-hidden">
      <div className="marquee-track flex items-center whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="text-white/30 text-xs tracking-[4px] uppercase mx-8 font-sans">
              {word}
            </span>
            <span className="text-gold/40 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
