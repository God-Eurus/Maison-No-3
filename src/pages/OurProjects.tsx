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

const AnimatedCard = ({ children, index, to }) => {
  const { scrollYProgress } = useScroll();
  
  const yOffset = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, index % 2 === 0 ? -100 : 100]
  );
  
  const springY = useSpring(yOffset, { stiffness: 40, damping: 25 });

  const isLeft = index % 2 === 0;
  const cardStyle = {
    width: '45%', 
    alignSelf: isLeft ? 'flex-start' : 'flex-end',
    marginTop: index === 0 ? '0' : '-10vh', 
    position: 'relative',
    marginBottom: '5vh',
    zIndex: 2, // Keeps cards above the background images
  };

  return (
    <motion.div
      style={{
        ...cardStyle,
        y: springY,
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
      {/* BACKGROUND 1: Center image starting from the absolute top of the page */}
      <img 
        src="/assets/cross2.png" 
        alt="" 
        style={styles.bgImageTop} 
      />

      <main>
        <section style={styles.titleSection}>
          <h1 style={styles.title}>SELECTED<br />ENGAGEMENTS</h1>
          <p style={styles.description}>
            A Selection of commissions developed through close collaboration and considered form.
          </p>
        </section>

        <section style={styles.projectGrid}>
          
          {/* BACKGROUND 2: Right-aligned image starting after 4 cards */}
          <img 
            src="/assets/proojectright.png" 
            alt="" 
            style={styles.bgImageRight} 
          />

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

        {/* RESTORED AND PROTECTED: Load More Button & Subtitle */}
        {!showAll && projects.length > 7 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // CHANGED: Added massive zIndex (50) and explicit top margin to protect it
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4rem 0 8rem 0', position: 'relative', zIndex: 50 }}
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

      {/* Footer section */}
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
  
  bgImageTop: {
    position: 'absolute',
    top: '0', 
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90vw',
    maxWidth: '900px',
    height: 'auto',
    opacity: 1,
    zIndex: 0,
    pointerEvents: 'none',
  },
  bgImageRight: {
    position: 'absolute',
    top: '55%', 
    // This calc breaks out of the grid to snap exactly to the right edge of the window
    right: 'calc(50% - 50vw)', 
    width: '30vw',
    maxWidth: '700px',
    height: 'auto',
    opacity: 1,
    zIndex: 0,
    pointerEvents: 'none',
  },

  titleSection: {
    textAlign: 'center',
    margin: '10vh 0 15vh 0',
    position: 'relative',
    zIndex: 1, 
  },
  title: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    letterSpacing: '0.15em',
    lineHeight: '1.1',
    color: '#3d2f28',
  },
  description: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '1.5rem',
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
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    letterSpacing: '0.3em', 
    fontSize: '0.7rem', 
    opacity: 0.4 
  },
  
  loadMoreButton: {
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #1a1a1a',
    padding: '0 0 4px 0',
    color: '#1a1a1a',
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '2.1rem',
    cursor: 'pointer',
    outline: 'none',
  },
  buttonSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '1.6rem',
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
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(3rem, 10vw, 7rem)', 
    letterSpacing: '0.25em',
    lineHeight: '1',
    color: '#1a1a1a',
    margin: 0,
    textTransform: 'uppercase',
  },
  footerSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300,
    fontSize: '1.3rem',
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
    fontSize: '1.1rem',
    fontFamily: '"Breadley Sans", sans-serif',
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