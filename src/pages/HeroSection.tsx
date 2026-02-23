import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const textContent = "L'Alchimie de l'Essence. Where identities are sculpted in gold-leafed narratives. At Qui Creatives branding is not mere design—it is the sacred art of distillation. Imagine a maitre parfumeur in Grasse, blending rare essences to create a fragrance that lingers for generations. We approach your brand with the same reverence, transforming raw ideas into objects d'art that defy time. Here, logos are not sketched—they are forged in the fires of intention, each curve a whisper of your ethos, each hue a stanza in your visual sonnet.";

// Sub-component for the smooth, word-by-word illumination
const Word = ({ children, progress, range }) => {
  // Illuminates from dim grey to bright white as you scroll past it
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#666666", "#ffffff"]);
  
  return (
    <motion.span style={{ opacity, color, display: "inline-block", marginRight: "0.25em" }}>
      {children}
    </motion.span>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'relative',
    height: '350vh', // Provides the scroll distance needed for the full sequence
    backgroundColor: '#000',
  },
  stickyContainer: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundImage: 'url("/assets/Rectangle35.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)', // Dimmed overlay to make text pop
    zIndex: 1,
  },
  // Wrapper guarantees the heading stays perfectly centered before moving
  headingWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  heading: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 'clamp(4rem, 10vw, 10rem)', 
    letterSpacing: '0.05em',
    color: '#ffffff',
    margin: 0,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  contentWrapper: {
    position: 'absolute',
    left: '5%',
    top: '32%', 
    width: 'clamp(300px, 50%, 700px)',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  text: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
    lineHeight: '1.6',
    letterSpacing: '0.02em',
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
  },
  metadataContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    fontFamily: '"Helvetica Neue", sans-serif', 
    color: '#ffffff',
  },
  metaTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: '0 0 0.5rem 0',
    letterSpacing: '0.05em',
  },
  metaText: {
    margin: 0,
    opacity: 0.8,
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    letterSpacing: '0.15em',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    opacity: 0.9,
    display: 'inline-block',
    marginTop: '1rem',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
    transition: 'border-color 0.3s ease',
  },
  bottomNav: {
    position: 'absolute',
    bottom: '2rem',
    left: '5%',
    right: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#ffffff',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    zIndex: 10,
  }
};

const HeroSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. BULLETPROOF HEADING ANIMATION: 
  // Moves up (-35vh) and left (-25vw) while scaling down flawlessly from the center.
  const headingX = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-24vw"]);
  const headingY = useTransform(scrollYProgress, [0, 0.3], ["0vh", "-35vh"]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.45]); 

  // 2. CONTENT REVEAL: Slides up from below the visible area, locking into place.
  const contentY = useTransform(scrollYProgress, [0.15, 0.35], ["15vh", "0vh"]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  const words = textContent.split(" ");

  return (
    <section ref={containerRef} style={styles.wrapper}>
      <div style={styles.stickyContainer}>
        
        <div style={styles.overlay} />

        {/* --- ANIMATED HEADING --- */}
        <motion.div 
          style={{ 
            ...styles.headingWrapper,
            x: headingX,
            y: headingY,
            scale: headingScale,
          }}
        >
          <h1 style={styles.heading}>BRANDING</h1>
        </motion.div>
        
        {/* --- ANIMATED CONTENT BLOCK (Text + Metadata) --- */}
        <motion.div 
          style={{ 
            ...styles.contentWrapper,
            y: contentY,
            opacity: contentOpacity
          }}
        >
          <p style={styles.text}>
            {words.map((word, i) => {
              // Word illumination starts exactly after the block has finished sliding up (0.35 to 0.8)
              const start = 0.35 + (i / words.length) * 0.45; 
              const end = start + (0.45 / words.length);
              
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>

          <div style={styles.metadataContainer}>
            <div>
              <h4 style={styles.metaTitle}>Date</h4>
              <p style={styles.metaText}>January 2024</p>
            </div>
            <div>
              <h4 style={styles.metaTitle}>Role</h4>
              <p style={styles.metaText}>Art Direction, Web Design, Production</p>
            </div>
            
          </div>
        </motion.div>

        {/* --- BOTTOM NAVIGATION (Fades in simultaneously with content) --- */}
        <motion.div style={{ ...styles.bottomNav, opacity: contentOpacity }}>
           <span>Scroll To Explore ↓</span>
           <span style={{ opacity: 0.5 }}>Share Project: Fb Tw Pn</span>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;