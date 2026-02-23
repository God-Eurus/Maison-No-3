import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';

// CHANGED: Changed bg-black to bg-white
const HamburgerIcon = () => (
  <div className="space-y-[8px]">
    <div className="w-8 h-[1px] bg-white"></div>
    <div className="w-8 h-[1px] bg-white"></div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- HAMBURGER TRIGGER --- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          // CHANGED: Replaced text-black with "text-white mix-blend-difference"
          className="fixed top-8 right-8 md:top-12 md:right-12 z-50 p-2 text-white mix-blend-difference"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      )}

      {/* --- FULL-SCREEN OVERLAY --- */}
      {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
}