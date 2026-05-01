"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/images/projects/page-05.jpg",
    alt: "Tropical terrace with rattan furniture and bamboo ceiling",
    span: "col-span-1 row-span-2",
    label: "Terrace Lounge",
  },
  {
    src: "/images/projects/page-12.jpg",
    alt: "Warm living area with orange sofa and bookshelf wall",
    span: "col-span-1 row-span-1",
    label: "Living & Dining",
  },
  {
    src: "/images/projects/page-24.jpg",
    alt: "Kitchen with natural wood cabinetry and timber beams",
    span: "col-span-1 row-span-1",
    label: "Kitchen",
  },
  {
    src: "/images/projects/page-22.jpg",
    alt: "Living room with exposed brick walls",
    span: "col-span-1 row-span-1",
    label: "Heritage Living",
  },
  {
    src: "/images/projects/page-17.jpg",
    alt: "Master bedroom with olive green headboard wall",
    span: "col-span-1 row-span-2",
    label: "Master Suite",
  },
  {
    src: "/images/projects/page-33.jpg",
    alt: "Curved bar with mosaic tile and onyx counter",
    span: "col-span-1 row-span-1",
    label: "Bespoke Bar",
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
