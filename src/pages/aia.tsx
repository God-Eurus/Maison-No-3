"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Aia() {
  return (
    <main className="relative w-full min-h-screen font-breadley overflow-x-hidden bg-[#e0b8b8]">
      
      {/* Ensure Breadley Sans is explicitly defined and applied globally */}
      <style>{`
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
        /* Hide scrollbar for the horizontal image slider but allow scrolling */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* --- BACKGROUND IMAGE & GRADIENT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/aiahome.png" 
          alt="AIA Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c48b8b]/60 via-[#e0b8b8]/70 to-[#d6a5a5]/80 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#c48b8b]/30"></div>
      </div>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center"
        >
          {/* CHANGED: Reduced sizing classes (w-20 sm:w-28 md:w-40 lg:w-48) for a smaller, more delicate logo */}
          <img 
            src="/assets/aialogo.png" 
            alt="AIA Logo" 
            className="w-20 sm:w-28 md:w-40 lg:w-48 h-auto object-contain drop-shadow-md"
          />
        </motion.div>
      </section>

      {/* --- 2. ABOUT THE FOUNDATION SECTION --- */}
      <section className="relative z-10 w-full py-16 md:py-32 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.4em] md:tracking-[0.5em] uppercase mb-10 md:mb-16 font-breadley drop-shadow-sm text-center md:text-left"
          >
            ABOUT THE FOUNDATION
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 md:gap-8 max-w-6xl"
          >
            <p className="text-white/95 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-center md:text-left">
              The AIA Foundation was born from remembrance, a deeply personal tribute shaped by love, loss, and continuity. At its heart lies a simple yet profound idea: that presence does not end with absence.
            </p>
            <p className="text-white/95 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-center md:text-left">
              The name AIA stands for Anju Is Alive, a living expression of memory carried forward through purpose. What began as a family's way of honouring a mother's spirit has evolved into a foundation that transforms remembrance into action.
            </p>
            <p className="text-white/95 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-center md:text-left">
              Today, the AIA Foundation aims to work across multiple social and environmental pillars, enabling organisations to build meaningful CSR pathways while contributing toward the United Nations Sustainable Development Goals. Through initiatives spanning care, conservation, and community upliftment, the foundation extends its founding emotion outward, ensuring that legacy is not preserved in silence but expressed through impact.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full max-w-[100vw] overflow-hidden"
        >
          <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto hide-scrollbar px-6 md:px-16 lg:px-24 pb-8 snap-x snap-mandatory">
            <div className="relative min-w-[75vw] md:min-w-[45vw] lg:min-w-[35vw] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer shrink-0 snap-center shadow-lg">
              <div className="absolute inset-0 bg-[#a16d6d]/40 mix-blend-color z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
              <img 
                src="/assets/aia-image1.jpg" 
                alt="AIA Foundation Initiative 1" 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="relative min-w-[75vw] md:min-w-[45vw] lg:min-w-[35vw] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer shrink-0 snap-center shadow-lg">
              <div className="absolute inset-0 bg-[#a16d6d]/40 mix-blend-color z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
              <img 
                src="/assets/aia-dolphin.jpg" 
                alt="Marine Conservation" 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="relative min-w-[75vw] md:min-w-[45vw] lg:min-w-[35vw] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer shrink-0 snap-center shadow-lg">
              <div className="absolute inset-0 bg-[#a16d6d]/40 mix-blend-color z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
              <img 
                src="/assets/aia-rhino.jpg" 
                alt="Wildlife Conservation" 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="relative min-w-[75vw] md:min-w-[45vw] lg:min-w-[35vw] aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer shrink-0 snap-center shadow-lg pr-6 md:pr-16 lg:pr-24">
              <div className="absolute inset-0 bg-[#a16d6d]/40 mix-blend-color z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
              <img 
                src="/assets/aia-image4.jpg" 
                alt="Community Upliftment" 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 3. BRANDING SECTION --- */}
      <section className="relative z-10 w-full pt-16 md:pt-32 pb-12 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.4em] md:tracking-[0.5em] uppercase mb-6 font-breadley drop-shadow-sm"
            >
              BRANDING
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white/90 text-xs md:text-sm lg:text-base max-w-xl font-breadley leading-loose drop-shadow-sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit <br className="hidden md:block" /> sed do eiusmod
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#dca8a8]/60 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-lg shrink-0"
            >
              <img 
                src="/assets/aialogo.png" 
                alt="AIA Logo Mark" 
                className="w-[45%] h-auto object-contain drop-shadow-md" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1"
            >
              <p className="text-white/95 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-center md:text-left">
                
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-[95%] md:w-[85%] mr-auto mt-16 md:mt-24 aspect-square md:aspect-[4/3] lg:aspect-[16/9] rounded-r-2xl md:rounded-r-[2rem] overflow-hidden shadow-2xl"
        >
           <img 
            src="/assets/image1.png" 
            alt="AIA Branding Cards Mockup" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </section>

      {/* --- 4. BRANDING SECTION CONTINUED --- */}
      <section className="relative z-10 w-full pb-16 md:pb-32 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl md:max-w-2xl"
          >
            <p className="text-white/95 text-xs md:text-sm lg:text-base leading-[2] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-[95%] md:w-[85%] ml-auto aspect-square md:aspect-[4/3] lg:aspect-[16/9] rounded-l-2xl md:rounded-l-[2rem] overflow-hidden shadow-2xl"
        >
           <img 
            src="/assets/image2.png" 
            alt="AIA & Qui Creatives Mockup" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </section>

      {/* --- 5. NEW FOOTER SECTION (WITH ORNATE BG) --- */}
      <footer className="relative z-10 w-full h-screen flex flex-col justify-between font-breadley">
        
        {/* Decorative Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <img 
            src="/assets/aia-footer-bg.png" 
            alt="AIA Footer Background" 
            className="w-full h-full object-cover object-bottom" 
          />
        </div>
        
        {/* Top Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white/90 text-xs md:text-sm lg:text-base leading-loose tracking-wide font-breadley drop-shadow-sm mb-8 md:mb-12"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
             <a href="/next-project" className="group flex flex-col items-center text-center cursor-pointer hover:opacity-80 transition-opacity">
              <h2 className="text-white text-4xl md:text-6xl lg:text-[5.5rem] tracking-[0.3em] uppercase leading-[1.3] md:leading-[1.4] font-breadley drop-shadow-lg">
                NEXT<br/>PROJECT
              </h2>
            </a>
          </motion.div>
        </div>

        {/* Bottom Links Bar */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-12">
          <div className="max-w-7xl mx-auto flex justify-between items-end text-white/60 text-[8px] md:text-[10px] tracking-[0.3em] uppercase border-t border-white/20 pt-8 font-breadley">
            <div className="flex-1 text-left">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="hover:text-white transition-colors cursor-pointer uppercase text-left font-breadley"
              >
                back on top
              </button>
            </div>
            <div className="flex-1 text-center">
              <span className="font-breadley">2024 @ qui creatives all rights reserved</span>
            </div>
            <div className="flex-1 text-right">
              <a href="#" className="hover:text-white transition-colors uppercase font-breadley">Follow Us</a>
            </div>
          </div>
        </div>

      </footer>

    </main>
  );
}