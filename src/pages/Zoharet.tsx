"use client";

import { motion } from "framer-motion";

export default function ZoharetPage() {
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
        staggerChildren: 0.2
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#d6c4b8] text-[#3e322a] font-serif overflow-x-hidden">
      
      {/* --- 1. BACKGROUND TEXTURE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1596568297743-345388046f48?q=80&w=2400&auto=format&fit=crop" 
          alt="Sand Texture"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[#d6c4b8] mix-blend-color opacity-50"></div>
      </div>

      {/* --- 2. NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-50">
        <span className="text-sm tracking-[0.3em] font-medium uppercase text-[#1a1512]">
          Qui Creatives
        </span>
      </nav>

      {/* --- 3. MAIN CONTENT --- */}
      <main className="relative z-10 w-full flex flex-col items-center pt-32 px-6">
        
        {/* --- SECTION A: ORIGIN --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-center w-full max-w-4xl mx-auto"
        >
          {/* LOGO SYMBOL */}
          <motion.div variants={fadeInUp} className="mb-6">
             <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <img 
                  src="https://img.icons8.com/ios/100/AE8764/diamond--v1.png" 
                  className="w-full h-full object-contain opacity-80 drop-shadow-sm" 
                  alt="Zoharet Logo"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl text-[#AE8764]">❦</span>
                </div>
             </div>
          </motion.div>

          {/* BRAND NAME */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#a68a6d] to-[#7a5f45] font-serif uppercase mb-24 drop-shadow-sm"
          >
            Zoharet
          </motion.h1>

          {/* ORIGIN TEXT */}
          <motion.div variants={fadeInUp} className="text-center space-y-8 mb-24">
            <h2 className="text-xl md:text-3xl tracking-[0.4em] uppercase text-[#1a1512] font-light">
              Origin of Brand
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-loose text-[#3e322a]/80 font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </motion.div>

          {/* EXPLORE INDICATOR */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center gap-2 mb-20 opacity-60"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
            <span className="text-lg">↓</span>
          </motion.div>
        </motion.div>

        {/* --- SECTION B: MODEL & INTRO --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 mt-10 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/3"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-t-full md:rounded-none">
              <img 
                src="https://images.unsplash.com/photo-1569388330292-7a6a84165c74?q=80&w=1200&auto=format&fit=crop" 
                alt="Zoharet Model"
                className="w-full h-full object-cover object-top grayscale-[20%] sepia-[20%]"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/3 text-center md:text-right pb-12 md:pb-24"
          >
             <p className="text-sm md:text-lg leading-loose text-[#3e322a]/90 font-medium tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </motion.div>
        </div>

        {/* --- SECTION C & D (OVERLAPPING CARDS) --- */}
        <div className="relative w-full max-w-[90rem] mx-auto flex flex-col items-center">
            
            {/* Dark Info Card */}
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl relative z-0" 
            >
            <div className="bg-[#5e534b] bg-opacity-95 text-[#e6ddd4] p-10 md:p-20 pb-40 md:pb-64 rounded-[2rem] shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl tracking-[0.2em] font-serif uppercase mb-12 text-[#d6c4b8]">
                    Zoharet
                </h3>
                <div className="space-y-8 font-light text-sm md:text-base leading-relaxed tracking-wide opacity-90 max-w-3xl">
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
                </div>
            </div>
            </motion.div>

            {/* Desert Landscape Card */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full px-2 -mt-24 md:-mt-48 relative z-10"
            >
            <div className="relative w-full h-[50vh] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                src="https://images.unsplash.com/photo-1547234935-80c7142ee552?q=80&w=2400&auto=format&fit=crop" 
                alt="Desert Landscape"
                className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#cba88c]/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-end p-8 md:p-0">
                <div className="hidden md:block w-1/4 h-4/5 relative z-10">
                    <img 
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop" 
                        className="w-full h-full object-cover object-top rounded-tr-[4rem] opacity-90 mix-blend-multiply"
                        alt="Model Left"
                    />
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center z-20 pb-12 md:pb-0">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
                        <span className="text-white text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase drop-shadow-md">
                        Protect, Restore, and Promote Sustainable Use of <br />
                        Terrestrial Ecosystems
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-1/4 h-3/5 md:h-4/5 relative z-10 flex items-end justify-end">
                    <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                        className="w-full h-full object-cover object-top md:rounded-tl-[4rem] rounded-[2rem] md:rounded-none opacity-90 shadow-lg"
                        alt="Model Right"
                    />
                </div>
                </div>
            </div>
            </motion.div>
        </div>

        {/* --- SECTION E: OUR VALUES --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6 mt-24 mb-32"
        >
          <h2 className="text-3xl md:text-5xl tracking-[0.3em] uppercase text-[#1a1512] font-serif font-light mb-16">
            Our Values
          </h2>
          <div className="space-y-8 text-sm md:text-base leading-loose text-[#3e322a]/80 font-medium tracking-wide">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </motion.div>

        {/* --- SECTION F: GALLERY --- */}
        <div className="w-full max-w-7xl mx-auto mb-40">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl md:text-4xl tracking-[0.3em] uppercase text-[#1a1512] font-serif font-light mb-4">
                Gallery
              </h2>
              <p className="text-xs md:text-sm tracking-widest uppercase opacity-70">
                Protect, restore, and promote sustainable use of terrestrial ecosystems
              </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
             {[
               "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
               "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop"
             ].map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="aspect-[3/4] overflow-hidden"
                >
                   <img src={src} alt="Gallery Item" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
             ))}
           </div>
        </div>

        {/* --- SECTION G: FOOTER / MORE PROJECTS --- */}
        <footer className="w-full max-w-6xl mx-auto text-center pb-8 pt-20 border-t border-[#3e322a]/10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
               <p className="max-w-xl mx-auto text-sm leading-loose opacity-70 mb-16">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                 minim veniam.
               </p>

               <div className="space-y-2 cursor-pointer group">
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-[#1a1512] group-hover:opacity-70 transition-opacity">
                    More
                  </h2>
                  <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-[0.2em] text-[#1a1512] group-hover:opacity-70 transition-opacity">
                    Projects
                  </h2>
               </div>
               
               <p className="mt-8 text-xs tracking-[0.2em] uppercase opacity-60">
                 Explore our world of Visual and Interactive Design
               </p>
            </motion.div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-50 w-full px-4 border-t border-[#3e322a]/20 pt-8 gap-4 md:gap-0">
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