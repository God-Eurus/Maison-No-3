"use client";

import { motion } from "framer-motion";

export default function MalachiOnePage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-[#e5e5e5] font-serif overflow-x-hidden selection:bg-[#c5a059] selection:text-black">
      
      {/* --- 1. BACKGROUND TEXTURE --- */}
      {/* Dark Charred Wood Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2400&auto=format&fit=crop" 
          alt="Dark Wood Texture"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        {/* Vignette Overlay for moody effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* --- 2. NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-50 mix-blend-difference">
        <span className="text-xs md:text-sm tracking-[0.3em] font-medium uppercase text-white opacity-80">
          Qui Creatives
        </span>
        
        {/* Hamburger Menu (Visual Only) */}
        <button className="flex flex-col gap-1.5 cursor-pointer group">
          <span className="w-8 h-[1px] bg-white group-hover:w-10 transition-all duration-300"></span>
          <span className="w-8 h-[1px] bg-white group-hover:w-6 transition-all duration-300 ml-auto"></span>
        </button>
      </nav>

      {/* --- 3. MAIN CONTENT --- */}
      <main className="relative z-10 w-full flex flex-col items-center pt-32 px-6">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-center w-full max-w-4xl mx-auto"
        >
          
          {/* --- LOGO SECTION --- */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center mb-32 md:mb-48 text-center">
             {/* Hebrew Symbol (Text representation with gold gradient) */}
             <div className="mb-6 relative">
                <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#f7ef8a] to-[#aa8c2c] drop-shadow-2xl">
                  מַלְאָכִי
                </h1>
                {/* Glow effect behind the text */}
                <div className="absolute inset-0 bg-[#d4af37] blur-[60px] opacity-10"></div>
             </div>

             {/* Brand Name */}
             <h2 className="text-xl md:text-3xl tracking-[0.3em] text-[#a89065] font-serif uppercase mb-3">
               Malachi Kitchen
             </h2>
             
             {/* Subtitle */}
             <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#6b5c45] uppercase font-light">
               State-of-the-Art Kitchen
             </span>
          </motion.div>


          {/* --- ORIGIN SECTION --- */}
          <motion.div variants={fadeInUp} className="text-center space-y-12 mb-32 max-w-2xl">
            <h3 className="text-2xl md:text-4xl tracking-[0.3em] uppercase text-white font-light">
              Origin of Brand
            </h3>
            <p className="text-sm md:text-base leading-loose text-white/70 font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM SECTION (Seal Left, Text Right) --- */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 mt-10 mb-32 md:px-12">
          
          {/* Seal Image - Bottom Left */}
          <motion.div 
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full md:w-1/3 flex justify-center md:justify-start"
          >
            {/* Using a wax seal image placeholder */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <img 
                    src="https://images.unsplash.com/photo-1585644198526-946d05e26c6d?q=80&w=600&auto=format&fit=crop" 
                    alt="Wax Seal" 
                    className="w-full h-full object-contain sepia brightness-50 contrast-125 opacity-80 drop-shadow-2xl"
                />
                {/* Overlaying Hebrew text on the seal to mimic the screenshot */}
                <div className="absolute inset-0 flex items-center justify-center transform -rotate-12 opacity-40 mix-blend-overlay">
                    <span className="text-4xl text-[#3f2e18] font-serif font-bold">מַלְאָכִי</span>
                </div>
            </div>
          </motion.div>

          {/* Text Block - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/3 text-center md:text-right pb-8 md:pb-12"
          >
             <p className="text-sm md:text-lg leading-loose text-white/70 font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </motion.div>

        </div>

        {/* --- NEW SECTION: DARK CARDS --- */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 mt-16 px-4 md:px-0">
            
            {/* Card 1: With Title */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#1a1a1a] p-10 md:p-16 rounded-[1rem] shadow-2xl border border-white/5 relative overflow-hidden"
            >
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                
                <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.2em] text-[#a89065]/80 mb-8 relative z-10">
                    Malachi Kitchen
                </h3>
                <div className="space-y-6 text-sm md:text-base leading-loose text-[#888] font-light relative z-10">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </motion.div>

             {/* Card 2: Text Only */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full bg-[#1a1a1a] p-10 md:p-16 rounded-[1rem] shadow-2xl border border-white/5 relative overflow-hidden"
            >
                 {/* Subtle Grain Overlay */}
                 <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                <div className="space-y-6 text-sm md:text-base leading-loose text-[#888] font-light relative z-10">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* --- NEW SECTION: OUR VALUES --- */}
        <div className="w-full max-w-5xl mx-auto mt-32 mb-20 px-4 md:px-0">
             <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-serif uppercase tracking-[0.3em] text-white mb-16 pl-2"
            >
                Our Values
            </motion.h3>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 text-sm md:text-base leading-loose text-[#a0a0a0] font-light max-w-5xl"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </motion.div>
        </div>

        {/* --- SECTION F: GALLERY --- */}
        <div className="w-full max-w-7xl mx-auto mb-40 mt-32">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-4xl tracking-[0.3em] uppercase text-white font-serif font-light mb-4">
                Gallery
              </h2>
              <p className="text-xs md:text-sm tracking-widest uppercase opacity-70 text-[#a0a0a0]">
                Protect, restore, and promote sustainable use of terrestrial ecosystems
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
             {[
               "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop", // Food Container Mockup
               "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=800&auto=format&fit=crop", // Coffee Cup Mockup
               "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"  // Salad Bowl Mockup
             ].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="aspect-[3/4] overflow-hidden rounded-sm relative group"
                >
                   {/* Dark overlay on images to match moody theme */}
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                   <img src={src} alt="Gallery Item" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-90 contrast-110" />
                </motion.div>
             ))}
           </div>
        </div>

        {/* --- SECTION G: FOOTER / MORE PROJECTS --- */}
        <footer className="w-full max-w-6xl mx-auto text-center pb-8 pt-20 border-t border-white/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
               <p className="max-w-xl mx-auto text-sm leading-loose opacity-70 text-[#a0a0a0] mb-16 font-light">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                 minim veniam.
               </p>

               <div className="space-y-2 cursor-pointer group">
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-white group-hover:opacity-70 transition-opacity">
                    More
                  </h2>
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-white group-hover:opacity-70 transition-opacity">
                    Projects
                  </h2>
               </div>
               
               <p className="mt-8 text-xs tracking-[0.2em] uppercase opacity-50 text-[#888]">
                 Explore our world of Visual and Interactive Design
               </p>
            </motion.div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 text-[#a0a0a0] w-full px-4 border-t border-white/5 pt-8 gap-4 md:gap-0 font-light">
               <button onClick={scrollToTop} className="hover:opacity-100 transition-opacity">
                 Back on top
               </button>
               
               <span>2024 @ qui creatives all rights reserved</span>
               
               <a href="#" className="hover:opacity-100 transition-opacity">
                 Follow Us
               </a>
            </div>
        </footer>

      </main>
    </div>
  );
}