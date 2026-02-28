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

// --- DATA: Images Only ---
const sdgTop = [
  { id: 1, image: '/assets/sus1.png' }, 
  { id: 2, image: '/assets/sus2.png' },
  { id: 3, image: '/assets/sus3.png' },
  { id: 4, image: '/assets/sus4.png' },
  { id: 5, image: '/assets/sus5.png' }, 
  { id: 6, image: '/assets/sus6.png' },
  { id: 7, image: '/assets/sus7.png' },
  { id: 8, image: '/assets/sus8.png' },
  { id: 9, image: '/assets/sus9.png' }, 
  { id: 10, image: '/assets/sus10.png' },
];

const sdgBottom = [
  { id: 11, image: '/assets/sus11.png' },
  { id: 12, image: '/assets/sus12.png' },
  { id: 13, image: '/assets/sus13.png' },
  { id: 14, image: '/assets/sus14.png' },
  { id: 15, image: '/assets/sus15.png' },
  { id: 16, image: '/assets/sus16.png' },
  { id: 17, image: '/assets/sus17.png' },
];

const projectsData = [
  {
    id: 1,
    link: '/kezavera',
    image: '/assets/kezavera.png',
    textColor: '#ffffff'
  },
  {
    id: 2,
    link: '/aia',
    image: '/assets/aia.png',
    textColor: '#ffffff'
  },
  {
    id: 3,
    link: '/sust-fest',
    image: '/assets/susfest.png',
    textColor: '#ffffff'
  }
];

// --- STYLES ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: 'linear-gradient(to bottom, #fdfbf7 0%, #f4efe9 50%, #eadcd5 100%)',
    minHeight: '100vh',
    color: '#333',
    fontFamily: '"Breadley Sans", sans-serif',
    position: 'relative',
  },

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
    height: '350px', 
    width: 'auto',
    objectFit: 'contain',
    opacity: 0.6,
  },
  
  mainContent: {
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },

  headerSection: {
    position: 'relative',
    minHeight: '130vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0rem', 
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
    top: '25%', 
    width: 'clamp(150px, 20vw, 350px)',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
    pointerEvents: 'none',
  },
  heroImageLeft: {
    position: 'absolute',
    left: '-0.1%',
    top: '75rem', 
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
    padding: '0rem 0', 
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
    marginTop: '-15rem',
    marginBottom: '15rem', 
  },
  marqueeContainerBottom: {
    width: '75%', 
    marginRight: 'auto', 
    overflow: 'hidden',
    padding: '2rem 0',
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
    marginBottom: '10rem',
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
    backgroundColor: 'transparent', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '2rem',
    color: '#fff',
    flexShrink: 0,
    borderRadius: '0px', 
    border: 'none', 
    boxShadow: 'none', 
  },
  sdgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    alignSelf: 'center',
  },

  projectStackSection: {
    padding: '6rem 2rem 10rem 2rem', 
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
    border: 'none', 
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
    padding: '4rem 2rem 8rem 2rem',
    maxWidth: '1200px', 
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  whyNotTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '3.5rem', 
    color: '#333',
    marginBottom: '2rem',
    whiteSpace: 'nowrap', 
    textAlign: 'center',
  },
  whyNotText: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    maxWidth: '1000px', 
    textAlign: 'justify', 
    margin: '0 auto 4rem auto',
  },

  /* --- UPDATED FOOTER SECTION --- */
  footerSection: {
    padding: '4rem 2rem 2rem 2rem',
    textAlign: 'center',
    position: 'relative',
    minHeight: '125vh', // INCREASED HEIGHT: Forces the section to be tall enough to fit the full image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: 'url("/assets/concfooter.png")', // Make sure this matches your file name exactly
    backgroundSize: 'contain', // CHANGED: Ensures the image is never cropped
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  allProjectsTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(5rem, 8vw, 7rem)',
    letterSpacing: '0.1em',
    color: '#1a1a1a',
    fontWeight: 300,
    textTransform: 'uppercase',
    marginTop: '20rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    display: 'inline-block',
  },
  footerSubtitleText: { // NEW: Styles for the paragraph text under the title
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
    color: '#333',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    letterSpacing: '0.05em',
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
    width: '100%',
    maxWidth: '1400px',
    margin: 'auto auto 0 auto', 
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
              height: 40px !important; 
            }
            .responsive-marquee {
              width: 100% !important;
              margin-top: 0 !important;
            }
            .responsive-sdg-card {
              min-width: 200px !important;
              height: 200px !important;
              padding: 1.2rem !important;
            }
            .responsive-sdg-img {
              width: 100% !important;
              height: 100% !important;
              margin-bottom: 0 !important;
            }

            .responsive-hero-img-right {
              width: 120px !important;
              top: 15% !important; 
            }
            .responsive-hero-img-left {
              width: 120px !important;
              top: 0 !important;
            }

            .responsive-project-stack-section {
              padding: 3rem 1rem 6rem 1rem !important;
              gap: 2rem !important;
            }
            .responsive-project-card {
              min-height: 400px !important;
              height: 60vh !important;
            }
            .responsive-card-title {
              font-size: 1.8rem !important;
            }
            
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
            src="/assets/Aia foundation logo.svg"
            alt="OUI Creatives Logo" 
            style={styles.logoImage} 
            className="responsive-logo"
          />
        </Link>
      </nav>

      <div style={styles.mainContent}>
        
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

        {/* --- TOP MARQUEE --- */}
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
                  <img src={card.image} alt="SDG" style={styles.sdgImage} className="responsive-sdg-img" />
                </motion.div>
              ))}
            </motion.div>
          </Link>
        </motion.div>

        {/* --- LEFT IMAGE --- */}
        <img 
          src="/assets/Conscious.png" 
          alt="" 
          style={styles.heroImageLeft} 
          className="responsive-hero-img-left"
        />

        {/* --- PROJECT STACK --- */}
        <motion.section 
          style={styles.projectStackSection}
          className="responsive-project-stack-section"
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

        {/* --- BOTTOM MARQUEE --- */}
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
          <div style={{ margin: 'auto 0', position: 'relative', zIndex: 2 }}>
            <Link to="/atelier" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.h2 
                style={styles.allProjectsTitle}
                whileHover={{ scale: 1.02, letterSpacing: '0.25em', color: '#555' }}
                transition={{ duration: 0.3 }}
              >
                BEGIN<br/>THE SHIFT
              </motion.h2>
            </Link>
            
            {/* NEW: Added paragraph matching your screenshot */}
            <motion.p 
              variants={fadeInUp}
              style={styles.footerSubtitleText}
            >
              If you believe business can create value beyond itself, we invite you to explore what a more conscious approach could look like for your brand. Sometimes the smallest shifts create the most meaningful change.
            </motion.p>
          </div>

          <div className="responsive-bottom-bar" style={styles.bottomBar}>
            <motion.span 
              onClick={scrollToTop} 
              whileHover={{ y: -3, color: '#000' }} 
              style={{ cursor: 'pointer' }}
            >
              back on top
            </motion.span>
            <span className="copyright-text">2024 © qui creatives all rights reserved</span>
            <motion.span whileHover={{ y: -3, color: '#000' }} style={{ cursor: 'pointer' }}>
              Follow Us
            </motion.span>
          </div>
        </motion.footer>

      </div>
    </div>
  );
};

export default ConsciousBusinessPage;