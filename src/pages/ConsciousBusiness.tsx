import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
    textColor: '#ffffff',
    title: 'Keza Vera'
  },
  {
    id: 2,
    link: '/aia',
    image: '/assets/aia.png',
    textColor: '#ffffff',
    title: 'AIA Foundation'
  },
  {
    id: 3,
    link: '/sust-fest',
    image: '/assets/susfest.png',
    textColor: '#ffffff',
    title: 'Sustainability Fest'
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
    // FIXED: overflow-x hidden completely removed to allow sticky cards to stack
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
    height: '200px', 
    width: 'auto',
    objectFit: 'contain',
    opacity: 0.6,
  },
  
  mainContent: {
    position: 'relative',
    width: '100%',
    zIndex: 1,
    // FIXED: overflow-x hidden completely removed here as well
  },

  headerSection: {
    position: 'relative',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10rem', 
    paddingBottom: '2rem', 
    textAlign: 'center',
    width: '100%',
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
    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
    lineHeight: '1.8',
    color: '#333', 
    letterSpacing: '0.03em',
    maxWidth: '850px',
    margin: '0 auto',
  },
  
  heroImageRight: {
    position: 'absolute',
    right: 0,
    top: '15%', 
    width: 'clamp(120px, 15vw, 350px)',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
    pointerEvents: 'none',
  },
  heroImageLeft: {
    position: 'absolute',
    left: 0,
    top: '60%', 
    width: 'clamp(120px, 15vw, 350px)',
    objectFit: 'contain',
    zIndex: 1,
    opacity: 0.9,
    pointerEvents: 'none',
  },

  marqueeContainerTop: {
    width: '90%', 
    marginLeft: 'auto', 
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
    marginTop: '-5rem', 
    marginBottom: '8rem', 
  },
  marqueeContainerBottom: {
    width: '90%', 
    marginRight: 'auto', 
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    zIndex: 3, 
    marginBottom: '6rem',
  },
  marqueeTrack: {
    display: 'flex',
    width: 'max-content', 
    gap: '2rem',
    paddingLeft: '2rem',
  },
  sdgCard: {
    minWidth: '220px', 
    height: '220px',
    backgroundColor: 'transparent', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '1.5rem',
    flexShrink: 0,
  },
  sdgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    alignSelf: 'center',
  },

  whyNotSection: {
    padding: '2rem 2rem 6rem 2rem',
    maxWidth: '1200px', 
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  whyNotTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  whyNotText: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
    lineHeight: '1.8',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    maxWidth: '1000px', 
    textAlign: 'justify', 
    margin: '0 auto',
  },

  footerSection: {
    padding: '2rem 2rem 2rem 2rem',
    textAlign: 'center',
    position: 'relative',
    minHeight: '115vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    backgroundImage: 'url("/assets/concfooter.png")', 
    backgroundSize: 'contain', 
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
  },
  allProjectsTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
    letterSpacing: '0.1em',
    color: '#1a1a1a',
    fontWeight: 300,
    textTransform: 'uppercase',
    marginTop: '25vh', 
    marginBottom: '1rem',
    cursor: 'pointer',
    display: 'inline-block',
  },
  footerSubtitleText: { 
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', 
    color: '#333',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
    letterSpacing: '0.05em',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: '1rem', 
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    width: '100%',
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
            /* CRITICAL: Ensure no overflow-x hidden on body/html */
          }

          /* --- MOBILE RESPONSIVENESS --- */
          @media (max-width: 768px) {
            .responsive-nav { padding: 1.5rem 1rem !important; }
            .responsive-logo { height: 120px !important; }
            .responsive-hero-img-right { width: 80px !important; top: 5% !important; opacity: 0.5 !important; }
            .responsive-hero-img-left { width: 80px !important; top: 85% !important; opacity: 0.5 !important; }
            .responsive-marquee { width: 100% !important; margin-top: -2rem !important; margin-bottom: 4rem !important; }
            .responsive-sdg-card { min-width: 150px !important; height: 150px !important; padding: 1rem !important; }
            .responsive-footer { min-height: 95vh !important; background-position: center bottom !important; background-size: contain !important; }
            .responsive-bottom-bar { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem !important; font-size: 0.85rem !important; padding-top: 1.5rem !important; text-align: center; }
            .copyright-text { flex-basis: 100%; margin-top: 0.5rem; }
          }
        `}
      </style>

      {/* --- TOP NAV LOGO --- */}
      <nav style={styles.nav} className="responsive-nav">
        <Link to="/">
          <img 
            src="/assets/maisonlogoo.png"
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
            alt="Decoration" 
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
                  <img src={card.image} alt="SDG" style={styles.sdgImage} />
                </motion.div>
              ))}
            </motion.div>
          </Link>
        </motion.div>

        {/* --- LEFT IMAGE --- */}
        <img 
          src="/assets/Conscious.png" 
          alt="Decoration" 
          style={styles.heroImageLeft} 
          className="responsive-hero-img-left"
        />

        {/* --- PROJECT STACK --- */}
        <div className="relative z-20 w-full my-12 md:my-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

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
                   <img src={card.image} alt="SDG" style={styles.sdgImage} />
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
          className="responsive-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ margin: '0 auto', position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px' }}>
            <Link to="/atelier" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.h2 
                style={styles.allProjectsTitle}
                whileHover={{ scale: 1.02, letterSpacing: '0.15em', color: '#555' }}
                transition={{ duration: 0.3 }}
              >
                BEGIN<br/>THE SHIFT
              </motion.h2>
            </Link>
            
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

// --- MIRRORED PROJECT CARD COMPONENT (FIXED) ---
function ProjectCard({ project, index }: { project: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "start start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

  // Slide up effect
  const y = useTransform(smoothProgress, [0, 1], [index === 0 ? "0vh" : "100vh", "0vh"]);

  return (
    <section ref={container} className="h-screen sticky top-0 flex items-center justify-center p-4 md:p-12" style={{ zIndex: index + 1 }}>
      <motion.div 
        style={{ y }} 
        onClick={() => window.location.href = project.link}
        // FIXED: Reduced border-radius to rounded-xl.
        // FIXED: Changed height from 'h-full' to specific 'h-[50vh] md:h-[80vh]' to stop black bars/letterboxing.
        className="relative w-full max-w-[1200px] h-[50vh] md:h-[80vh] rounded-lg md:rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      >
        {/* FIXED: Removed ALL black backgrounds, dark overlays, and HTML text */}
        <img 
          src={project.image} 
          className="w-full h-full object-cover" 
          alt={project.title} 
        />
      </motion.div>
    </section>
  );
}

export default ConsciousBusinessPage;