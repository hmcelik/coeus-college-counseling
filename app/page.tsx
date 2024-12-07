"use client"

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ProcessFlow from "./components/ProcessFlow";
import TextSection from "./components/TextSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <ProcessFlow />
      </section>
      <section id="text-section">
        <TextSection />
      </section>
      <Footer/>
    </main>
  );
}
