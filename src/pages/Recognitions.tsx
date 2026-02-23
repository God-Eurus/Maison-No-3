import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Easily editable recognitions array
const recognitions = [
  { title: "They didn’t redesign our identity.They revealed what it had been trying to become.", subtitle: "Vasundhra", org: "AWWWARDS", logo: "W." },
  { title: "Rare to find a studio that knows when not to add & subtract! They removed the noise, we didn’t realise we were carrying.", subtitle: "Ankur", org: "LOERIE AWARDS", logo: "lm" },
  { title: "There is a certain discretion to the way they build.", subtitle: "Bhagat", org: "APP OF THE YEAR", logo: "App Year" },
  { title: "I remember the first conversation. They spoke less about design and more about meaning.That stayed with me.", subtitle: "Anup", org: "BOOKMARK AWARDS", logo: "BM" },
  { title: "What surprised me most was how calm excellence can feel. Because they understand legacy in a way most creative teams don’t.", subtitle: "Aashka", org: "FINANCIAL MAIL", logo: "fm" },
  { title: "There was a calm intelligence to everything they touched. And even years later, the work still feels correct.", subtitle: "Gayatri", org: "CSSDA", logo: "cssda" },
];

const Recognitions = () => {
  const containerRef = useRef(null);

  // Track progress from the moment the section's top hits the viewport 
  // until the section's bottom hits the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Generate consistent "random" paths for each card so they don't jitter on re-render.
  // We use viewport units (vh/vw) so the spread scales perfectly on any screen size.
  const cardPaths = useMemo(() => {
    return recognitions.map(() => {
      // Start ~250vh above the final grid position, drifting down to 0vh
      const startY = -240 - Math.random() * 60; 
      const midY1 = -160 - Math.random() * 40;
      const midY2 = -80 - Math.random() * 20;

      // Scatter across the horizontal axis
      const startX = (Math.random() - 0.5) * 80; 
      const midX1 = (Math.random() - 0.5) * 60;
      const midX2 = (Math.random() - 0.5) * 30;

      // Chaotic rotations that settle to 0
      const rot1 = (Math.random() - 0.5) * 360;
      const rot2 = (Math.random() - 0.5) * 180;
      const rot3 = (Math.random() - 0.5) * 45;

      return {
        y: [`${startY}vh`, `${midY1}vh`, `${midY2}vh`, "0vh"],
        x: [`${startX}vw`, `${midX1}vw`, `${midX2}vw`, "0vw"],
        rotate: [rot1, rot2, rot3, 0],
        scale: [0.3, 0.6, 0.8, 1], // Start small in the distance
      };
    });
  }, []);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        backgroundColor: '#000', 
        height: '350vh', // Massive scroll area to give the floating effect time to play out
        position: 'relative',
        overflow: 'hidden' // Prevents drifting cards from causing horizontal scrollbars
      }}
    >
      {/* Background stars or gradient effects could be placed here */}

      {/* The Target Grid Container: Pinned to the ABSOLUTE BOTTOM of the section */}
      <div style={{
        position: 'absolute',
        bottom: '10vh', 
        left: 0,
        width: '100%',
        padding: '0 2rem'
      }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontFamily: '"Times New Roman", serif', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              letterSpacing: '0.2em', 
              color: '#fff' 
            }}>
              RECOGNITIONS
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {recognitions.map((item, index) => {
              const paths = cardPaths[index];

              // Tie our generated paths to the user's scroll position
              const y = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], paths.y);
              const x = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], paths.x);
              const rotate = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], paths.rotate);
              const scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], paths.scale);
              
              // Fade them in at the very start of the section
              const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

              return (
                <motion.div
                  key={index}
                  style={{
                    y, x, rotate, scale, opacity,
                    zIndex: 10 - index
                  }}
                >
                  {/* INNER MOTION DIV: Handles the continuous "Zero Gravity" bobbing/floating */}
                  <motion.div
                    animate={{
                      y: [0, Math.random() * -15 - 10, 0],
                      x: [0, (Math.random() - 0.5) * 15, 0],
                      rotate: [0, (Math.random() - 0.5) * 4, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3, // Randomizes float speed per card
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundColor: '#fff',
                      color: '#000',
                      borderRadius: '24px',
                      padding: '2.5rem',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                      width: '100%'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.logo}</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.7rem', color: '#666' }}>{item.subtitle}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;