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
    fontFamily: '"Breadley Sans", sans-serif', 
    fontSize: '0.8rem',
    letterSpacing: '0.3em',
    color: '#e0e0e0',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  /* --- FOOTER STYLES --- */
  footerContainer: {
    position: 'relative',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050505',
    overflow: 'hidden', 
  },
  footerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    opacity: 0.3, 
    filter: 'grayscale(100%)', 
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
    zIndex: 2, 
    textAlign: 'center',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mixBlendMode: 'difference', 
  },
  allProjectsText: {
    fontFamily: '"Breadley Sans", sans-serif', 
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
    fontSize: '0.9rem', 
    fontFamily: '"Breadley Sans", sans-serif', 
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'rgba(255, 255, 255, 0.6)',
    zIndex: 2,
  },
  footerAction: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
};

const BrandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      <style>{`
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @media (max-width: 768px) {
          .responsive-nav {
            padding: 1.5rem !important;
            justify-content: center !important; 
          }
          .responsive-footer {
            height: 60vh !important; 
          }
          .responsive-title {
            font-size: clamp(3.5rem, 14vw, 5rem) !important; 
          }
          /* FIX: Forces the bottom bar onto a single line */
          .responsive-bottom-bar {
            flex-direction: row !important; /* Keep items in a row */
            align-items: center !important;
            justify-content: space-between !important;
            gap: 0.5rem !important;
            padding: 0 1rem 1.5rem 1rem !important; /* Reduce side padding slightly to make room */
            font-size: 0.55rem !important; /* Shrink font to fit on one line */
            white-space: nowrap !important; /* Forbid line breaks */
          }
          /* Allows the middle text to truncate with '...' if the screen is super narrow */
          .copyright-text {
            flex: 1;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 0.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      

      {/* Existing Sections */}
      <HeroSection />
      <Golf />
      <VideoShowcase />
      <LAtelierSignature />

      {/* --- FOOTER SECTION --- */}
      <footer className="responsive-footer" style={styles.footerContainer}>
        
        {/* THE FOOTER IMAGE */}
        <img 
          src="/assets/brandingf.png"
          alt="Office Aesthetic" 
          style={styles.footerImage as React.CSSProperties} 
        />

        {/* Text Overlay */}
        <Link to="/narratingstories" style={styles.allProjectsLink}>
          <h2 className="responsive-title" style={styles.allProjectsText}>SELECTED</h2>
          <h2 className="responsive-title" style={styles.allProjectsText}>ENGAGEMENTS</h2>
        </Link>

        {/* Bottom Utility Bar */}
        <div className="responsive-bottom-bar" style={styles.bottomBar}>
          <span onClick={scrollToTop} style={styles.footerAction}>back on top</span>
          
          <span className="copyright-text">2024 © oui creatives all rights reserved</span>
          
          <a href="#" style={styles.footerAction}>Follow Us</a>
        </div>
      </footer>

    </div>
  );
};

export default BrandingPage;