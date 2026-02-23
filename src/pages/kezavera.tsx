"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KezaVera() {
  return (
    <main className="relative w-full min-h-screen font-breadley overflow-x-hidden bg-[#f9f9f9]">
      
      {/* Ensure Breadley Sans is explicitly defined and applied globally */}
      <style>{`
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
      `}</style>

      {/* --- BACKGROUND IMAGES & OVERLAYS (STACKED VERTICALLY) --- */}
      <div className="absolute inset-0 z-0 flex flex-col w-full h-full pointer-events-none">
        {/* Top Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/kezaverahome.png" 
            alt="Keza Vera Background 1" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Middle Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/kezahomemid.png" 
            alt="Keza Vera Background 2" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Bottom Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/kezaverahome2.png" 
            alt="Keza Vera Background 3" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Light Overlays (Ensures the dark text remains readable) */}
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/50 via-[#f9f9f9]/80 to-[#f9f9f9]/95"></div>
      </div>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#111] text-3xl md:text-5xl lg:text-[4rem] tracking-[0.4em] md:tracking-[0.5em] uppercase font-normal mb-6 ml-[0.5em] drop-shadow-sm font-breadley"
        >
          KEZA VERA
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#111]/80 text-[10px] md:text-xs font-semibold tracking-[0.3em] md:tracking-[0.4em] uppercase ml-[0.4em] font-breadley"
        >
          UNEARTHING FLAIRS
        </motion.p>
      </section>

      {/* --- 2. IMAGE & DESCRIPTION SECTION --- */}
      <section className="relative z-10 w-full py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center">
        <div className="relative w-full max-w-7xl mx-auto">
          
          <div className="mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[#111] text-2xl md:text-4xl lg:text-5xl tracking-[0.4em] uppercase mb-8 drop-shadow-sm font-breadley"
            >
              KEZA VERA
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] tracking-wide max-w-4xl drop-shadow-sm font-breadley"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="/assets/kezahome.png" 
              alt="Keza Vera Showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30">
              <h3 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-[0.6em] uppercase font-light drop-shadow-2xl ml-[0.6em] font-breadley">
                KEZA VERA
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE IDENTITY SECTION --- */}
      <section className="relative z-10 w-full py-16 md:py-32 flex flex-col items-center">
        
        <div className="absolute top-32 left-0 w-64 md:w-96 opacity-10 pointer-events-none">
          <img src="/assets/leaf.png" alt="" className="w-full h-auto object-contain" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#111] text-3xl md:text-4xl lg:text-5xl tracking-[0.4em] md:tracking-[0.6em] uppercase mb-8 text-center drop-shadow-sm ml-[0.4em] font-breadley"
          >
            THE IDENTITY
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center px-4"
          >
            <p className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide max-w-4xl text-center drop-shadow-sm font-breadley">
              The branding of Keza Vera was conceived as a quiet yet intentional expression of sustainability. The name itself evokes a sense of lightness and warmth, a poetic nod to a beautiful summer, while the tagline Unearthing Flairs reflects the discovery of emerging voices and conscious creativity.
            </p>
            <button className="mt-6 md:mt-8 text-[#111]/60 text-[10px] md:text-xs italic tracking-wider underline underline-offset-4 hover:text-[#111] transition-colors font-breadley">
              Read More
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-[85%] lg:w-[75%] self-end mt-16 md:mt-24 aspect-square md:aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="/assets/kezabillboard.png" alt="Keza Vera Billboard" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="w-full mt-6 md:mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.1 }} className="w-full aspect-[4/3] md:aspect-[1.1] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <img src="/assets/White.png" alt="Keza Vera Business Cards" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="w-full aspect-[4/3] md:aspect-[1.1] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <img src="/assets/envelopw.png" alt="Keza Vera ID Badge" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }} className="w-full aspect-[4/3] md:aspect-[1.1] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <img src="/assets/IDCard1.png" alt="Keza Vera Letterhead" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }} className="w-full aspect-[4/3] md:aspect-[1.1] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <img src="/assets/Letterhead.png" alt="Keza Vera Envelope" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* --- 4. THE VENUE SECTION --- */}
      <section className="relative z-10 w-full py-16 md:py-32 flex flex-col items-center">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#111] text-3xl md:text-4xl lg:text-5xl tracking-[0.4em] md:tracking-[0.6em] uppercase mb-12 text-center drop-shadow-sm ml-[0.4em] font-breadley"
          >
            THE VENUE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center px-4 gap-6"
          >
            <p className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-center drop-shadow-sm font-breadley">
              Conceived in collaboration with Details Design Studio by Anupa Reddy, the Keza Vera venue unfolds as a thoughtfully designed landscape spanning nearly 20,000 square metres. The spatial language balances scale with sensitivity, housing over 200 independent and sustainable brands within a fluid environment shaped around movement, interaction, and discovery.
            </p>
            <p className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-center drop-shadow-sm font-breadley">
              Every element of the venue was approached with conscious materiality in mind. From khadi and jute textures to natural grass and breathable layouts, the environment was crafted to remain rooted in sustainability while retaining a refined, experiential quality. Central to the design is an expansive activity core, surrounded by curated seating zones, performance stages, and layered viewing experiences, including a two-level VVIP deck and dedicated sponsor spaces.
            </p>
            <p className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-center drop-shadow-sm font-breadley">
              From the SDG-led entry experience to the open, ventilated planning and globally inspired social pockets, the venue reflects a shared vision between Maison No. 3 and Details Design Studio, where scale, sustainability, and spatial storytelling coexist with quiet elegance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full mt-16 md:mt-24 aspect-video md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl"
          >
            <img src="/assets/kezavenue.png" alt="Keza Vera Venue Render" className="w-full h-full object-cover" />
          </motion.div>

        </div>
      </section>

      {/* --- 5. COLLABORATION & CONTACT US SECTION --- */}
      <section className="relative z-10 w-full pt-24 md:pt-40 pb-32 md:pb-64 flex flex-col items-center">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">
          
          {/* Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-12"
          >
            <img 
              src="/assets/kezavenuelogo.png" 
              alt="Details Design Studio Logo" 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          </motion.div>

          {/* Collaboration Text - CHANGED: Massive bottom margin added to push Contact Us downwards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center px-4 mb-48 md:mb-80 lg:mb-[20rem]"
          >
            <p className="text-[#111]/80 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-center drop-shadow-sm font-breadley">
              This venue was realised in close collaboration with Details Design Studio by Anupa Reddy, whose architectural sensitivity and material intelligence shaped the spatial expression of Keza Vera. Together, we envisioned and developed a 20,000 square metre environment that balances scale with sustainability, a shared effort rooted in thoughtful design and mutual respect.
            </p>
          </motion.div>

          {/* Contact Us Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-24"
          >
            <a href="/contact" className="group flex flex-col items-center text-center cursor-pointer hover:opacity-70 transition-opacity">
              <h2 className="text-[#111] text-4xl md:text-6xl lg:text-[5.5rem] tracking-[0.3em] uppercase leading-[1.3] md:leading-[1.4] font-breadley">
                CONTACT<br/>US
              </h2>
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- 6. FOOTER SECTION --- */}
      <footer className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto flex justify-between items-end text-[#111] text-[8px] md:text-[10px] tracking-[0.3em] uppercase border-t border-[#111]/10 pt-8 font-breadley">
          
          <div className="flex-1 text-left">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="hover:text-[#111]/70 transition-colors cursor-pointer uppercase text-left font-breadley"
            >
              back on top
            </button>
          </div>
          
          <div className="flex-1 text-center">
            <span className="font-breadley">2024 @ qui creatives all rights reserved</span>
          </div>
          
          <div className="flex-1 text-right">
            <a href="#" className="hover:text-[#111]/70 transition-colors uppercase font-breadley">Follow Us</a>
          </div>

        </div>
      </footer>

    </main>
  );
}