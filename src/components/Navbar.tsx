import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuOverlay from './MenuOverlay';

const HamburgerIcon = () => (
  <div className="space-y-[8px]">
    <div className="w-8 h-[1px] bg-white"></div>
    <div className="w-8 h-[1px] bg-white"></div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Hide-on-Scroll-Down & Show-on-Scroll-Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down and past the first 50px, hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If scrolling up, show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* --- NAVBAR CONTAINER --- */}
      <nav 
        className={`fixed top-0 left-0 w-full flex justify-between items-start p-8 md:p-12 z-50 transition-transform duration-500 ease-in-out text-white mix-blend-difference ${
          isVisible && !isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* --- LOGO (TOP LEFT) --- */}
        <Link 
          to="/"
          className="flex items-center cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Image replaces the text. h-10 md:h-12 mimics the height of the previous two lines of text */}
          <img 
            src="/assets/Maisonlogo.svg" 
            alt="Maison No. 3 Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        {/* --- HAMBURGER TRIGGER (TOP RIGHT) --- */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      </nav>

      {/* --- FULL-SCREEN OVERLAY --- */}
      {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
}