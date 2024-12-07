"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import TextSection from "../components/TextSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <TextSection/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
