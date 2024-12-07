"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import TextSection from "../components/TextSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TwoColumns from "../components/TwoColumns";
import ShortText from "../components/ShortText";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <TextSection/>
      <TwoColumns/>
      <ShortText/>
      <Footer/>
    </main>
  );
}
