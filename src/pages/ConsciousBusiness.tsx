import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
// Slightly increased duration for an even smoother reveal
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
    x: [0, -1035], 
    transition: { x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } },
  },
};

const marqueeVariantsReverse = {
  animate: {
    x: [-1035, 0], 
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
  { id: 6, number: '6', title: 'ZERO\nHUNGER', image: '/assets/sus6.png' },
  { id: 7, number: '7', title: 'GOOD HEALTH\nAND WELL-BEING', image: '/assets/sus7.png' },
  { id: 8, number: '8', title: 'QUALITY\nEDUCATION', image: '/assets/sus8.png' },
  { id: 9, number: '9', title: 'GENDER\nEQUITY', image: '/assets/sus9.png' },
  { id: 10, number: '10', title: 'WATER\nAND SANITATION', image: '/assets/sus10.png' },
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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: 'linear-gradient(to bottom, #fdfbf7 0%, #f4efe9 50%, #eadcd5 100%)',
    minHeight: '100vh',
    color: '#333',
    fontFamily: '"Helvetica Neue", sans-serif',
    position: 'relative',
    overflowX: 'hidden',
  },
  
  headerSection: {
    paddingTop: '15vh', // Adjusted slightly since nav is gone
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
    backgroundColor: '#d8c8c8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    color: '#fff',
    flexShrink: 0,
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
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
    padding: '6rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  },
  largeProjectLink: {
    width: '100%',
    maxWidth: '1000px',
    textDecoration: 'none',
    display: 'block',
  },
  largeProjectCard: {
    width: '100%',
    height: '500px',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    position: 'relative',
    overflow: 'hidden',
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
    fontFamily: '"Times New Roman", serif',
    fontSize: '2.5rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  cardSubtitle: {
    fontSize: '0.9rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  },

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
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, #fcebeb, #f5d0d6)',
    border: '1px solid #f0c0c0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(245, 208, 214, 0.6)',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8a5a5a',
    textAlign: 'center',
    padding: '1rem',
    fontWeight: 'bold',
  },

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
    display: 'inline-block',
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
      {/* Injecting smooth scroll globally for this page. 
        This ensures manual scrolling and the "back on top" button feel seamless.
      */}
      <style>
        {`
          html, body {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Header Text - Staggered Reveal */}
      <motion.section 
        style={styles.headerSection}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeInUp} style={styles.scriptTitle}>Conscious Businesses</motion.h1>
        <motion.p variants={fadeInUp} style={styles.bodyText}>
          What you're building now is the Admin Command Center — the single source of truth from where the entire company is run.<br/>
          This is how serious brands avoid chaos.<br/>
          Below is a SINGLE MASTER ADMIN TABLE you can paste directly into Excel / Google Sheets and start filling links into today.
        </motion.p>
      </motion.section>

      {/* --- TOP MARQUEE --- */}
      <motion.div 
        style={styles.marqueeContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Added Link wrapper around the entire top track */}
        <Link to="/sdg" style={{ display: 'flex', textDecoration: 'none', width: '100%', cursor: 'pointer' }}>
          <motion.div style={styles.marqueeTrack} variants={marqueeVariants} animate="animate">
            {/* Duplicated the array multiple times to fix empty spaces during infinite scroll loop */}
            {[...sdgTop, ...sdgTop, ...sdgTop].map((card, index) => (
              <motion.div 
                key={`top-${card.id}-${index}`} 
                style={styles.sdgCard}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={styles.sdgNumber}>{card.number}</span>
                  <span style={styles.sdgTitle}>{card.title}</span>
                </div>
                <img src={card.image} alt="SDG" style={styles.sdgImage} />
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </motion.div>

      {/* --- PROJECT STACK --- */}
      <motion.section 
        style={styles.projectStackSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={fadeInUp} style={{ width: '100%', maxWidth: '1000px' }}>
            <Link to={project.link} style={styles.largeProjectLink}>
              <motion.div 
                style={styles.largeProjectCard}
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
                  <h2 style={{ ...styles.cardTitle, color: project.textColor }}>{project.title}</h2>
                  <span style={{ ...styles.cardSubtitle, color: project.textColor, opacity: 0.8 }}>
                    {project.subtitle}
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* --- BOTTOM MARQUEE --- */}
      <div style={styles.marqueeContainer}>
        {/* Added Link wrapper around the entire bottom track */}
        <Link to="/sdg" style={{ display: 'flex', textDecoration: 'none', width: '100%', cursor: 'pointer' }}>
          <motion.div style={styles.marqueeTrack} variants={marqueeVariantsReverse} animate="animate">
            {/* Duplicated the array multiple times to fix empty spaces during infinite scroll loop */}
            {[...sdgBottom, ...sdgBottom, ...sdgBottom].map((card, index) => (
              <motion.div 
                key={`bot-${card.id}-${index}`} 
                style={{ ...styles.sdgCard, backgroundColor: '#cbbdbd' }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={styles.sdgNumber}>{card.number}</span>
                  <span style={styles.sdgTitle}>{card.title}</span>
                </div>
                 <img src={card.image} alt="SDG" style={styles.sdgImage} />
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </div>

      {/* --- WHY NOT SECTION --- */}
      <motion.section 
        style={styles.whyNotSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 variants={fadeInUp} style={styles.whyNotTitle}>Why not a conscious business?</motion.h2>
        <motion.p variants={fadeInUp} style={styles.whyNotText}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </motion.p>
        
        <motion.div 
          variants={pinkButtonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          style={styles.pinkCircleButton}
        >
          Get<br/>Conscious
        </motion.div>
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
              ALL<br/>PROJECTS
            </motion.h2>
          </Link>
        </div>

        <div style={styles.bottomBar}>
          <motion.span 
            onClick={scrollToTop} 
            whileHover={{ y: -3, color: '#000' }} 
            style={{ cursor: 'pointer' }}
          >
            back on top
          </motion.span>
          <span>2024 © oui creatives all rights reserved</span>
          <motion.span whileHover={{ y: -3, color: '#000' }} style={{ cursor: 'pointer' }}>
            Follow Us
          </motion.span>
        </div>
      </motion.footer>

    </div>
  );
};

export default ConsciousBusinessPage;