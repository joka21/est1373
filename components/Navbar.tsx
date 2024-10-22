'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-coral-red">
                <img src="/estLogo.svg" alt="Logo" className="h-12 w-auto mr-2" />
                <span className="font-bold">est.1373</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'about', 'Shop', 'Ideen', 'Botope'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="py-5 px-3 text-coral-red hover:text-tangerine transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="mobile-menu-button p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coral-red"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-coral-red hover:text-tangerine" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
      >
        {['Home', 'Wir', 'Online Shops', 'Ideen', 'Botope'].map((item) => (
          <Link 
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            className="block py-2 px-4 text-sm text-coral-red hover:bg-tangerine hover:text-white transition duration-300"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;