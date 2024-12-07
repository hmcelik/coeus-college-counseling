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
          <li>
            <a href="/#hero" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#process" className="hover:underline">
              Process Flow
            </a>
          </li>
          <li>
            <a href="#text-section" className="hover:underline">
              Learn More
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
