import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LAtelierSignature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Example slide data
  const slides = [
    { id: 1, image: '/assets/brandingcard.png' },
    { id: 2, image: '/assets/brandcard.png' },
    { id: 3, image: '/assets/brandcard2.png' },
    { id: 4, image: '/assets/brandcaard3.png' },
    { id: 5, image: '/assets/brandcard4.png' },
  ];

  // --- AUTO-PLAY EFFECT ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <section style={styles.container}>
      {/* Explicit Breadley Sans Definition */}
      <style>{`
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Decorative background ornament (left edge) */}
      <div style={styles.bgOrnament}>
        <img src="/assets/key2.png" alt="" style={styles.ornamentImg} />
      </div>

      {/* Header Section */}
      <header style={styles.header}>
        <h2 style={styles.title}>L'ATELIER SIGNATURE</h2>
        <p style={styles.subtitle}>
           Maison NO. 3 envisions a world where brands move beyond visibility, becoming 
          experiences that linger in memory and emotion.
        </p>
      </header>

      {/* Main Slider Area */}
      <div style={styles.sliderWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={styles.mainCardFrame}
          >
            {/* Image perfectly covers the box now */}
            <img 
              src={slides[activeIndex].image} 
              alt="" 
              style={styles.fullCoverImage} 
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div style={styles.pagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                ...styles.dot,
                opacity: activeIndex === index ? 1 : 0.3,
                transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    overflow: 'hidden',
  },
  bgOrnament: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    opacity: 0.8,
    pointerEvents: 'none',
    zIndex: 0,
    mixBlendMode: 'screen',
  },
  ornamentImg: { 
    height: '70%', 
    objectFit: 'contain' 
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    zIndex: 2,
    padding: '0 1rem', // Added minor padding to prevent text from touching screen edges on mobile
  },
  title: {
    fontFamily: '"Breadley Sans", sans-serif', // Changed font
    color: '#ffffff',
    fontSize: 'clamp(1.7rem, 6vw, 1.7rem)', // Made responsive and increased slightly
    letterSpacing: '0.4em',
    fontWeight: 400,
    marginBottom: '1.5rem',
  },
  subtitle: {
    fontFamily: '"Breadley Sans", sans-serif', // Changed font
    color: '#ffffff',
    fontSize: 'clamp(1.07rem, 2.6vw, 1.18rem)', // Made responsive and increased slightly
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.8',
    opacity: 0.7,
    fontStyle: 'italic',
  },
  sliderWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '1100px',
    height: 'clamp(300px, 60vw, 600px)', // Made slider height responsive
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  mainCardFrame: {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '100px 100px', 
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  fullCoverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    display: 'block',
  },
  pagination: {
    position: 'absolute',
    bottom: '1.5rem',
    display: 'flex',
    gap: '1rem',
    zIndex: 10,
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s ease',
  },
};

export default LAtelierSignature;