// components/Navbar.tsx
import { useState, useEffect } from "react";

interface NavbarProps {
  links?: { href: string; label: string }[]; // Make links optional
  logo: string;
  bgColor?: string; // Optional prop for background color
}

const Navbar: React.FC<NavbarProps> = ({ 
  links = [], // Default to an empty array if links are not provided
  logo, 
  bgColor = "bg-blue-700" 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        scrolled ? `${bgColor} shadow-lg` : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden bg-gray-800 text-white py-4 px-6`}>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


