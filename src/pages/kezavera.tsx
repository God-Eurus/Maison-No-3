"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KezaVera() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVenueExpanded, setIsVenueExpanded] = useState(false);

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
    
    className="text-[#111] text-4xl md:text-6xl lg:text-[5rem] tracking-[0.2em] md:tracking-[0.25em] uppercase font-normal mb-6 ml-[0.25em] drop-shadow-sm font-breadley"
  >
    KEZAVERA
  </motion.h1>
  
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    
    className="text-[#111]/80 text-xl md:text-2xl font-semibold tracking-[0.3em] md:tracking-[0.4em] uppercase ml-[0.4em] font-breadley"
  >
    UNEARTHING FLAIRS
  </motion.p>
</section>

      {/* --- 2. IMAGE & DESCRIPTION SECTION --- */}
     <section className="relative z-10 w-full pt-24 pb-8 md:pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center">
  <div className="relative w-full max-w-7xl mx-auto">
    
    {/* Centered Text Container */}
    <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-[#111] text-3xl md:text-5xl lg:text-6xl tracking-[0.4em] uppercase mb-8 drop-shadow-sm font-breadley ml-[0.4em]"
      >
        ABOUT
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] tracking-wide max-w-4xl drop-shadow-sm font-breadley text-justify"
      >
        Keza Vera is a curatorial initiative dedicated to supporting independent designers and sustainable brands that are shaping the future of fashion in India. Rooted in the belief that design carries responsibility, the platform highlights creators who balance innovation with environmental awareness.

        Aligned with the United Nations Sustainable Development Goals, Keza Vera exists to amplify conscious design practices and create meaningful visibility for emerging voices. Through curated showcases and collaborative storytelling, it seeks to build a bridge between sustainability, creativity, and cultural relevance.
      </motion.p>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl"
    >
      {/* Replaced Image with Video 
        Make sure to update the 'src' path to your actual video file 
      */}
      <video 
        src="/assets/kezavideo.MP4" 
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30 pointer-events-none">
        
      </div>
    </motion.div>
  </div>
</section>

      {/* --- 3. THE IDENTITY SECTION --- */}
    <section className="relative z-10 w-full pt-8 md:pt-12 pb-16 md:pb-32 flex flex-col items-center overflow-x-hidden">
        
        <div className="absolute top-32 left-0 w-64 md:w-96 opacity-10 pointer-events-none">
          <img src="/assets/leaf.png" alt="" className="w-full h-auto object-contain" />
        </div>

        {/* --- TOP TEXT (CENTERED CONTAINER) --- */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 mb-16 md:mb-24 mt-4 md:mt-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#111] text-4xl md:text-5xl lg:text-6xl tracking-[0.4em] md:tracking-[0.6em] uppercase mb-8 text-center drop-shadow-sm ml-[0.4em] font-breadley"
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
            {/* First Paragraph (Always Visible) */}
            <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-4xl text-justify drop-shadow-sm font-breadley">
            The branding of Keza Vera was conceived as a quiet yet intentional expression of sustainability. The name itself evokes a sense of lightness and warmth, a poetic nod to a beautiful summer, while the tagline Unearthing Flares reflects the discovery of emerging voices and conscious creativity.

Visually, the identity is rooted in an editorial palette of whites, greys, greens, and blacks. These tones were chosen to balance clarity with earth-conscious symbolism, allowing the brand to feel both minimal and grounded. The restrained palette ensures longevity, enabling the platform to evolve without losing its visual integrity.
            </p>

            {/* Second Paragraph (Revealed on Click) */}
            <motion.div
              initial={false}
              animate={{ 
                height: isExpanded ? "auto" : 0, 
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? "1.5rem" : 0 
              }}
              className="overflow-hidden"
            >
              <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-4xl text-justify drop-shadow-sm font-breadley">
                A defining element of the system is the use of subtle wave-like textures, introduced as an abstract interpretation of “flares.” Set against a predominantly monochromatic base, these forms bring movement and emotion without disrupting the calm editorial language. The result is a future-forward identity that remains timeless rather than trend-bound.

At its core, the Keza Vera identity reflects Maison No. 3’s intent to nurture independent designers and sustainability-led brands. It exists not only as a platform identity, but as a cultural statement, positioning conscious fashion within a refined, enduring visual world.
              </p>
            </motion.div>

            {/* Toggle Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 md:mt-8 text-[#111]/60 text-xs md:text-sm italic tracking-wider underline underline-offset-4 hover:text-[#111] transition-colors font-breadley focus:outline-none"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </motion.div>
        </div>
        
        {/* --- FULL WIDTH BILLBOARD & SLIDING BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full mt-12 md:mt-16 flex items-center group cursor-default"
        >
          {/* Base Image - Pushed to absolute right edge, increased height */}
          <div className="ml-auto w-[90%] md:w-[85%] lg:w-[80%] h-[50vh] md:h-[70vh] lg:h-[85vh] rounded-l-2xl md:rounded-l-3xl overflow-hidden shadow-2xl relative z-0">
            <img src="/assets/kezabillboard.png" alt="Keza Vera Billboard" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
          </div>

          {/* Sliding Transparent Hover Box - Appears from absolute left */}
          <div className="absolute left-0 top-[5%] bottom-[5%] md:top-[10%] md:bottom-[10%] w-[85%] md:w-[45%] lg:w-[35%] bg-[#faf9f6]/75 backdrop-blur-xl border border-white/60 shadow-[20px_0_40px_rgba(0,0,0,0.1)] rounded-r-2xl md:rounded-r-3xl flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-10 -translate-x-[calc(100%-2.5rem)] md:-translate-x-[calc(100%-3.5rem)] opacity-60 group-hover:translate-x-0 group-hover:opacity-100 pr-10 md:pr-14 pl-6 md:pl-12 lg:pl-16 py-8">
            
            {/* The "Peek" Indicator (Visible when box is hidden off-screen) */}
            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <div className="w-[1px] h-12 bg-[#111]/30"></div>
              <svg className="w-4 h-4 text-[#111]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Internal Content (Fades in when fully revealed) */}
            <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              {/* <h3 className="text-[#111] text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] md:tracking-[0.4em] uppercase text-center font-breadley mb-2 ml-[0.3em]">
                KEZA VERA
              </h3>
              <p className="text-[#111]/70 text-[10px] md:text-xs tracking-[0.3em] uppercase text-center font-breadley mb-8 md:mb-12 ml-[0.3em]">
                UNEARTHING FLAIRS
              </p> */}
              <p className="text-[#111]/90 text-sm md:text-base leading-[2] tracking-wide text-justify font-breadley">
                A defining element of the system is the use of subtle wave-like textures, introduced as an abstract interpretation of “flares.” Set against a predominantly monochromatic base, these forms bring movement and emotion without disrupting the calm editorial language. The result is a future-forward identity that remains timeless rather than trend-bound.
              </p>
            </div>

          </div>
        </motion.div>

        {/* --- BOTTOM GRID (MAXIMIZED SIZE, MINIMAL GAPS) --- */}
        <div className="relative w-full max-w-full mx-auto px-2 md:px-4 mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2, delay: 0.1 }} 
            className="w-full aspect-[4/3] lg:aspect-[1.25/1] rounded-xl md:rounded-[2rem] overflow-hidden shadow-xl"
          >
            <img src="/assets/White.png" alt="Keza Vera Stationery 1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2, delay: 0.3 }} 
            className="w-full aspect-[4/3] lg:aspect-[1.25/1] rounded-xl md:rounded-[2rem] overflow-hidden shadow-xl"
          >
            <img src="/assets/envelopw.png" alt="Keza Vera Stationery 2" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* --- NEW IMAGE BELOW GRID (LEFT ALIGNED) --- */}
        <div className="mr-auto mt-16 md:mt-24 w-[90%] md:w-[85%] lg:w-[80%] h-[50vh] md:h-[70vh] lg:h-[85vh] rounded-r-2xl md:rounded-r-3xl overflow-hidden shadow-2xl relative z-0 group cursor-default">
          <img 
            src="/assets/ID Card 1.png" 
            alt="Keza Vera Billboard" 
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
          />
        </div>

      </section>

      {/* --- 4. THE VENUE SECTION --- */}
      <section className="relative z-10 w-full pt-8 md:pt-12 pb-16 md:pb-32 flex flex-col items-center overflow-hidden">
        
        {/* NEW: Background Image Container */}
        <div className="absolute inset-0 z-[-1]">
          <img 
            src="/assets/kezahomemid.png" /* Replace with your desired background image path */
            alt="Venue Background" 
            className="w-full h-full object-cover opacity-30" /* Adjust opacity so text stays readable */
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#111] text-4xl md:text-5xl lg:text-6xl tracking-[0.4em] md:tracking-[0.6em] uppercase mb-12 text-center drop-shadow-sm ml-[0.4em] font-breadley"
          >
            THE VENUE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center px-4"
          >
            {/* First Paragraph (Always Visible) */}
            <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-justify drop-shadow-sm font-breadley">
              Conceived in collaboration with Details Design Studio by Anupa Reddy, the Keza Vera venue unfolds as a thoughtfully designed landscape spanning nearly 20,000 square metres. The spatial language balances scale with sensitivity, housing over 200 independent and sustainable brands within a fluid environment shaped around movement, interaction, and discovery.
            </p>

            {/* Second & Third Paragraphs (Revealed on Click) */}
            <motion.div
              initial={false}
              animate={{ 
                height: isVenueExpanded ? "auto" : 0, 
                opacity: isVenueExpanded ? 1 : 0,
                marginTop: isVenueExpanded ? "1.5rem" : 0 
              }}
              className="overflow-hidden flex flex-col gap-6"
            >
              <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-justify drop-shadow-sm font-breadley">
                Every element of the venue was approached with conscious materiality in mind. From khadi and jute textures to natural grass and breathable layouts, the environment was crafted to remain rooted in sustainability while retaining a refined, experiential quality. Central to the design is an expansive activity core, surrounded by curated seating zones, performance stages, and layered viewing experiences, including a two-level VVIP deck and dedicated sponsor spaces.
              </p>
              <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-justify drop-shadow-sm font-breadley">
                From the SDG-led entry experience to the open, ventilated planning and globally inspired social pockets, the venue reflects a shared vision between Maison No. 3 and Details Design Studio, where scale, sustainability, and spatial storytelling coexist with quiet elegance.
              </p>
            </motion.div>

            {/* Toggle Button */}
            <button 
              onClick={() => setIsVenueExpanded(!isVenueExpanded)}
              className="mt-6 md:mt-8 text-[#111]/60 text-s md:text-base italic tracking-wider underline underline-offset-4 hover:text-[#111] transition-colors font-breadley focus:outline-none"
            >
              {isVenueExpanded ? 'Read Less' : 'Dive Deeper'}
            </button>
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
      <section className="relative z-10 w-full pt-8 md:pt-12 pb-16 md:pb-24 flex flex-col items-center overflow-hidden">
  
  {/* NEW: Background Image Container */}
  <div className="absolute inset-0 z-[-1]">
    <img 
      src="/assets/kezaverahome2.png" /* Replace with your actual bg image path */
      alt="Background" 
      className="w-full h-full object-cover opacity-40" /* Adjust opacity as needed so text remains readable */
    />
  </div>

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

    {/* Collaboration Text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col items-center px-4 mb-48 md:mb-80 lg:mb-[20rem]"
    >
      <p className="text-[#111]/80 text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide max-w-5xl text-justify drop-shadow-sm font-breadley">
        This venue was realised in close collaboration with Details Design Studio by Anupa Reddy, whose architectural sensitivity and material intelligence shaped the spatial expression of Keza Vera. Together, we envisioned and developed a 20,000 square metre environment that balances scale with sustainability, a shared effort rooted in thoughtful design and mutual respect.
      </p>
    </motion.div>

    {/* Contact Us Block */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-2"
    >
      <a href="/kezaveraform" className="group flex flex-col items-center text-center cursor-pointer hover:opacity-70 transition-opacity">
        <h2 className="text-[#111] text-4xl md:text-6xl lg:text-[6rem] tracking-[0.3em] uppercase leading-[1.3] md:leading-[1.4] font-breadley">
          Expressions <br/> of the Future
        </h2>
      </a>
    </motion.div>

  </div>
</section>

      {/* --- 6. FOOTER SECTION --- */}
      <footer className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-end text-[#111] text-[10px] md:text-xs tracking-[0.3em] uppercase border-t border-[#111]/10 pt-6 font-breadley">
          
          <div className="flex-1 text-left">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="hover:text-[#111]/70 transition-colors cursor-pointer uppercase text-left font-breadley"
            >
              back on top
            </button>
          </div>
          
          <div className="flex-1 text-center">
            <span className="font-breadley">2026 @ Maison No.3 all rights reserved</span>
          </div>
          
          <div className="flex-1 text-right">
            <a href="#" className="hover:text-[#111]/70 transition-colors uppercase font-breadley">Follow Us</a>
          </div>

        </div>
      </footer>

    </main>
  );
}