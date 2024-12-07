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
      <Navbar
        logo="/logo.png"
        bgColor="bg-blue-700"
        links={[
          { href: "/#hero", label: "Home" },
          { href: "#contact", label: "Contact" },
          { href: "#info", label: "Information" },
          { href: "#services", label: "Services" },
        ]}
      />
      <Banner/>
      <section id="contact">
        <TextSection/>
      </section>
      <section id="info">
        <TwoColumns/>
      </section>
      <section id="services">
        <ShortText/>
      </section>
      <Footer/>
    </main>
  );
}
