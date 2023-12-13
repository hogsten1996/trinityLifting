import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-white text-2xl font-semibold">
            <b className="text-3xl">T</b>rinity<b className="text-3xl">L</b>ifting
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            Menu
          </button>

          {/* Small Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 bg-blue-900">
              <Link to="/" className="block text-white px-4 py-2">
                Home
              </Link>
              <Link to="/about" className="block text-white px-4 py-2">
                About
              </Link>
              <Link to="/programs" className="block text-white px-4 py-2">
                Programs
              </Link>
              <Link to="/maxliftcalc" className="block text-white px-4 py-2">
                Max-Calc
              </Link>
            </div>
          )}
          {/* End Small Dropdown Menu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

