import React from 'react';

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface MenuOverlayProps {
  onClose: () => void;
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const menuItems = ["PORTFOLIO", "ABOUT", "STORIES", "SHOP", "CONTACT", "MORE"];

  return (
    <div className="fixed inset-0 text-white z-40 flex flex-col">
      {/* --- Parallax Background Image (No Change) --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/menu-bg.jpg')` }} 
      ></div>
    
      
      {/* --- Content: Top Bar & Menu Links --- */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col flex-grow">
        {/* 1. Top Bar: Menu & Close Button (No Change) */}
        <div className="flex justify-between items-center w-full mb-8">
          <span className="text-sm font-serif-display">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        {/* 2. Menu Links (Centered) */}
        <nav className="flex-grow flex items-center justify-center">
          
          
          <ul className="flex flex-col space-y-2 text-center">
            {/* 👇 --- MODIFICATION HERE --- 👇 */}
            {menuItems.map((item) => (
              <li 
                key={item}
              >
                <a
                  href="#"
                  className="text-6xl md:text-7xl font-serif-display font-extrabold tracking-tighter hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}