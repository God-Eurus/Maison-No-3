import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdHall: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  
  // Theatrical Animation States
  const [codeSuccess, setCodeSuccess] = useState(false);
  const [dropCurtains, setDropCurtains] = useState(false);
  const [ropeSnaps, setRopeSnaps] = useState(false);
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
      
      // Check if the entered code exists in our array of valid codes
      if (VALID_CODES.includes(enteredCode)) {
        // --- THE THEATRICAL SEQUENCE ---
        setCodeSuccess(true); 
        
        setTimeout(() => {
          setDropCurtains(true);
        }, 600);

        setTimeout(() => {
          setRopeSnaps(true);
        }, 1600);

        setTimeout(() => {
          setOpenCurtains(true); 
        }, 2000);

        setTimeout(() => {
          navigate('/hallrecord', { state: { usedCode: enteredCode } });
        }, 3800); 

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
        .center-rope {
          background: repeating-linear-gradient(-45deg, #8b7355 0px, #8b7355 4px, #d6c5b3 4px, #d6c5b3 8px);
          box-shadow: 2px 0 10px rgba(0,0,0,0.8), -2px 0 10px rgba(0,0,0,0.8);
        }
        .drop-transition { transition: transform 0.8s cubic-bezier(0.5, 0, 0.1, 1); }
        .curtain-transition { transition: transform 2s cubic-bezier(0.65, 0, 0.15, 1); }
      `}</style>

      {/* --- THE THEATRICAL OVERLAY --- */}
      <div className={`fixed inset-0 z-50 flex pointer-events-none drop-transition ${dropCurtains ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 the-void z-0" />
        <div className={`absolute inset-y-0 left-0 w-[50.5%] velvet-curtain z-10 curtain-transition border-r border-[#000]/50 ${openCurtains ? '-translate-x-full' : 'translate-x-0'}`} />
        <div className={`absolute inset-y-0 right-0 w-[50.5%] velvet-curtain z-10 curtain-transition border-l border-[#000]/50 ${openCurtains ? 'translate-x-full' : 'translate-x-0'}`} />
        <div className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-[6px] md:w-[8px] z-20 flex flex-col items-center justify-center transition-all duration-500 ${ropeSnaps ? 'opacity-0 scale-y-110 translate-y-20' : 'opacity-100 scale-y-100'}`}>
          <div className="absolute inset-y-0 w-full center-rope" />
          <div className={`w-6 h-12 md:w-8 md:h-16 rounded-full center-rope shadow-[0_0_20px_rgba(0,0,0,1)] z-30 transition-all duration-300 ${ropeSnaps ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
        </div>
      </div>

      {/* --- MAIN SCROLLING CONTENT --- */}
      <div className={`text-[#d6c5b3] font-serif flex flex-col transition-all duration-1000 ${codeSuccess ? 'scale-105 opacity-50' : 'scale-100 opacity-100'}`}>
        
        {/* HERO SECTION */}
        <div className="relative min-h-screen flex flex-col">
          <nav className="absolute top-0 left-0 w-full flex justify-between items-start p-8 md:p-12 z-20">
            <div className="flex flex-col items-center">
              <span className="tracking-[0.4em] text-sm md:text-base uppercase opacity-90">Maison</span>
              <span className="tracking-[0.3em] text-xs mt-2 uppercase opacity-70">No. 3</span>
            </div>
            <button className="flex flex-col gap-[6px] mt-2 p-2 hover:opacity-70 transition-opacity focus:outline-none" aria-label="Menu">
              <span className="w-8 h-[1px] bg-[#d6c5b3]"></span>
              <span className="w-8 h-[1px] bg-[#d6c5b3]"></span>
            </button>
          </nav>

          <main className="flex-grow relative flex justify-center items-center w-full">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 mix-blend-screen">
              <img src="/assets/thirdhalltwo.png" alt="Decorative crest" className="w-[80%] md:w-[600px] h-auto object-contain" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="tracking-[0.6em] text-xs md:text-sm uppercase mb-4 md:mb-6 opacity-80">The</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.25em] uppercase font-light mb-4 md:mb-6">Third</h1>
              <span className="tracking-[0.6em] text-xs md:text-sm uppercase opacity-80">Hall</span>
            </div>
          </main>
        </div>

        {/* SECRET CODE SECTION */}
        <div className="min-h-screen flex flex-col justify-center items-center py-20 relative">
          
          {/* FULL WIDTH TOP BORDER */}
          <div className="w-full mb-16 opacity-40">
             <img src="/assets/thirdhallone.png" alt="Ornate Border" className="w-full h-auto" />
          </div>

          <h2 className="tracking-[0.5em] md:tracking-[0.7em] text-xs md:text-sm uppercase mb-16 text-center opacity-90 px-6">
            Enter through a 6 digit secret code
          </h2>

          <div className="flex gap-4 md:gap-8 mb-16 z-10 px-6">
            {code.map((digit, index) => (
              <input
                key={index}
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
                      : 'border-[#d6c5b3]/40 text-[#d6c5b3] focus:border-[#d6c5b3] focus:-translate-y-1 focus:border-b-2 bg-black/10' 
                }`}
              />
            ))}
          </div>

          {/* FULL WIDTH BOTTOM BORDER */}
          <div className="w-full mt-8 opacity-40">
             <img src="/assets/thirdhalltwo.png" alt="Ornate Border" className="w-full h-auto" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThirdHall;