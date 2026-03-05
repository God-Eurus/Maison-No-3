"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Gallery Data for Flip Cards ---
const galleryData = [
  {
    id: 1,
    image: "/assets/aia-image1.jpg",
    alt: "AIA Foundation Initiative 1",
    heading: "Legacy in Action",
    description: "The name AIA stands for Anju Is Alive, a living expression of memory carried forward through purpose. What began as a family's way of honouring a mother's spirit has evolved into a foundation that transforms remembrance into action."
  },
  {
    id: 2,
    image: "/assets/aia-dolphin.jpg",
    alt: "Marine Conservation",
    heading: "Ocean Preservation",
    description: "Supporting initiatives to protect marine ecosystems, coastal habitats, and life within them. We work with global partners to implement sustainable conservation strategies for a healthier ocean planet."
  },
  {
    id: 3,
    image: "/assets/aia-rhino.jpg",
    alt: "Wildlife Conservation",
    heading: "Safeguarding Endangered Wildlife",
    description: "Protecting endangered species from poaching and habitat loss. We fund anti-poaching efforts, standard wildlife preservation, and standard wildlife management, ensuring a future for the world's most vulnerable animals."
  },
  {
    id: 4,
    image: "/assets/aia-image4.jpg",
    alt: "Community Upliftment",
    heading: "Meaningful CSR Pathways",
    description: "Work across multiple social and environmental pillars, enabling organisations to build meaningful CSR pathways while contributing toward the United Nations Sustainable Development Goals."
  },
];

export default function Aia() {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // Added state for Read More

  return (
    <main className="relative w-full min-h-screen font-breadley overflow-x-hidden bg-[#e0b8b8]">
      
      {/* Ensure Breadley Sans is explicitly defined and applied globally */}
      <style>{`
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
        .font-serif-text {
          font-family: serif; /* Default serif for the new branding text */
        }
        /* Hide scrollbar for the horizontal image slider but allow scrolling */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* --- Continuous Move Logic for Endless Scroller --- */
        @keyframes endless-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-120vw, 0, 0); }
        }
        .scroller-moving {
          animation: endless-scroll 30s linear infinite; 
        }
        .scroller-moving:hover {
          animation-play-state: paused;
        }

        /* --- 3D Card Flip CSS --- */
        .card-container-3d {
          perspective: 1200px;
        }
        .card-inner-3d {
          transform-style: preserve-3d;
        }
        .card-front-3d, .card-back-3d {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* HERO BACKGROUND IMAGE & GRADIENT (Contained) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/assets/aiabg.png" 
            alt="AIA Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c48b8b]/60 via-[#e0b8b8]/70 to-[#d6a5a5]/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[#c48b8b]/30"></div>
        </div>

        {/* HERO LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <img 
            src="/assets/aialogo.png" 
            alt="AIA Logo" 
            className="w-12 sm:w-16 md:w-24 lg:w-36 h-auto object-contain drop-shadow-md"
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
          {/* Endless Move Container: Pauses animation on hover */}
          <div className="flex w-[240vw] md:w-[240vw] lg:w-[240vw] scroller-moving hide-scrollbar pb-8 px-6 md:px-16 lg:px-24 gap-4 md:gap-6 lg:gap-8 cursor-pointer">
            
            {/* Create unique cards by looping through data twice (for seamless move) */}
            {[...galleryData, ...galleryData].map((data, index) => {
              const isOriginalListCard = index < galleryData.length;
              const uniqueId = isOriginalListCard ? data.id : `duplicated-${data.id}`;
              const isFlipped = flippedCardId === uniqueId;

              return (
                <div
                  key={uniqueId}
                  className="card-container-3d min-w-[60vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-[4/3] relative rounded-sm group shadow-lg shrink-0 snap-center"
                >
                  {/* 3D Inner Card: Use framer-motion to control flip animation */}
                  <motion.div
                    className="card-inner-3d w-full h-full relative"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setFlippedCardId(isFlipped ? null : uniqueId)}
                  >

                    {/* --- Front Side of Card (Image) --- */}
                    <div className="card-front-3d w-full h-full absolute top-0 left-0 bg-[#a16d6d]/40 mix-blend-color z-10 rounded-sm overflow-hidden">
                      <img 
                        src={data.image} 
                        alt={data.alt} 
                        className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                      />
                    </div>

                    {/* --- Back Side of Card (Text Content) --- */}
                    <div className="card-back-3d w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center p-6 md:p-8 rounded-sm bg-[#c48b8b] text-white rotate-y-180">
                      <div className="absolute inset-0 bg-[#a16d6d]/40 mix-blend-color z-10 pointer-events-none"></div>
                      <h3 className="relative z-20 text-white text-base md:text-xl font-breadley uppercase tracking-[0.2em] mb-4 md:mb-6 text-center drop-shadow-sm">
                        {data.heading}
                      </h3>
                      <p className="relative z-20 text-white/95 text-[9px] md:text-xs leading-[1.8] md:leading-[2.2] tracking-wide font-breadley drop-shadow-sm text-center overflow-y-auto hide-scrollbar">
                        {data.description}
                      </p>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* --- 3. BRANDING SECTION (Flush Left Box) --- */}
      <section className="relative z-10 w-full pt-16 md:pt-32 pb-12 flex flex-col items-center">
        
        {/* Full width container to allow box to touch left edge */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-24">
          
          {/* Left Side: Monogram Box - Touching left edge, rounded on right */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[85vw] h-64 sm:w-80 md:w-96 md:h-80 lg:w-[40vw] lg:max-w-[500px] lg:h-[450px] bg-[#dca8a8]/60 backdrop-blur-sm rounded-r-[2rem] md:rounded-r-[3rem] flex items-center justify-center shadow-lg shrink-0"
          >
            <img 
              src="/assets/aialogo.png" 
              alt="AIA Logo Mark" 
              className="w-[30%] h-auto object-contain drop-shadow-md" 
            />
          </motion.div>

          {/* Right Side: Screenshot Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 px-6 md:px-16 lg:pr-24 lg:pl-0 text-center md:text-right"
          >
            <h3 className="text-white text-lg md:text-xl font-serif-text uppercase tracking-[0.4em] mb-6 md:mb-10 text-center md:text-right">
              ON THE EDGE OF SILENCE
            </h3>
            <div className="flex flex-col gap-6 text-white/85 text-xs md:text-sm leading-[1.8] md:leading-[2] font-serif-text text-center md:text-right max-w-3xl ml-auto">
              <p>
                Among the many causes aimed to be supported by the AIA Foundation is the protection of life that exists on the fragile edges of extinction. The foundation draws attention to species whose presence is quietly fading from the natural world, reminding us that disappearance is rarely sudden, but gradual and often unnoticed.
              </p>
              <p>
                By spotlighting endangered animals and supporting awareness-driven initiatives, the foundation seeks to restore visibility where silence has begun to settle. Each story serves as a reminder that conservation is not only about survival, but about responsibility, a shared duty to preserve what cannot speak for itself.
              </p>
            </div>
          </motion.div>

        </div>

        {/* First Image Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-[95%] md:w-[85%] mr-auto mt-8 md:mt-12 aspect-square md:aspect-[4/3] lg:aspect-[16/9] rounded-r-2xl md:rounded-r-[2rem] overflow-hidden shadow-2xl"
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

      {/* --- 5. A SYMBOL OF PRESENCE SECTION (NEW) --- */}
      <section className="relative z-10 w-full pt-8 md:pt-16 pb-16 md:pb-32 flex flex-col items-center">
        
        {/* Top Text Block (Left Aligned) */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="text-white text-lg md:text-xl font-serif-text uppercase tracking-[0.4em] mb-6 md:mb-8">
              A SYMBOL OF PRESENCE
            </h3>
            
            <div className="max-w-4xl mb-8">
              <p className="text-white/85 text-xs md:text-sm leading-[1.8] md:leading-[2] font-serif-text mb-4">
                When entrusted with shaping the visual identity of the AIA Foundation, Maison No.3 approached the process with reverence. The founders carried a deeply personal vision, a mark that would not simply represent the foundation, but embody its origin: the enduring presence of a mother whose spirit continues to guide its purpose.

The resulting identity is built around a custom monogram that subtly integrates the essence of Anju Is Alive within its form. Designed to feel both intimate and timeless, the mark balances emotion with elegance, allowing memory to exist not as nostalgia, but as continuity.

              </p>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: isExpanded ? "auto" : 0, 
                  opacity: isExpanded ? 1 : 0 
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-white/85 text-xs md:text-sm leading-[1.8] md:leading-[2] font-serif-text">
                 Rendered in soft, pastel tones inspired by the founder’s love for gentle hues, the visual language embraces warmth without losing refinement. The baby pink palette introduces tenderness, while the structured typography and form lend the identity a sense of permanence and quiet strength.

The final expression is both symbolic and sculptural, a logo that does not announce itself loudly, but lingers with meaning. A reminder that love, when carried forward with intention, never truly fades.

                </p>
              </motion.div>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white text-xs md:text-sm font-serif-text uppercase tracking-[0.2em] underline underline-offset-8 hover:text-white/70 transition-colors"
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </button>
          </motion.div>
        </div>

        {/* Central Mockup Image - Increased Size */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-[95%] md:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto mb-16 md:mb-24"
        >
          <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/assets/image3.png" 
              alt="AIA Foundation Concept Mockups" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* Bottom Text Block (Centered) */}
        <div className="w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white text-lg md:text-xl font-serif-text uppercase tracking-[0.4em] mb-6 md:mb-8"
          >
            BEYOND IDENTITY
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6 text-white/85 text-xs md:text-sm leading-[1.8] md:leading-[2] font-serif-text"
          >
            <p>
              Beyond the core identity, Maison No.3 explored a series of conceptual directions for the foundation extending its visual and narrative language across future initiatives. From storytelling frameworks to experiential possibilities, these explorations were guided by a single principle: that every expression of the foundation must carry forward the emotion from which it was born.
            </p>
            <p>
              Each concept was designed not merely as an extension of the brand, but as an extension of memory, ensuring that as the foundation evolves, its origin remains quietly present in everything it touches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 6. FOOTER SECTION --- */}
    <footer className="relative z-10 w-full h-screen flex flex-col justify-between font-breadley">
        
        {/* Decorative Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <img 
            src="/assets/aiafooter.svg" 
            alt="AIA Footer Background" 
            className="w-full h-full object-cover object-top" 
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
            Some legacies are not inherited.
They are carried forward, and that's worth a tribute!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center"
          >
             <a href="/next-project" className="group flex flex-col items-center text-center cursor-pointer hover:opacity-80 transition-opacity">
              <h2 className="text-white text-4xl md:text-6xl lg:text-[5.5rem] tracking-[0.3em] uppercase leading-[1.3] md:leading-[1.4] font-breadley drop-shadow-lg">
                Further <br/>Engagements
              </h2>
            </a>
            
            {/* Added One-Line Text Below (Not a button) */}
            <p className="text-white/80 font-serif-text text-sm md:text-base tracking-[0.4em] uppercase mt-6">
              A selection of commissions developed through close collaboration and considered form
            </p>
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
              <span className="font-breadley">2026 @ maison no.3  all rights reserved</span>
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