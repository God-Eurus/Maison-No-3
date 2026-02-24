import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the props for TypeScript
interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const styles: Record<string, React.CSSProperties> = {
  scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", serif', fontWeight: 300, lineHeight: 1.3 },
  serifFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
};

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8 font-breadley"
        >
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl bg-[#ebe9e4] rounded-sm overflow-hidden min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center items-center p-8 md:p-16 shadow-2xl"
          >
            
            {/* --- 1. MODAL BACKGROUND IMAGE --- */}
            {/* Replace with your paper texture or desired background image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="/assets/popup-bg.jpg" 
                alt="" 
                className="w-full h-full object-cover opacity-80" 
              />
            </div>

            {/* Close Button "X" */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-2xl md:text-3xl font-light hover:opacity-50 transition-opacity z-50 text-[#1a1a1a]"
            >
              X
            </button>

            {/* --- 2. CENTRAL CROSS IMAGE --- */}
            <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center opacity-15">
              <img 
                src="/assets/cross-ornament.png" // Replace with your actual central cross image
                alt="" 
                // Reduced height to balance the smaller text
                className="h-[70%] md:h-[85%] w-auto object-contain mix-blend-multiply" 
              />
            </div>

            {/* --- 3. SIDE ORNAMENT IMAGES (Replacing the text) --- */}
            <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
              <img 
                src="/assets/side-ornament-left.png" // Replace with the left swirl image
                alt="" 
                className="absolute -left-2 md:left-0 top-[30%] md:top-1/4 w-16 md:w-24 lg:w-32 object-contain opacity-40 mix-blend-multiply"
              />
              <img 
                src="/assets/side-ornament-right.png" // Replace with the right swirl image
                alt="" 
                className="absolute -right-2 md:right-0 top-[30%] md:top-1/4 w-16 md:w-24 lg:w-32 object-contain opacity-40 mix-blend-multiply"
              />
            </div>

            {/* --- TEXT CONTENT --- */}
            <div className="relative z-10 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full flex flex-col items-center text-center relative"
              >
                
                {/* Reduced Heading Size */}
                <h2 style={styles.scriptFont} className="text-5xl sm:text-6xl md:text-7xl text-[#1a1a1a] mb-8 md:mb-10">
                  Merci beaucoup!
                </h2>
                
                {/* Reduced Paragraph Size */}
                <p style={styles.serifFont} className="text-xs sm:text-sm md:text-base text-[#1a1a1a] max-w-lg mx-auto leading-[1.8] md:leading-relaxed px-4 tracking-wide">
                  Inspired by the salons of 18th-century Paris, where philosophers, 
                  artists, and dreamers ignited revolutions. Qui Creatives is a sanctuary
                </p>

              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;