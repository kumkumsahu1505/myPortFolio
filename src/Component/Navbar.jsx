import React, { useState } from "react";
import { FaLaptopCode, FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white fixed w-full shadow-lg z-50 px-20">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-wider">
          <FaLaptopCode className="text-indigo-400" />
          <span className="text-white">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                  >
                    {item} 
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-xl p-2 rounded-md boreder  hover:bg-gray-600 hover:outline-2 hover:outline-offset-2 hover:outline-indigo-400 active:bg-gray-600 transition-transform ${menuOpen ? "bg-gray-700 outline-2 outline-offset-2 outline-indigo-400" : ""}`}
          onClick={toggleMenu}
          
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 animate-slide-down">
          <ul className="flex flex-col items-center py-6 gap-6 text-lg">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
