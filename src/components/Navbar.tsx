import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HamburgerIcon = () => (
  <div className="space-y-[8px]">
    <div className="w-8 h-[1px] bg-white"></div>
    <div className="w-8 h-[1px] bg-white"></div>
  </div>
);

// We accept the "onOpen" prop passed down from App.tsx
export default function Navbar({ onOpen }: { onOpen: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation(); 

  // Handle Hide-on-Scroll-Down & Show-on-Scroll-Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Hide on the Home Page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full flex justify-between items-start p-8 md:p-12 z-50 transition-transform duration-500 ease-in-out text-white mix-blend-difference ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* LOGO */}
      <Link 
        to="/"
        className="flex items-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        <img 
          src="/assets/Maisonlogo.svg" 
          alt="Maison No. 3 Logo" 
          className="h-10 md:h-12 w-auto object-contain" 
        />
      </Link>

      {/* HAMBURGER TRIGGER */}
      <button
        onClick={onOpen} // This triggers the menu in App.tsx
        className="p-2 hover:opacity-70 transition-opacity focus:outline-none"
        aria-label="Open menu"
      >
        <HamburgerIcon />
      </button>
    </nav>
  );
}