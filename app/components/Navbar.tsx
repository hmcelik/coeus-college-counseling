// components/Navbar.tsx
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Logo</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
