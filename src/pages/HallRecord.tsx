import React, { useState, FormEvent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type FlowState = 'desk-start' | 'desk-idle' | 'opening' | 'form' | 'submitted';

// --- CUSTOM TYPEWRITER COMPONENT ---
const TypewriterText = ({ text, delay = 0, speed = 40 }: { text: string, delay?: number, speed?: number }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout;
    
    const startTyping = () => {
      timer = setInterval(() => {
        setDisplayed(text.substring(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(timer);
      }, speed);
    };

    const initialDelay = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(timer);
    };
  }, [text, delay, speed]);

  return <span>{displayed}</span>;
};

const HallRecord: React.FC = () => {
  const [step, setStep] = useState<FlowState>('desk-start');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const location = useLocation();
  const codeUsed = location.state?.usedCode || 'Direct/Unknown';

  useEffect(() => {
    if (step === 'desk-start') {
      const timer = setTimeout(() => {
        setStep('desk-idle');
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    if (step === 'form' || step === 'submitted') {
      window.scrollTo(0, 0);
    }
  }, [step]);

  const handleOpenRecord = () => {
    setStep('opening');
    setTimeout(() => {
      setStep('form');
    }, 1500);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // BACKEND DATA LOGGING POINT
    // Capture: Entry timestamp, Code used, IP country, Device type, Referrer link
    
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep('submitted');
      }, 1500);
    }, 1000);
  };

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="mt-12 md:mt-16 mb-8 md:mb-10 flex flex-col items-center">
      <img src="/assets/ornate-border-top.png" alt="" className="w-24 md:w-32 opacity-30 mb-4 mix-blend-multiply" />
      <h3 className="tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-[#2b1a10]/60 text-center font-semibold">
        {title}
      </h3>
    </div>
  );

  const InputGroup = ({ label, id, required = false, children }: any) => (
    <div className="flex flex-col mb-8 md:mb-10 group">
      <label htmlFor={id} className="tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs uppercase text-[#2b1a10]/70 mb-2 md:mb-3 flex justify-between transition-opacity group-focus-within:text-[#2b1a10]">
        <span>{label}</span>
        {!required && <span className="opacity-50 italic lowercase tracking-normal font-serif ml-2">optional</span>}
      </label>
      {children}
    </div>
  );

  const baseInputClass = "w-full bg-transparent border-b border-[#2b1a10]/20 py-2 md:py-3 text-sm md:text-base lg:text-lg focus:outline-none focus:border-[#2b1a10] transition-all rounded-none text-[#2b1a10] placeholder:text-[#2b1a10]/20";
  const selectClass = `${baseInputClass} appearance-none cursor-pointer bg-transparent`;
  const optionClass = "bg-[#f1e4d3] text-[#2b1a10] py-2";

  return (
    <div className={`min-h-screen font-serif flex flex-col items-center selection:bg-[#2b1a10] selection:text-[#f1e4d3] relative transition-colors duration-1500 ${step === 'form' ? 'bg-[#050302] py-8 md:py-16 lg:py-24 px-4 sm:px-6' : 'bg-[#0a0604] overflow-hidden'}`}>
      
      <style>{`
        .desk-fade { transition: opacity 1.5s ease-in-out; }
        
        /* Wax Seal Styling */
        .wax-seal {
          background: radial-gradient(circle at 30% 30%, #5a0c0c, #290404);
          box-shadow: inset 0 0 5px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.6);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .wax-seal:hover {
          transform: translate(-50%, -50%) scale(1.05);
        }

        /* Envelope Fade In */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-envelope-reveal {
          animation: fadeInUp 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          animation-delay: 3.5s; /* Waits for typewriter to finish */
        }

        /* Parchment Form Animations */
        .parchment-scroll {
          background-color: #f1e4d3;
          background-image: radial-gradient(circle at center, transparent 30%, rgba(139, 115, 85, 0.15) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 0 60px rgba(139, 115, 85, 0.2);
        }
        @keyframes unroll {
          0% { opacity: 0; transform: scaleY(0.9) translateY(20px); filter: blur(4px); }
          100% { opacity: 1; transform: scaleY(1) translateY(0); filter: blur(0); }
        }
        .animate-unroll { animation: unroll 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-dissolve { opacity: 0; filter: blur(10px); transform: scale(0.95); transition: all 1.5s ease; }
      `}</style>

      {/* === STEP 1: THE VIDEO SCENE WITH TYPEWRITER & ENVELOPE === */}
      {(step === 'desk-start' || step === 'desk-idle' || step === 'opening') && (
        <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center">
          
          {/* Background Video Layer */}
          <div className={`absolute inset-0 z-0 desk-fade ${step === 'opening' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'} transition-all duration-1500`}>
             <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
                <source src="/assets/passage.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-[#050302]/50 mix-blend-multiply" />
          </div>

          {/* Foreground UI Layer */}
          <div className={`relative z-10 flex flex-col items-center justify-center text-center px-6 w-full desk-fade ${step === 'opening' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
            
            {/* Typewriter Text Section */}
            <div className="mb-12 min-h-[140px] md:min-h-[120px] flex flex-col items-center justify-end w-full max-w-lg">
              <h1 className="text-lg sm:text-xl md:text-2xl tracking-[0.15em] md:tracking-[0.2em] font-light mb-4 md:mb-6 text-[#d6c5b3] drop-shadow-lg leading-relaxed">
                <TypewriterText text="The Hall recognises your passage." delay={500} speed={50} />
              </h1>
              <p className="tracking-[0.15em] md:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm opacity-70 leading-relaxed md:leading-loose text-[#d6c5b3] drop-shadow-md min-h-[50px] md:min-h-[40px]">
                <TypewriterText text="You have been extended a private access code by a Signatory of The Third Hall." delay={2500} speed={30} />
              </p>
            </div>

            {/* Envelope Image & Button */}
            <div className="relative w-64 sm:w-72 md:w-96 flex items-center justify-center animate-envelope-reveal mt-4 md:mt-0">
               <img src="/assets/envelope.png" alt="Sealed Envelope" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" />
               
               {/* The Wax Seal Button */}
               <button 
                 onClick={handleOpenRecord}
                 className="wax-seal w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-20 focus:outline-none"
                 aria-label="Open the Record"
               >
                 <div className="absolute w-[80%] h-[80%] rounded-full border border-black/30" />
                 <span className="text-[#f1e4d3] text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.2em] uppercase font-bold opacity-80 group-hover:opacity-100 text-shadow-sm transition-opacity">
                   Open
                 </span>
               </button>
            </div>

          </div>

        </div>
      )}

      {/* === STEP 2: THE PHYSICAL SCROLL (Form) === */}
      {step === 'form' && (
        <main className={`flex-grow w-full max-w-3xl parchment-scroll p-6 sm:p-8 md:p-16 relative animate-unroll z-20 ${isFadingOut ? 'animate-dissolve pointer-events-none' : ''}`}>
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-t border-l border-[#2b1a10]/20 rounded-tl-lg" />
          <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-t border-r border-[#2b1a10]/20 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-b border-l border-[#2b1a10]/20 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-b border-r border-[#2b1a10]/20 rounded-br-lg" />

          {/* Form Header */}
          <div className="w-full text-[#2b1a10] pt-4 md:pt-0">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-xl sm:text-2xl tracking-[0.25em] md:tracking-[0.3em] uppercase font-light mb-4 md:mb-6">Hall Record</h1>
              <p className="tracking-[0.15em] md:tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs uppercase opacity-70 leading-relaxed md:leading-loose px-2">
                The Third Hall maintains a private archive of those who enter. <br className="hidden sm:block"/>
                This record exists only for quiet correspondence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full px-2 sm:px-4 md:px-0">
              
              {/* I. IDENTITY */}
              <SectionTitle title="I. Identity" />
              <InputGroup label="1. Full Name" id="fullName" required>
                <input type="text" id="fullName" name="fullName" required className={baseInputClass} />
              </InputGroup>
              <InputGroup label="2. Preferred Name" id="preferredName">
                <input type="text" id="preferredName" name="preferredName" className={baseInputClass} />
              </InputGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8">
                <InputGroup label="3. City of Influence" id="city" required>
                  <input type="text" id="city" name="city" required className={baseInputClass} />
                </InputGroup>
                <InputGroup label="4. Country" id="country" required>
                  <input type="text" id="country" name="country" required className={baseInputClass} />
                </InputGroup>
              </div>
              <InputGroup label="5. Primary Domain" id="primaryDomain" required>
                <select id="primaryDomain" name="primaryDomain" required defaultValue="" className={selectClass}>
                  <option value="" className={optionClass} disabled></option>
                  <option value="Business & Industry" className={optionClass}>Business & Industry</option>
                  <option value="Finance & Capital" className={optionClass}>Finance & Capital</option>
                  <option value="Art & Culture" className={optionClass}>Art & Culture</option>
                  <option value="Design & Architecture" className={optionClass}>Design & Architecture</option>
                  <option value="Technology" className={optionClass}>Technology</option>
                  <option value="Collecting & Patronage" className={optionClass}>Collecting & Patronage</option>
                  <option value="Private" className={optionClass}>Private / Prefer not listed</option>
                </select>
              </InputGroup>

              {/* II. LINEAGE */}
              <SectionTitle title="II. Lineage" />
              <InputGroup label="6. Referring Hall Code" id="hallCode" required>
                <input type="text" id="hallCode" name="hallCode" required className={baseInputClass} />
              </InputGroup>
              <InputGroup label="7. Inviting Signatory" id="invitingSignatory">
                <input type="text" id="invitingSignatory" name="invitingSignatory" className={baseInputClass} />
              </InputGroup>

              {/* III. SPHERE OF INFLUENCE */}
              <SectionTitle title="III. Sphere of Influence" />
              <InputGroup label="8. Sphere of Influence" id="spheres" required>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 md:gap-4 mt-4">
                  {['Business', 'Investment', 'Art', 'Culture', 'Policy', 'Design', 'Technology', 'Philanthropy', 'Private'].map(sphere => (
                    <label key={sphere} className="flex items-center space-x-3 md:space-x-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center shrink-0">
                        <input type="checkbox" name="spheres" value={sphere} className="peer appearance-none w-4 h-4 border border-[#2b1a10]/50 checked:bg-[#2b1a10] transition-colors" />
                        <svg className="absolute w-3 h-3 text-[#f1e4d3] opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="tracking-[0.05em] sm:tracking-[0.1em] text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-opacity break-words">{sphere}</span>
                    </label>
                  ))}
                </div>
              </InputGroup>
              <InputGroup label="9. Geographic Influence" id="geoInfluence">
                <select id="geoInfluence" name="geoInfluence" defaultValue="" className={selectClass}>
                  <option value="" className={optionClass} disabled></option>
                  <option value="City" className={optionClass}>City</option>
                  <option value="National" className={optionClass}>National</option>
                  <option value="Global" className={optionClass}>Global</option>
                </select>
              </InputGroup>

              {/* IV. REFLECTIVE DEPTH */}
              <SectionTitle title="IV. Reflective Depth" />
              <InputGroup label="10. A Private Reflection" id="reflection" required>
                <textarea id="reflection" name="reflection" required rows={4} className={`${baseInputClass} resize-none leading-relaxed`} placeholder="What influence do you hope to carry forward?"></textarea>
              </InputGroup>

              {/* V. CONTACT (DISCREET) */}
              <SectionTitle title="V. Contact (Discreet)" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8">
                <InputGroup label="11. Channel" id="contactChannel" required>
                  <select id="contactChannel" name="contactChannel" required defaultValue="" className={selectClass}>
                    <option value="" className={optionClass} disabled></option>
                    <option value="Email" className={optionClass}>Email</option>
                    <option value="WhatsApp" className={optionClass}>WhatsApp</option>
                    <option value="Signal" className={optionClass}>Signal</option>
                    <option value="Telegram" className={optionClass}>Telegram</option>
                    <option value="Office" className={optionClass}>Through Office</option>
                  </select>
                </InputGroup>
                <InputGroup label="12. Detail" id="contactDetail" required>
                  <input type="text" id="contactDetail" name="contactDetail" required className={baseInputClass} />
                </InputGroup>
              </div>

              {/* VI. PRESENCE & PROXIMITY */}
              <SectionTitle title="VI. Presence & Proximity" />
              <InputGroup label="13. Openness to Private Evenings" id="hallEvenings">
                <select id="hallEvenings" name="hallEvenings" defaultValue="" className={selectClass}>
                  <option value="" className={optionClass} disabled></option>
                  <option value="Yes" className={optionClass}>Yes</option>
                  <option value="Selectively" className={optionClass}>Selectively</option>
                  <option value="Not currently" className={optionClass}>Not currently</option>
                </select>
              </InputGroup>
              <InputGroup label="14. Cities You Engage With Often" id="engagedCities">
                <input type="text" id="engagedCities" name="engagedCities" className={baseInputClass} />
              </InputGroup>
              <InputGroup label="15. Openness to Hosting" id="hostingOpenness">
                <select id="hostingOpenness" name="hostingOpenness" defaultValue="" className={selectClass}>
                  <option value="" className={optionClass} disabled></option>
                  <option value="Yes" className={optionClass}>Yes</option>
                  <option value="Maybe" className={optionClass}>Maybe</option>
                  <option value="No" className={optionClass}>No</option>
                </select>
              </InputGroup>

              {/* VII. PERSONAL SIGNALS */}
              <SectionTitle title="VII. Personal Signals" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8">
                <InputGroup label="16. Mode of Address" id="modeOfAddress">
                  <select id="modeOfAddress" name="modeOfAddress" defaultValue="" className={selectClass}>
                    <option value="" className={optionClass} disabled></option>
                    <option value="Formal" className={optionClass}>Formal</option>
                    <option value="First Name" className={optionClass}>First Name</option>
                    <option value="Undisclosed" className={optionClass}>Undisclosed</option>
                  </select>
                </InputGroup>
                <InputGroup label="17. Comm. Tempo" id="commTempo">
                  <select id="commTempo" name="commTempo" defaultValue="" className={selectClass}>
                    <option value="" className={optionClass} disabled></option>
                    <option value="Immediate" className={optionClass}>Immediate</option>
                    <option value="Considered" className={optionClass}>Considered</option>
                    <option value="Minimal" className={optionClass}>Minimal</option>
                    <option value="Through Office" className={optionClass}>Through Office</option>
                  </select>
                </InputGroup>
              </div>
              <InputGroup label="18. A Line You Resonate With" id="soulSignal">
                <textarea id="soulSignal" name="soulSignal" rows={2} className={`${baseInputClass} resize-none`} placeholder="A belief or line that has stayed with you."></textarea>
              </InputGroup>

              {/* VIII. FUTURE ARCHITECTURE */}
              <SectionTitle title="VIII. Future Architecture" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8">
                <InputGroup label="19. Association" id="association">
                  <select id="association" name="association" defaultValue="" className={selectClass}>
                    <option value="" className={optionClass} disabled></option>
                    <option value="Cultural" className={optionClass}>Cultural</option>
                    <option value="Investment" className={optionClass}>Investment</option>
                    <option value="Patronage" className={optionClass}>Patronage</option>
                    <option value="Private Circle" className={optionClass}>Private Circle</option>
                    <option value="Undisclosed" className={optionClass}>Undisclosed</option>
                  </select>
                </InputGroup>
                <InputGroup label="20. Referrals" id="referrals">
                  <select id="referrals" name="referrals" defaultValue="" className={selectClass}>
                    <option value="" className={optionClass} disabled></option>
                    <option value="Open" className={optionClass}>Open</option>
                    <option value="Selective" className={optionClass}>Selective</option>
                    <option value="Not currently" className={optionClass}>Not currently</option>
                  </select>
                </InputGroup>
              </div>

              {/* IX. DISCRETION ACKNOWLEDGEMENT */}
              <SectionTitle title="IX. Discretion" />
              <label className="flex items-start space-x-3 md:space-x-4 cursor-pointer group mb-12">
                <div className="relative flex items-center justify-center mt-1 shrink-0">
                  <input type="checkbox" required className="peer appearance-none w-4 h-4 md:w-5 md:h-5 border border-[#2b1a10] checked:bg-[#2b1a10] transition-colors" />
                  <svg className="absolute w-3 h-3 text-[#f1e4d3] opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                  21. I understand that The Third Hall operates privately and maintains discretion across all correspondence. *
                </span>
              </label>

              {/* X. NOTE */}
              <SectionTitle title="X. Note" />
              <InputGroup label="22. A Note for the Hall" id="note">
                <textarea id="note" name="note" rows={3} className={`${baseInputClass} resize-none`} placeholder=""></textarea>
              </InputGroup>

              <div className="mt-16 md:mt-20 flex justify-center pb-8 md:pb-12">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto border border-[#2b1a10] py-4 md:py-5 px-8 md:px-16 tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-semibold uppercase hover:bg-[#2b1a10] hover:text-[#f1e4d3] transition-all duration-500 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#2b1a10]"
                >
                  {isSubmitting ? 'Inscribing...' : 'Enter the Record'}
                </button>
              </div>
            </form>
          </div>
        </main>
      )}

      {/* === STEP 3: POST-SUBMISSION SILENCE === */}
      {step === 'submitted' && (
        <div className="fixed inset-0 bg-[#050302] z-50 flex flex-col items-center justify-center text-center px-6 text-[#d6c5b3]" style={{ animation: 'unroll 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
          <h1 className="text-xl md:text-3xl tracking-[0.15em] md:tracking-[0.2em] font-light mb-6 md:mb-8 opacity-90 leading-relaxed">
            The Hall receives in silence.
          </h1>
          <p className="tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm opacity-60 leading-loose max-w-md">
            Your entry has been recorded.<br/>
            Further correspondence, if any, will arrive privately.
          </p>
        </div>
      )}

    </div>
  );
};

export default HallRecord;