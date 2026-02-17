import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    position: 'relative',
    backgroundColor: '#000', // Pure black background
    padding: '8rem 2rem 5rem 2rem', // Top padding to accommodate the layout
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden', // Ensures the side ornament doesn't create horizontal scroll
  },
  // Key Ornament on the Left
  ornamentLeft: {
    position: 'absolute',
    left: '-80px', // Pushed slightly off-screen to show just the handle/shaft
    top: '0',
    height: '800px', // Large vertical size
    opacity: 0.3, // Subtle visibility
    zIndex: 1,
    pointerEvents: 'none',
    // Rotate 180 degrees if using the same key asset to flip the handle side
    transform: 'rotate(180deg)', 
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '650px',
  },
  title: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.4rem',
    letterSpacing: '0.4em', // Wide spacing as seen in image
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '0.9rem',
    color: '#b0b0b0',
    lineHeight: '1.8',
    letterSpacing: '0.05em',
  },
  // Main Showcase Image Container
  imageContainer: {
    width: '100%',
    maxWidth: '1100px', // Wide container
    position: 'relative',
    borderRadius: '30px 30px 0 0', // Rounded top corners based on standard showcase styles
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    opacity: 0.9,
    // Helps blend the dark image with the black bg
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', 
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  },
};

const AtelierShowcase = () => {
  return (
    <section style={styles.section}>
      {/* Side Ornament (Left) */}
      <img 
        src="/assets/key.png" 
        alt="" 
        style={styles.ornamentLeft} 
      />

      <div style={styles.contentWrapper}>
        {/* Text Header */}
        <div style={styles.textContainer}>
          <h2 style={styles.title}>L'ATELIER SIGNATURE</h2>
          <p style={styles.subtitle}>
            Oui Creatives envisions a world where brands are not just seen but experienced on 
            a profound emotional level.
          </p>
        </div>

        {/* Showcase Image */}
        <div style={styles.imageContainer}>
          {/* Replace with your specific card showcase image file */}
          <img 
            src="/assets/atelier-card-showcase.jpg" 
            alt="L'Atelier Signature Business Card" 
            style={styles.mainImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default AtelierShowcase;