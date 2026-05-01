"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
      id="contact"
      ref={ref}
      className="py-24 md:py-36 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-gold text-xs tracking-[5px] uppercase">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 tracking-tight leading-tight">
              Let&apos;s Create
              <br />
              <span className="italic">Something Beautiful</span>
            </h2>

            <p className="mt-6 text-earth leading-relaxed text-sm md:text-base max-w-md">
              Whether you&apos;re planning a new home, renovating a space, or
              need design consultation — I&apos;d love to hear about your
              project.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <span className="text-[10px] tracking-[3px] uppercase text-earth/60 block mb-2">
                  Email
                </span>
                <a
                  href="mailto:agarwalmamta111@gmail.com"
                  className="font-serif text-xl text-charcoal hover:text-gold transition-colors"
                >
                  agarwalmamta111@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-[3px] uppercase text-earth/60 block mb-2">
                  Phone
                </span>
                <a
                  href="tel:+9779840065521"
                  className="font-serif text-xl text-charcoal hover:text-gold transition-colors"
                >
                  +977 984 006 5521
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-[3px] uppercase text-earth/60 block mb-2">
                  Location
                </span>
                <span className="font-serif text-xl text-charcoal">
                  Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12 flex gap-6">
              {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-earth text-xs tracking-[2px] uppercase hover:text-gold transition-colors nav-link"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! I will get back to you soon.");
              }}
              className="space-y-2"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label>Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label>Email Address</label>
              </div>

              <div className="form-group">
                <input type="text" placeholder=" " />
                <label>Project Type</label>
              </div>

              <div className="form-group">
                <textarea
                  rows={4}
                  placeholder=" "
                  className="resize-none"
                />
                <label>Tell me about your project</label>
              </div>

              <button type="submit" className="btn-elegant mt-4 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
