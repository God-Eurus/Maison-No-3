import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowRight } from 'lucide-react';
import Recognitions from './Recognitions';

// --- DATA ---
const industries = [
  "Gems & Jewelry", 
  "Fashion", 
  "Lifestyle", 
  "Real Estate, Architecture & Interiors", 
  "Automotive", 
  "Food & Beverage", 
  "FMCG", 
  "Events"
];

const services = [
  { 
    name: "BRANDING", 
    desc: "Signature Branding at Maison No. 3 is the art of bringing order to vision. We distil complex ideas into clear brand systems, where identity, narrative, and form align seamlessly. Guided by judgement and discipline, our work produces brands that feel resolved, composed with care, shaped by meaning, and designed to endure beyond trends." 
  },
  { 
    name: "TECHNOLOGY", 
    desc: "Technology at Maison No. 3 is the discipline of giving structure to interaction. We design and develop digital systems where function, form, and brand align with intention. From interfaces to architecture, every decision is made to ensure clarity, stability, and longevity. The outcome is technology that feels resolved, intuitive to use, coherent in design, and built to endure." 
  },
  { 
    name: "MARKETING", 
    desc: "At Maison No. 3, Marketing is governed by judgement. We develop strategies that align brand intent with audience behaviour, platform logic, and cultural moment. From digital campaigns to ongoing brand presence, our approach is measured, deliberate, and adaptive. The result is marketing that communicates with confidence, controlled, coherent, and designed for sustained impact." 
  },
  { 
    name: "CREATIVE SUITE", 
    desc: "The Creative Suite at Maison No. 3 is where vision is translated into form. We bring together art direction, photography, cinematography, brand films, styling, graphic design, motion, and layout into a unified creative language. Every element is composed with intention, ensuring visual coherence across mediums and moments. Guided by production stewardship and disciplined execution, our work moves seamlessly from concept to craft, resulting in imagery and narratives that feel considered, cohesive, and unmistakably refined." 
  },
  { 
    name: "PUBLIC RELATIONS", 
    desc: "Public Relations at Maison No. 3 is practiced as reputation stewardship. We shape how brands are perceived, introduced, and remembered through carefully curated visibility. Working across media relations, editorial placement, strategic storytelling, and cultural positioning, we ensure presence is earned, not announced. Every interaction is considered for context, relevance, and longevity. This is public relations guided by discretion and judgement, building credibility that compounds quietly over time." 
  },
  { 
    name: "EVENTS AND EXPERIENCES", 
    desc: "Events and Experiences at Maison No. 3 are conceived as moments of alignment between space, narrative, and audience. We design environments where brand, context, and emotion converge with clarity and purpose. From private gatherings to large-scale brand moments, every detail is considered, from concept and choreography to execution and flow. These experiences are not spectacles, but extensions of identity, immersive, deliberate, and designed to be remembered with quiet distinction." 
  },
  { 
    name: "CONSULTING", 
    desc: "Consulting at Maison No. 3 is grounded in clarity, perspective, and long-term thinking. We work closely with founders, leadership teams, and institutions to define direction, resolve complexity, and guide critical decisions. Our counsel spans brand strategy, growth alignment, organisational structure, and market positioning, always with an emphasis on coherence and consequence. This is advisory shaped by judgement rather than opinion, offering calm guidance where precision and foresight matter most." 
  },
];

const clientsRow1 = [
  { name: "AVERA", logo: "/assets/client1.png" }, 
  { name: "HEBREW", logo: "/assets/client2.png" },
  { name: "CVM", logo: "/assets/client3.png" },
  { name: "SONA", logo: "/assets/client4.png" },
];

const clientsRow2 = [
  { name: "POP-UP SHOP", logo: "/assets/client5.png" },
  { name: "AISPI", logo: "/assets/client6.png" },
  { name: "ZOHARET", logo: "/assets/client7.png" },
  { name: "DEETALES", logo: "/assets/client8.png" },
];

// --- STYLES ---
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    backgroundColor: '#000000',
    color: '#e0e0e0',
    minHeight: '100vh',
    fontFamily: '"Breadley Sans", sans-serif',
    overflowX: 'hidden',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'clamp(1rem, 5vw, 2rem) clamp(1.5rem, 5vw, 3rem)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100, 
  },
  logo: {
    fontSize: '0.8rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#fff',
    textDecoration: 'none',
  },
  
  // --- HERO TEXT SECTION ---
  heroTextSection: {
    position: 'relative',
    height: '60vh', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 clamp(1.5rem, 5vw, 5%)',
    backgroundColor: '#000',
  },
  heroContent: {
    zIndex: 20, 
    textAlign: 'left',
  },
  heroTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(3.5rem, 8vw, 5rem)', 
    letterSpacing: '0.2em',
    fontWeight: 400,
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    maxWidth: '400px',
    lineHeight: '1.6',
    color: '#a0a0a0',
  },
  ornamentGraphic: {
    position: 'absolute',
    top: '10%',
    right: '-5%',
    width: 'clamp(150px, 25%, 400px)', 
    zIndex: 5, 
    pointerEvents: 'none',
  },

  // --- VIDEO SECTION ---
  videoSection: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  videoCenterWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    zIndex: 10,
  },
  videoElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // --- INDUSTRIES SECTION ---
  industriesSection: {
    backgroundColor: '#000000',
    padding: 'clamp(4rem, 10vw, 8rem) 0',
    position: 'relative',
    zIndex: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    letterSpacing: '0.3em',
    fontWeight: 400,
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 'clamp(2rem, 5vw, 4rem)',
    textAlign: 'center',
    padding: '0 1rem',
  },
  industryListWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid #222',
  },
  industryItem: {
    width: '100%',
    padding: 'clamp(2rem, 5vw, 3rem) 0', 
    borderBottom: '1px solid #222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden', 
  },
  industryText: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
    letterSpacing: '0.05em',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2, 
    padding: '0 1rem',
  },
  industryLinkWrapper: {
    width: '100%',
    display: 'block',
  },

  // --- SERVICES SECTION ---
  servicesSection: {
    backgroundColor: '#fdfbf7', 
    color: '#1a1a1a', 
    padding: '0', 
    zIndex: 30,
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap', 
    minHeight: '100vh',
  },
  servicesLeft: {
    flex: '1 1 40%',
    minWidth: 'min(100%, 300px)', 
    minHeight: '40vh', 
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0', 
    overflow: 'hidden',
  },
  servicesOrnament: {
    width: '100%',
    height: '100%', 
    objectFit: 'cover', 
    opacity: 0.5, 
    pointerEvents: 'none',
  },
  servicesTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(4rem, 12vw, 7rem)',
    letterSpacing: '0.2em',
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center',
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    lineHeight: 1.1,
  },
  servicesRight: {
    flex: '1 1 50%',
    minWidth: 'min(100%, 350px)', 
    padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  serviceItemRow: {
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  serviceItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
  },
  serviceName: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#333',
    paddingRight: '1rem', 
  },
  serviceArrow: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    flexShrink: 0, 
  },
  serviceDesc: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#666',
    lineHeight: '1.6',
    paddingBottom: '1.5rem',
    maxWidth: '100%', 
  },

  // --- CLIENTS SECTION ---
  clientsSection: {
    backgroundColor: '#000000',
    padding: 'clamp(4rem, 10vw, 8rem) 0',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 30,
  },
  clientsHeader: {
    textAlign: 'center',
    marginBottom: 'clamp(3rem, 8vw, 6rem)',
    padding: '0 clamp(1.5rem, 5vw, 2rem)',
  },
  clientsTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300, 
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    letterSpacing: '0.3em',
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  clientsSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontWeight: 300, 
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    fontStyle: 'italic', 
    color: '#a0a0a0',
    letterSpacing: '0.05em',
  },
  marqueeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem', 
  },
  marqueeTrack: {
    display: 'flex',
    gap: '2rem',
    width: 'max-content',
  },
  clientCard: {
    width: 'clamp(200px, 50vw, 300px)', 
    height: 'clamp(200px, 50vw, 300px)', 
    backgroundColor: 'transparent', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: 'none', 
  },
  clientLogoText: {
    color: '#fff',
    fontFamily: '"Breadley Sans", sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
    textAlign: 'center',
    padding: '0 1rem',
  },

  // --- FOOTER STYLES ---
  footerContainer: {
    position: 'relative',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 2rem) 2rem clamp(1.5rem, 5vw, 2rem)', 
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
  footerBgImage: {
    position: 'absolute',
    top: 0,
    left: 0, // Reset to exact edge
    width: '100%', // Match exact width
    height: '100%',
    objectFit: 'cover', // Or change to 'contain' if you don't want it cropped at all
    objectPosition: 'center', // Centers the graphic perfectly vertically and horizontally
    opacity: 0.8, 
    zIndex: 0,
    pointerEvents: 'none',
  },
  footerContentWrapper: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
  },
  footerTitle: {
    fontFamily: '"Breadley Sans", sans-serif',
    fontSize: 'clamp(4rem, 12vw, 10rem)', 
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: '2rem',
    lineHeight: 1,
  },
  footerSubtitle: {
    fontFamily: '"Breadley Sans", sans-serif', 
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontStyle: 'italic',
    color: '#e0e0e0',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  footerBottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    flexWrap: 'wrap', 
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1400px',
    marginTop: 'auto', 
    paddingTop: 'clamp(4rem, 10vw, 6rem)',
    zIndex: 10,
    position: 'relative',
    fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
    color: '#a0a0a0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  footerLink: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }
};

const OurStudioPage = () => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const toggleService = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      {/* Explicit Breadley Sans Definition */}
      <style>{`
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      
      {/* Nav */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}></Link>
      </nav>

      {/* --- HERO TEXT SECTION --- */}
      <section style={styles.heroTextSection}>
        <div style={styles.heroContent}>
          <motion.h1 style={styles.heroTitle}>LA MAISON</motion.h1>
          <motion.p style={styles.heroSubtitle}>
            A house shaped by intention,<br/> practice, and time.
          </motion.p>
        </div>
        <img 
          src="/assets/LaMaison.svg" 
          alt="" 
          style={styles.ornamentGraphic} 
        />
      </section>

      {/* --- VIDEO SECTION --- */}
      <section 
        style={styles.videoSection}
        onMouseEnter={() => setIsVideoHovered(true)}
        onMouseLeave={() => setIsVideoHovered(false)}
      >
        <div style={styles.videoCenterWrapper}>
          <motion.div
            initial="collapsed"
            animate={isVideoHovered ? "expanded" : "collapsed"}
            variants={{
              collapsed: { width: 'min(80vw, 450px)', height: 'min(80vw, 450px)', borderRadius: '50%', marginTop: '0' },
              expanded: { width: '100%', height: '100%', borderRadius: '0%', marginTop: '0%' }
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ overflow: 'hidden', boxShadow: '0 0 50px rgba(0,0,0,0.5)', cursor: 'pointer', position: 'relative' }}
          >
            <video src="/assets/horizontal day 1.mp4" autoPlay loop muted playsInline style={styles.videoElement} />
            <motion.div animate={{ opacity: isVideoHovered ? 0.4 : 0 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', pointerEvents: 'none' }} />
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRIES SECTION --- */}
      <section style={styles.industriesSection}>
        <h2 style={styles.sectionTitle}>INDUSTRIES WE WORK IN</h2>
        <div style={styles.industryListWrapper}>
          {industries.map((item, i) => {
            return (
              <div key={i} style={styles.industryLinkWrapper}>
                <motion.div style={styles.industryItem} whileHover="hover" initial="rest">
                  <motion.div
                    variants={{ rest: { height: "0%" }, hover: { height: "100%" } }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#ffffff', zIndex: 0 }}
                  />
                  <motion.span 
                    style={styles.industryText}
                    variants={{ rest: { color: '#888888' }, hover: { color: '#000000' } }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesLeft}>
           <img src="/assets/ourstudioleft.png" alt="" style={styles.servicesOrnament} />
           <h2 style={styles.servicesTitle}>OUR<br />DISCIPLINES</h2>
        </div>
        <div style={styles.servicesRight}>
          {services.map((service, index) => {
            const isOpen = openServiceIndex === index;
            return (
              <div key={index} style={styles.serviceItemRow} onClick={() => toggleService(index)}>
                <div style={styles.serviceItemHeader}>
                  <span style={styles.serviceName}>{service.name}</span>
                  <motion.div style={styles.serviceArrow} animate={{ rotate: isOpen ? -45 : 0 }} transition={{ duration: 0.3 }}>
                     <ArrowRight size={16} color="#333" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={styles.serviceDesc}>{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- CLIENTS SECTION --- */}
      <section style={styles.clientsSection}>
        <div style={styles.clientsHeader}>
          <h2 style={styles.clientsTitle}>OUR CLIENTS</h2>
          <p style={styles.clientsSubtitle}>We craft gorgeous and memorable projects for our clients.</p>
        </div>

        <div style={styles.marqueeWrapper}>
          <motion.div 
            style={styles.marqueeTrack}
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, i) => (
              <div key={`r1-${i}`} style={styles.clientCard}>
                <img src={client.logo} alt={client.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </motion.div>

          <motion.div 
            style={styles.marqueeTrack}
            animate={{ x: [-1000, 0] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
              <div key={`r2-${i}`} style={styles.clientCard}>
                <img src={client.logo} alt={client.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <Recognitions />

      {/* --- CONTACT FOOTER --- */}
      <footer style={styles.footerContainer}>
        <img 
          src="/assets/contactbottom.png" 
          alt="" 
          style={styles.footerBgImage} 
        />
        <div style={styles.footerContentWrapper}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 
              style={{
                ...styles.footerTitle, 
                cursor: 'pointer',
                transition: 'opacity 0.3s ease' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              CONTACT
            </h2>
          </Link>
          <p style={styles.footerSubtitle}>
            We begin with an understanding, 
            <br />
            a conversation that brings clarity before form.
          </p>
        </div>
        <div style={styles.footerBottomBar}>
          <span onClick={scrollToTop} style={styles.footerLink}>back on top</span>
          <span>2024 @ qui creatives all rights reserved</span>
          <a href="#" style={styles.footerLink}>Follow Us</a>
        </div>
      </footer>
    </div>
  );
};

export default OurStudioPage;