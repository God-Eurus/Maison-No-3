import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactPopup from "./ContactPopup"; 
import { countryCodes } from "./countryCodes"; 

const styles = {
  scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", serif', fontWeight: 300, lineHeight: 1.3 },
  serifFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
  sansFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
};

const slowFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2
    }
  }
};

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDialCode, setSelectedDialCode] = useState("+91");
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // UPDATED: Formspree Submission Logic
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgwvgnr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsModalOpen(true); // Show success popup
        form.reset(); // Clear form fields
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryCodes.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dial_code.includes(searchQuery) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-[#1a1a1a] font-light leading-[1.3] font-breadley">
      
      <style>{`
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
      `}</style>

      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #f9f6f6 0%, #fdfbf7 50%, #f9f6f6 100%)'
        }}
      />

      <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.img 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          src="/assets/contact.png" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.30] mix-blend-multiply"
        />
      </div>

      <nav className="absolute top-0 left-0 z-20 w-full px-6 md:px-8 py-6 md:py-8 flex justify-end min-h-[80px]">
      </nav>

      <header className="relative z-10 w-full min-h-screen max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={styles.scriptFont} 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-10 text-[#1a1a1a] px-4"
        >
          Crafting <br className="hidden sm:block" />
          Hypnotic Brands!
        </motion.h1>
      </header>

      <section className="relative z-10 w-full pb-16 md:pb-20 pt-10 md:pt-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slowFadeUp}
          className="text-center mb-12 md:mb-16 relative z-10 px-6"
        >
          <h2 style={styles.scriptFont} className="text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] mb-4 md:mb-6">
            enchanté?
          </h2>
          <p style={styles.sansFont} className="text-xs sm:text-sm md:text-base lg:text-lg text-[#333] max-w-xl mx-auto tracking-[0.15em] md:tracking-[0.2em] uppercase leading-relaxed">
            Let's have a refined dialogue that shares creative expression and strategic intent.
          </p>
        </motion.div>

        <div className="relative w-full mt-8 md:mt-12">
          
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/assets/hante.png" 
            alt="Form Left" 
            className="hidden lg:block absolute left-0 top-0 w-48 xl:w-64 h-auto object-cover z-20"
          />

          {/* Form wrapper */}
          <form onSubmit={handleFormSubmit} className="relative z-10 max-w-2xl mx-auto px-6 lg:px-0">
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-12 mb-10 md:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-sm md:text-base text-[#333] mb-3 md:mb-4 font-breadley">Your name</label>
                {/* ADDED name="name" */}
                <input required type="text" name="name" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 md:py-3 text-center text-base md:text-lg lg:text-xl font-light transition-all font-breadley" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-sm md:text-base text-[#333] mb-3 md:mb-4 font-breadley">Email Address</label>
                {/* ADDED name="email" */}
                <input required type="email" name="email" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 md:py-3 text-center text-base md:text-lg lg:text-xl font-light transition-all font-breadley" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-sm md:text-base text-[#333] mb-3 md:mb-4 font-breadley">Telephone Number</label>
                
                {/* HIDDEN INPUT for dial code so it gets sent with Formspree data */}
                <input type="hidden" name="dial_code" value={selectedDialCode} />

                <div className="flex items-center w-full border-b border-[#ccc] focus-within:border-black transition-all relative" ref={dropdownRef}>
                  
                  <div 
                    className="py-2 md:py-3 pr-2 text-base md:text-lg lg:text-xl font-light font-breadley cursor-pointer text-[#333] flex items-center gap-1 shrink-0"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedCountryCode} ({selectedDialCode})</span>
                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 max-h-72 bg-[#fdfbf7] shadow-xl border border-[#eaeaea] rounded-lg z-50 flex flex-col overflow-hidden text-left">
                      <div className="p-2 border-b border-[#eaeaea] bg-[#fdfbf7]">
                        <input 
                          type="text" 
                          placeholder="Search country..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-transparent outline-none text-sm p-1 placeholder-gray-400 font-breadley font-light text-[#333]"
                          autoFocus
                        />
                      </div>
                      <div className="overflow-y-auto flex-1 custom-scrollbar">
                        {filteredCountries.map((country, idx) => (
                          <div 
                            key={idx}
                            className="px-4 py-2 hover:bg-[#f0ece6] cursor-pointer text-sm md:text-base font-breadley font-light text-[#333] transition-colors"
                            onClick={() => {
                              setSelectedDialCode(country.dial_code);
                              setSelectedCountryCode(country.code);
                              setIsDropdownOpen(false);
                              setSearchQuery(""); 
                            }}
                          >
                            {country.code} {country.name} <span className="opacity-60 text-xs">({country.dial_code})</span>
                          </div>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="p-4 text-sm text-gray-500 font-breadley font-light text-center">No countries found.</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ADDED name="phone" */}
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    className="w-full bg-transparent outline-none py-2 md:py-3 text-center text-base md:text-lg lg:text-xl font-light transition-all font-breadley" 
                  />
                </div>
              </motion.div>

              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-sm md:text-base text-[#333] mb-3 md:mb-4 font-breadley">Services</label>
                {/* ADDED name="services" */}
                <input required type="text" name="services" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 md:py-3 text-center text-base md:text-lg lg:text-xl font-light transition-all font-breadley" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group md:col-span-2 relative text-center mt-2 md:mt-4">
                <label className="block text-sm md:text-base text-[#333] mb-3 md:mb-4 font-breadley">Tell us about your project</label>
                {/* ADDED name="project_details" */}
                <textarea required rows={1} name="project_details" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 md:py-3 text-center text-base md:text-lg lg:text-xl font-light transition-all resize-none overflow-hidden font-breadley"></textarea>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slowFadeUp}
              className="relative flex justify-center items-center mt-6 mb-12 w-full"
            >
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting} // Disable button while sending
                className={`w-full md:w-auto px-12 md:px-16 py-3 md:py-4 rounded-full bg-[#1a1a1a] text-white transition-colors shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="font-breadley font-light text-sm md:text-base tracking-[0.3em] uppercase">
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </span>
              </motion.button>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slowFadeUp}
              className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-12 md:mt-16 w-full"
            >
              <motion.a 
                href="https://calendly.com/maisonnoiii/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 md:px-12 py-4 rounded-full bg-black text-white transition-colors shadow-lg text-center"
              >
                <span style={styles.serifFont} className="text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase">SCHEDULE A CALL</span>
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="w-full md:w-auto px-8 md:px-12 py-4 rounded-full bg-black text-white transition-colors shadow-lg"
              >
                <span style={styles.serifFont} className="text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase">GET IN TOUCH</span>
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16 md:mt-20"
            >
               <span style={styles.serifFont} className="text-base sm:text-lg md:text-2xl lg:text-3xl tracking-[0.3em] md:tracking-[0.4em] text-[#333] uppercase">VISIT THE MAISON</span>
            </motion.div>
          </form>

          <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/assets/enc.png" 
            alt="Buttons Right" 
            className="hidden lg:block absolute right-0 top-[65%] -translate-y-1/2 w-48 xl:w-64 h-auto object-cover z-20"
          />

        </div>
      </section>

      <section className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-8 md:py-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl"
        >
            <iframe 
                src="https://maps.google.com/maps?q=Jewel+Of+India+Apartments,+Jaipur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
            ></iframe>
            
            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 pointer-events-none">
                <span style={styles.serifFont} className="text-white/80 text-[10px] md:text-xs lg:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mix-blend-difference">
                    GOOGLE MAP
                </span>
            </div>
        </motion.div>
      </section>

      <footer className="relative z-10 w-full mt-20 md:mt-32 pt-24 md:pt-40 pb-12 text-center overflow-hidden flex flex-col justify-end min-h-[50vh] md:min-h-[60vh]">
        
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
             <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                src="/assets/contactbottom.png" 
                alt="" 
                className="w-full h-full object-cover object-center opacity-[0.9] mix-blend-multiply" 
                style={{ transform: 'rotate(180deg)' }} 
            />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="relative z-10 mb-20 md:mb-32 flex flex-col items-center px-4"
        >
            <Link to="/ourprojects" className="inline-block group mb-6 md:mb-8">
                <motion.h2 variants={slowFadeUp} style={styles.serifFont} className="text-4xl sm:text-6xl md:text-9xl text-[#1a1a1a] tracking-[0.30em] md:tracking-[0.2em] uppercase group-hover:opacity-70 transition-opacity duration-300">
                    SIGNATURE <br /> ENGAGEMENTS
                </motion.h2>
            </Link>
            <motion.p variants={slowFadeUp} style={styles.sansFont} className="text-xs sm:text-sm md:text-base text-[#555] max-w-sm md:max-w-md mx-auto tracking-widest lowercase leading-relaxed">
               Projects that reflect our approach to identity, structure, and cultural relevance.
            </motion.p>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-2 sm:px-6 md:px-8 flex flex-row justify-between items-center gap-1 md:gap-4 text-[7px] sm:text-[9px] md:text-sm lg:text-base text-[#555] uppercase tracking-[0.1em] md:tracking-[0.15em] border-t border-transparent">
            
            <button onClick={scrollToTop} className="hover:text-black transition-colors text-left whitespace-nowrap w-auto">
                back on top
            </button>
            
            <div className="text-center truncate px-1 flex-1">
                2024 @ qui creatives all rights reserved
            </div>
            
            <div className="text-right whitespace-nowrap w-auto">
                <a href="#" className="hover:text-black transition-colors inline-block">Follow Us</a>
            </div>
            
        </div>
      </footer>

      <ContactPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactUs;