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
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <ProcessFlow/>
      <TextSection/>
      <Footer/>
    </main>
  );
}
