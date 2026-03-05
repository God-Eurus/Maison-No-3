import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ULTRA-SMOOTH ROYAL ANIMATION VARIANTS ---
const royalEase = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5, ease: royalEase } 
  }
};

const inputStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + (i * 0.1), // Cascades smoothly after text reveals
      duration: 1,
      ease: royalEase
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
  const VALID_CODES = ["333333", "123456", "888888", "000000"]; 

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
        setTimeout(() => setDropCurtains(true), 600);

        // 2. Open the curtains seamlessly
        setTimeout(() => setOpenCurtains(true), 1600);

        // 3. Navigate to next page
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
      
      {/* --- CUSTOM STYLES & FONT INJECTION --- */}
      <style>{`
        .font-breadley { font-family: 'Breadley Sans', sans-serif; }
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

      {/* --- MAIN CONTENT --- */}
      <div className={`relative min-h-screen text-[#d6c5b3] font-breadley flex flex-col transition-all duration-1000 ${codeSuccess ? 'scale-105 opacity-50 blur-sm' : 'scale-100 opacity-100'}`}>
        
        {/* COMBINED HERO & CODE CONTAINER */}
        <motion.main 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-grow relative z-10 flex flex-col justify-center items-center w-full pt-32 pb-16 md:py-32"
        >
          
          {/* HERO TITLE SECTION WITH BACKGROUND LOGO */}
          <div className="relative flex flex-col items-center justify-center text-center mb-20 md:mb-24 w-full">
            
            {/* Background Logo */}
            <motion.div 
  initial={{ opacity: 0, scale: 0.85 }}
  /* 1. Increased opacity to 40% so it is clearly visible */
  animate={{ opacity: 0.4, scale: 1 }}
  transition={{ duration: 4, ease: "easeOut" }}
  className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
>
  <img 
    src="/assets/maisonlogoo.png" 
    alt="Background Crest" 
    /* 2. Added 'brightness-0 invert' to force the logo to be pure white */
    /* 3. Increased the size slightly to make it more prominent */
    className="h-54 md:h-[20rem] object-contain brightness-0 invert opacity-50" 
  />
</motion.div>

            {/* Foreground Text */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.span variants={fadeUp} className="tracking-[0.6em] text-sm md:text-base uppercase mb-4 md:mb-6 opacity-80">
                The
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] md:tracking-[0.25em] uppercase font-light mb-4 md:mb-6 drop-shadow-lg">
                Third
              </motion.h1>
              <motion.span variants={fadeUp} className="tracking-[0.6em] text-sm md:text-base uppercase opacity-80">
                Hall
              </motion.span>
            </div>
          </div>

          {/* SECRET CODE SECTION */}
          <div className="w-full max-w-4xl flex flex-col justify-center items-center relative px-6 z-20">
            <motion.h2 variants={fadeUp} className="tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm uppercase mb-12 text-center opacity-70">
              Enter the access code
            </motion.h2>

            <div className="flex gap-4 md:gap-8 mb-12">
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
                  className={`w-12 h-16 md:w-16 md:h-20 bg-transparent border-b text-center text-3xl font-light focus:outline-none transition-all duration-500 font-breadley ${
                    error 
                      ? 'border-red-600 text-red-600 translate-x-1' 
                      : codeSuccess
                        ? 'border-white text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] border-b-2 scale-110' 
                        : 'border-[#d6c5b3]/30 text-[#d6c5b3] focus:border-[#d6c5b3] focus:-translate-y-2 focus:border-b-[3px] focus:bg-white/5 hover:bg-white/5' 
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.main>

      </div>
    </div>
  );
};

export default ThirdHall;