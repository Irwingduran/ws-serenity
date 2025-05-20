"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`py-4 px-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo y marca */}
          <Link href="/" onClick={closeMenu}>  
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h1 className="text-[#77B5B2] text-xl font-semibold">Serenity Surgery Planner</h1>
                <p className="text-[#507775] text-sm">MEXICANS SPECIALISTS</p>
              </div>
            </div>
          </Link>
          
          {/* Menú para desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              About
            </Link>
            <Link href="/#services" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              Services
            </Link>
            <Link href="/#partners" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
            Partner Doctors
            </Link>
            <Link href="/plans/home" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              Plans
            </Link>
            <Link href="/#reviews" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-[#77B5B2] transition-colors">
              Contact
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 text-sm font-medium bg-[#77B5B2] text-white rounded-xl hover:bg-[#5a9c99] transition-colors"
            >
              Make an Appointment
            </Link>
          </nav>

          {/* Botón del menú hamburguesa para móviles */}
          <button 
            className="lg:hidden text-[#77B5B2] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 pt-6 pb-4">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link 
              href="/#services" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/#reviews" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Reviews
            </Link>
            <Link 
              href="/#partners" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Partner Doctors
            </Link>
            <Link 
              href="/#contact" 
              onClick={closeMenu}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#77B5B2] hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="#" 
              onClick={closeMenu}
              className="px-4 py-3 text-sm font-medium text-center bg-[#77B5B2] text-white rounded-xl hover:bg-[#5a9c99] transition-colors"
            >
              Make an Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;