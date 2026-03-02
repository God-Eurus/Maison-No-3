import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- 1. CONFIGURATION: CARDS DATA ---
const cardsData = [
  {
    id: 1,
    // title: "ZOHARET",
    background: 'url("/assets/zoharet.png")', 
    backgroundColor: '#e3d0b9', 
    backgroundSize: 'cover',
    textColor: '#5c3a21', 
    description: '',
    link: '/zoharet'
  },
  {
    id: 2,
    background: 'url("/assets/medafem.png")',
    backgroundColor: '#8da399', 
    backgroundSize: 'cover',
    textColor: '#2d4a3e', 
    description: '',
    link: '/medafemone'
  },
  {
    id: 3,
    background: 'url("/assets/malachi.png")',
    backgroundColor: '#1a1a1a', 
    backgroundSize: 'cover',
    description: 'Future Project',
    link: '/malachione'
  },
];

// --- 2. STYLES ---
const styles: { [key: string]: React.CSSProperties } = {
  // Global Page Container
  pageContainer: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflowX: 'clip', // Changed from hidden to clip to ensure sticky works perfectly across all browsers
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
    justifyContent: 'center', // Centered since menu icon is gone
    alignItems: 'center',
    padding: '2rem 3rem',
    zIndex: 10,
  },
  logo: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
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
  heroTitle: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
    letterSpacing: '0.3em',
    fontWeight: 300,
    color: '#ffffff',
    textTransform: 'uppercase',
    lineHeight: 1.3,
    textShadow: '0 2px 20px rgba(0,0,0,0.9)',
    pointerEvents: 'none',
  },

  /* --- STORYBOOK SECTION --- */
  storySection: {
    backgroundColor: '#000000',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  storyImageContainer: {
    width: '100%',
    height: '90vh', 
    overflow: 'hidden',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  storyTextContainer: {
    width: '100%',
    maxWidth: '1000px',
    padding: '8rem 2rem 4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    textAlign: 'center',
  },
  storyTextLine1: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '1.4rem',
    color: '#e0e0e0',
    letterSpacing: '0.05em',
    lineHeight: 1.3,
    margin: 0,
  },
  storyTextLine2: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '1.4rem',
    color: '#b0b0b0',
    lineHeight: 1.3,
    letterSpacing: '0.05em',
    margin: 0,
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
  cardsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem', 
    width: '100%',
    maxWidth: '1400px', 
    marginBottom: '5rem',
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
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '3.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  cardDesc: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    opacity: 0.9,
  },

  /* --- FOOTER SECTION --- */
  footerSection: {
    position: 'relative',
    backgroundColor: '#050505', // Changed to match cardsSection for seamless blend
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '120vh', // Increased minHeight
    padding: '10rem 2rem 2rem 2rem', // Increased top padding to blend better
    overflow: 'hidden',
    zIndex: 1, 
  },
  footerWatermark: {
    position: 'absolute',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    height: '100%', // Decreased height slightly
    opacity: 0.3,
    zIndex: 0, 
    pointerEvents: 'none',
  },
  footerTopTextContainer: {
    textAlign: 'center',
    marginTop: '-4vh', 
    marginBottom: 'auto', 
    color: '#e0e0e0',
    zIndex: 2, 
    maxWidth: '800px',
  },
  footerBodyText: {
    fontFamily: '"Times New Roman", serif', // Intentionally left as requested
    fontWeight: 300,
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
    fontStyle: 'italic',
    color: '#e0e0e0',
    lineHeight: 1.5,
    margin: 0,
  },
  footerMainContent: {
    position: 'relative',
    zIndex: 2, 
    textAlign: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    marginTop: 'auto',
    marginBottom: '8rem',
    transition: 'opacity 0.3s ease',
  },
  footerTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(2.5rem, 8vw, 6.5rem)', 
    letterSpacing: '0.25em',
    color: '#ffffff',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    margin: 0,
  },
  footerSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(1.1rem, 1.7vw, 1.2rem)',
    color: '#e0e0e0',
    letterSpacing: '0.05em',
    marginBottom: 'auto',
    zIndex: 2,
    textAlign: 'center',
    padding: '0 1rem', 
  },
  bottomBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', 
    paddingTop: '2rem',
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
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
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* MOBILE RESPONSIVE CSS OVERRIDES */}
      <style>
        {`
          /* Ensure Breadley Sans is loaded */
          @font-face {
            font-family: 'Breadley Sans';
            src: url('/fonts/BreadleySans.woff2') format('woff2'),
                 url('/fonts/BreadleySans.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @media (max-width: 768px) {
            .nav-responsive {
              padding: 1.5rem !important;
            }
            .hero-title-responsive {
              font-size: 2.2rem !important;
              width: 90% !important;
            }
            .story-img-responsive {
              height: 50vh !important;
            }
            .story-txt-responsive {
              padding: 4rem 1.5rem !important;
              gap: 2rem !important;
            }
            .cards-sec-responsive {
              padding: 4rem 1rem 0rem 1rem !important;
            }
            .cards-stack-responsive {
              gap: 3rem !important;
            }
            .card-cont-responsive {
              height: 60vh !important; 
              min-height: 400px !important;
              border-radius: 24px !important;
            }
            .card-title-responsive {
              font-size: 2.2rem !important;
            }
            /* MOBILE FOOTER OVERRIDES - Tighter, cleaner spacing */
            .footer-sec-responsive {
              padding: 5rem 1.5rem 2rem 1.5rem !important;
              min-height: auto !important;
              gap: 2.5rem !important; 
            }
            .footer-top-text-responsive,
            .footer-main-content-responsive,
            .footer-subtitle-responsive {
              margin: 0 !important;
            }
            .footer-title-responsive {
              font-size: 2.2rem !important;
            }
            .bottom-bar-responsive {
              flex-direction: column !important;
              justify-content: center !important;
              gap: 1.5rem !important;
              text-align: center !important;
              margin-top: 2rem !important;
            }
          }
        `}
      </style>

      {/* SECTION 1: HERO */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <nav style={styles.nav} className="nav-responsive">
          
        </nav>
        <div style={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: '-50%', x: '-50%' }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={styles.heroTitle} 
            className="hero-title-responsive"
          >
            The Art of Narrating Stories!
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: NEW STORYBOOK SECTION */}
      <section style={styles.storySection}>
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.5 }}
    style={styles.storyImageContainer} 
    className="story-img-responsive"
  >
    {/* Replaced <img> with <video> */}
    <video 
      src="/assets/narratingvideo.mp4" /* Change this to the path of your video file */
      style={styles.storyImage} 
      autoPlay
      loop
      muted
      playsInline
    />
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
    style={styles.storyTextContainer} 
    className="story-txt-responsive"
  >
    <p style={styles.storyTextLine1}>
      Some stories are loud. The ones that last are often deeply imagined.
    </p>
    <p style={styles.storyTextLine2}>
      We are drawn to narratives that unfold gently, stories that invite discovery rather than demand attention, but build curiosity. Like a well-told fairytale, they linger in memory, carried through emotion rather than explanation.
    </p>
  </motion.div>
</section>

      {/* SECTION 3: CARDS */}
      <section style={styles.cardsSection} className="cards-sec-responsive">
        <div style={styles.cardsStack} className="cards-stack-responsive">
          {cardsData.map((card, index) => (
            <motion.div 
              key={card.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              onClick={() => {
                if (card.link) {
                  navigate(card.link);
                }
              }}
              className="card-cont-responsive"
              whileHover={{ scale: 0.98 }}
              style={{
                ...styles.cardContainer,
                position: 'sticky', // ADDED: Anchors the card during scroll
                top: `calc(10vh + ${index * 40}px)`, // ADDED: Increments the offset so they stack visibly underneath each other
                backgroundImage: card.background,
                backgroundColor: card.backgroundColor,
                backgroundSize: card.backgroundSize,
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                color: card.textColor,
                cursor: card.link ? 'pointer' : 'default', 
              }}
            >
              <div style={styles.cardContent}>
                {card.logo && (
                  <img src={card.logo} alt="logo" style={styles.cardLogo} />
                )}
                {!card.logo && (
                   <h3 style={styles.cardTitle} className="card-title-responsive">{card.title}</h3>
                )}
                {card.description && (
                  <span style={styles.cardDesc}>{card.description}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FOOTER */}
      <footer style={styles.footerSection} className="footer-sec-responsive">
        
        <img 
            src="/assets/brandingf.png" 
            alt="" 
            style={styles.footerWatermark} 
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.footerTopTextContainer} 
          className="footer-top-text-responsive"
        >
          <h4 style={styles.footerBodyText}>
            At its heart, storytelling is an act of care. To narrate a brand is to give it a soul, one<br/>that lives beyond moments and grows with time.
          </h4>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={styles.footerMainContent}
          className="footer-main-content-responsive"
          onClick={() => navigate('/consciousbusiness')}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <h2 style={styles.footerTitle} className="footer-title-responsive">SIGNATURE<br />ENGAGEMENTS</h2>
        </motion.button>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={styles.footerSubtitle}
          className="footer-subtitle-responsive"
        >
          A selection of commissions developed through close collaboration and considered form.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={styles.bottomBar} 
          className="bottom-bar-responsive"
        >
          <button onClick={scrollToTop} style={styles.bottomLink}>
            back on top
          </button>
          
          <span>
            2024 @ qui creatives all rights reserved
          </span>
          
          <a href="#" style={styles.bottomLink}>Follow Us</a>
        </motion.div>

      </footer>

    </div>
  );
};

export default NarratingStoriesPage;