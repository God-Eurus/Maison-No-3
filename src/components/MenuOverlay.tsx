import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link import

// --- ICONS ---
const CloseIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// --- ANIMATION CONFIGURATION ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const menuItemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

// --- PROPS INTERFACE ---
interface MenuOverlayProps {
  onClose: () => void;
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const menuItems = [
    { label: "Portfolio", href: "/ourprojects" },
    { label: "About", href: "/ourstudio" },
    { label: "Contact", href: "/contact" },
    { label: "The Third Hall", href: "/thirdhall" },
    { label: "Stories", href: "/narratingstories" },
    { label: "Home", href: "/" }
  ];

  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-between overflow-x-hidden overflow-y-auto min-h-screen">
      
      <style>{`
        .font-breadley { font-family: 'Breadley Sans', sans-serif; }
      `}</style>

      {/* --- CLOSE BUTTON --- */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        <button 
          onClick={onClose} 
          aria-label="Close menu" 
          className="p-2 hover:opacity-60 transition-opacity duration-300"
        >
          <CloseIcon />
        </button>
      </div>

      {/* --- TOP ORNATE GRAPHIC & LOGO --- */}
      <div className="relative w-full flex flex-col items-center pt-16 md:pt-20">
        <img 
          src="/assets/menuoverlay.png" 
          alt="Decorative top graphic" 
          className="absolute top-0 w-full max-w-2xl h-auto object-cover md:object-contain opacity-70 pointer-events-none"
        />
        <div className="relative z-10 text-center pointer-events-none w-full">
          <h2 className="text-[16px] md:text-[20px] tracking-[0.5em] uppercase font-light mb-1 font-breadley ml-[0.8em]">MAISON</h2>
          <p className="text-[13px] md:text-[16px] tracking-[0.4em] uppercase opacity-70 font-breadley ml-[0.6em]">NO. 3</p>
        </div>
      </div>

      {/* --- MENU LINKS --- */}
      <nav className="relative z-10 w-full max-w-2xl px-8 my-8 flex-grow flex items-center justify-center">
        <motion.ul 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full"
        >
          {menuItems.map((item, index) => (
            <motion.li 
              key={item.label}
              variants={menuItemVariant}
              className={`w-full border-t border-white/10 ${index === menuItems.length - 1 ? 'border-b' : ''}`}
            >
              {/* Changed from <a> to <Link> and added onClick={onClose} */}
              <Link
                to={item.href}
                onClick={onClose}
                className="block w-full text-center py-5 md:py-6 text-[26px] md:text-3xl font-serif tracking-widest hover:opacity-50 transition-opacity duration-500 ease-in-out"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* --- SOCIAL ICONS & BOTTOM GRAPHIC --- */}
      <div className="relative w-full flex flex-col items-center justify-end pb-12 md:pb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 flex justify-center items-center gap-12"
        >
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">
            <FacebookIcon />
          </a>
          <a href="#" className="hover:opacity-50 transition-opacity duration-300">
            <LinkedInIcon />
          </a>
        </motion.div>

        <img 
          src="/assets/menuoverlay2.png" 
          alt="Decorative bottom graphic" 
          className="absolute bottom-0 w-full max-w-2xl h-auto object-cover md:object-contain opacity-70 pointer-events-none translate-y-1/4"
        />
      </div>

    </div>
  );
}