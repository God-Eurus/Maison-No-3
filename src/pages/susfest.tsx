"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- DATA CONFIGURATION ---
const sdgCards = [
  { id: 1, number: '1', title: 'NO\nPOVERTY', icon: '/assets/sus1.png' },
  { id: 2, number: '2', title: 'ZERO\nHUNGER', icon: '/assets/sus2.png' },
  { id: 3, number: '3', title: 'GOOD HEALTH\nAND WELL-BEING', icon: '/assets/sus3.png' },
  { id: 4, number: '4', title: 'QUALITY\nEDUCATION', icon: '/assets/sus4.png' },
  { id: 5, number: '5', title: 'GENDER\nEQUITY', icon: '/assets/sus5.png' },
  { id: 6, number: '6', title: 'CLEAN WATER\nAND SANITATION', icon: '/assets/sus6.png' },
  { id: 7, number: '7', title: 'AFFORDABLE\nAND CLEAN ENERGY', icon: '/assets/sus7.png' },
  { id: 8, number: '8', title: 'DECENT WORK\nAND ECONOMIC GROWTH', icon: '/assets/sus8.png' },
  { id: 9, number: '9', title: 'PATTERNS\nAND INFRASTRUCTURE', icon: '/assets/sus9.png' },
  { id: 10, number: '10', title: 'REDUCED\nINEQUALITIES', icon: '/assets/sus10.png' },
  { id: 11, number: '11', title: 'SUSTAINABLE\nCITIES AND COMMUNITIES', icon: '/assets/sus11.png' },
  { id: 12, number: '12', title: 'RESPONSIBLE\nCONSUMPTION AND PRODUCTION', icon: '/assets/sus12.png' },
  { id: 13, number: '13', title: 'CLIMATE ACTION', icon: '/assets/sus13.png' },
  { id: 14, number: '14', title: 'LIFE BELOW\nWATER', icon: '/assets/sus14.png' },
  { id: 15, number: '15', title: 'LIFE ON\nLAND', icon: '/assets/sus15.png' },
  { id: 16, number: '16', title: 'PEACE AND\nJUSTICE STRONG INSTITUTIONS', icon: '/assets/sus16.png' },
  { id: 17, number: '17', title: 'PARTNERSHIPS\nFOR THE GOALS', icon: '/assets/sus17.png' }
];

const marqueeCards = [...sdgCards, ...sdgCards, ...sdgCards, ...sdgCards];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const spaceOut = (num: number) => num.toString().padStart(2, '0').split('').join(' ');

export default function SusFest() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 365, hours: 0, minutes: 0, seconds: 0 });
  const [percentLeft, setPercentLeft] = useState(100);

  useEffect(() => {
    setMounted(true);
    
    // Total duration: 1 Year
    const oneYearMs = 365 * 24 * 60 * 60 * 1000;
    
    // Set target date to exactly 1 year from the moment the component mounts
    const targetTime = new Date().getTime() + oneYearMs;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setPercentLeft(0);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setPercentLeft((difference / oneYearMs) * 100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#9eb88d] overflow-x-hidden font-breadley">
      
      {/* --- BACKGROUND IMAGE OVERLAY --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/Sus Fest.png" 
          alt="" 
          className="w-full h-full object-cover opacity-40 mix-blend-multiply fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <style>{`
        @keyframes sand-flow {
          from { stroke-dashoffset: 8; }
          to { stroke-dashoffset: 0; }
        }
        .animate-sand {
          animation: sand-flow 0.4s linear infinite;
        }
        
        /* Typography Definitions */
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
        .font-snell {
          font-family: 'Snell Roundhand', 'Apple Chancery', 'Brush Script MT', cursive;
        }
      `}</style>

      {/* --- 1. HERO IMAGE SECTION --- */}
      <section className="relative z-10 w-full h-screen overflow-hidden">
        <img 
          src="/assets/susfesthero.png" 
          alt="Sust Fest Nature Eye" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-3xl md:text-5xl lg:text-6xl tracking-[0.4em] uppercase font-normal drop-shadow-lg font-breadley"
          >
            SUST FEST
          </motion.h1>
        </div>
      </section>

      {/* --- 2. CONTENT SECTION --- */}
      <section className="relative z-10 w-full px-6 md:px-16 lg:px-24 pt-24 md:pt-40 pb-24 md:pb-40">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-black text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] uppercase mb-10 font-breadley">
            SUSTAINABILITY FEST
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-black/80 text-xs md:text-sm lg:text-base leading-[2] tracking-wide max-w-5xl font-breadley text-justify">
           SUST FEST is our upcoming initiative to create a more visible and participatory sustainability culture. Conceived as a festival rather than a campaign, it brings together speakers, designers, thinkers, brands, and communities to explore sustainability as a shared responsibility rather than a solitary effort.

Through curated showcases, conversations, and experiential moments, SUST FEST aims to make sustainability feel accessible and culturally relevant. It is our way of building a platform where ideas are exchanged, practices are reimagined, and conscious futures are shaped collectively.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 3. INFINITE MARQUEE CARDS SECTION --- */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full pb-20 md:pb-32 overflow-hidden"
      >
        <motion.div 
          className="flex gap-4 md:gap-8 w-max pl-4 md:pl-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 110 }} 
        >
          {marqueeCards.map((card, index) => (
            <div 
              key={`${card.id}-${index}`} 
              
              className="relative w-[200px] md:w-[260px] h-[200px] md:h-[260px] overflow-hidden shrink-0 transition-transform duration-300 hover:scale-[1.02] shadow-md rounded-xl bg-white/5 backdrop-blur-sm"
            >
              {/* UPDATED: Changed object-cover to object-contain so images never clip */}
              <img 
                src={card.icon} 
                alt={card.title.replace('\n', ' ')} 
                className="absolute inset-0 w-full h-full object-contain p-2" 
              />
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- 4. COUNTDOWN SECTION --- */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center pt-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          {/* THE HOURGLASS */}
          <div className="relative w-20 h-32 md:w-24 md:h-40 flex flex-col items-center mb-8 drop-shadow-xl">
            <div className="w-full h-1/2 overflow-hidden relative" style={{ clipPath: 'polygon(5% 5%, 95% 5%, 50% 100%)' }}>
              <div className="absolute bottom-0 w-full bg-[#d6b98d] transition-all duration-1000 ease-linear" style={{ height: `${percentLeft}%` }} />
            </div>
            <div className="w-full h-1/2 overflow-hidden relative" style={{ clipPath: 'polygon(50% 0%, 95% 95%, 5% 95%)' }}>
              <div className="absolute bottom-0 w-full bg-[#d6b98d] transition-all duration-1000 ease-linear" style={{ height: `${100 - percentLeft}%` }} />
            </div>
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 10 5 L 90 5 L 55 48 C 52 50, 48 50, 45 48 Z" fill="none" stroke="#3c4a33" strokeWidth="3" strokeLinejoin="round" />
              <path d="M 50 50 C 50 50, 52 52, 55 52 L 90 95 L 10 95 L 45 52 C 48 50, 50 50, 50 50 Z" fill="none" stroke="#3c4a33" strokeWidth="3" strokeLinejoin="round" />
              <line x1="5" y1="5" x2="95" y2="5" stroke="#3c4a33" strokeWidth="6" strokeLinecap="round" />
              <line x1="5" y1="95" x2="95" y2="95" stroke="#3c4a33" strokeWidth="6" strokeLinecap="round" />
              {mounted && percentLeft > 0 && (
                <line x1="50" y1="50" x2="50" y2="90" stroke="#d6b98d" strokeWidth="2" strokeDasharray="4 4" className="animate-sand" />
              )}
            </svg>
          </div>

          {/* COMPACT TIMER BOX */}
          <div className="bg-[#f0f3eb] rounded-xl px-6 py-4 md:px-10 md:py-6 shadow-lg flex items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">
            <div className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
              <span className="text-[#3c4a33] text-2xl md:text-4xl font-breadley tracking-[0.1em] mb-1">{mounted ? spaceOut(timeLeft.days) : '0 0'}</span>
              <span className="text-[#3c4a33] font-snell text-[12px] md:text-lg">Days</span>
            </div>
            <span className="text-[#3c4a33] text-xl md:text-3xl font-light mb-4 opacity-30">|</span>
            <div className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
              <span className="text-[#3c4a33] text-2xl md:text-4xl font-breadley tracking-[0.1em] mb-1">{mounted ? spaceOut(timeLeft.hours) : '0 0'}</span>
              <span className="text-[#3c4a33] font-snell text-[12px] md:text-lg">Hours</span>
            </div>
            <span className="text-[#3c4a33] text-xl md:text-3xl font-light mb-4 opacity-30">|</span>
            <div className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
              <span className="text-[#3c4a33] text-2xl md:text-4xl font-breadley tracking-[0.1em] mb-1">{mounted ? spaceOut(timeLeft.minutes) : '0 0'}</span>
              <span className="text-[#3c4a33] font-snell text-[12px] md:text-lg">Mins</span>
            </div>
            <span className="text-[#3c4a33] text-xl md:text-3xl font-light mb-4 opacity-30">|</span>
            <div className="flex flex-col items-center min-w-[50px] md:min-w-[60px]">
              <span className="text-[#3c4a33] text-2xl md:text-4xl font-breadley tracking-[0.1em] mb-1">{mounted ? spaceOut(timeLeft.seconds) : '0 0'}</span>
              <span className="text-[#3c4a33] font-snell text-[12px] md:text-lg">Secs</span>
            </div>
          </div>

          {/* REVEALING SOON TEXT */}
          <h3 className="text-white text-lg md:text-2xl lg:text-3xl tracking-[0.4em] uppercase font-normal text-center drop-shadow-sm font-breadley">
            REVEALING SOON...
          </h3>

          <p className="font-snell text-white/95 text-xl md:text-3xl lg:text-4xl mt-16 md:mt-24 text-center max-w-4xl leading-relaxed drop-shadow-sm px-4">
            A gathering of ideas, people, and possibilities — shaped around conscious living.
          </p>

        </motion.div>
      </section>

      {/* --- 5. CONTACT US SECTION --- */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center pt-32 md:pt-64 lg:pt-80 pb-32 md:pb-64 lg:pb-80 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <a href="/sustfestform" className="group flex flex-col items-center text-center cursor-pointer hover:opacity-70 transition-opacity">
            <h2 className="text-[#111] text-4xl md:text-6xl lg:text-[5.5rem] font-breadley tracking-[0.3em] uppercase leading-[1.3] md:leading-[1.4]">
              CONTACT<br/>US
            </h2>
          </a>
        </motion.div>
      </section>

      {/* --- 6. FOOTER SECTION --- */}
      <footer className="relative z-10 w-full pb-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex justify-between items-end text-[#111] text-[10px] tracking-[0.3em] uppercase font-breadley font-light">
          <div className="flex-1 text-left">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="hover:text-[#111]/70 transition-colors cursor-pointer uppercase font-breadley"
            >
              back on top
            </button>
          </div>
          <div className="flex-1 text-center font-breadley">
            <span>2024 @ qui creatives all rights reserved</span>
          </div>
          <div className="flex-1 text-right">
            <a href="#" className="hover:text-[#111]/70 transition-colors uppercase font-breadley">Follow Us</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

