import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

// --- WINDOW BLINDS ANIMATION COMPONENT ---
const WindowBlinds = () => {
  const blinds = Array.from({ length: 10 });

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      {blinds.map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, transformOrigin: 'top' }}
          variants={{
            hover: {
              scaleY: 1,
              transition: {
                duration: 0.4,
                delay: i * 0.03,
                ease: "easeInOut"
              }
            }
          }}
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            height: '100%',
            borderRight: '1px solid rgba(255,255,255,0.05)'
          }}
        />
      ))}
    </div>
  );
};

const AnimatedCard = ({ children, index, to }) => {
  const { scrollYProgress } = useScroll();
  
  const yOffset = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, index % 2 === 0 ? -100 : 100]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, index % 2 === 0 ? 3 : -3]
  );
  
  const springY = useSpring(yOffset, { stiffness: 40, damping: 25 });
  const springRotate = useSpring(rotate, { stiffness: 40, damping: 25 });

  const isLeft = index % 2 === 0;
  const cardStyle = {
    width: '45%', 
    alignSelf: isLeft ? 'flex-start' : 'flex-end',
    marginTop: index === 0 ? '0' : '-10vh', 
    position: 'relative',
    marginBottom: '5vh',
  };

  return (
    <motion.div
      style={{
        ...cardStyle,
        y: springY,
        rotate: springRotate,
      }}
      whileHover="hover" 
    >
      <Link to={to} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <motion.div 
          style={styles.cardInner}
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30
          }}
        >
          <WindowBlinds />
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
};

// Expanded array with extra items to reveal
const projects = [
  { id: 1, type: 'image', src: '/assets/ap2.png', alt: 'Malachi Kitchen', link: '/branding' },
  { id: 2, type: 'image', src: '/assets/ap3.png', alt: 'Cripsyy', link: '#' },
  { id: 3, type: 'image', src: '/assets/medafem.png', alt: 'Medafem', link: '#' },
  { id: 4, type: 'image', src: '/assets/ap1.png', link: '#' },
  { id: 5, type: 'image', src: '/assets/ap5.png', link: '#' },
  { id: 6, type: 'image', src: '/assets/ap4.png',  alt: 'More Projects', link: '#' },
  { id: 7, type: 'image', src: '/assets/ap6.png', alt: 'Malachi Kitchen', link: '/branding' },
  // These will be hidden until the button is clicked
  { id: 8, type: 'image', src: '/assets/ap1.png', alt: 'Additional Project 1', link: '#' },
  { id: 9, type: 'image', src: '/assets/ap2.png', alt: 'Additional Project 2', link: '#' },
  { id: 10, type: 'image', src: '/assets/ap3.png', alt: 'Additional Project 3', link: '#' },
];

const OurProjects = () => {
  // State to track if we should show all projects
  const [showAll, setShowAll] = useState(false);
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Determine which projects to render based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 7);

  return (
    <motion.div 
      style={styles.pageContainer}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div style={styles.watermarkContainer}>
        <img src="/assets/cross.png" alt="" style={styles.watermark} />
      </div>

      

      <main>
        <section style={styles.titleSection}>
          <h1 style={styles.title}>SELECTED<br />ENGAGEMENTS</h1>
          <p style={styles.description}>
            A Selection of commissions developed through close collaboration and considered form.
          </p>
        </section>

        <section style={styles.projectGrid}>
          {visibleProjects.map((project, index) => (
            <AnimatedCard 
              key={project.id} 
              index={index} 
              to={project.link}
            >
              {project.type === 'image' ? (
                <img src={project.src} alt={project.alt} style={styles.projectImage} />
              ) : (
                <div style={styles.placeholder}>
                  <span style={styles.placeholderText}>{project.text}</span>
                </div>
              )}
            </AnimatedCard>
          ))}
        </section>

        {/* UPDATED: Load More Button & Subtitle */}
        {!showAll && projects.length > 7 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8rem', position: 'relative', zIndex: 10 }}
          >
            <motion.button 
              onClick={() => setShowAll(true)}
              style={styles.loadMoreButton}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              Beyond the Selection
            </motion.button>
            <p style={styles.buttonSubtitle}>
              A broader record of work developed across contexts and disciplines
            </p>
          </motion.div>
        )}
      </main>

      {/* UPDATED: Footer section matching the screenshot */}
      <footer style={styles.footerContainer}>
        <div style={styles.footerWatermarkWrapper}>
          <img src="/assets/crest-ornament.png" alt="" style={styles.footerWatermark} />
        </div>

        <Link to="/branding" style={styles.footerButtonLink}>
          <motion.div 
            style={styles.footerMainContent}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <h2 style={styles.footerTitle}>ENCHANTÉ?</h2>
            <p style={styles.footerSubtitle}>Let's have a refined dialogue that shares creative expression and strategic intent.</p>
          </motion.div>
        </Link>

        <div style={styles.footerBottomBar}>
          <button onClick={scrollToTop} style={styles.footerAction}>back on top</button>
          <span style={styles.footerCopyright}>2024 @ qui creatives all rights reserved</span>
          <div style={styles.footerSocials}>
            <span style={styles.footerAction}>Follow Us</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#f8f5f2', 
    minHeight: '100vh',
    padding: '2rem 5vw 0 5vw',
    position: 'relative',
    overflowX: 'hidden',
  },
  watermarkContainer: {
    position: 'fixed',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60vw',
    opacity: 0.10,
    zIndex: 0,
    pointerEvents: 'none',
  },
  watermark: { width: '100%', height: 'auto' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    marginBottom: '4rem'
  },
  logo: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    letterSpacing: '0.4em',
    color: '#1a1a1a',
  },
  titleSection: {
    textAlign: 'center',
    margin: '10vh 0 15vh 0',
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    letterSpacing: '0.15em',
    lineHeight: '1.1',
    color: '#3d2f28',
  },
  description: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: '1rem',
    maxWidth: '500px',
    margin: '2rem auto 0',
    lineHeight: '1.8',
    opacity: 0.6,
  },
  projectGrid: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '5vh',
  },
  cardInner: {
    borderRadius: '28px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
    aspectRatio: '1.6 / 1',
    position: 'relative',
  },
  projectImage: { width: '100%', height: '100%', objectFit: 'cover' },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e2de',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: { 
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    letterSpacing: '0.3em', 
    fontSize: '0.7rem', 
    opacity: 0.4 
  },
  
  // UPDATED: Underlined text button
  loadMoreButton: {
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #1a1a1a',
    padding: '0 0 4px 0',
    color: '#1a1a1a',
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: '1.8rem',
    cursor: 'pointer',
    outline: 'none',
  },
  buttonSubtitle: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    marginTop: '1.5rem',
    opacity: 0.8,
  },

  footerContainer: {
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5vh',
    paddingBottom: '2rem',
  },
  footerWatermarkWrapper: {
    position: 'absolute',
    bottom: '15%',
    width: '80%',
    maxWidth: '900px',
    opacity: 1, 
    zIndex: 0,
    pointerEvents: 'none',
  },
  footerWatermark: { width: '100%', height: 'auto' },
  footerButtonLink: {
    textDecoration: 'none',
    color: 'inherit',
    zIndex: 1,
    cursor: 'pointer',
  },
  footerMainContent: {
    position: 'relative',
    textAlign: 'center',
  },
  footerTitle: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: 'clamp(3rem, 10vw, 7rem)', // Further reduced text size to match the screenshot proportion
    letterSpacing: '0.25em',
    lineHeight: '1',
    color: '#1a1a1a',
    margin: 0,
    textTransform: 'uppercase',
  },
  footerSubtitle: {
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    marginTop: '2rem',
    opacity: 0.8,
  },
  footerBottomBar: {
    position: 'absolute',
    bottom: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.65rem',
    fontFamily: 'Georgia, serif',
    fontWeight: 300,
    color: '#1a1a1a',
  },
  footerAction: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
  },
  footerCopyright: { opacity: 0.8 },
  footerSocials: { display: 'flex', gap: '2rem' },
};

export default OurProjects;