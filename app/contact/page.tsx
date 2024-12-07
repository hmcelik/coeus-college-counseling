"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
