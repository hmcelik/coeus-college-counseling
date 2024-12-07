"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <main>
      <Navbar
        logo="/logo.png"
        bgColor="bg-blue-700"
        links={[
          { href: "/#hero", label: "Home" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <Banner/>
      <section id="contact">
        <ContactUs/>
      </section>
      <Footer/>
    </main>
  );
}
