// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-white text-2xl font-semibold">
            <b className="text-3xl">T</b>rinity<b className="text-3xl">L</b>
            ifting
          </Link>
        </div>

        {/* Normal Links */}
        <div className="hidden lg:flex lg:items-center">
          <Link to="/" className="text-white px-4 py-2 hover:font-bold">
            Home
          </Link>
          <Link to="/programs" className="text-white px-4 py-2 hover:font-bold">
            Programs
          </Link>
          <Link to="/articles" className="text-white px-4 py-2 hover:font-bold">
            Articles
          </Link>
          <Link to="/maxliftcalc" className="block text-white px-4 py-2 hover:font-bold">
            Max-Calc
          </Link>
          <Link to="/about" className="text-white px-4 py-2 hover:font-bold">
            About
          </Link>
          <Link to="/maxliftcalc" className="block text-white px-4 py-2 hover:font-bold">
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
          <div className="container mx-auto bg-black">
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
            <Link to="/maxliftcalc" className="block text-white px-4 py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
      {/* End Mobile Menu */}
    </nav>
  );
};

export default Navbar;
