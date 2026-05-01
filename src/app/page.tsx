"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Gallery />
        <Testimonial />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
