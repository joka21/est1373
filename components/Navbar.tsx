'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="font-sans border-b-4 border-tangerine relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left spacer for centering on desktop */}
          <div className="hidden md:block w-40">
            {/* This empty div helps center the logo */}
          </div>

          {/* Centered Logo */}
          <div className="flex-1 md:flex-none flex justify-center">
            <Link href="/" className="flex items-center py-6 px-2">
              <img
                src="/estLogo.svg"
                alt="Logo"
                className="h-32 w-auto"
                width={128}
                height={128}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 w-40">
            {['Home', 'about', 'Shop', 'Ideen', 'Botope'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="py-6 px-4 text-lg text-coral-red hover:text-tangerine transition duration-300 font-semibold"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="p-3 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-8 h-8 text-coral-red hover:text-tangerine transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`
          md:hidden 
          fixed 
          inset-0 
          z-40 
          bg-yellow
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '144px' }} // Angepasst an die Logo-Höhe (32) plus Padding
      >
        <div className="flex flex-col items-center pt-6">
          {['Home', 'about', 'Shop', 'Ideen', 'Botope'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="block py-4 px-4 text-xl text-black hover:text-coral-red transition duration-300 font-semibold"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay für den Hintergrund während das Menü geöffnet ist */}
      <div 
        className={`
          fixed inset-0 
          bg-yellow 
          transition-opacity duration-300
          md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        style={{ top: '144px', zIndex: 30 }}
      />
    </nav>
  );
};

export default Navbar;