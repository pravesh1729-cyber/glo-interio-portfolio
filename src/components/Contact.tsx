"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 md:py-40 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="text-gold text-[0.6rem] tracking-[0.4em] uppercase">Get in Touch</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-6">
              Let&apos;s Create<br />
              <em className="text-gold/80">Something Beautiful</em>
            </h2>

            <p className="text-earth/50 text-sm leading-relaxed max-w-md mb-12">
              Whether you&apos;re planning a new home, renovating a space, or need
              design consultation with Vastu orientation — I&apos;d love to hear
              about your project.
            </p>

            <div className="space-y-8">
              {[
                { label: "Email", value: "glointeriobymamta@gmail.com", href: "mailto:glointeriobymamta@gmail.com" },
                { label: "Phone", value: "+91 95609 18430", href: "tel:+919560918430" },
                { label: "Instagram", value: "@glointerio", href: "https://www.instagram.com/glointerio" },
                { label: "Location", value: "Kathmandu, Nepal", href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[0.55rem] tracking-[0.3em] uppercase text-earth/40 block mb-1">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-serif text-lg text-charcoal hover:text-gold transition-colors duration-300">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-serif text-lg text-charcoal">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-12">
              <span className="text-[0.55rem] tracking-[0.3em] uppercase text-earth/40 block mb-3">Services</span>
              <div className="flex flex-wrap gap-2">
                {["Residential Design", "Space Planning", "Vastu Consultation", "3D Visualization", "Project Management"].map((s) => (
                  <span key={s} className="text-[0.55rem] tracking-[0.2em] uppercase text-earth/50 border border-charcoal/10 px-4 py-2 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <span className="font-serif text-3xl text-charcoal mb-4">Thank you</span>
                <p className="text-earth/50 text-sm">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-2"
              >
                <div className="form-field">
                  <input type="text" placeholder=" " required autoComplete="name" />
                  <label>Your Name</label>
                </div>
                <div className="form-field">
                  <input type="email" placeholder=" " required autoComplete="email" />
                  <label>Email Address</label>
                </div>
                <div className="form-field">
                  <input type="text" placeholder=" " />
                  <label>Project Type (e.g. Apartment, House, Office)</label>
                </div>
                <div className="form-field">
                  <textarea rows={4} placeholder=" " className="resize-none" />
                  <label>Tell me about your vision</label>
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto mt-4">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
