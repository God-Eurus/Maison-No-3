"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// --- 1. DATA CONFIGURATION ---
const CARD_DATA = [
  { 
    title: "BRANDING", 
    // description: "Visual identities that resonate and endure.",
    bgImage: "/assets/section2-bg.jpg",
    bgColor: "#1A1A1A", 
    textColor: "text-white",
    titleClass: "text-4xl sm:text-6xl md:text-9xl font-breadley tracking-tighter",
    // INCREASED TEXT SIZE
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-breadley font-light opacity-50",
    logo: "", // Add logo path here if needed
    logoPlacement: "top-center",    
    link: "./branding"
  },
  { 
    // CUSTOM WEB DESIGN CARD
    logo: "/assets/card2.png",
    logoPlacement: "top-high", 
    logoClass: "w-12 md:w-16 lg:w-24", 
    // REMOVED <br /> TO MAKE IT ONE LINE
    title: "Crafting Hypnotic Brands!", 
    subtitle: "Digital Experiences",
    description: (
      <>
        Crafted for impact, our digital platforms merge elegant aesthetics{" "}
        with seamless functionality to elevate your brand presence.
      </>
    ), 
    bgImage: "", 
    bgColor: "#F7F2ED", 
    textColor: "text-black", 
    // REMOVED leading-tight and font-normal from class, will use inline style for weight
    titleClass: "text-4xl md:text-5xl lg:text-6xl font-['Snell',cursive] italic", 
    subtitleClass: "mt-4 text-[30px] md:text-xl font-breadley uppercase tracking-[0.3em] font-medium", 
    // INCREASED TEXT SIZE and fixed mobile/desktop inconsistency
    descClass: "mt-4 max-w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg font-breadley leading-relaxed opacity-80", 
    link: "/work/web-design"
  },
   { 
    title: "THE ART OF NARRATING STORIES", 
    // description: "Strategies that drive growth.",
    bgImage: "/assets/section4-bg.jpeg",
    bgColor: "#000000",
    textColor: "text-white",
    titleClass: "text-2xl sm:text-4xl md:text-7xl font-breadley font-light tracking-tighter",
    // INCREASED TEXT SIZE
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-breadley font-light opacity-50",
    logo: "",
    logoPlacement: "top-left",
    link: "/work/marketing"
  },
  { 
    // title: "Photography", 
    description: "Capturing moments, telling stories.",
    bgImage: "/assets/card4.png",
    bgColor: "#F7F2ED",
    textColor: "text-white",
    titleClass: "text-4xl sm:text-6xl md:text-9xl font-breadley tracking-tighter",
    // INCREASED TEXT SIZE
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-breadley font-light opacity-50",
    logo: "",
    logoPlacement: "center",
    link: "/work/photography"
  },
   { 
    logoPlacement: "top-middle", 
    title: "Hypnotique Frames", 
    // subtitle: "Digital Experiences",
    // description: "Crafted for impact, our digital platforms merge elegant aesthetics with seamless functionality to elevate your brand presence.",
    bgImage: "/assets/section6-bg.jpg", 
    textColor: "text-white", 
    titleClass: "text-5xl md:text-7xl lg:text-8xl font-breadley font-light leading-tight", 
    subtitleClass: "mt-6 text-sm md:text-base font-breadley uppercase tracking-[0.3em] font-medium", 
    // INCREASED TEXT SIZE
    descClass: "mt-6 max-w-md mx-auto text-sm md:text-base lg:text-lg font-breadley leading-relaxed opacity-80", 
    link: "/work/web-design"
  },
];

export default function HomePage() {
  return (
    <main className="relative bg-[#F7F2ED] antialiased font-breadley">
      
      {/* Explicit Breadley Sans Definition */}
      <style>{`
        /* Load the font file. Adjust the URL to match where your font is stored in /public */
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff'); /* Fallbacks if needed */
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* Utility class */
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
      `}</style>

      <HeroSection />

      <div className="[perspective:1000px] md:[perspective:2000px]">
        {CARD_DATA.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
      
      <StudioFooter />
    </main>
  );
}

// --- 2. COMPONENTS ---

function HeroSection() {
  const { scrollY } = useScroll();
  const yTopLeft = useTransform(scrollY, [0, 1000], [0, -150]);
  const yBottomRight = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#F7F2ED] text-black px-6 overflow-hidden">
      
      {/* Center Logo Behind Text */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none opacity-50">
        <img 
          src="/assets/maisonlogo.png" 
          alt="La Maison Logo" 
          className="w-[250px] md:w-[300px] lg:w-[400px] h-auto object-contain mix-blend-multiply" 
        />
      </div>

      {/* Top Left Image - FADE IN & PARALLAX */}
      <motion.img 
        src="/assets/herobg2.png" 
        alt="Hero Top Left" 
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: yTopLeft }}
        className="absolute top-0 left-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-0 pointer-events-none" 
      />
      
      {/* Bottom Right Image - FADE IN & PARALLAX */}
      <motion.img 
        src="/assets/herobg.png" 
        alt="Hero Bottom Right" 
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ y: yBottomRight }}
        className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-0 pointer-events-none" 
      />

      {/* Main Text Container - FADE IN */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="text-center relative max-w-4xl z-10"
      >
        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-breadley font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase leading-relaxed mb-8 md:mb-12">
          LA Maison <br /> No.3
        </h1>
      </motion.div>
    </section>
  );
}

function Card({ card, index }: { card: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "start start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

  const y = useTransform(smoothProgress, [0, 1], [index === 0 ? "0vh" : "100vh", "0vh"]);
  const rotateX = useTransform(smoothProgress, [0, 1], [20, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  const getLogoPlacementClass = (placement: string) => {
    switch(placement) {
      case "top-left": return "top-8 left-8 md:top-12 md:left-12";
      case "top-right": return "top-8 right-8 md:top-12 md:right-12";
      case "bottom-left": return "bottom-8 left-8 md:bottom-12 md:left-12";
      case "bottom-right": return "bottom-8 right-8 md:bottom-12 md:right-12";
      case "top-center": return "top-8 left-1/2 -translate-x-1/2 md:top-12";
      case "top-middle": return "top-[15%] md:top-[20%] left-1/2 -translate-x-1/2"; 
      case "top-high": return "top-[8%] md:top-[12%] left-1/2 -translate-x-1/2"; 
      case "bottom-center": return "bottom-8 left-1/2 -translate-x-1/2 md:bottom-12";
      case "center": return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
      default: return "top-8 left-8"; 
    }
  };

  return (
    <section ref={container} className="h-screen sticky top-0 flex items-center justify-center p-4 md:p-12" style={{ zIndex: index + 1 }}>
      <motion.div 
        style={{ y, rotateX, scale, transformStyle: "preserve-3d", backgroundColor: card.bgColor || "#000" }}
        onClick={() => window.location.href = card.link}
        className="group relative w-full h-full rounded-lg shadow-2xl flex flex-col items-center justify-center overflow-hidden cursor-pointer "
      >
        <div className="absolute inset-0 z-0">
          {card.bgImage && (
            <img src={card.bgImage} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" alt="" />
          )}
        </div>

        {card.logo && (
          <div className={`absolute z-20 pointer-events-none flex justify-center ${getLogoPlacementClass(card.logoPlacement)}`}>
            <img src={card.logo} alt="Card Logo" className={`${card.logoClass || "w-20 md:w-32 lg:w-40"} h-auto object-contain ${card.textColor === "text-black" ? "mix-blend-multiply" : "mix-blend-screen"}`} />
          </div>
        )}

        <div className={`text-center z-10 px-4 md:px-8 relative ${card.textColor || "text-white"}`}>
          {card.title && (
            <h2 
              className={card.titleClass} 
              // FIX: Specific inline style to force the lighter weight for the Snell card. 'normal' maps to 400.
              style={card.titleClass.includes("Snell") ? { fontWeight: 'normal' } : {}}
            >
              {card.title}
            </h2>
          )}
          {card.subtitle && (
            <h3 className={card.subtitleClass}>
              {card.subtitle}
            </h3>
          )}
          {card.description && (
            <div className={card.descClass}>
              {card.description}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function StudioFooter() {
  const disciplines = [
    { name: "Branding" },
    { name: "Technology" },
    { name: "Digital Marketing" },
    { name: "Creative Suite" },
    { name: "Events & Experiences" },
    { name: "Public Relations" },
    { name: "Consulting" }
  ];
  
  return (
    <footer className="relative z-20 min-h-screen w-full bg-[#F7F2ED] text-black flex flex-col items-center justify-between py-12 md:py-16 px-4 md:px-8 overflow-hidden">
      
      {/* BACKGROUND ORNAMENT */}
      <img 
        src="/assets/homepagefooter.svg" 
        alt="" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[700px] md:w-[1100px] max-w-none opacity-40 pointer-events-none mix-blend-multiply" 
      />

      {/* DISCIPLINES SECTION */}
      <div className="text-center z-10 w-full pt-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl tracking-[0.4em] md:tracking-[0.5em] uppercase font-breadley font-bold mb-20 md:mb-24 opacity-70">
          Our Disciplines
        </h3>
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* FIX: Added cursor-pointer back so it shows the finger cursor on hover */}
          {disciplines.map((d) => (
            <motion.div 
              key={d.name} 
              whileHover={{ opacity: 0.5 }}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-breadley tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all cursor-pointer"
            >
              {d.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* LA MAISON SECTION */}
      <div className="w-full flex flex-col items-center z-10 mt-24 md:mt-32 mb-8 md:mb-12 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-breadley tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none mb-4 md:mb-6 transition-all cursor-pointer"
          onClick={() => window.location.href = '/ourstudio'}
        >
          La Maison
        </motion.button>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-breadley opacity-70 tracking-wide px-4">
          The philosophy, principles, and practice behind the house.
        </p>
      </div>

      {/* BOTTOM LINKS - Forced onto one line with flex-row */}
      <div className="w-full flex flex-row justify-between items-center gap-2 md:gap-4 text-[10px] sm:text-[11px] md:text-xl lg:text-xl uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-40 font-breadley font-medium z-10 pb-4 md:pb-0">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:opacity-100 transition-opacity whitespace-nowrap cursor-pointer">
          back on top
        </button>
        <p className="text-center truncate px-2">2026 @Maison No.3 all rights reserved</p>
        <p className="hover:opacity-100 cursor-pointer transition-opacity whitespace-nowrap">Follow Us</p>
      </div>
    </footer>
  );
}