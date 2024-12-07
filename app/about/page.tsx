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
      <Navbar
        logo="/logo.png"
        bgColor="bg-blue-700"
        links={[
          { href: "/#hero", label: "Home" },
          { href: "#info", label: "Information" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <Banner/>
      <section id="info">
        <TextSection/>
      </section>
      <section id="contact">
        <CallToAction/>
      </section>
      <Footer/>
    </main>
  );
}
