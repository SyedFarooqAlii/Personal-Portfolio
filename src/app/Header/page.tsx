"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="  bg-[#ffffff] w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center py-8">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#ff0054] w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-md">
              S
            </div>
            <span className="font-bold text-xl text-gray-800">
              Syed <span className="text-[#ff0054]">Farooq</span> Ali
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm  text-gray-700 font-medium">
            <a href="/" className="text-[#ff0054] hover:text-gray-700">Home</a>
            <a href="/about" className="hover:text-[#ea1b48]">About</a>
            <a href="/service" className="hover:text-[#ea1b48]">Service</a>
          
            <a href="/skill" className="hover:text-[#ea1b48]">Skill</a>
            <a href="/project" className="hover:text-[#ea1b48]">Portfolio</a>
            
            <a href="/contact"className="hover:text-[#ea1b48]">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="about-button px-5 mb-2 py-3 bg-[#ea1b48] rounded-[4px] text-[.80rem]  font-[700 hover:bg-[#ffffff] text-white px-6 py-2  shadow-lg  shadow-[#e5a3b1] transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="w-6 h-6 bg-[#EAF6FF] rounded-sm">
              
              <span className="block w-full h-[3px] bg-[#ffffff]"></span>
              <span className="block w-full h-[3px] bg-[#ea1b48]"></span>
              
              <span className="block w-full h-[3px] bg-[#ffffff]"></span>
              <span className="block w-full h-[3px] bg-[#ea1b48]"></span>
              
              <span className="block w-full h-[3px] bg-[#ffffff]"></span>
              <span className="block w-full h-[3px] bg-[#ea1b48]"></span>
              
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-4 px-4 pb-4 text-sm text-gray-700 font-medium">
            <a href="/" className="text-[#ff0054] hover:text-gray-700">Home</a>
            <a href="/about" className="hover:text-[#ea1b48]">About</a>
            <a href="/service" className="hover:text-[#ea1b48]">Service</a>
            <a href="/skill" className="hover:text-[#ea1b48]">Skills</a>
            <a href="/project" className="hover:text-[#ea1b48]">Portfolio</a>
            <a href="/contact" className="hover:text-[#ea1b48]">Contact</a>
            <a
              href="#"
              className="about-button px-3 mb-2 py-3 bg-[#ea1b48] rounded-[4px] text-[.80rem]  font-[700 hover:bg-[#ffffff] text-white px-6 py-2  shadow-lg  shadow-[#e5a3b1] transition"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
        
    </header>
  );
}
