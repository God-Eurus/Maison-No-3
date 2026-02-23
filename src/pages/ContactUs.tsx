import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Font placeholders - weights set to thin/light
const styles = {
  scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", serif', fontWeight: 300, lineHeight: 1.3 },
  serifFont: { fontFamily: '"Times New Roman", serif', fontWeight: 300, lineHeight: 1.3 },
  sansFont: { fontFamily: '"Helvetica Neue", sans-serif', fontWeight: 300, lineHeight: 1.3 },
};

// --- ANIMATION VARIANTS ---
const slowFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Buttery smooth custom easing
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each field appearing
      delayChildren: 0.2
    }
  }
};

const ContactUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-[#1a1a1a] font-light leading-[1.3]">
      
      {/* --- BACKGROUND GRADIENT --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #f9f6f6 0%, #fdfbf7 50%, #f9f6f6 100%)'
        }}
      />

      {/* --- ORNAMENTAL HEADER BACKGROUND (Now "Breathing") --- */}
      <div className="absolute top-0 left-0 w-full h-[400px] md:h-[500px] z-0 pointer-events-none overflow-hidden">
        <motion.img 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          src="/assets/contact.png" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.30] mix-blend-multiply"
        />
      </div>

      {/* --- NAV --- */}
      <nav className="relative z-20 w-full px-8 py-8 flex justify-end min-h-[80px]">
         {/* Nav space kept for layout consistency */}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-12 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={styles.scriptFont} 
          className="text-5xl md:text-7xl mb-10 text-[#1a1a1a]"
        >
          Crafting <br />
          Hypnotic Brands!
        </motion.h1>
      </header>

      {/* --- FORM SECTION --- */}
      <section className="relative z-10 w-full pb-20">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slowFadeUp}
          className="text-center mb-16 relative z-10 px-6"
        >
          <h2 style={styles.scriptFont} className="text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            enchanté?
          </h2>
          <p style={styles.sansFont} className="text-[9px] md:text-[10px] text-[#333] max-w-lg mx-auto tracking-[0.2em] uppercase">
            Let's have a refined dialogue that shares creative expression and strategic intent.
          </p>
        </motion.div>

        <div className="relative w-full mt-12">
          
          {/* LEFT SIDE IMAGE (Smooth Slide In) */}
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/assets/hante.png" 
            alt="Form Left" 
            className="hidden lg:block absolute left-0 top-0 w-48 md:w-64 h-auto object-cover z-20"
          />

          <form className="relative z-10 max-w-2xl mx-auto px-6">
            
            {/* Staggered Form Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-[10px] text-[#333] mb-4" style={styles.serifFont}>Your name</label>
                <input type="text" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 text-center font-light transition-all" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-[10px] text-[#333] mb-4" style={styles.serifFont}>Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 text-center font-light transition-all" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-[10px] text-[#333] mb-4" style={styles.serifFont}>Telephone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 text-center font-light transition-all" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group relative text-center">
                <label className="block text-[10px] text-[#333] mb-4" style={styles.serifFont}>Services</label>
                <input type="text" className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 text-center font-light transition-all" />
              </motion.div>
              
              <motion.div variants={slowFadeUp} className="group md:col-span-2 relative text-center mt-4">
                <label className="block text-[10px] text-[#333] mb-4" style={styles.serifFont}>Tell us about your project</label>
                <textarea rows={1} className="w-full bg-transparent border-b border-[#ccc] focus:border-black outline-none py-2 text-center font-light transition-all resize-none overflow-hidden"></textarea>
              </motion.div>
            </motion.div>

            {/* Action Buttons (Fade Up) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slowFadeUp}
              className="relative flex flex-col items-center gap-6 mt-16 w-full"
            >
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="px-10 py-3 rounded-full bg-black text-white transition-colors shadow-lg"
              >
                <span style={styles.serifFont} className="text-[10px] tracking-[0.3em] uppercase">SCHEDULE A CALL</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#222" }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="px-10 py-3 rounded-full bg-black text-white transition-colors shadow-lg"
              >
                <span style={styles.serifFont} className="text-[10px] tracking-[0.3em] uppercase">GET IN TOUCH</span>
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
               <span style={styles.serifFont} className="text-[10px] tracking-[0.4em] text-[#333] uppercase">VISIT THE MAISON</span>
            </motion.div>
          </form>

          {/* RIGHT SIDE IMAGE (Smooth Slide In) */}
          <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/assets/enc.png" 
            alt="Buttons Right" 
            className="hidden lg:block absolute right-0 top-[65%] -translate-y-1/2 w-48 md:w-64 h-auto object-cover z-20"
          />

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative shadow-2xl"
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d75.8000000!3d26.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
            ></iframe>
            
            <div className="absolute bottom-6 left-8 pointer-events-none">
                <span style={styles.serifFont} className="text-white/80 text-[10px] tracking-[0.3em] uppercase mix-blend-difference">
                    GOOGLE MAP
                </span>
            </div>
        </motion.div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="relative z-10 w-full mt-32 pt-40 pb-12 text-center overflow-hidden flex flex-col justify-end min-h-[60vh]">
        
        {/* Footer Ornament (Now "Breathing") */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                src="/assets/contact.png" 
                alt="" 
                className="w-full h-full object-cover object-bottom opacity-[0.4] mix-blend-multiply" 
                style={{ transform: 'rotate(180deg)' }} 
            />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="relative z-10 mb-32 flex flex-col items-center"
        >
            <Link to="/ourprojects" className="inline-block group mb-8">
                <motion.h2 variants={slowFadeUp} style={styles.serifFont} className="text-4xl md:text-6xl text-[#1a1a1a] tracking-[0.2em] uppercase group-hover:opacity-70 transition-opacity duration-300">
                    SIGNATURE <br /> ENGAGEMENTS
                </motion.h2>
            </Link>
            <motion.p variants={slowFadeUp} style={styles.sansFont} className="text-[10px] md:text-xs text-[#555] max-w-md mx-auto tracking-widest lowercase">
               Projects that reflect our approach to identity, structure, and cultural relevance.
            </motion.p>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 flex justify-between items-end text-[9px] md:text-[10px] text-[#555] uppercase tracking-[0.15em] border-t border-transparent">
            <button onClick={scrollToTop} className="hover:text-black transition-colors text-left w-1/3">
                back on top
            </button>
            <div className="text-center w-1/3">
                2024 @ qui creatives all rights reserved
            </div>
            <div className="text-right w-1/3">
                <a href="#" className="hover:text-black transition-colors">Follow Us</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;