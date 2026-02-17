import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    position: 'relative',
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    zIndex: 2,
    
    // MOVED BACKGROUND IMAGE HERE
    // Using 'rectangle%2035.png' (assuming fixed spelling from 'Rectagle')
    backgroundImage: 'url("/assets/Rectangle35.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    maxWidth: '90%',
    opacity: 0.15, 
    zIndex: -1, 
    pointerEvents: 'none',
  },
  heading: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 'clamp(3rem, 6vw, 6rem)',
    letterSpacing: '0.3em',
    color: '#ffffff',
    marginBottom: '2rem',
    fontWeight: 400,
    textTransform: 'uppercase',
    textShadow: '0 0 30px rgba(0,0,0,0.8)',
  },
  text: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1rem',
    lineHeight: '2',
    color: '#cccccc',
    maxWidth: '800px',
    letterSpacing: '0.05em',
    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
  },
};

const HeroSection = () => {
  return (
    <section style={styles.section}>
      {/* Optional: The inner crest watermark if you still want that layered on top of the pattern */}
      <img 
        src="/assets/crest-ornament.png" 
        alt="" 
        style={styles.watermark} 
      />

      <h1 style={styles.heading}>BRANDING</h1>
      
      <p style={styles.text}>
        L'Alchimie de l'Essence. Where identities are sculpted in gold-leafed narratives. 
        At Oui Creatives branding is not mere design—it is the sacred art of distillation. 
        Imagine a maitre parfumeur in Grasse, blending rare essences to create a fragrance 
        that lingers for generations. We approach your brand with the same reverence, 
        transforming raw ideas into objects d'art that defy time. Here, logos are not 
        sketched—they are forged in the fires of intention, each curve a whisper of your 
        ethos, each hue a stanza in your visual sonnet.
      </p>
    </section>
  );
};

export default HeroSection;