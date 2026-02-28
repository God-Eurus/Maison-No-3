// "use client";

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";

// // --- FONT STYLES ---
// const styles = {
//   scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", serif', fontWeight: 300, lineHeight: 1.3 },
//   serifFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
//   sansFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
// };

// // --- 1. DATA CONFIGURATION ---
// const CARD_DATA = [
//  { 
//     title: "BRANDING", 
//     bgImage: "/assets/section2-bg.jpg",
//     bgColor: "#1A1A1A", 
//     textColor: "text-white",
//     titleClass: "text-3xl sm:text-3xl md:text-6xl font-breadley tracking-[0.2em] md:tracking-[0.3em]",
//     descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] sm:tracking-[0.5em] font-breadley font-light opacity-50",
//     logo: "", 
//     logoPlacement: "top-center",    
//     link: "./branding"
//   },
//   { 
//     logo: "/assets/card2.png", 
//     logoPlacement: "top-high", 
//     logoClass: "w-16 md:w-20 lg:w-24 mb-8 md:mb-10", 
//     title: (
//       <>
//         Crafting<br />
//         Hypnotic Brands!
//       </>
//     ), 
//     subtitle: "A FRENCH-INSPIRED LUXURY AGENCY",
//     description: (
//       <>
//         A French-inspired creative atelier working at the intersection of elegance, culture, and modern<br className="hidden md:block" /> identity
//       </>
//     ), 
//     bgImage: "", 
//     bgColor: "#F4EFEA", 
//     textColor: "text-black", 
//     titleClass: "mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight", 
//     titleStyle: styles.scriptFont, 
//     subtitleClass: "mt-10 md:mt-12 text-base md:text-lg uppercase tracking-[0.4em] md:tracking-[0.5em]", 
//     subtitleStyle: styles.sansFont, 
//     descClass: "mt-6 max-w-[90%] md:max-w-3xl lg:max-w-4xl mx-auto text-sm md:text-base leading-relaxed opacity-80", 
//     descStyle: styles.sansFont, 
//     link: "./ourprojects"
//   },
//    { 
//     title: "THE ART OF NARRATING STORIES", 
//     bgImage: "/assets/section4-bg.jpeg",
//     bgColor: "#000000",
//     textColor: "text-white",
//     titleClass: "text-1xl sm:text-3xl md:text-6xl font-breadley font-light tracking-[0.2em] md:tracking-[0.3em]",
//     descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-breadley font-light opacity-50",
//     logo: "",
//     logoPlacement: "top-left",
//     link: "./narratingstories"
//   },
//   { 
//     // description: "Capturing moments, telling stories.",
//     title: "CONSCIOUS BUSINESS",
//     bgImage: "/assets/card4.png",
//     bgColor: "#F7F2ED",
//     textColor: "text-black",
//     titleClass: "text-0.5xl sm:text-1xl md:text-4xl ",
//     titleStyle: styles.scriptFont, 
//     descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80",
//     logo: "",
//     logoPlacement: "center",
//     link: "./consciousbusiness"
//   },
//    { 
//     logoPlacement: "top-middle", 
//     title: "HYPNOTIC FRAMES", 
//     bgImage: "/assets/section6-bg.jpg", 
//     textColor: "text-white", 
//     titleClass: "text-2xl md:text-4xl lg:text-5xl font-breadley font-light leading-tight tracking-[0.2em] md:tracking-[0.3em]", 
//     subtitleClass: "mt-6 text-sm md:text-base font-breadley uppercase tracking-[0.3em] font-medium", 
//     descClass: "mt-6 max-w-md mx-auto text-sm md:text-base lg:text-lg font-breadley leading-relaxed opacity-80", 
//     link: "./atelier"
//   },
// ];

// export default function HomePage() {
//   return (
//     <main className="relative bg-[#F7F2ED] antialiased font-breadley">
//       <HeroSection />

//       <div className="[perspective:1000px] md:[perspective:2000px]">
//         {CARD_DATA.map((card, index) => (
//           <Card key={index} card={card} index={index} />
//         ))}
//       </div>
      
//       <StudioFooter />
//     </main>
//   );
// }

// // --- 2. COMPONENTS ---

// function HeroSection() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // 1. Gate Animation: Slides the two doors horizontally
//   const gateLeftX = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
//   const gateRightX = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
//   // 2. Content Reveal: Keeps text invisible (0) until scroll reaches 15%, then fades it in and slides it up slightly
//   const contentOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
//   const contentY = useTransform(scrollYProgress, [0.15, 0.4], [30, 0]);

//   // 3. Parallax for the decorative corner images
//   const yTopLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const yBottomRight = useTransform(scrollYProgress, [0, 1], [0, 150]);

//   return (
//     <section ref={containerRef} className="relative h-[200vh] w-full bg-[#F7F2ED] text-black">
      
//       <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        
//         {/* --- REVEALED CONTENT --- */}
        
//         {/* Center Logo Behind Text */}
//         <motion.div 
//           style={{ opacity: contentOpacity }} // Bound to scroll progress
//           className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none"
//         >
//           {/* Opacity applied to the image to maintain its original styling once revealed */}
//           <img 
//             src="/assets/maisonlogo.png" 
//             alt="La Maison Logo" 
//             className="w-[250px] md:w-[300px] lg:w-[400px] h-auto object-contain mix-blend-multiply opacity-50" 
//           />
//         </motion.div>

//         {/* Main Text Container */}
//         <motion.div 
//           style={{ opacity: contentOpacity, y: contentY }} // Bound to scroll progress
//           className="text-center relative max-w-4xl z-20" 
//         >
//           <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-breadley font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase leading-relaxed mb-8 md:mb-12">
//              Maison <br /> No.3
//           </h1>
//         </motion.div>

//         {/* --- DECORATIVE ELEMENTS --- */}
//         <motion.img 
//           src="/assets/herbg2.png" 
//           alt="" 
//           initial={{ opacity: 0, x: -50, y: -50 }}
//           animate={{ opacity: 1, x: 0, y: 0 }}
//           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//           style={{ y: yTopLeft }}
//           className="absolute top-0 left-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-10 pointer-events-none" 
//         />
        
//         <motion.img 
//           src="/assets/herbg.png" 
//           alt="" 
//           initial={{ opacity: 0, x: 50, y: 50 }}
//           animate={{ opacity: 1, x: 0, y: 0 }}
//           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//           style={{ y: yBottomRight }}
//           className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-10 pointer-events-none" 
//         />

//         {/* --- THE GATES --- */}
//         {/* Removed opacity/mix-blend so the doors are solid and hide what is behind them */}
//         <div className="absolute inset-0 z-30 flex pointer-events-none">
//           <motion.div 
//             style={{ x: gateLeftX }}
//             className="w-1/2 h-full overflow-hidden"
//           >
//             <img 
//               src="/assets/door1.png" 
//               className="w-full h-full object-cover object-right" 
//               alt="Gate Left"
//             />
//           </motion.div>

//           <motion.div 
//             style={{ x: gateRightX }}
//             className="w-1/2 h-full overflow-hidden"
//           >
//             <img 
//               src="/assets/door2.png" 
//               className="w-full h-full object-cover object-left" 
//               alt="Gate Right"
//             />
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }

// function Card({ card, index }: { card: any; index: number }) {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "start start"] });
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

//   const y = useTransform(smoothProgress, [0, 1], [index === 0 ? "0vh" : "100vh", "0vh"]);
//   const rotateX = useTransform(smoothProgress, [0, 1], [20, 0]);
//   const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

//   const getLogoPlacementClass = (placement: string) => {
//     switch(placement) {
//       case "top-left": return "top-8 left-8 md:top-12 md:left-12";
//       case "top-right": return "top-8 right-8 md:top-12 md:right-12";
//       case "bottom-left": return "bottom-8 left-8 md:bottom-12 md:left-12";
//       case "bottom-right": return "bottom-8 right-8 md:bottom-12 md:right-12";
//       case "top-center": return "top-8 left-1/2 -translate-x-1/2 md:top-12";
//       case "top-middle": return "top-[15%] md:top-[20%] left-1/2 -translate-x-1/2"; 
//       case "top-high": return "top-[8%] md:top-[12%] left-1/2 -translate-x-1/2"; 
//       case "bottom-center": return "bottom-8 left-1/2 -translate-x-1/2 md:bottom-12";
//       case "center": return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
//       default: return "top-8 left-8"; 
//     }
//   };

//   return (
//     <section ref={container} className="h-screen sticky top-0 flex items-center justify-center p-4 md:p-12" style={{ zIndex: index + 1 }}>
//       <motion.div 
//         style={{ y, rotateX, scale, transformStyle: "preserve-3d", backgroundColor: card.bgColor || "#000" }}
//         onClick={() => window.location.href = card.link}
//         className="group relative w-full h-full rounded-lg shadow-2xl flex flex-col items-center justify-center overflow-hidden cursor-pointer "
//       >
//         <div className="absolute inset-0 z-0">
//           {card.bgImage && (
//             <img src={card.bgImage} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" alt="" />
//           )}
//         </div>

//         {card.logo && (
//           <div className={`absolute z-20 pointer-events-none flex justify-center ${getLogoPlacementClass(card.logoPlacement)}`}>
//             <img src={card.logo} alt="Card Logo" className={`${card.logoClass || "w-20 md:w-32 lg:w-40"} h-auto object-contain ${card.textColor === "text-black" ? "mix-blend-multiply" : "mix-blend-screen"}`} />
//           </div>
//         )}

//         <div className={`text-center z-10 px-4 md:px-8 relative ${card.textColor || "text-white"}`}>
//           {card.title && (
//             <h2 
//               className={card.titleClass} 
//               style={card.titleStyle || {}} 
//             >
//               {card.title}
//             </h2>
//           )}
//           {card.subtitle && (
//             <h3 
//               className={card.subtitleClass}
//               style={card.subtitleStyle || {}}
//             >
//               {card.subtitle}
//             </h3>
//           )}
//           {card.description && (
//             <div 
//               className={card.descClass}
//               style={card.descStyle || {}}
//             >
//               {card.description}
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function StudioFooter() {
//   const disciplines = [
//     { name: "Branding" },
//     { name: "Technology" },
//     { name: "Digital Marketing" },
//     { name: "Creative Suite" },
//     { name: "Events & Experiences" },
//     { name: "Public Relations" },
//     { name: "Consulting" }
//   ];
  
//   return (
//     <footer className="relative z-20 min-h-screen w-full bg-[#F7F2ED] text-black flex flex-col items-center justify-between py-12 md:py-16 px-4 md:px-8 overflow-hidden">
//       <img 
//         src="/assets/homepagefooter.svg" 
//         alt="" 
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[900px] md:w-[1100px] max-w-none opacity-40 pointer-events-none mix-blend-multiply" 
//       />
//       <div className="text-center z-10 w-full pt-8">
//         <h3 className="text-xl md:text-2xl lg:text-3xl tracking-[0.4em] md:tracking-[0.5em] uppercase font-breadley font-bold mb-20 md:mb-24 opacity-70">
//           Our Disciplines
//         </h3>
//         <div className="flex flex-col gap-6 md:gap-8 items-center">
//           {disciplines.map((d) => (
//             <motion.div 
//               key={d.name} 
//               whileHover={{ opacity: 0.5 }}
//               className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-breadley tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all cursor-pointer"
//             >
//               {d.name}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full flex flex-col items-center z-10 mt-24 md:mt-32 mb-8 md:mb-12 text-center">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-breadley tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none mb-4 md:mb-6 transition-all cursor-pointer"
//           onClick={() => window.location.href = '/ourstudio'}
//         >
//           La Maison
//         </motion.button>
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl font-breadley opacity-70 tracking-wide px-4">
//           The philosophy, principles, and practice behind the house.
//         </p>
//       </div>
//       <div className="w-full flex flex-row justify-between items-center gap-2 md:gap-4 text-[10px] sm:text-[11px] md:text-xl lg:text-xl uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-40 font-breadley font-medium z-10 pb-4 md:pb-0">
//         <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:opacity-100 transition-opacity whitespace-nowrap cursor-pointer">
//           back on top
//         </button>
//         <p className="text-center truncate px-2">2026 @Maison No.3 all rights reserved</p>
//         <p className="hover:opacity-100 cursor-pointer transition-opacity whitespace-nowrap">Follow Us</p>
//       </div>
//     </footer>
//   );
// }






"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// --- FONT STYLES ---
const styles = {
  scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", serif', fontWeight: 300, lineHeight: 1.3 },
  serifFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
  sansFont: { fontFamily: '"Breadley Sans", sans-serif', fontWeight: 300, lineHeight: 1.3 },
};

// --- 1. DATA CONFIGURATION ---
const CARD_DATA = [
 { 
    title: "BRANDING", 
    bgImage: "/assets/section2-bg.jpg",
    bgColor: "#1A1A1A", 
    textColor: "text-white",
    titleClass: "text-3xl sm:text-3xl md:text-6xl font-breadley tracking-[0.2em] md:tracking-[0.3em]",
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] sm:tracking-[0.5em] font-breadley font-light opacity-50",
    logo: "", 
    logoPlacement: "top-center",    
    link: "./branding"
  },
  { 
    logo: "/assets/card2.png", 
    logoPlacement: "top-high", 
    logoClass: "w-16 md:w-20 lg:w-24 mb-8 md:mb-10", 
    title: (
      <>
        Crafting<br />
        Hypnotic Brands!
      </>
    ), 
    subtitle: "A FRENCH-INSPIRED LUXURY AGENCY",
    description: (
      <>
        A French-inspired creative atelier working at the intersection of elegance, culture, and modern<br className="hidden md:block" /> identity
      </>
    ), 
    bgImage: "", 
    bgColor: "#F4EFEA", 
    textColor: "text-black", 
    titleClass: "mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight", 
    titleStyle: styles.scriptFont, 
    subtitleClass: "mt-10 md:mt-12 text-l md:text-xl uppercase tracking-[0.4em] md:tracking-[0.5em]", 
    subtitleStyle: styles.sansFont, 
    descClass: "mt-6 max-w-[80%] md:max-w-4xl lg:max-w-5xl mx-auto text-base md:text-base leading-relaxed opacity-80", 
    descStyle: styles.sansFont, 
    link: "./ourprojects"
  },
   { 
    title: "THE ART OF NARRATING STORIES", 
    bgImage: "/assets/section4-bg.jpeg",
    bgColor: "#000000",
    textColor: "text-white",
    titleClass: "text-1xl sm:text-3xl md:text-5xl font-breadley font-light tracking-[0.2em] md:tracking-[0.3em]",
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-breadley font-light opacity-50",
    logo: "",
    logoPlacement: "top-left",
    link: "./narratingstories"
  },
  { 
    title: "Conscious Businesses",
    bgImage: "/assets/card4.png",
    bgColor: "#F7F2ED",
    textColor: "text-black",
    titleClass: "text-0.5xl sm:text-2xl md:text-6xl ",
    titleStyle: styles.scriptFont, 
    descClass: "mt-4 md:mt-6 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80",
    logo: "",
    logoPlacement: "center",
    link: "./consciousbusiness"
  },
   { 
    logoPlacement: "top-middle", 
    title: "HYPNOTIC FRAMES", 
    bgImage: "/assets/section6-bg.jpg", 
    textColor: "text-white", 
    titleClass: "text-2xl md:text-4xl lg:text-5xl font-breadley font-light leading-tight tracking-[0.2em] md:tracking-[0.3em]", 
    subtitleClass: "mt-6 text-sm md:text-base font-breadley uppercase tracking-[0.3em] font-medium", 
    descClass: "mt-6 max-w-md mx-auto text-sm md:text-base lg:text-lg font-breadley leading-relaxed opacity-80", 
    link: "./atelier"
  },
];

export default function HomePage() {
  return (
    <main className="relative bg-[#F7F2ED] antialiased font-breadley">
      <HeroSection />

      <div className="[perspective:1000px] md:[perspective:2000px] relative z-20">
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 40, 
    damping: 15, 
    restDelta: 0.001 
  });

  // 1. Gate Rotation: Finishes opening fully at exactly 50% scroll.
  const gateLeftRotateY = useTransform(smoothProgress, [0, 0.5], [0, 90]);
  const gateRightRotateY = useTransform(smoothProgress, [0, 0.5], [0, -90]);

  // 2. Gate Opacity: The gate waits fully open from 0.5 to 0.6, THEN fades away between 0.6 and 0.8
  const gateOpacity = useTransform(smoothProgress, [0.6, 0.8], [1, 0]);
  
  // 3. Content Reveal & Exit
  const contentOpacity = useTransform(smoothProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);
  const contentScale = useTransform(smoothProgress, [0.1, 0.4, 0.7, 1], [0.95, 1, 1, 1.8]);

  const heroOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);

  const yTopLeft = useTransform(smoothProgress, [0, 1], [0, -150]);
  const yBottomRight = useTransform(smoothProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#F7F2ED] text-black">
      
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden"
      >
        
        {/* --- REVEALED CONTENT --- */}
        <motion.div 
          style={{ opacity: contentOpacity, scale: contentScale }} 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          {/* LOGO */}
          <div className="absolute inset-0 flex items-center justify-center z-[5]">
            <img 
              src="/assets/maisonlogo.png" 
              alt="La Maison Logo" 
              className="w-[250px] md:w-[300px] lg:w-[400px] h-auto object-contain mix-blend-multiply opacity-50" 
            />
          </div>

          {/* TEXT */}
          <div className="relative z-20 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-breadley font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase leading-relaxed">
              Maison <br /> No.3
            </h1>
          </div>
        </motion.div>

        {/* --- DECORATIVE ELEMENTS --- */}
        <motion.img 
          src="/assets/herbg2.png" 
          alt="" 
          style={{ y: yTopLeft, opacity: contentOpacity }} 
          className="absolute top-0 left-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-10 pointer-events-none" 
        />
        
        <motion.img 
          src="/assets/herbg.png" 
          alt="" 
          style={{ y: yBottomRight, opacity: contentOpacity }} 
          className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-cover z-10 pointer-events-none" 
        />

        {/* --- THE 3D GATES --- */}
        <div 
          className="absolute inset-0 z-30 flex pointer-events-none"
          style={{ perspective: "1500px" }}
        >
          {/* We've applied the new gateOpacity style to both doors below */}
          <motion.div 
            style={{ 
              rotateY: gateLeftRotateY, 
              opacity: gateOpacity, // Fades out after opening
              transformOrigin: "left center", 
              transformStyle: "preserve-3d" 
            }}
            className="w-1/2 h-full overflow-hidden bg-[#F7F2ED]" 
          >
            <img 
              src="/assets/door1.png" 
              className="w-full h-full object-cover object-right" 
              alt="Gate Left"
            />
          </motion.div>

          <motion.div 
            style={{ 
              rotateY: gateRightRotateY, 
              opacity: gateOpacity, // Fades out after opening
              transformOrigin: "right center", 
              transformStyle: "preserve-3d"
            }}
            className="w-1/2 h-full overflow-hidden bg-[#F7F2ED]"
          >
            <img 
              src="/assets/door2.png" 
              className="w-full h-full object-cover object-left" 
              alt="Gate Right"
            />
          </motion.div>
        </div>

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
            <h2 className={card.titleClass} style={card.titleStyle || {}}>
              {card.title}
            </h2>
          )}
          {card.subtitle && (
            <h3 className={card.subtitleClass} style={card.subtitleStyle || {}}>
              {card.subtitle}
            </h3>
          )}
          {card.description && (
            <div className={card.descClass} style={card.descStyle || {}}>
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
      <img 
        src="/assets/homepagefooter.svg" 
        alt="" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[900px] md:w-[1100px] max-w-none opacity-40 pointer-events-none mix-blend-multiply" 
      />
      <div className="text-center z-10 w-full pt-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl tracking-[0.4em] md:tracking-[0.5em] uppercase font-breadley font-bold mb-20 md:mb-24 opacity-70">
          Our Disciplines
        </h3>
        <div className="flex flex-col gap-6 md:gap-8 items-center">
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