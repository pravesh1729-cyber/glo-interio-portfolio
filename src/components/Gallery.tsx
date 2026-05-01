"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    alt: "Tropical terrace with rattan furniture and lush greenery",
    span: "col-span-1 row-span-2",
    label: "Terrace Lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    alt: "Warm bedroom with layered lighting and upholstered headboard",
    span: "col-span-1 row-span-1",
    label: "Master Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    alt: "Kitchen with natural wood cabinetry and island",
    span: "col-span-1 row-span-1",
    label: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    alt: "Living room with exposed brick and wooden beams",
    span: "col-span-1 row-span-1",
    label: "Living Area",
  },
  {
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    alt: "Daughter's bedroom with warm pink tones and study desk",
    span: "col-span-1 row-span-2",
    label: "Daughter's Room",
  },
  {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800&auto=format&fit=crop",
    alt: "Dining area with pendant lights and wooden table",
    span: "col-span-1 row-span-1",
    label: "Dining & Bar",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[5px] uppercase">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-4 tracking-tight">
            Design Moments
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} project-card rounded-sm transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="overlay rounded-sm" />
              <div className="card-content absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white text-xs tracking-[3px] uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
