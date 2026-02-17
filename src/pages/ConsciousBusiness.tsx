import React from 'react';
import { Menu, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const marqueeVariants = {
  animate: {
    x: [0, -1035], // Adjust based on content width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: [-1035, 0], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

// --- DATA: TOP MARQUEE (SDG 1-4) ---
const sdgTop = [
  { id: 1, number: '1', title: 'NO\nPOVERTY', icon: '👨‍👩‍👧‍👦' }, 
  { id: 2, number: '2', title: 'ZERO\nHUNGER', icon: '🍲' },
  { id: 3, number: '3', title: 'GOOD HEALTH\nAND WELL-BEING', icon: '🩺' },
  { id: 4, number: '4', title: 'QUALITY\nEDUCATION', icon: '📖' },
  // Duplicates
  { id: 5, number: '1', title: 'NO\nPOVERTY', icon: '👨‍👩‍👧‍👦' }, 
  { id: 6, number: '2', title: 'ZERO\nHUNGER', icon: '🍲' },
  { id: 7, number: '3', title: 'GOOD HEALTH\nAND WELL-BEING', icon: '🩺' },
  { id: 8, number: '4', title: 'QUALITY\nEDUCATION', icon: '📖' },
];

// --- DATA: BOTTOM MARQUEE (SDG 11-14) ---
const sdgBottom = [
  { id: 11, number: '11', title: 'SUSTAINABLE CITIES\nAND COMMUNITIES', icon: '🏙️' },
  { id: 12, number: '12', title: 'RESPONSIBLE\nCONSUMPTION', icon: '♾️' },
  { id: 13, number: '13', title: 'CLIMATE\nACTION', icon: '👁️' },
  { id: 14, number: '14', title: 'LIFE BELOW\nWATER', icon: '🐟' }, 
  // Duplicates
  { id: 15, number: '11', title: 'SUSTAINABLE CITIES\nAND COMMUNITIES', icon: '🏙️' },
  { id: 16, number: '12', title: 'RESPONSIBLE\nCONSUMPTION', icon: '♾️' },
  { id: 17, number: '13', title: 'CLIMATE\nACTION', icon: '👁️' },
  { id: 18, number: '14', title: 'LIFE BELOW\nWATER', icon: '🐟' }, 
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: 'linear-gradient(to bottom, #fdfbf7 0%, #f4efe9 50%, #eadcd5 100%)',
    minHeight: '100vh',
    color: '#333',
    fontFamily: '"Helvetica Neue", sans-serif',
    position: 'relative',
    overflowX: 'hidden',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '2rem 3rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 20,
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
  },
  
  // --- HEADER ---
  headerSection: {
    paddingTop: '20vh',
    paddingBottom: '4rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  scriptTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '4rem',
    color: '#333',
    fontWeight: 400,
    marginBottom: '2rem',
  },
  bodyText: {
    fontSize: '0.75rem',
    lineHeight: '2',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    maxWidth: '650px',
    margin: '0 auto',
  },

  // --- MARQUEE STYLES ---
  marqueeContainer: {
    width: '100%',
    overflow: 'hidden',
    padding: '2rem 0',
    display: 'flex',
  },
  marqueeTrack: {
    display: 'flex',
    gap: '2rem',
    paddingLeft: '2rem',
  },
  sdgCard: {
    minWidth: '280px',
    height: '280px',
    backgroundColor: '#d8c8c8', // Muted mauve
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    color: '#fff',
    flexShrink: 0,
  },
  sdgNumber: {
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: 1,
    opacity: 0.9,
    fontFamily: 'sans-serif',
  },
  sdgTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 1.2,
    marginLeft: '0.5rem',
    marginTop: '0.5rem',
    fontFamily: 'sans-serif',
  },
  sdgIconPlace: {
    fontSize: '4rem', 
    textAlign: 'center',
    marginBottom: '1rem',
  },

  // --- PROJECT STACK SECTION ---
  projectStackSection: {
    padding: '6rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  largeProjectCard: {
    width: '100%',
    maxWidth: '1000px',
    height: '500px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    position: 'relative',
  },
  cardTitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '2rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#666',
  },

  // --- "WHY NOT" SECTION ---
  whyNotSection: {
    textAlign: 'center',
    padding: '4rem 2rem 8rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  whyNotTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '3rem',
    color: '#333',
    marginBottom: '2rem',
  },
  whyNotText: {
    fontSize: '0.7rem',
    lineHeight: '1.8',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
  },
  pinkCircleButton: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, #fcebeb, #f5d0d6)',
    border: '1px solid #f0c0c0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(245, 208, 214, 0.6)',
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8a5a5a',
    textAlign: 'center',
    padding: '1rem',
  },

  // --- FOOTER ---
  footerSection: {
    padding: '4rem 2rem',
    textAlign: 'center',
    position: 'relative',
  },
  allProjectsTitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    letterSpacing: '0.2em',
    color: '#1a1a1a',
    fontWeight: 400,
    textTransform: 'uppercase',
    marginBottom: '4rem',
    cursor: 'pointer',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.6rem',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    maxWidth: '1400px',
    margin: '0 auto',
  },
};

const ConsciousBusinessPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      
      {/* Nav */}
      <nav style={styles.nav}>
        <button style={styles.menuBtn}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Header Text */}
      <motion.section 
        style={styles.headerSection}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 style={styles.scriptTitle}>Conscious Businesses</h1>
        <p style={styles.bodyText}>
          What you're building now is the Admin Command Center — the single source of truth from where the entire company is run.<br/>
          This is how serious brands avoid chaos.<br/>
          Below is a SINGLE MASTER ADMIN TABLE you can paste directly into Excel / Google Sheets and start filling links into today.
        </p>
      </motion.section>

      {/* --- TOP MARQUEE (SDG 1-4) --- */}
      <div style={styles.marqueeContainer}>
        <motion.div 
          style={styles.marqueeTrack}
          variants={marqueeVariants}
          animate="animate"
        >
          {sdgTop.map((card, index) => (
            <div key={`top-${card.id}-${index}`} style={styles.sdgCard}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={styles.sdgNumber}>{card.number}</span>
                <span style={styles.sdgTitle}>{card.title}</span>
              </div>
              <div style={styles.sdgIconPlace}>{card.icon}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- PROJECT STACK (Keza Vera / Sust Fest) --- */}
      <motion.section 
        style={styles.projectStackSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <div style={{ ...styles.largeProjectCard, backgroundColor: '#ffffff' }}>
          <h2 style={styles.cardTitle}>KEZA VERA</h2>
          <span style={styles.cardSubtitle}>UNEARTHING FLAIRS</span>
        </div>

        <div style={{ 
          ...styles.largeProjectCard, 
          background: 'linear-gradient(to bottom right, #eaffea, #dfffd6)', 
        }}>
          <h2 style={{ ...styles.cardTitle, color: '#2d5a2d' }}>SUST FEST</h2>
        </div>
      </motion.section>

      {/* --- BOTTOM MARQUEE (SDG 11-14) --- */}
      <div style={styles.marqueeContainer}>
        <motion.div 
          style={styles.marqueeTrack}
          variants={marqueeVariantsReverse} // Scrolls in opposite direction for visual interest
          animate="animate"
        >
          {sdgBottom.map((card, index) => (
            <div key={`bot-${card.id}-${index}`} style={{ ...styles.sdgCard, backgroundColor: '#cbbdbd' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={styles.sdgNumber}>{card.number}</span>
                <span style={styles.sdgTitle}>{card.title}</span>
              </div>
              <div style={styles.sdgIconPlace}>{card.icon}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- WHY NOT SECTION --- */}
      <motion.section 
        style={styles.whyNotSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 style={styles.whyNotTitle}>Why not a conscious business?</h2>
        <p style={styles.whyNotText}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <div style={styles.pinkCircleButton}>
          Get<br/>Conscious
        </div>
      </motion.section>

      {/* --- ALL PROJECTS FOOTER --- */}
      <footer style={styles.footerSection}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={styles.allProjectsTitle}>ALL<br/>PROJECTS</h2>
        </div>

        <div style={styles.bottomBar}>
          <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>back on top</span>
          <span>2024 © oui creatives all rights reserved</span>
          <span>Follow Us</span>
        </div>
      </footer>

    </div>
  );
};

export default ConsciousBusinessPage;