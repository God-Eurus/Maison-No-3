import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';


// The two-line "hamburger" icon
const HamburgerIcon = () => (
  <div className="space-y-2">
    <div className="w-8 h-0.5 bg-white"></div>
    <div className="w-8 h-0.5 bg-white"></div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- This is the HAMBURGER TRIGGER --- */}
      {/* It only shows when the menu is CLOSED */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-8 right-8 z-50 p-2 text-white"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      )}

      {/* --- This is the FULL-SCREEN OVERLAY --- */}
      {/* It only renders when the menu is OPEN */}
      {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
}