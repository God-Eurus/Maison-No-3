import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThirdHallForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    fullName: '',
    preferredName: '',
    city: '',
    country: '',
    domain: '',
    referringCode: '',
    invitingSignatory: '',
    sphereOfInfluence: [] as string[],
    geographicInfluence: '',
    reflection: '',
    contactChannel: '',
    contactDetail: '',
    opennessToEvenings: '',
    engagedCities: '',
    modeOfAddress: '',
    associationInclination: '',
    note: '',
    consent: false
  });

  // --- HANDLERS ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, sphereOfInfluence: values }));
  };

  const nextStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  // --- FORMSPREE INTEGRATION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mnjbrjzo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Trigger cinematic transition only on success
        setIsTransitioning(true);
        setTimeout(() => {
          setIsSubmitted(true);
          setIsTransitioning(false);
          window.scrollTo(0, 0);
        }, 800);
      } else {
        alert("The Hall could not record your entry at this time. Please try again.");
      }
    } catch (error) {
      alert("A disturbance prevented your entry. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

  // Common input styling
  const inputClass = "w-full bg-transparent border-b border-[#d6c5b3]/30 py-3 text-sm md:text-base focus:outline-none focus:border-[#d6c5b3] transition-colors placeholder:text-[#d6c5b3]/30 tracking-wide font-light rounded-none appearance-none";
  const labelClass = "block text-xs tracking-[0.2em] uppercase opacity-60 mb-1 mt-8";
  const selectBgClass = "bg-[#1c1311] text-[#d6c5b3]"; 

  // Cinematic Silent Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1c1311] text-[#d6c5b3] font-serif flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
        
        {/* --- EXIT BACKGROUND VIDEO --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/AfterSubmission.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability & moody shade */}
          <div className="absolute inset-0 bg-[#050302]/80" />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-center items-center z-0">
          <img src="/images/ornate-crest.png" alt="" className="w-full max-w-4xl object-contain mix-blend-screen" />
        </div>
        
        <style>{`
          @keyframes cinematicReveal {
            0% { opacity: 0; filter: blur(8px); transform: translateY(10px); }
            100% { opacity: 1; filter: blur(0); transform: translateY(0); }
          }
          .reveal-text {
            opacity: 0;
            animation: cinematicReveal 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
        `}</style>
        
        <div className="max-w-md relative z-10 flex flex-col items-center">
          <p className="reveal-text tracking-[0.2em] text-sm md:text-base font-light leading-relaxed mb-4" style={{ animationDelay: '0.5s' }}>
            The Hall receives in silence.
          </p>
          <p className="reveal-text tracking-[0.2em] text-sm md:text-base font-light leading-relaxed mb-4" style={{ animationDelay: '2.5s' }}>
            Your entry has been recorded.
          </p>
          <p className="reveal-text tracking-[0.2em] text-sm md:text-base font-light leading-relaxed opacity-60" style={{ animationDelay: '4.5s' }}>
            Further correspondence, if any, will arrive privately.
          </p>
          
          <div className="reveal-text mt-16" style={{ animationDelay: '6s' }}>
            <Link to="/" className="border border-[#d6c5b3]/30 py-4 px-12 tracking-[0.4em] text-xs uppercase hover:bg-[#d6c5b3] hover:text-[#1c1311] transition-all duration-500 inline-block backdrop-blur-sm">
              Return to Maison
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // The Form Screen
  return (
    <div className="min-h-screen bg-[#1c1311] text-[#d6c5b3] font-serif flex flex-col items-center pb-24 relative overflow-hidden">
      
      {/* --- ENTRY BACKGROUND VIDEO --- */}
      <div className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/assets/passage.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050302]/80" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex justify-center items-center transition-opacity duration-1000 z-0">
        <img src="/images/ornate-crest.png" alt="" className="w-[120%] md:w-[800px] object-contain opacity-50" />
      </div>

      <style>{`
        @keyframes driftInFromBottom {
          0% { opacity: 0; filter: blur(8px); transform: translateY(60px) scale(0.98); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
        }
        @keyframes driftOutToTop {
          0% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
          100% { opacity: 0; filter: blur(8px); transform: translateY(-60px) scale(0.98); }
        }
        @keyframes smoothFadeUp {
          0% { opacity: 0; filter: blur(8px); transform: translateY(20px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .card-enter {
          animation: driftInFromBottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .card-exit {
          animation: driftOutToTop 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }
        .animate-line {
          opacity: 0;
          animation: smoothFadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className="w-full flex justify-between items-start p-8 md:p-12 z-20 relative">
        <div className="flex flex-col items-center">
          <span className="tracking-[0.4em] text-sm md:text-base uppercase">Maison</span>
          <span className="tracking-[0.3em] text-xs mt-2 uppercase">No. 3</span>
        </div>
      </nav>

      {/* Main Form Container */}
      <main className="w-full max-w-2xl px-6 mt-12 relative z-10 flex-grow flex flex-col justify-center">
        
        <form onSubmit={handleSubmit} className={`w-full transition-all ${isTransitioning ? 'card-exit' : 'card-enter'}`}>
          
          {/* --- STEP 0: THE RECOGNITION --- */}
          {step === 0 && (
            <div className="text-center py-20 flex flex-col items-center">
              <p className="animate-line tracking-[0.2em] text-sm md:text-base font-light mb-8 drop-shadow-md" style={{ animationDelay: '0.2s' }}>
                The Hall recognises your passage.
              </p>
              
              <p className="animate-line tracking-[0.2em] text-sm md:text-base font-light opacity-80 mb-16 leading-loose drop-shadow-md" style={{ animationDelay: '1.2s' }}>
                You have been extended a private access code <br/>by a Signatory of The Third Hall.
              </p>
              
              <h1 className="animate-line text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-8 drop-shadow-lg" style={{ animationDelay: '2.4s' }}>
                Hall Record <br/><span className="text-sm opacity-70">Private Entry Archive</span>
              </h1>
              
              <p className="animate-line tracking-[0.1em] text-sm font-light leading-loose opacity-70 mb-16 drop-shadow-md" style={{ animationDelay: '3.4s' }}>
                The Third Hall maintains a private archive of those who enter.<br/>
                This record exists only for quiet correspondence.
              </p>
              
              <button type="button" onClick={nextStep} className="animate-line border border-[#d6c5b3]/50 py-4 px-12 tracking-[0.4em] text-xs uppercase hover:bg-[#d6c5b3] hover:text-[#1c1311] transition-all duration-500 bg-[#1c1311]/20 backdrop-blur-sm" style={{ animationDelay: '4.4s' }}>
                Open The Archive
              </button>
            </div>
          )}

          {/* --- STEP 1: IDENTITY & LINEAGE --- */}
          {step === 1 && (
            <div>
              <h2 className="tracking-[0.4em] text-xs uppercase opacity-40 mb-8 border-b border-[#d6c5b3]/20 pb-4 text-center">I. Identity & Lineage</h2>
              <fieldset className="mb-12">
                <label className={labelClass}>1. Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} placeholder="Your legal or public name" />

                <label className={labelClass}>2. Preferred Name</label>
                <input type="text" name="preferredName" value={formData.preferredName} onChange={handleChange} className={inputClass} placeholder="How you wish to be addressed" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>3. City of Influence *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required className={inputClass} placeholder="Primary city" />
                  </div>
                  <div>
                    <label className={labelClass}>4. Country *</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required className={inputClass} placeholder="Primary country" />
                  </div>
                </div>

                <label className={labelClass}>5. Primary Domain *</label>
                <select name="domain" value={formData.domain} onChange={handleChange} required className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select a domain</option>
                  <option value="Business & Industry" className={selectBgClass}>Business & Industry</option>
                  <option value="Finance & Capital" className={selectBgClass}>Finance & Capital</option>
                  <option value="Art & Culture" className={selectBgClass}>Art & Culture</option>
                  <option value="Design & Architecture" className={selectBgClass}>Design & Architecture</option>
                  <option value="Technology" className={selectBgClass}>Technology</option>
                  <option value="Collecting & Patronage" className={selectBgClass}>Collecting & Patronage</option>
                  <option value="Private" className={selectBgClass}>Private / Prefer not listed</option>
                </select>

                <label className={labelClass}>6. Referring Hall Code *</label>
                <input type="text" name="referringCode" value={formData.referringCode} onChange={handleChange} required className={inputClass} placeholder="The code extended to you" />

                <label className={labelClass}>7. Inviting Signatory (Optional)</label>
                <input type="text" name="invitingSignatory" value={formData.invitingSignatory} onChange={handleChange} className={inputClass} placeholder="Name of your referrer" />
              </fieldset>

              <div className="flex justify-end mt-8">
                <button type="button" onClick={nextStep} className="border border-[#d6c5b3]/50 py-4 px-12 tracking-[0.4em] text-xs uppercase hover:bg-[#d6c5b3] hover:text-[#1c1311] transition-all duration-500">
                  Proceed
                </button>
              </div>
            </div>
          )}

          {/* --- STEP 2: INFLUENCE & REFLECTION --- */}
          {step === 2 && (
            <div>
              <h2 className="tracking-[0.4em] text-xs uppercase opacity-40 mb-8 border-b border-[#d6c5b3]/20 pb-4 text-center">II. Influence & Depth</h2>
              <fieldset className="mb-12">
                 <label className={labelClass}>8. Sphere of Influence *</label>
                 <select multiple name="sphereOfInfluence" value={formData.sphereOfInfluence} onChange={handleMultiSelectChange} required className={`${inputClass} h-32 py-2`} style={{ scrollbarWidth: 'none' }}>
                    <option value="Business" className={`${selectBgClass} py-1`}>Business</option>
                    <option value="Investment" className={`${selectBgClass} py-1`}>Investment</option>
                    <option value="Art" className={`${selectBgClass} py-1`}>Art</option>
                    <option value="Culture" className={`${selectBgClass} py-1`}>Culture</option>
                    <option value="Policy" className={`${selectBgClass} py-1`}>Policy</option>
                 </select>

                 <label className={labelClass}>9. Geographic Influence</label>
                 <select name="geographicInfluence" value={formData.geographicInfluence} onChange={handleChange} className={inputClass}>
                    <option value="" disabled className={selectBgClass}>Select reach</option>
                    <option value="City" className={selectBgClass}>City</option>
                    <option value="National" className={selectBgClass}>National</option>
                    <option value="Global" className={selectBgClass}>Global</option>
                 </select>

                 <label className={labelClass}>10. A Private Reflection *</label>
                 <textarea name="reflection" value={formData.reflection} onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} placeholder="What influence do you hope to carry forward?"></textarea>
              </fieldset>

              <div className="flex justify-end mt-8">
                <button type="button" onClick={nextStep} className="border border-[#d6c5b3]/50 py-4 px-12 tracking-[0.4em] text-xs uppercase hover:bg-[#d6c5b3] hover:text-[#1c1311] transition-all duration-500">
                  Proceed
                </button>
              </div>
            </div>
          )}

          {/* --- STEP 3: CONTACT & PROXIMITY --- */}
          {step === 3 && (
            <div>
               <h2 className="tracking-[0.4em] text-xs uppercase opacity-40 mb-8 border-b border-[#d6c5b3]/20 pb-4 text-center">III. Proximity</h2>
               <fieldset className="mb-12">
                <label className={labelClass}>11. Preferred Contact Channel *</label>
                <select name="contactChannel" value={formData.contactChannel} onChange={handleChange} required className={inputClass}>
                    <option value="" disabled className={selectBgClass}>Select channel</option>
                    <option value="Email" className={selectBgClass}>Email</option>
                    <option value="WhatsApp" className={selectBgClass}>WhatsApp</option>
                    <option value="Signal" className={selectBgClass}>Signal</option>
                </select>

                <label className={labelClass}>12. Contact Detail *</label>
                <input type="text" name="contactDetail" value={formData.contactDetail} onChange={handleChange} required className={inputClass} placeholder="Handle, number, or address" />

                <label className={labelClass}>13. Openness to Private Hall Evenings</label>
                <select name="opennessToEvenings" value={formData.opennessToEvenings} onChange={handleChange} className={inputClass}>
                    <option value="" disabled className={selectBgClass}>Select preference</option>
                    <option value="Yes" className={selectBgClass}>Yes</option>
                    <option value="Selectively" className={selectBgClass}>Selectively</option>
                </select>

                <label className={labelClass}>14. Cities You Engage With Often</label>
                <input type="text" name="engagedCities" value={formData.engagedCities} onChange={handleChange} className={inputClass} placeholder="E.g., London, Tokyo, New York" />
              </fieldset>

              <div className="flex justify-end mt-8">
                <button type="button" onClick={nextStep} className="border border-[#d6c5b3]/50 py-4 px-12 tracking-[0.4em] text-xs uppercase hover:bg-[#d6c5b3] hover:text-[#1c1311] transition-all duration-500">
                  Proceed
                </button>
              </div>
            </div>
          )}

          {/* --- STEP 4: ARCHITECTURE & SUBMIT --- */}
          {step === 4 && (
            <div>
               <h2 className="tracking-[0.4em] text-xs uppercase opacity-40 mb-8 border-b border-[#d6c5b3]/20 pb-4 text-center">IV. The Architecture</h2>
               <fieldset className="mb-12">
                  <label className={labelClass}>15. Preferred Mode of Address</label>
                  <select name="modeOfAddress" value={formData.modeOfAddress} onChange={handleChange} className={inputClass}>
                      <option value="" disabled className={selectBgClass}>Select preference</option>
                      <option value="Formal" className={selectBgClass}>Formal (Mr/Ms/Dr)</option>
                      <option value="First Name" className={selectBgClass}>First Name</option>
                  </select>

                  <label className={labelClass}>16. Association Inclination</label>
                  <select name="associationInclination" value={formData.associationInclination} onChange={handleChange} className={inputClass}>
                      <option value="" disabled className={selectBgClass}>Select inclination</option>
                      <option value="Cultural" className={selectBgClass}>Cultural</option>
                      <option value="Investment" className={selectBgClass}>Investment</option>
                  </select>

                  <label className={labelClass}>17. A Note for the Hall (Optional)</label>
                  <textarea name="note" value={formData.note} onChange={handleChange} rows={2} className={`${inputClass} resize-none`} placeholder="Rare but meaningful additions"></textarea>
               </fieldset>

               <fieldset className="mb-16 border-t border-[#d6c5b3]/20 pt-12">
                 <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-1">
                      <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="peer appearance-none w-5 h-5 border border-[#d6c5b3]/50 checked:bg-[#d6c5b3] transition-colors cursor-pointer" />
                      <svg className="absolute w-3 h-3 text-[#1c1311] opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="tracking-[0.1em] text-sm font-light opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                      I understand that The Third Hall communicates privately and exercises discretion in all correspondence.
                    </span>
                 </label>
              </fieldset>

              <div className="flex justify-center mt-8">
                <button type="submit" disabled={isSending} className={`border border-[#d6c5b3]/50 py-4 px-12 tracking-[0.4em] text-xs uppercase transition-all duration-500 ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d6c5b3] hover:text-[#1c1311] hover:shadow-[0_0_15px_rgba(214,197,179,0.2)]'}`}>
                  {isSending ? 'Transmitting...' : 'Enter the Record'}
                </button>
              </div>
            </div>
          )}

        </form>
      </main>
    </div>
  );
};

export default ThirdHallForm;