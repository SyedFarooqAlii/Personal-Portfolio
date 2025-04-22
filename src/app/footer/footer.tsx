import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EAF6FF] text-gray-700 py-8 pt-24 relative">
      {/* Glass Effect */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Brand Logo / Name */}
          <h2 className="text-2xl text-gray-600 font-semibold tracking-wide">
            Syed <span className="text-[#ea1b48]">Farooq Ali</span>
          </h2>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-200 transition duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition duration-300 text-2xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 mt-6">
          <ul className="flex flex-wrap lg:gap-6  items-center justify-center ">
            <li>
              <a href="/about" className="hover:text-[#ea1b48] text-gray-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-[#ea1b48] text-gray-500 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/skill" className="hover:text-[#ea1b48] text-gray-500 transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="/project" className="hover:text-[#ea1b48] text-gray-500 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ea1b48] text-gray-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Copyright Text */}
          <p className="mt-4 text-center md:mt-0">
            © 2025 Syed Farooq Ali. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;