import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center text-lg font-bold mb-4 md:mb-0">
            <FaLaptopCode className="mr-2 text-yellow-400 text-2xl" />
            Portfolio
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} kumkum sahu. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
