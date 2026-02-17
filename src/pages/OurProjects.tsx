import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// --- ANIMATED CARD COMPONENT ---
const AnimatedCard = ({ children, index, style, to }) => {
  const { scrollYProgress } = useScroll();
  
  const yOffset = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, index % 2 === 0 ? -150 : 150]
  );
  
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, index % 2 === 0 ? 5 : -5]
  );
  
  const springY = useSpring(yOffset, { stiffness: 40, damping: 25 });
  const springRotate = useSpring(rotate, { stiffness: 40, damping: 25 });

  return (
    <motion.div
      style={{
        ...style,
        y: springY,
        rotate: springRotate,
      }}
      whileHover={{ 
        scale: 1.01, 
        zIndex: 20,
        transition: { duration: 0.4 } 
      }}
    >
      <Link to={to} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {children}
      </Link>
    </motion.div>
  );
};

const projects = [
  { id: 1, type: 'image', src: '/assets/project1.jpg', alt: 'Malachi Kitchen', link: '/branding' },
  { id: 2, type: 'image', src: '/assets/project2.jpg', alt: 'Cripsyy', link: '#' },
  { id: 3, type: 'image', src: '/assets/project3.jpg', alt: 'Medafem', link: '#' },
  { id: 4, type: 'placeholder', text: 'ART & VISION', link: '#' },
  { id: 5, type: 'placeholder', text: 'CREATIVE ATELIER', link: '#' },
];

const OurProjects = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getGridItemStyle = (index) => {
    const baseStyle = { ...styles.projectItem };
    
    switch (index) {
      case 0:
        return { ...baseStyle, width: '48%', alignSelf: 'flex-start' };
      case 1:
        return { ...baseStyle, width: '45%', alignSelf: 'flex-end', marginTop: '-15vh' };
      case 2:
        return { 
          ...baseStyle, 
          width: '78%', 
          alignSelf: 'center', 
          marginTop: '-10vh', 
          zIndex: 2 
        };
      case 3:
        return { 
          ...baseStyle, 
          width: '90%', 
          alignSelf: 'center', 
          marginTop: '5vh',
          zIndex: 3 
        };
      case 4:
        return { 
          ...baseStyle, 
          width: '95%', 
          alignSelf: 'center', 
          marginTop: '5vh',
          zIndex: 4 
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.watermarkContainer}>
        <img src="/assets/crest-ornament.png" alt="" style={styles.watermark} />
      </div>

      <header style={styles.header}>
        <div style={styles.logo}>MAISON NO 3</div>
        <button style={styles.menuButton}>
          <HiOutlineMenu size={22} color="#1a1a1a" />
        </button>
      </header>

      <main>
        <section style={styles.titleSection}>
          <h1 style={styles.title}>OUR<br />PROJECTS</h1>
          <p style={styles.description}>
            We are a creative studio specialised in Branding, Strategy, Design & Development. 
            Our work is always the intersection between art and vision.
          </p>
        </section>

        <section style={styles.projectGrid}>
          {projects.map((project, index) => (
            <AnimatedCard 
              key={project.id} 
              index={index} 
              to={project.link}
              style={getGridItemStyle(index)}
            >
              <div style={styles.cardInner}>
                {project.type === 'image' ? (
                  <img src={project.src} alt={project.alt} style={styles.projectImage} />
                ) : (
                  <div style={styles.placeholder}>
                    <span style={styles.placeholderText}>{project.text}</span>
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </section>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer style={styles.footerContainer}>
        <div style={styles.footerWatermarkWrapper}>
          <img src="/assets/crest-ornament.png" alt="" style={styles.footerWatermark} />
        </div>

        {/* REPLACEMENT: Functional button link */}
        <Link to="/Branding" style={styles.footerButtonLink}>
          <motion.div 
            style={styles.footerMainContent}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <h2 style={styles.footerTitle}>MORE</h2>
            <h2 style={styles.footerTitle}>PROJECTS</h2>
            <p style={styles.footerSubtitle}>Explore our world of Visual and Interactive Design</p>
          </motion.div>
        </Link>

        <div style={styles.footerBottomBar}>
          <button onClick={scrollToTop} style={styles.footerAction}>back on top</button>
          <span style={styles.footerCopyright}>2024 © qui creatives all rights reserved</span>
          <div style={styles.footerSocials}>
            <span style={styles.footerAction}>Follow Us</span>
          </div>
        </div>
      </footer>
    </div>
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
    opacity: 0.04,
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
    fontFamily: '"Times New Roman", serif',
    fontSize: '0.9rem',
    letterSpacing: '0.4em',
    color: '#1a1a1a',
  },
  menuButton: { background: 'none', border: 'none', cursor: 'pointer' },
  titleSection: {
    textAlign: 'center',
    margin: '10vh 0 15vh 0',
  },
  title: {
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: '400',
    letterSpacing: '0.15em',
    lineHeight: '1.1',
    color: '#3d2f28',
  },
  description: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '1rem',
    maxWidth: '500px',
    margin: '2rem auto 0',
    lineHeight: '1.8',
    opacity: 0.6,
    fontStyle: 'italic',
  },
  projectGrid: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
  },
  projectItem: {
    marginBottom: '10vh',
    position: 'relative',
  },
  cardInner: {
    borderRadius: '28px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
    aspectRatio: '1.6 / 1',
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
  placeholderText: { letterSpacing: '0.3em', fontSize: '0.7rem', opacity: 0.4 },

  // Footer Styles
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
    opacity: 0.05,
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
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(3rem, 12vw, 9rem)',
    fontWeight: '400',
    letterSpacing: '0.2em',
    lineHeight: '0.85',
    color: '#1a1a1a',
    margin: 0,
    textTransform: 'uppercase',
  },
  footerSubtitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '1rem',
    marginTop: '3rem',
    opacity: 0.4,
    letterSpacing: '0.05em',
  },
  footerBottomBar: {
    position: 'absolute',
    bottom: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#1a1a1a',
  },
  footerAction: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'inherit',
    fontSize: 'inherit',
    textTransform: 'uppercase',
    letterSpacing: 'inherit',
  },
  footerCopyright: { opacity: 0.35 },
  footerSocials: { display: 'flex', gap: '2rem' },
};

export default OurProjects;