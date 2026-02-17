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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// --- DATA: Masonry Gallery Items ---
const galleryItems = [
  // COLUMN 1
  { id: 1, type: 'video', src: '/assets/ateliervid.mp4', alt: 'Fashion Walk', height: '600px' },
  { id: 2, type: 'image', src: '/assets/FL-38.jpg', alt: 'Indian Jewelry Portrait', height: '400px' },
  { id: 3, type: 'image', src: '/assets/FL-3.jpg', alt: 'Dark Fashion Silhouette', height: '450px' },
  { id: 4, type: 'image', src: '/assets/FL-7.jpg', alt: 'Yellow Lehenga', height: '500px' },
  // COLUMN 2
  { id: 5, type: 'image', src: '/assets/FL-59.jpg', alt: 'Veil Detail', height: '400px' },
  { id: 6, type: 'video', src: '/assets/ateliervid2.mp4', alt: 'Fashion Motion', height: '650px' },
  { id: 7, type: 'image', src: '/assets/FL-14.jpg', alt: 'Palace Arch', height: '500px' },
  { id: 8, type: 'image', src: '/assets/FL-33.jpg', alt: 'Gold Details', height: '450px' },
  // COLUMN 3
  { id: 9, type: 'image', src: '/assets/FL-55.jpg', alt: 'Red Bridal Wear', height: '450px' },
  { id: 10, type: 'image', src: '/assets/FL-40.jpg', alt: 'Luxury Interiors', height: '400px' },
  { id: 11, type: 'image', src: '/assets/FL-54.jpg', alt: 'Green Dress Pattern', height: '400px' },
  { id: 12, type: 'video', src: '/assets/ateliervid3.mp4', alt: 'Slow Motion Twirl', height: '600px' },
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
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#e0e0e0',
  },
  // --- HERO SECTION ---
  heroSection: {
    paddingTop: '20vh',
    paddingBottom: '15vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    backgroundImage: 'url("/assets/dark-damask-pattern.png")', 
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
  },
  heroTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '3rem',
    letterSpacing: '0.3em',
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
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.8rem',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: '#e0e0e0',
    marginBottom: '1.5rem',
  },
  atelierSubtitle: {
    fontSize: '0.9rem',
    color: '#a0a0a0',
    maxWidth: '650px',
    margin: '0 auto 6rem auto',
    lineHeight: '1.6',
    letterSpacing: '0.05em',
  },
  // --- MASONRY GALLERY ---
  gallerySection: {
    padding: '0 2rem 0rem 2rem', // Reduced bottom padding to flow into final section
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#050505',
  },
  masonryGrid: {
    columnCount: 3,
    columnGap: '1.5rem',
  },
  galleryItemWrapper: {
    breakInside: 'avoid', 
    marginBottom: '1.5rem',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative' as const,
    backgroundColor: '#0a0a0a',
  },
  galleryMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    filter: 'grayscale(20%) contrast(110%)',
    transition: 'filter 0.5s ease',
  },
  // --- FINAL SECTION (Vision + Next Project) ---
  finalSection: {
    textAlign: 'center',
    padding: '8rem 2rem 4rem 2rem',
    // UPDATED GRADIENT: Matches the deep maroon/violet fade from the screenshot
    background: 'linear-gradient(to bottom, #000000 0%, #0f0205 50%, #2b0b12 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  finalBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.15, // Subtle opacity for background effect
    zIndex: 0, // Behind content
    pointerEvents: 'none',
  },
  finalContentWrapper: {
    position: 'relative',
    zIndex: 1, // Ensure content is above background image
  },
  finalImageWrapper: {
    maxWidth: '500px',
    margin: '0 auto 3rem auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  finalImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    filter: 'grayscale(100%) contrast(110%)', // Black and white effect
  },
  finalText: {
    fontSize: '0.9rem',
    color: '#d0d0d0',
    maxWidth: '550px',
    margin: '0 auto 8rem auto',
    lineHeight: '1.7',
    letterSpacing: '0.03em',
    fontWeight: 300,
  },
  nextProjectTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '5rem',
    letterSpacing: '0.2em',
    color: '#e0e0e0',
    fontWeight: 400,
    marginBottom: '6rem',
    lineHeight: 1.1,
    textTransform: 'uppercase',
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @media (max-width: 1024px) {
            .masonry-grid-res { column-count: 2 !important; }
          }
          @media (max-width: 768px) {
            .hero-title-res { font-size: 1.8rem !important; letter-spacing: 0.2em !important; }
            .atelier-title-res { font-size: 1.4rem !important; letter-spacing: 0.2em !important; }
            .masonry-grid-res { column-count: 1 !important; }
            .next-title-res { font-size: 3rem !important; }
            .footer-bar-res { flexDirection: column; gap: 1.5rem; }
            .final-image-wrapper-res { max-width: 100% !important; }
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
        <button style={styles.menuBtn}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </motion.nav>

      {/* --- Hero Section --- */}
      <motion.header 
        style={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div style={styles.frameGraphicWrapper} variants={fadeInUp}>
           <img src="/assets/hypnotique-frame.png" alt="Hypnotique Frame" style={styles.frameGraphic} />
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
        variants={staggerContainer}
      >
        <motion.h2 className="atelier-title-res" style={styles.atelierTitle} variants={fadeInUp}>
          L'ATELIER SIGNATURE
        </motion.h2>
        <motion.p style={styles.atelierSubtitle} variants={fadeInUp}>
          Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
        </motion.p>
      </motion.section>

      {/* --- MASONRY GALLERY SECTION --- */}
      <section style={styles.gallerySection}>
        <motion.div 
          className="masonry-grid-res" 
          style={styles.masonryGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id} 
              style={styles.galleryItemWrapper} 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{...styles.galleryMedia, height: item.height || 'auto'}}
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
        </motion.div>
      </section>

      {/* --- FINAL SECTION (Image + Text + Next Project) --- */}
      <motion.footer 
        style={styles.finalSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {/* Background Image for Footer */}
        <img 
          src="/assets/brandingf.png" 
          alt="" 
          style={styles.finalBackgroundImage} 
        />

        <div style={styles.finalContentWrapper}>
            {/* Large Central Image */}
            <div className="final-image-wrapper-res" style={styles.finalImageWrapper}>
                {/* Stock image matching the vibe of twirling dress in palace */}
                <img 
                    src="/assets/FL-49.jpg" 
                    alt="Brand Vision" 
                    style={styles.finalImage} 
                />
            </div>

            {/* Vision Text */}
            <p style={styles.finalText}>
                Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
            </p>

            {/* Next Project Title */}
            <Link to="/cripsy" className="inline-block hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <h2 className="next-title-res" style={styles.nextProjectTitle}>
            CONTACT US
            </h2>
            </Link>

            {/* Bottom Bar */}
            <div className="footer-bar-res" style={styles.footerBar}>
            <button onClick={scrollToTop} style={styles.backTopBtn}>
                back on top <ArrowUp size={14} />
            </button>
            
            <span style={{ opacity: 0.8 }}>2024 © oui creatives all rights reserved</span>
            
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Follow Us</a>
            </div>
        </div>
      </motion.footer>

    </div>
  );
};

export default AtelierPage;