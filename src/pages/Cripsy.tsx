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

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    color: '#000000',
    fontFamily: '"Breadley Sans", "Helvetica Neue", sans-serif',
    position: 'relative',
    overflowX: 'hidden',
  },
  // --- NAVIGATION ---
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 3rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 20,
  },
  logo: {
    fontSize: '0.8rem',
    letterSpacing: '0.3em',
    color: '#ffffff',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#ffffff',
  },
  // --- HERO SECTION ---
  heroSection: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#8B0000', 
    backgroundImage: 'url("/assets/red-floral-hero.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '4rem',
    letterSpacing: '0.4em',
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: 400,
    zIndex: 2,
    marginTop: '2rem',
  },
  // --- L'ATELIER SIGNATURE SECTION ---
  atelierSection: {
    padding: '6rem 2rem 4rem 2rem',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    // We keep the section relative so the lotus can be absolutely positioned inside it
  },
  // Lotus Decoration (Top Right)
  lotusDecorationRight: {
    position: 'absolute',
    top: '-50px',
    right: '-150px',
    width: '600px',
    opacity: 0.15, // Faint watermark style
    zIndex: 0,
    pointerEvents: 'none',
  },
  sectionTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '2rem',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: '#1a1a1a',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2,
  },
  sectionSubtitle: {
    fontSize: '0.9rem',
    color: '#4a4a4a',
    maxWidth: '650px',
    margin: '0 auto 4rem auto',
    lineHeight: '1.6',
    letterSpacing: '0.02em',
    position: 'relative',
    zIndex: 2,
  },
  showcaseWrapper: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto 6rem auto',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
    position: 'relative',
    zIndex: 2,
  },
  showcaseImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  // --- ART OF CRUNCH SECTION ---
  crunchSection: {
    padding: '0 2rem 6rem 2rem',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  // --- FOOTER / NEXT PROJECT ---
  footerSection: {
    textAlign: 'center',
    padding: '4rem 2rem 2rem 2rem',
    background: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  // Lotus Decoration (Bottom Left)
  lotusDecorationLeft: {
    position: 'absolute',
    bottom: '-50px',
    left: '-100px',
    width: '600px',
    opacity: 0.6,
    zIndex: 1,
    pointerEvents: 'none',
  },
  nextProjectTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '5rem',
    letterSpacing: '0.2em',
    color: '#1a1a1a',
    fontWeight: 400,
    marginBottom: '6rem',
    lineHeight: 1.1,
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: 2,
  },
  footerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    paddingTop: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    borderTop: '1px solid #e5e5e5',
    position: 'relative',
    zIndex: 2,
  },
  backTopBtn: {
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'inherit',
  },
};

const CripsyyPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @media (max-width: 768px) {
            .hero-title-res { font-size: 2.5rem !important; letter-spacing: 0.2em !important; }
            .section-title-res { font-size: 1.5rem !important; letter-spacing: 0.2em !important; }
            .next-title-res { font-size: 3rem !important; }
            .footer-bar-res { flexDirection: column; gap: 1.5rem; }
            .lotus-right-res { width: 300px !important; right: -50px !important; top: -20px !important; }
            .lotus-left-res { width: 300px !important; left: -50px !important; }
          }
        `}
      </style>

      {/* --- Navigation --- */}
      <motion.nav 
        style={styles.nav}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link to="/" style={styles.logo}>OUI CREATIVES</Link>
        <button style={styles.menuBtn}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </motion.nav>

      {/* --- 1. HERO SECTION --- */}
      <motion.header 
        style={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className="hero-title-res" style={styles.heroTitle} variants={fadeInUp}>
          CRIPSYY
        </motion.h1>
      </motion.header>

      {/* --- 2. L'ATELIER SIGNATURE SECTION --- */}
      <section style={styles.atelierSection}>
        
        {/* Background Lotus Decoration (Right Side) */}
        <div className="lotus-right-res" style={styles.lotusDecorationRight}>
           <img 
             src="/assets/pink-lotus-right.png" 
             alt="Lotus Decoration" 
             style={{ width: '100%', display: 'block' }} 
           />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-title-res" style={styles.sectionTitle} variants={fadeInUp}>
            L'ATELIER SIGNATURE
          </motion.h2>
          
          <motion.p style={styles.sectionSubtitle} variants={fadeInUp}>
            Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
          </motion.p>

          {/* Stationery Mockup Image */}
          <motion.div style={styles.showcaseWrapper} variants={fadeInUp}>
            {/* Stock image resembling red/cream stationery branding */}
            <img 
              src="https://images.unsplash.com/photo-1586075010923-2dd45eeed858?q=80&w=1200&auto=format&fit=crop" 
              alt="Cripsyy Stationery Mockup" 
              style={styles.showcaseImage} 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- 3. ART OF CRUNCH SECTION (Second Block) --- */}
      <section style={styles.crunchSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Vision Text Repeated */}
          <motion.p style={styles.sectionSubtitle} variants={fadeInUp}>
            Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
          </motion.p>

          {/* Book/Crunch Mockup Image */}
          <motion.div style={styles.showcaseWrapper} variants={fadeInUp}>
            <img 
              src="https://images.unsplash.com/photo-1629904853716-f004b377c814?q=80&w=1200&auto=format&fit=crop" 
              alt="The Art of Crunch" 
              style={styles.showcaseImage} 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- 4. FOOTER / NEXT PROJECT --- */}
      <motion.footer 
        style={styles.footerSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Background Lotus Decoration (Left Side) */}
        <div className="lotus-left-res" style={styles.lotusDecorationLeft}>
           <img 
             src="/assets/pink-lotus-left.png" 
             alt="Lotus Decoration" 
             style={{ width: '100%', display: 'block' }} 
           />
        </div>

        <h2 className="next-title-res" style={styles.nextProjectTitle}>
          NEXT<br/>PROJECT
        </h2>

        <div className="footer-bar-res" style={styles.footerBar}>
          <button onClick={scrollToTop} style={styles.backTopBtn}>
            back on top <ArrowUp size={14} />
          </button>
          
          <span style={{ opacity: 0.8 }}>2024 © oui creatives all rights reserved</span>
          
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Follow Us</a>
        </div>
      </motion.footer>

    </div>
  );
};

export default CripsyyPage;