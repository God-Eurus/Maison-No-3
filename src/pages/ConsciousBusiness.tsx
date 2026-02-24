import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const marqueeVariants = {
  animate: {
    x: [0, -1560], 
    transition: { x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: [-1560, 0], 
    transition: { x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } },
  },
};

const projectCardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -10, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageScaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } }
};

const pinkButtonVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 10, 
    boxShadow: '0 10px 25px rgba(245, 208, 214, 0.9)',
    transition: { type: "spring", stiffness: 300, damping: 15 } 
  },
  tap: { scale: 0.95 }
};

// --- DATA ---
const sdgTop = [
  { id: 1, number: '1', title: 'NO\nPOVERTY', image: '/assets/sus1.png' }, 
  { id: 2, number: '2', title: 'ZERO\nHUNGER', image: '/assets/sus2.png' },
  { id: 3, number: '3', title: 'GOOD HEALTH\nAND WELL-BEING', image: '/assets/sus3.png' },
  { id: 4, number: '4', title: 'QUALITY\nEDUCATION', image: '/assets/sus4.png' },
  { id: 5, number: '5', title: 'NO\nPOVERTY', image: '/assets/sus1.png' }, 
];

const sdgBottom = [
  { id: 11, number: '11', title: 'SUSTAINABLE CITIES\nAND COMMUNITIES', image: '/assets/sus11.png' },
  { id: 12, number: '12', title: 'RESPONSIBLE\nCONSUMPTION', image: '/assets/sus12.png' },
  { id: 13, number: '13', title: 'CLIMATE\nACTION', image: '/assets/sus13.png' },
  { id: 14, number: '14', title: 'LIFE\nBELOW WATER', image: '/assets/sus14.png' },
  { id: 15, number: '15', title: 'LIFE\nON LAND', image: '/assets/sus15.png' },
];

const projectsData = [
  {
    id: 1,
    title: 'KEZAVERA',
    link: '/kezavera',
    image: '/assets/kezavera.png',
    textColor: '#ffffff'
  },
  {
    id: 2,
    title: 'AIA',
    link: '/aia',
    image: '/assets/aia.png',
    textColor: '#ffffff'
  },
  {
    id: 3,
    title: 'SUST FEST',
    link: '/sust-fest',
    image: '/assets/susfest.png',
    textColor: '#ffffff'
  }
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: 'linear-gradient(to bottom, #fdfbf7 0%, #f4efe9 50%, #eadcd5 100%)',
    minHeight: '100vh',
    color: '#333',
    fontFamily: '"Breadley Sans", sans-serif',
    position: 'relative',
  },

  // --- NAV STYLES ---
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 3rem',
    zIndex: 10,
  },
  logoImage: {
    height: '50px', // Adjust this value to perfectly size your logo image
    width: 'auto',
    objectFit: 'contain',
  },
  
  headerSection: {
    position: 'relative',
    minHeight: '80vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '4rem',
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden', 
  },
  headerContentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  scriptTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: 'clamp(3rem, 6vw, 5rem)', 
    color: '#333',
    fontWeight: 400,
    marginBottom: '2.5rem',
  },
  bodyText: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
    lineHeight: '1.8',
    color: '#333', 
    letterSpacing: '0.03em',
    maxWidth: '850px',
    margin: '0 auto',
  },
  
  heroImageRight: {
    position: 'absolute',
    right: '-0.1%',
    top: '15%',
    width: 'clamp(150px, 20vw, 350px)',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
    pointerEvents: 'none',
  },
  heroImageLeft: {
    position: 'absolute',
    left: '',
    top: '-2rem', 
    width: 'clamp(150px, 20vw, 350px)',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
    pointerEvents: 'none',
  },

  marqueeContainerTop: {
    width: '75%', 
    marginLeft: 'auto', 
    overflow: 'hidden',
    padding: '2rem 0',
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
  },
  marqueeContainerBottom: {
    width: '75%', 
    marginRight: 'auto', 
    overflow: 'hidden',
    padding: '2rem 0',
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
  },
  marqueeTrack: {
    display: 'flex',
    width: 'max-content', 
    gap: '2rem',
    paddingLeft: '2rem',
  },
  sdgCard: {
    minWidth: '280px',
    height: '280px',
    backgroundColor: '#cecece', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    color: '#fff',
    flexShrink: 0,
    borderRadius: '0px', 
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  sdgNumber: {
    fontSize: '3.5rem',
    fontWeight: '300', 
    lineHeight: 1,
    opacity: 0.9,
    fontFamily: '"Breadley Sans", sans-serif',
  },
  sdgTitle: {
    fontSize: '0.9rem',
    fontWeight: '300', 
    textTransform: 'uppercase',
    lineHeight: 1.2,
    marginLeft: '0.5rem',
    marginTop: '0.5rem',
    fontFamily: '"Breadley Sans", sans-serif',
    whiteSpace: 'pre-line',
  },
  sdgImage: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    alignSelf: 'center',
    marginBottom: '1rem',
  },

  projectStackSection: {
    padding: '6rem 2rem 15rem 2rem', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  },
  largeProjectLink: {
    width: '100%',
    maxWidth: '1200px', 
    textDecoration: 'none',
    display: 'block',
  },
  largeProjectCard: {
    width: '100%',
    height: '80vh', 
    minHeight: '600px', 
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  cardBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    transition: 'background-color 0.4s ease',
  },
  cardContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  cardTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '2.5rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },

  whyNotSection: {
    textAlign: 'center',
    padding: '4rem 2rem 8rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  whyNotTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '3.5rem', 
    color: '#333',
    marginBottom: '2rem',
  },
  whyNotText: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '0.75rem',
    lineHeight: '1.8',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
  },

  footerSection: {
    padding: '4rem 2rem',
    textAlign: 'center',
    position: 'relative',
  },
  allProjectsTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    letterSpacing: '0.2em',
    color: '#1a1a1a',
    fontWeight: 300,
    textTransform: 'uppercase',
    marginBottom: '4rem',
    cursor: 'pointer',
    display: 'inline-block',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '0.65rem',
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
      <style>
        {`
          @font-face {
            font-family: 'Breadley Sans';
            src: url('/fonts/BreadleySans.woff2') format('woff2'),
                 url('/fonts/BreadleySans.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          html, body {
            scroll-behavior: smooth;
          }

          @media (max-width: 768px) {
            .responsive-nav {
              padding: 1.5rem !important;
            }
            .responsive-logo {
              height: 40px !important; /* Slightly smaller logo on mobile */
            }
            .responsive-marquee {
              width: 100% !important;
            }
            .responsive-sdg-card {
              min-width: 200px !important;
              height: 200px !important;
              padding: 1.2rem !important;
            }
            .responsive-sdg-num {
              font-size: 2.5rem !important;
            }
            .responsive-sdg-img {
              width: 70px !important;
              height: 70px !important;
              margin-bottom: 0.5rem !important;
            }

            /* Responsive Hero Images */
            .responsive-hero-img-right {
              width: 120px !important;
              top: 5% !important;
            }
            .responsive-hero-img-left {
              width: 120px !important;
            }

            /* Responsive Cards */
            .responsive-project-card {
              min-height: 400px !important;
              height: 60vh !important;
            }
            .responsive-card-title {
              font-size: 1.8rem !important;
            }
            
            /* Responsive Single-line footer */
            .responsive-bottom-bar {
              flex-direction: row !important;
              align-items: center !important;
              justify-content: space-between !important;
              font-size: 0.55rem !important;
              padding: 2rem 1rem 0 1rem !important;
              white-space: nowrap !important;
            }
            .copyright-text {
              flex: 1;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 0.5rem;
            }
          }
        `}
      </style>

      {/* --- TOP NAV LOGO --- */}
      <nav style={styles.nav} className="responsive-nav">
        <Link to="/">
          <img 
            src="/assets/logo.png" // Make sure to update this with your actual logo image path
            alt="OUI Creatives Logo" 
            style={styles.logoImage} 
            className="responsive-logo"
          />
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <motion.section 
        style={styles.headerSection}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <img 
          src="/assets/Conscious (1).png" 
          alt="" 
          style={styles.heroImageRight} 
          className="responsive-hero-img-right"
        />

        <div style={styles.headerContentWrapper}>
          <motion.h1 variants={fadeInUp} style={styles.scriptTitle}>Conscious Businesses</motion.h1>
          <motion.p variants={fadeInUp} style={styles.bodyText}>
            Business, at its best, extends beyond commerce. It carries the power to influence systems, 
            communities, and futures. To be conscious is to recognise this reach and act with intention. 
            We believe that brands built with awareness create value that lasts longer than visibility, 
            leaving behind meaning, not just momentum.
          </motion.p>
        </div>
      </motion.section>

      {/* --- TOP MARQUEE (75% width, aligned right, moving left) --- */}
      <motion.div 
        style={styles.marqueeContainerTop}
        className="responsive-marquee"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Link to="/sdg" style={{ display: 'flex', textDecoration: 'none', width: 'max-content', cursor: 'pointer' }}>
          <motion.div style={styles.marqueeTrack} variants={marqueeVariants} animate="animate">
            {[...sdgTop, ...sdgTop, ...sdgTop].map((card, index) => (
              <motion.div 
                key={`top-${card.id}-${index}`} 
                style={styles.sdgCard}
                className="responsive-sdg-card"
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={styles.sdgNumber} className="responsive-sdg-num">{card.number}</span>
                  <span style={styles.sdgTitle}>{card.title}</span>
                </div>
                <img src={card.image} alt="SDG" style={styles.sdgImage} className="responsive-sdg-img" />
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </motion.div>

      {/* --- LEFT IMAGE BELOW MARQUEE SLIDER --- */}
      <div style={{ position: 'relative', width: '100%', height: 0 }}>
        <img 
          src="/assets/Conscious.png" 
          alt="" 
          style={styles.heroImageLeft} 
          className="responsive-hero-img-left"
        />
      </div>

      {/* --- PROJECT STACK WITH STICKY SCROLL ANIMATION --- */}
      <motion.section 
        style={styles.projectStackSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            variants={fadeInUp} 
            style={{ 
              width: '100%', 
              maxWidth: '1200px', 
              position: 'sticky', 
              top: `calc(15vh + ${index * 40}px)`, 
              zIndex: index + 1 
            }}
          >
            <Link to={project.link} style={styles.largeProjectLink}>
              <motion.div 
                style={styles.largeProjectCard}
                className="responsive-project-card"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={projectCardHover}
              >
                <motion.div 
                  style={{...styles.cardBackgroundImage, backgroundImage: `url(${project.image})`}}
                  variants={imageScaleOnHover}
                />
                
                <motion.div style={styles.cardOverlay} variants={{
                  rest: { backgroundColor: 'rgba(0,0,0,0)' },
                  hover: { backgroundColor: 'rgba(0,0,0,0)' }
                }} />
                
                <div style={styles.cardContent}>
                  <h2 style={{ ...styles.cardTitle, color: project.textColor }} className="responsive-card-title">{project.title}</h2>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* --- BOTTOM MARQUEE (75% width, aligned left, moving right) --- */}
      <motion.div 
        style={styles.marqueeContainerBottom}
        className="responsive-marquee"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Link to="/sdg" style={{ display: 'flex', textDecoration: 'none', width: 'max-content', cursor: 'pointer' }}>
          <motion.div style={styles.marqueeTrack} variants={marqueeVariantsReverse} animate="animate">
            {[...sdgBottom, ...sdgBottom, ...sdgBottom].map((card, index) => (
              <motion.div 
                key={`bot-${card.id}-${index}`} 
                style={styles.sdgCard}
                className="responsive-sdg-card"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={styles.sdgNumber} className="responsive-sdg-num">{card.number}</span>
                  <span style={styles.sdgTitle}>{card.title}</span>
                </div>
                 <img src={card.image} alt="SDG" style={styles.sdgImage} className="responsive-sdg-img" />
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </motion.div>

      {/* --- WHY NOT SECTION --- */}
      <motion.section 
        style={styles.whyNotSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 variants={fadeInUp} style={styles.whyNotTitle}>The Chase for a Conscious Business.</motion.h2>
        <motion.p variants={fadeInUp} style={styles.whyNotText}>
         To translate intent into action, we collaborate with organisations working at the grassroots level, including our association with the AIA Foundation and allied initiatives. Through these partnerships, we support brands in engaging with meaningful CSR pathways, helping transform awareness into real-world contribution. Our role is not to prescribe, but to enable, connecting brands with opportunities to give back in ways that feel authentic and lasting.
        </motion.p>
      </motion.section>

      {/* --- FOOTER --- */}
      <motion.footer 
        style={styles.footerSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/atelier" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.h2 
              style={styles.allProjectsTitle}
              whileHover={{ scale: 1.02, letterSpacing: '0.25em', color: '#555' }}
              transition={{ duration: 0.3 }}
            >
              BEGIN<br/>THE SHIFT
            </motion.h2>
          </Link>
        </div>

        <div className="responsive-bottom-bar" style={styles.bottomBar}>
          <motion.span 
            onClick={scrollToTop} 
            whileHover={{ y: -3, color: '#000' }} 
            style={{ cursor: 'pointer' }}
          >
            back on top
          </motion.span>
          <span className="copyright-text">2024 © oui creatives all rights reserved</span>
          <motion.span whileHover={{ y: -3, color: '#000' }} style={{ cursor: 'pointer' }}>
            Follow Us
          </motion.span>
        </div>
      </motion.footer>

    </div>
  );
};

export default ConsciousBusinessPage;