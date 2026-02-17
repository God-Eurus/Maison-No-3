import React from 'react';
import { Menu, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    // Deep burgundy fading into black
    background: 'linear-gradient(to bottom, #2b0b12 0%, #1a0508 40%, #2b0b12 100%)',
    minHeight: '100vh',
    color: '#e0e0e0',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
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
    zIndex: 10,
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
    paddingTop: '15vh',
    paddingBottom: '8vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  emblemWrapper: {
    marginBottom: '2rem',
    opacity: 0.9,
  },
  emblemImg: {
    height: '100px', 
    objectFit: 'contain',
  },
  scriptTitle: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '3.5rem',
    color: '#e0e0e0',
    marginBottom: '2rem',
    fontWeight: 400,
    textShadow: '0 0 20px rgba(255,255,255,0.1)',
  },
  heroText: {
    fontSize: '0.85rem',
    lineHeight: '1.8',
    color: '#a0a0a0',
    maxWidth: '700px',
    letterSpacing: '0.05em',
    marginBottom: '2rem',
  },
  link: {
    color: '#e0e0e0',
    fontSize: '0.8rem',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    letterSpacing: '0.05em',
    cursor: 'pointer',
  },
  // --- CRAFT SECTION (3 Columns) ---
  craftSection: {
    padding: '8rem 5vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  craftTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '2rem',
    letterSpacing: '0.4em',
    lineHeight: '1.4',
    textTransform: 'uppercase',
    color: '#e0e0e0',
    flex: 1,
    textAlign: 'left',
  },
  centerLogoWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  centerLogo: {
    height: '120px',
    opacity: 0.8,
  },
  craftText: {
    flex: 1,
    fontSize: '0.85rem',
    lineHeight: '1.8',
    color: '#a0a0a0',
    textAlign: 'left',
    paddingLeft: '2rem',
  },
  // --- MIDDLE SECTION (Atelier & Tagline) ---
  middleSection: {
    textAlign: 'center',
    padding: '6rem 2rem 6rem 2rem',
  },
  atelierTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.2rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    color: '#e0e0e0',
  },
  atelierDesc: {
    fontSize: '0.85rem',
    color: '#a0a0a0',
    maxWidth: '600px',
    margin: '0 auto 8rem auto',
  },
  finalScript: {
    fontFamily: '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',
    fontSize: '3rem',
    color: '#e0e0e0',
    marginBottom: '1.5rem',
  },
  tagline: {
    fontSize: '0.8rem',
    color: '#808080',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  // --- ART AMALGAMATED SECTION (New) ---
  artSection: {
    textAlign: 'center',
    padding: '6rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  artTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.5rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#e0e0e0',
    marginBottom: '2rem',
  },
  artText: {
    fontSize: '0.85rem',
    lineHeight: '1.8',
    color: '#b0b0b0',
    letterSpacing: '0.02em',
  },
  // --- NEXT PROJECT FOOTER (New) ---
  nextProjectSection: {
    textAlign: 'center',
    padding: '8rem 2rem 4rem 2rem',
    // Slight gradient darkening at the very bottom
    background: 'linear-gradient(to bottom, transparent, #1a0508)',
  },
  nextProjectTitle: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '5rem',
    letterSpacing: '0.2em',
    color: '#e0e0e0',
    fontWeight: 400,
    marginBottom: '6rem',
    lineHeight: 1.1,
  },
  footerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: '#a0a0a0',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
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

const QuiPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @media (max-width: 900px) {
            .script-title-res { font-size: 2.5rem !important; }
            .craft-section-res { 
              flex-direction: column !important; 
              gap: 4rem !important;
              text-align: center !important;
            }
            .craft-title-res { 
              text-align: center !important; 
              margin-bottom: 1rem !important;
            }
            .craft-text-res { 
              padding-left: 0 !important; 
              text-align: center !important; 
            }
            .final-script-res { font-size: 2rem !important; }
            .next-title-res { font-size: 3rem !important; }
            .footer-bar-res {
              flex-direction: column;
              gap: 1.5rem;
            }
          }
        `}
      </style>

      {/* --- Header --- */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>OUI CREATIVES</Link>
        <button style={styles.menuBtn}>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* --- Top Hero --- */}
      <header style={styles.heroSection}>
        <div style={styles.emblemWrapper}>
           <img src="/assets/eiffel-emblem.png" alt="Agency Emblem" style={styles.emblemImg} />
        </div>

        <h1 className="script-title-res" style={styles.scriptTitle}>
          French-inspired Luxury Agency!
        </h1>

        <p style={styles.heroText}>
          Oui Creatives envisions a world where brands are not just seen but experienced on a profound emotional level. We aspire to be the vanguard of luxury design, setting benchmarks in creativity and strategic excellence. Our goal is to continually redefine the boundaries of design, ensuring that our clients' brands are not only relevant in today's dynamic market but also poised for enduring success in the future.
        </p>

        <Link to="/projects" style={styles.link}>
          View Projects
        </Link>
      </header>

      {/* --- The Craft Section --- */}
      <section className="craft-section-res" style={styles.craftSection}>
        <h2 className="craft-title-res" style={styles.craftTitle}>
          THE<br />CRAFT
        </h2>
        <div style={styles.centerLogoWrapper}>
          <img src="/assets/q-logo.png" alt="Q Logo" style={styles.centerLogo} />
        </div>
        <p className="craft-text-res" style={styles.craftText}>
          Our Creatives embodies a personality that is elegant, innovative, and meticulous. We approach each project with a blend of artistic flair and strategic thinking, ensuring that our designs are not only beautiful but also purposeful. Our commitment to excellence and our passion for creativity shine through in every endeavor, making us a trusted partner for brands seeking to stand out in a crowded marketplace.
        </p>
      </section>

      {/* --- Middle Section (Atelier & Tagline) --- */}
      <section style={styles.middleSection}>
        <h3 style={styles.atelierTitle}>L'ATELIER SIGNATURE</h3>
        <p style={styles.atelierDesc}>
          Our Creatives envisions a world where brands are not just seen but experienced on a profound emotional level.
        </p>

        <div style={{ marginTop: '5rem' }}>
          <h2 className="final-script-res" style={styles.finalScript}>
            Crafting<br />
            Hypnotic Brands!
          </h2>
          <p style={styles.tagline}>
            India's first French-inspired creative agency shaping the future of brands with timeless storytelling and hypnotic design.
          </p>
        </div>
      </section>

      {/* --- ART AMALGAMATED SECTION (New) --- */}
      <section style={styles.artSection}>
        <h3 style={styles.artTitle}>ART AMALGAMATED</h3>
        <p style={styles.artText}>
          Our vision is to be the premier luxury creative agency known for redefining brands through unparalleled creativity and strategic innovation. We aspire to set new standards in the creative industry, where our designs become synonymous with refinement, elegance, and timeless sophistication. By continuously pushing the boundaries of art and technology, we envision a future where Oui Creatives is the go-to partner for brands seeking to leave an indelible mark on the world.
        </p>
      </section>

      {/* --- NEXT PROJECT FOOTER (New) --- */}
      <footer style={styles.nextProjectSection}>
        <Link to="/narratingstories" className="inline-block hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
        <h2 className="next-title-res" style={styles.nextProjectTitle}>
          NEXT<br/>PROJECT
        </h2>
        </Link>
        <div className="footer-bar-res" style={styles.footerBar}>
          <button onClick={scrollToTop} style={styles.backTopBtn}>
            back on top
          </button>
          
          <span style={{ opacity: 0.8 }}>2024 © oui creatives all rights reserved</span>
          
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Follow Us</a>
        </div>
      </footer>

    </div>
  );
};

export default QuiPage;