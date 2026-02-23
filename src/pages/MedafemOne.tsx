"use client";

import { motion } from "framer-motion";

export default function MedafemOnePage() {
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
    <div className="relative min-h-screen w-full bg-[#8aa899] text-[#4a2c2a] font-serif overflow-x-hidden selection:bg-[#4a2c2a] selection:text-[#8aa899]">
      
      {/* --- 1. BACKGROUND TEXTURE --- */}
      {/* Green Canvas/Paper Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1615800098779-1be8287d4554?q=80&w=2400&auto=format&fit=crop" 
          alt="Green Paper Texture"
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[#8aa899] mix-blend-color opacity-60"></div>
      </div>

      {/* --- 2. NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-50">
        <span className="text-xs md:text-sm tracking-[0.3em] font-medium uppercase text-[#2d4a3e]">
          Qui Creatives
        </span>
        
        {/* Hamburger Menu */}
        <button className="flex flex-col gap-1.5 cursor-pointer group">
          <span className="w-8 h-[1px] bg-[#2d4a3e] group-hover:w-10 transition-all duration-300"></span>
          <span className="w-8 h-[1px] bg-[#2d4a3e] group-hover:w-6 transition-all duration-300 ml-auto"></span>
        </button>
      </nav>

      {/* --- 3. HEADER ILLUSTRATION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
         {/* Abstract Woman Illustration Background */}
         <img 
            src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=2400&auto=format&fit=crop" 
            alt="Abstract Green Illustration" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
         />
         {/* Gradient fade at bottom to blend into content */}
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#8aa899] to-transparent z-10"></div>

         {/* LOGO OVERLAY */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 flex flex-col items-center mt-12"
         >
             <div className="w-20 h-20 md:w-24 md:h-24 mb-4">
                 {/* Logo Icon Placeholder - 'M' shape */}
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-[#4a2c2a]">
                    <path d="M20,40 Q50,10 80,40 T20,40" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="35" r="3" fill="currentColor" />
                    <path d="M30,50 Q50,80 70,50" fill="none" stroke="currentColor" strokeWidth="2" />
                 </svg>
             </div>
             <h1 className="text-4xl md:text-6xl tracking-[0.2em] uppercase font-serif text-[#4a2c2a]">
               Medafem
             </h1>
             <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#2d4a3e] mt-2 font-medium">
               The New Age Ayurveda
             </p>
         </motion.div>
      </div>

      {/* --- 4. MAIN CONTENT --- */}
      <main className="relative z-10 w-full flex flex-col items-center pb-20 px-6 -mt-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-center w-full max-w-4xl mx-auto"
        >
          
          {/* --- ORIGIN SECTION --- */}
          <motion.div variants={fadeInUp} className="text-center space-y-8 mb-24 max-w-2xl relative">
            <h2 className="text-2xl md:text-3xl tracking-[0.3em] uppercase text-[#6d3b38] font-serif">
              Origin of Brand
            </h2>
            <p className="text-sm md:text-base leading-loose text-[#2d4a3e] font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </motion.div>

          {/* EXPLORE INDICATOR */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center gap-2 mb-20 opacity-60 text-[#4a2c2a]"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
            <span className="text-lg">↓</span>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM SECTION (Mandala Left, Text Right) --- */}
        <div className="w-full max-w-7xl mx-auto relative mt-10 h-[60vh] md:h-[500px]">
          
          {/* Large Mandala - Bottom Left (Cropped) */}
          <motion.div 
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -bottom-20 -left-20 md:-left-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-0 pointer-events-none"
          >
             <img 
                src="https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&w=1000&auto=format&fit=crop" 
                alt="Ayurvedic Wheel" 
                className="w-full h-full object-cover rounded-full opacity-60 mix-blend-multiply border-4 border-[#6d3b38]/20"
             />
          </motion.div>

           {/* Small Mandala - Floating Right */}
           <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute top-0 right-10 md:right-32 w-32 h-32 md:w-48 md:h-48 z-0"
          >
             <img 
                src="https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&w=1000&auto=format&fit=crop" 
                alt="Small Wheel" 
                className="w-full h-full object-cover rounded-full opacity-50 mix-blend-multiply"
             />
          </motion.div>

          {/* Text Block - Bottom Right Alignment */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-10 right-0 md:right-10 w-full md:w-1/2 text-center md:text-right px-6 md:px-0 z-10"
          >
             <p className="text-sm md:text-lg leading-loose text-[#2d4a3e] font-medium tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </motion.div>

        </div>

        {/* --- NEW SECTION: INFO CARDS --- */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 mt-32 px-6 relative z-10">
            
            {/* Card 1: Text Only */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#8aa899]/30 backdrop-blur-sm p-10 md:p-16 rounded-[2rem] shadow-sm border border-white/20"
            >
                <h3 className="text-2xl md:text-3xl tracking-[0.3em] uppercase text-[#2d4a3e] font-serif mb-8">
                    Medafem
                </h3>
                <div className="space-y-6 text-sm md:text-base leading-loose text-[#2d4a3e] font-medium tracking-wide">
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

             {/* Card 2: Plant Image + Text */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full bg-[#8aa899]/30 backdrop-blur-sm p-10 md:p-16 rounded-[2rem] shadow-sm border border-white/20 flex flex-col md:flex-row items-center gap-12"
            >
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1629196914168-3a9644338cf5?q=80&w=800&auto=format&fit=crop" 
                        alt="Medicinal Plant" 
                        className="w-48 h-auto object-contain mix-blend-multiply opacity-80 sepia-[.3] contrast-125"
                    />
                </div>

                <div className="w-full md:w-2/3 space-y-6 text-sm md:text-base leading-loose text-[#2d4a3e] font-medium tracking-wide">
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

        {/* --- SECTION: OUR VALUES --- */}
        <div className="w-full max-w-5xl mx-auto mt-32 mb-20 px-6 relative z-10">
             <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-serif uppercase tracking-[0.3em] text-[#2d4a3e] mb-12"
            >
                Our Values
            </motion.h3>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 text-sm md:text-base leading-loose text-[#2d4a3e] font-medium tracking-wide"
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

        {/* --- SECTION: MOCKUPS (GALLERY) --- */}
        <div className="w-full max-w-7xl mx-auto mb-32 mt-32 relative z-10 px-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center mb-20"
           >
              <h2 className="text-3xl md:text-5xl tracking-[0.3em] uppercase text-[#4a2c2a] font-serif mb-4">
                Mockups
              </h2>
              <p className="text-xs md:text-sm tracking-widest uppercase opacity-80 text-[#2d4a3e]">
                Protect, restore, and promote sustainable use of terrestrial ecosystems
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               "https://images.unsplash.com/photo-1556229167-7592b23554b5?q=80&w=800&auto=format&fit=crop", 
               "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop", 
               "https://images.unsplash.com/photo-1629196985764-47f12e2c0576?q=80&w=800&auto=format&fit=crop"  
             ].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="aspect-square bg-black/10 overflow-hidden relative group"
                >
                   {/* Green overlay to tint images */}
                   <div className="absolute inset-0 bg-[#2d4a3e]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                   <img src={src} alt="Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </motion.div>
             ))}
           </div>
        </div>

        {/* --- SECTION: FOOTER / MORE PROJECTS --- */}
        <footer className="relative w-full pt-32 pb-10 px-6 overflow-hidden flex flex-col items-center">
            
            {/* LARGE MANDALA BACKGROUND - CENTERED */}
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] z-0 pointer-events-none opacity-40">
                <img 
                    src="https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&w=1000&auto=format&fit=crop" 
                    alt="Ayurvedic Wheel Footer" 
                    className="w-full h-full object-cover rounded-full mix-blend-multiply"
                />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-48 relative z-10 text-center"
            >
               <p className="max-w-xl mx-auto text-sm leading-loose opacity-80 text-[#2d4a3e] mb-16 font-medium">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                 minim veniam.
               </p>

               <div className="space-y-2 cursor-pointer group flex flex-col items-center">
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-[#2d4a3e] group-hover:opacity-70 transition-opacity">
                    More
                  </h2>
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-[#2d4a3e] group-hover:opacity-70 transition-opacity">
                    Projects
                  </h2>
               </div>
               
               <p className="mt-8 text-xs tracking-[0.2em] uppercase opacity-70 text-[#4a2c2a]">
                 Explore our world of Visual and Interactive Design
               </p>
            </motion.div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#2d4a3e] w-full max-w-7xl border-t border-[#2d4a3e]/20 pt-8 gap-4 md:gap-0 relative z-10 font-bold">
               <button onClick={scrollToTop} className="hover:text-[#4a2c2a] transition-colors">
                 Back on top
               </button>
               
               <span>2024 @ qui creatives all rights reserved</span>
               
               <a href="#" className="hover:text-[#4a2c2a] transition-colors">
                 Follow Us
               </a>
            </div>
        </footer>

      </main>
    </div>
  );
}