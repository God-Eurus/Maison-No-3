import React, { useEffect, useLayoutEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- PAGE TRANSITION VARIANTS ---
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9], 
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// --- SCROLL ANIMATIONS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// --- DATA: CURATED COLUMNS ---
const column1 = [
  { id: 1, type: 'video', src: '/assets/ateliervid.mp4', alt: 'Fashion Walk', height: '650px' },
  { id: 2, type: 'image', src: '/assets/FL-38.jpg', alt: 'Indian Jewelry Portrait', height: '400px' },
  { id: 3, type: 'image', src: '/assets/FL-3.jpg', alt: 'Dark Fashion Silhouette', height: '450px' },
  { id: 4, type: 'image', src: '/assets/FL-7.jpg', alt: 'Yellow Lehenga', height: '500px' },
];

const column2 = [
  { id: 5, type: 'image', src: '/assets/FL-59.jpg', alt: 'Veil Detail', height: '400px' },
  { id: 6, type: 'video', src: '/assets/ateliervid2.mp4', alt: 'Fashion Motion', height: '650px' },
  { id: 7, type: 'image', src: '/assets/FL-14.jpg', alt: 'Palace Arch', height: '500px' },
  { id: 8, type: 'image', src: '/assets/FL-33.jpg', alt: 'Gold Details', height: '450px' },
];

const column3 = [
  { id: 9, type: 'image', src: '/assets/FL-55.jpg', alt: 'Red Bridal Wear', height: '500px' },
  { id: 10, type: 'image', src: '/assets/FL-40.jpg', alt: 'Luxury Interiors', height: '450px' },
  { id: 11, type: 'image', src: '/assets/FL-54.jpg', alt: 'Green Dress Pattern', height: '400px' },
  { id: 12, type: 'video', src: '/assets/ateliervid3.mp4', alt: 'Slow Motion Twirl', height: '650px' },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#050505',
    minHeight: '100vh',
    color: '#e0e0e0',
    fontFamily: '"Breadley Sans", "Helvetica Neue", sans-serif',
    position: 'relative',
    overflowX: 'hidden',
  },
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
    color: '#e0e0e0',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  // --- HERO SECTION ---
  heroSection: {
    minHeight: '100vh', 
    paddingTop: '20vh',
    paddingBottom: '15vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    backgroundImage: 'url("/assets/section6-bg.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
  },
  frameGraphicWrapper: {
    marginBottom: '2rem',
    opacity: 0.8,
  },
  frameGraphic: {
    height: '250px',
    objectFit: 'contain',
    backgroundColor: 'transparent', 
  },
  heroTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '4rem',
    letterSpacing: '0.4em',
    color: '#e0e0e0',
    textTransform: 'uppercase',
    fontWeight: 400,
    zIndex: 2,
  },
  // --- L'ATELIER SIGNATURE SECTION ---
  atelierSection: {
    padding: '4rem 2rem 4rem 2rem', 
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#050505',
  },
  atelierTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '2.3rem',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: '#e0e0e0',
    marginBottom: '1.5rem',
  },
  atelierSubtitle: {
    fontSize: '1.3rem',
    color: '#a0a0a0',
    maxWidth: '650px',
    margin: '0 auto 6rem auto',
    lineHeight: '1.6',
    letterSpacing: '0.05em',
  },
  // --- MASONRY GALLERY ---
  gallerySection: {
    padding: '0 2rem 0rem 2rem',
    maxWidth: '1300px',
    margin: '0 auto',
    backgroundColor: '#050505',
  },
  flexGrid: {
    display: 'flex',
    gap: '1.5rem',
    width: '100%',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
  },
  galleryItemWrapper: {
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative' as const,
    backgroundColor: '#0a0a0a',
    width: '100%',
  },
  galleryMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    filter: 'grayscale(20%) contrast(110%)',
    transition: 'filter 0.5s ease',
  },
  // --- FINAL SECTION ---
  finalSection: {
    textAlign: 'center',
    padding: '4rem 2rem 2rem 2rem', // Reduced bottom padding so the bottom bar sticks to the absolute bottom edge
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '130vh', // INCREASED OVERALL FOOTER HEIGHT
  },
  finalBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.15, 
    zIndex: 0, 
    pointerEvents: 'none',
  },
  finalContentWrapper: {
    position: 'relative',
    zIndex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1, // Allows this wrapper to grow and push the footer bar down
    width: '100%',
  },
  finalImageWrapper: {
    maxWidth: '500px',
    width: '100%', 
    margin: '0 auto 4rem auto', 
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  finalImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    filter: 'grayscale(100%) contrast(110%)',
  },
  finalTextContainer: {
    maxWidth: '800px', 
    margin: '0 auto 6rem auto',
  },
  finalText: {
    fontSize: '1.5rem',
    color: '#d0d0d0',
    lineHeight: '1.6',
    letterSpacing: '0.03em',
    fontWeight: 300,
    margin: 0,
  },
  nextProjectTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '7rem',
    letterSpacing: '0.2em',
    color: '#e0e0e0',
    fontWeight: 400,
    marginBottom: '6rem',
    lineHeight: 1.1,
    textTransform: 'uppercase',
  },
  finalSubtitleText: {
    fontSize: '1.5rem',
    color: '#d0d0d0',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    letterSpacing: '0.03em',
    fontWeight: 300,
  },
  footerBarContainer: {
    width: '100%',
    marginTop: 'auto', // Pushes the bottom bar to the absolute bottom of the container
    paddingTop: '4rem',
  },
  footerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: '#a0a0a0',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    paddingTop: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    borderTop: '1px solid rgba(255,255,255,0.05)',
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

const AtelierPage = () => {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderColumn = (items: typeof column1, colIndex: number) => (
    <div className="flex-col-res" style={styles.flexColumn}>
      {items.map((item, index) => (
        <motion.div 
          key={item.id} 
          style={{...styles.galleryItemWrapper, height: item.height}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8, 
                delay: (colIndex * 0.05) + (index * 0.05), 
                ease: [0.22, 1, 0.36, 1] 
              } 
            }
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              style={styles.galleryMedia}
            />
          ) : (
            <img 
              src={item.src} 
              alt={item.alt} 
              style={styles.galleryMedia} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div 
      style={styles.container}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <style>
        {`
          @media (max-width: 1024px) {
            .flex-grid-res { flex-direction: column !important; }
            .flex-col-res { width: 100% !important; }
            .final-text-res { font-size: 1.2rem !important; }
          }
          @media (max-width: 768px) {
            .hero-title-res { font-size: 1.8rem !important; letter-spacing: 0.2em !important; }
            .atelier-title-res { font-size: 1.4rem !important; letter-spacing: 0.2em !important; }
            .next-title-res { font-size: 3rem !important; }
            .footer-bar-res { flexDirection: column; gap: 1.5rem; }
            .final-image-wrapper-res { max-width: 90% !important; }
            .final-text-res { font-size: 1rem !important; padding: 0 1rem; }
          }
        `}
      </style>

      {/* --- Header --- */}
      <motion.nav 
        style={styles.nav}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link to="/" style={styles.logo}>OUI CREATIVES</Link>
      </motion.nav>

      {/* --- Hero Section --- */}
      <motion.header 
        style={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div style={styles.frameGraphicWrapper} variants={fadeInUp}>
        </motion.div>
        <motion.h1 className="hero-title-res" style={styles.heroTitle} variants={fadeInUp}>
          Hypnotique Frames
        </motion.h1>
      </motion.header>

      {/* --- L'Atelier Signature Section --- */}
      <motion.section 
        style={styles.atelierSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <motion.h2 className="atelier-title-res" style={styles.atelierTitle} variants={fadeInUp}>
          L'ATELIER SIGNATURE
        </motion.h2>
        <motion.p style={styles.atelierSubtitle} variants={fadeInUp}>
          Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
        </motion.p>
      </motion.section>

      {/* --- SYMMETRICAL FLEX GRID SECTION --- */}
      <section style={styles.gallerySection}>
        <div className="flex-grid-res" style={styles.flexGrid}>
            {renderColumn(column1, 0)}
            {renderColumn(column2, 1)}
            {renderColumn(column3, 2)}
        </div>
      </section>

      {/* --- FINAL SECTION --- */}
      <motion.footer 
        style={styles.finalSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <img 
          src="/assets/brandingf.png" 
          alt="" 
          style={styles.finalBackgroundImage} 
        />

        <div style={styles.finalContentWrapper}>
            <div className="final-image-wrapper-res" style={styles.finalImageWrapper}>
                <img 
                    src="/assets/FL-49.jpg" 
                    alt="Brand Vision" 
                    style={styles.finalImage} 
                />
            </div>

            <div style={styles.finalTextContainer}>
                <p className="final-text-res" style={styles.finalText}>
                    In the end, what remains is not the image, but the feeling it carries.<br/>
                    The Chamber of Light exists for visuals that continue to live beyond their first glance.
                </p>
            </div>

            <Link to="/thirdhall" className="inline-block hover:scale-[1.02] transition-transform duration-500 cursor-pointer" style={{ textDecoration: 'none' }}>
                <h2 className="next-title-res" style={styles.nextProjectTitle}>
                    Enter the Chamber
                </h2>
            </Link>

            <div style={{...styles.finalTextContainer, marginBottom: '4rem'}}>
                <p className="final-text-res" style={styles.finalSubtitleText}>
                    If your story seeks a visual language shaped by light and intention, we invite you to begin a dialogue.
                </p>
            </div>

            {/* This container uses marginTop: auto to push the bar to the bottom */}
            <div style={styles.footerBarContainer}>
                <div className="footer-bar-res" style={styles.footerBar}>
                    <button onClick={scrollToTop} style={styles.backTopBtn}>
                        back on top <ArrowUp size={14} />
                    </button>
                    
                    <span style={{ opacity: 0.8 }}>2024 © oui creatives all rights reserved</span>
                    
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Follow Us</a>
                </div>
            </div>
        </div>
      </motion.footer>

    </motion.div>
  );
};

export default AtelierPage;