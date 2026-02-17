import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import Golf from './Golf';
import VideoShowcase from './VideoShowcase';
import LAtelierSignature from './LAtelierSignature';

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    backgroundColor: '#050505',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 3rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  logo: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '0.8rem',
    letterSpacing: '0.3em',
    color: '#e0e0e0',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  /* --- FOOTER STYLES --- */
  footerContainer: {
    position: 'relative',
    height: '100vh', // Changed to full height for better impact
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050505',
    overflow: 'hidden', // Ensures image doesn't spill out
  },
  // New style for the footer image
  footerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Expanded to full width
    height: '100%', // Expanded to full height
    objectFit: 'cover',
    opacity: 0.6, // Dimmed so text pops
    filter: 'grayscale(100%)', // Black and white for elegance
    zIndex: 1,
  },
  footerWatermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '1000px',
    opacity: 0.1,
    pointerEvents: 'none',
    zIndex: 0,
  },
  allProjectsLink: {
    position: 'relative',
    zIndex: 2, // Ensures text is above the image
    textAlign: 'center',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mixBlendMode: 'difference', // Makes text readable over the image
  },
  allProjectsText: {
    fontFamily: '"Times New Roman", serif',
    color: '#ffffff',
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    letterSpacing: '0.2em',
    fontWeight: '400',
    margin: 0,
    lineHeight: '1.1',
    textTransform: 'uppercase',
  },
  bottomBar: {
    position: 'absolute',
    bottom: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 3rem',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'rgba(255, 255, 255, 0.6)',
    zIndex: 2,
  },
  footerAction: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

const BrandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>OUI CREATIVES</Link>
      </nav>

      {/* Existing Sections */}
      <HeroSection />
      <Golf />
      <VideoShowcase />
      <LAtelierSignature />

      {/* --- FOOTER SECTION --- */}
      <footer style={styles.footerContainer}>
        
        {/* 1. Background Watermark (Optional decoration) */}
        {/* <img 
          src="/assets/crest-ornament-dark.png" 
          alt="" 
          style={styles.footerWatermark} 
        /> */}

        {/* 2. THE NEW FOOTER IMAGE */}
        {/* Replace with your actual image path */}
        <img 
          src="/assets/brandingf.png"
          alt="Office Aesthetic" 
          style={styles.footerImage as React.CSSProperties} 
        />

        {/* 3. Text Overlay */}
        <Link to="/narratingstories" style={styles.allProjectsLink}>
          <h2 style={styles.allProjectsText}>ALL</h2>
          <h2 style={styles.allProjectsText}>PROJECTS</h2>
        </Link>

        {/* 4. Bottom Utility Bar */}
        <div style={styles.bottomBar}>
          <span onClick={scrollToTop} style={styles.footerAction}>back on top</span>
          <span>2024 © oui creatives all rights reserved</span>
          <a href="#" style={styles.footerAction}>Follow Us</a>
        </div>
      </footer>

    </div>
  );
};

export default BrandingPage;