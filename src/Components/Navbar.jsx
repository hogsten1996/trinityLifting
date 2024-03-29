// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-white text-2xl font-semibold hover:text-red-700">
            <b className="text-3xl">T</b>rinity<b className="text-3xl">L</b>
            ifting
          </Link>
        </div>

        {/* Normal Links */}
        <div className="hidden lg:flex lg:items-center">
          <Link to="/" className="text-white font-bold px-4 py-2 hover:text-red-700">
            Home
          </Link>
          <Link to="/programs" className="text-white font-bold px-4 py-2 hover:text-red-700">
            Programs
          </Link>
          <Link to="/allarticles" className="text-white font-bold px-4 py-2 hover:text-red-700">
            Articles
          </Link>
          <Link to="/maxliftcalc" className="block text-white font-bold px-4 py-2 hover:text-red-700">
            Max-Calc
          </Link>
          <Link to="/about" className="text-white font-bold px-4 py-2 hover:text-red-700">
            About
          </Link>
          <Link to="/maxliftcalc" className="block text-white font-bold px-4 py-2 hover:text-red-700">
            Contact
          </Link>
        </div>
        {/* End Normal Links */}

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto bg-black flex flex-col items-center">
            <Link to="/" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/programs" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
              Programs
            </Link>
            <Link to="/allarticles" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
            Articles
          </Link>
            <Link to="/maxliftcalc" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
              Max-Calc
            </Link>
            <Link to="/about" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
              About
            </Link>
            <Link to="/maxliftcalc" className="block text-white px-4 py-2" onClick={closeMobileMenu}>
              Contact
            </Link>
            <a to="/maxliftcalc" className="block text-red-700 font-extrabold px-4 py-2 hover:cursor-pointer" onClick={closeMobileMenu}>
              Back
            </a>
          </div>
        </div>
      )}
      {/* End Mobile Menu */}
    </nav>
  );
};

export default Navbar;

