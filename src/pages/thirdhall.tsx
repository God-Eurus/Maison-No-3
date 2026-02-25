import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ELEGANT ROYAL ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const slowFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 0.4, 
    transition: { duration: 2, ease: "easeOut" } 
  }
};

const inputStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + (i * 0.1), // Starts after the text reveals
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const ThirdHall: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  
  // Theatrical Animation States
  const [codeSuccess, setCodeSuccess] = useState(false);
  const [dropCurtains, setDropCurtains] = useState(false);
  const [openCurtains, setOpenCurtains] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // --- ADD YOUR MULTIPLE CODES HERE ---
  const VALID_CODES = [
    "333333", 
    "123456", 
    "888888",
    "000000"
  ]; 

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && value !== '') {
      const enteredCode = newCode.join('');
      
      if (VALID_CODES.includes(enteredCode)) {
        // --- THE THEATRICAL SEQUENCE ---
        setCodeSuccess(true); 
        
        // 1. Drop the curtains
        setTimeout(() => {
          setDropCurtains(true);
        }, 600);

        // 2. Open the curtains seamlessly
        setTimeout(() => {
          setOpenCurtains(true); 
        }, 1600);

        // 3. Navigate to next page while curtains are open
        setTimeout(() => {
          navigate('/thirdhallform', { state: { usedCode: enteredCode } });
        }, 3400); 

      } else {
        setError(true);
        setTimeout(() => {
          setCode(['', '', '', '', '', '']);
          inputRefs.current[0]?.focus();
          setError(false);
        }, 1000);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1c1311] overflow-x-hidden selection:bg-[#d6c5b3] selection:text-[#1c1311]">
      
      {/* --- CUSTOM ANIMATIONS & VELVET TEXTURES --- */}
      <style>{`
        .the-void { background-color: #050302; }
        .velvet-curtain {
          background-color: #1c1311;
          background-image: repeating-linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0.03) 15%, rgba(0,0,0,0.6) 30%, rgba(255,255,255,0.01) 45%, rgba(0,0,0,0.9) 60%);
          background-size: 25% 100%;
          box-shadow: inset 0 0 80px rgba(0,0,0,0.9);
        }
        .drop-transition { transition: transform 0.8s cubic-bezier(0.5, 0, 0.1, 1); }
        .curtain-transition { transition: transform 2s cubic-bezier(0.65, 0, 0.15, 1); }
      `}</style>

      {/* --- THE THEATRICAL OVERLAY --- */}
      <div className={`fixed inset-0 z-50 flex pointer-events-none drop-transition ${dropCurtains ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 the-void z-0" />
        <div className={`absolute inset-y-0 left-0 w-[50.5%] velvet-curtain z-10 curtain-transition border-r border-[#000]/50 ${openCurtains ? '-translate-x-full' : 'translate-x-0'}`} />
        <div className={`absolute inset-y-0 right-0 w-[50.5%] velvet-curtain z-10 curtain-transition border-l border-[#000]/50 ${openCurtains ? 'translate-x-full' : 'translate-x-0'}`} />
      </div>

      {/* --- MAIN CONTENT (MERGED INTO ONE VIEW) --- */}
      <div className={`relative min-h-screen text-[#d6c5b3] font-serif flex flex-col transition-all duration-1000 ${codeSuccess ? 'scale-105 opacity-50' : 'scale-100 opacity-100'}`}>
        
        {/* TOP NAV (Smooth Drop Down) */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 w-full flex justify-start items-start p-8 md:p-12 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="tracking-[0.4em] text-sm md:text-base uppercase opacity-90">Maison</span>
            <span className="tracking-[0.3em] text-xs mt-2 uppercase opacity-70">No. 3</span>
          </div>
        </motion.nav>

        {/* AMBIENT BACKGROUND CREST (Breathing Effect) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none mix-blend-screen"
        >
          <img src="/assets/thirdhalltwo.png" alt="Decorative crest" className="w-[80%] md:w-[600px] h-auto object-contain" />
        </motion.div>

        {/* COMBINED HERO & CODE CONTAINER (Staggered Reveal) */}
        <motion.main 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-grow relative z-10 flex flex-col justify-center items-center w-full pt-32 pb-16 md:py-32"
        >
          
          {/* HERO TITLE SECTION - ENLARGED */}
          <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
            <motion.span variants={fadeUp} className="tracking-[0.6em] text-sm md:text-base uppercase mb-4 md:mb-6 opacity-80">
              The
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] md:tracking-[0.25em] uppercase font-light mb-4 md:mb-6">
              Third
            </motion.h1>
            <motion.span variants={fadeUp} className="tracking-[0.6em] text-sm md:text-base uppercase opacity-80">
              Hall
            </motion.span>
          </div>

          {/* SECRET CODE SECTION */}
          <div className="w-full max-w-4xl flex flex-col justify-center items-center relative px-6">
            
            {/* FULL WIDTH TOP BORDER */}
            <motion.div variants={slowFadeIn} className="w-full mb-8 md:mb-10">
               <img src="/assets/thirdhallone.png" alt="Ornate Border" className="w-full h-auto" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="tracking-[0.5em] md:tracking-[0.7em] text-xs md:text-sm uppercase mb-10 md:mb-12 text-center opacity-90">
              Enter through a 6 digit secret code
            </motion.h2>

            <div className="flex gap-4 md:gap-8 mb-12 z-10">
              {code.map((digit, index) => (
                <motion.input
                  key={index}
                  custom={index}
                  variants={inputStagger}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-12 h-16 md:w-16 md:h-20 bg-transparent border-b text-center text-3xl font-light focus:outline-none transition-all duration-500 ${
                    error 
                      ? 'border-red-600 text-red-600 translate-x-1' 
                      : codeSuccess
                        ? 'border-white text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] border-b-2' 
                        : 'border-[#d6c5b3]/40 text-[#d6c5b3] focus:border-[#d6c5b3] focus:-translate-y-1 focus:border-b-2 bg-black/10 hover:bg-black/20' 
                  }`}
                />
              ))}
            </div>

            {/* FULL WIDTH BOTTOM BORDER */}
            <motion.div variants={slowFadeIn} className="w-full">
               <img src="/assets/thirdhalltwo.png" alt="Ornate Border" className="w-full h-auto" />
            </motion.div>
          </div>
        </motion.main>

      </div>
    </div>
  );
};

export default ThirdHall;