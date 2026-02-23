import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LAtelierSignature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Example slide data
  const slides = [
    { id: 1, image: '/assets/brandingcard.png' },
    { id: 2, image: '/assets/signature-card-2.jpg' },
    { id: 3, image: '/assets/signature-card-3.jpg' },
    { id: 4, image: '/assets/signature-card-4.jpg' },
    { id: 5, image: '/assets/signature-card-5.jpg' },
  ];

  return (
    <section style={styles.container}>
      {/* Decorative background ornament (left edge) */}
      <div style={styles.bgOrnament}>
        <img src="/assets/crest-ornament-dark.png" alt="" style={styles.ornamentImg} />
      </div>

      {/* Header Section */}
      <header style={styles.header}>
        <h2 style={styles.title}>L'ATELIER SIGNATURE</h2>
        <p style={styles.subtitle}>
          Oui Creatives envisions a world where brands move beyond visibility, becoming 
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
    left: '-100px',
    top: '20%',
    width: '400px',
    opacity: 0.2,
    pointerEvents: 'none',
  },
  ornamentImg: { width: '100%', filter: 'invert(1)' },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    zIndex: 2,
  },
  title: {
    fontFamily: '"Times New Roman", serif',
    color: '#ffffff',
    fontSize: '1rem',
    letterSpacing: '0.6em',
    fontWeight: 400,
    marginBottom: '1.5rem',
  },
  subtitle: {
    fontFamily: '"Times New Roman", serif',
    color: '#ffffff',
    fontSize: '0.9rem',
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
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    objectFit: 'cover', // Ensures the image stretches to fill the box without distorting
    display: 'block',
  },
  pagination: {
    position: 'absolute',
    bottom: '2rem',
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