import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate import

// --- 1. CONFIGURATION: CARDS DATA ---
const cardsData = [
  {
    id: 1,
    title: "ZOHARET",
    background: 'url("/assets/zoharet-wood-texture.jpg")', 
    backgroundColor: '#e3d0b9', 
    backgroundSize: 'cover',
    textColor: '#5c3a21', 
    logo: '/assets/zoharet-logo.png', 
    description: '', 
  },
  {
    id: 2,
    title: "MEDAFEM",
    background: 'url("/assets/medafem-green-texture.jpg")',
    backgroundColor: '#8da399', 
    backgroundSize: 'cover',
    textColor: '#2d4a3e', 
    logo: '/assets/medafem-logo.png',
    description: 'THE NEW AGE AYURVEDA',
  },
  {
    id: 3,
    title: "COMING SOON",
    background: 'none',
    backgroundColor: '#1a1a1a', 
    backgroundSize: 'auto',
    textColor: '#ffffff',
    logo: '',
    description: 'Future Project',
  }
];

// --- 2. STYLES ---
const styles: { [key: string]: React.CSSProperties } = {
  // Global Page Container
  pageContainer: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflowX: 'hidden',
  },

  /* --- HERO SECTION --- */
  heroSection: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("/assets/section4-bg.jpeg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    zIndex: 1,
  },
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 3rem',
    zIndex: 10,
  },
  logo: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    color: '#e0e0e0',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rabbitImage: {
    width: '350px',
    height: 'auto',
    objectFit: 'contain',
    opacity: 0.8,
    filter: 'grayscale(100%) contrast(1.1)',
    marginBottom: '-20px', 
  },
  heroTitle: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
    letterSpacing: '0.3em',
    fontWeight: 400,
    color: '#ffffff',
    textTransform: 'uppercase',
    lineHeight: 1.2,
    textShadow: '0 2px 20px rgba(0,0,0,0.9)',
    pointerEvents: 'none',
  },

  /* --- CARDS SECTION --- */
  cardsSection: {
    position: 'relative',
    backgroundColor: '#050505', 
    padding: '8rem 2rem 0rem 2rem', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 5,
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '6rem',
    maxWidth: '700px',
    color: '#e0e0e0',
  },
  sectionTitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '3rem',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  sectionText: {
    fontFamily: 'sans-serif',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: '#a0a0a0',
    fontStyle: 'italic',
  },
  cardsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem', 
    width: '100%',
    maxWidth: '1400px', 
    marginBottom: '5rem', // Reduced margin so footer image can overlap if needed
  },
  cardContainer: {
    width: '100%',
    height: '800px', 
    borderRadius: '40px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
    transition: 'transform 0.3s ease',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  cardContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  cardLogo: {
    width: '140px',
    height: 'auto',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '3.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  cardDesc: {
    fontFamily: 'sans-serif',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    opacity: 0.9,
  },

  /* --- FOOTER SECTION (EXPANDED) --- */
  footerSection: {
    position: 'relative',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // INCREASED HEIGHT: Allows large ornament to fit fully
    minHeight: '140vh', 
    padding: '4rem 2rem 2rem 2rem',
    overflow: 'hidden',
    zIndex: 1, 
  },
  
  // IMAGE STYLING FIXED
  footerBackgroundImage: {
    position: 'absolute',
    bottom: 0, // Anchor to bottom
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
    width: '100%',
    maxWidth: '1400px', // Prevent it from getting absurdly wide on 4k screens
    height: 'auto', // Auto height preserves aspect ratio
    maxHeight: '100%', // Ensure it fits within the container
    opacity: 0.5, 
    filter: 'grayscale(100%)',
    zIndex: 0, // Behind text
    pointerEvents: 'none',
  },
  
  footerTopTextContainer: {
    textAlign: 'center',
    marginTop: '5rem', // Push down slightly from top edge
    marginBottom: 'auto', 
    color: '#e0e0e0',
    zIndex: 2, // Above image
    maxWidth: '600px',
  },
  footerScriptText: {
    fontFamily: '"Times New Roman", serif',
    fontStyle: 'italic',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    letterSpacing: '0.1em',
  },
  footerBodyText: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#888',
    lineHeight: 1.5,
  },
  
  // CTA BUTTON STYLES (Positioned Absolute)
  footerCtaText: {
    position: 'absolute',
    top: '60%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(3rem, 7vw, 6rem)', 
    letterSpacing: '0.2em',
    color: '#ffffff',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    zIndex: 2, 
    textShadow: '0 5px 20px rgba(0,0,0,0.9)', 
    // Button Reset Styles
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  
  bottomBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', 
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    fontFamily: 'sans-serif',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#888', 
    zIndex: 2,
  },
  bottomLink: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    textTransform: 'inherit',
  },
};

const NarratingStoriesPage = () => {
  const navigate = useNavigate(); // 2. Initialize navigation hook

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* SECTION 1: HERO */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <nav style={styles.nav}>
          <Link to="/" style={styles.logo}>OUI CREATIVES</Link>
          <button style={styles.menuBtn}>
            <Menu size={24} strokeWidth={1} />
          </button>
        </nav>
        <div style={styles.heroContent}>
          
          <h1 style={styles.heroTitle}>
            The Art of Narrating Stories!
          </h1>
        </div>
      </section>

      {/* SECTION 2: CARDS */}
      <section style={styles.cardsSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Lorem Ipsum</h2>
          <p style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div style={styles.cardsStack}>
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              style={{
                ...styles.cardContainer,
                backgroundImage: card.background,
                backgroundColor: card.backgroundColor,
                backgroundSize: card.backgroundSize,
                color: card.textColor,
              }}
            >
              <div style={styles.cardContent}>
                {card.logo && (
                  <img src={card.logo} alt="logo" style={styles.cardLogo} />
                )}
                {!card.logo && (
                   <h3 style={styles.cardTitle}>{card.title}</h3>
                )}
                {card.description && (
                  <span style={styles.cardDesc}>{card.description}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FOOTER */}
      <footer style={styles.footerSection}>
        
        {/* Background Image */}
        <img 
            src="/assets/brandingf.png" 
            alt="" 
            style={styles.footerBackgroundImage} 
        />

        {/* Top Text */}
        <div style={styles.footerTopTextContainer}>
          <h3 style={styles.footerScriptText}>Lorem Ipsum</h3>
          <p style={styles.footerBodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Centered CTA Button with Redirect */}
        <button 
          style={styles.footerCtaText}
          onClick={() => navigate('/consciousbusiness')} // 3. Redirects to all projects page
        >
          VIEW<br />PROJECTS
        </button>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <button onClick={scrollToTop} style={styles.bottomLink}>
            back on top
          </button>
          
          <span style={{ textAlign: 'center' }}>
            2024 © oui creatives all rights reserved
          </span>
          
          <a href="#" style={styles.bottomLink}>Follow Us</a>
        </div>

      </footer>

    </div>
  );
};

export default NarratingStoriesPage;