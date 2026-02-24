import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15rem 5vw', 
    position: 'relative',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15rem', 
  },
  
  // --- ARCHALE SECTION STYLES ---
  archaleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '4rem',
    flexWrap: 'wrap',
    // position: 'relative' keeps the right key trapped inside this row
    position: 'relative', 
    zIndex: 2,
  },
  goldLogo: {
    height: '400px',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 0px 15px rgba(197, 160, 89, 0.3))',
    animation: 'floating 4s ease-in-out infinite',
    position: 'relative',
    zIndex: 2,
  },
  textContent: {
    flex: '1 1 300px',
    textAlign: 'left',
    maxWidth: '450px', 
    paddingTop: '2rem',
    position: 'relative',
    zIndex: 2,
  },
  projectTitle: {
    fontFamily: '"Breadley Sans", sans-serif', 
    fontSize: '2rem', 
    letterSpacing: '0.3em',
    color: '#e0e0e0',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  desc: {
    fontFamily: '"Breadley Sans", sans-serif', 
    fontSize: '1.2rem', 
    lineHeight: '1.8',
    color: '#a0a0a0',
    marginBottom: '1.5rem',
  },
  quote: {
    fontFamily: '"Snell Roundhand", cursive', 
    fontSize: '1.5rem', 
    color: '#e0e0e0', 
    opacity: 0.9,
  },

  // --- GOLF SECTION STYLES ---
  golfRow: {
    position: 'relative', 
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between', 
    minHeight: '50vh', 
    gap: '10rem', 
    paddingBottom: '5rem',
    zIndex: 2,
  },
  luxuryTextContainer: {
    flex: '0 1 350px', 
    textAlign: 'left',
    marginBottom: '2rem',
    position: 'relative',
    zIndex: 3,
  },
  golfImage: {
    maxHeight: '450px',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
    animation: 'floating 4s ease-in-out infinite',
    animationDelay: '2s',
  },
  
  // --- KEY ORNAMENT STYLES ---
  ornamentArchaleRight: {
    position: 'absolute',
    right: '-22%', 
    top: '-20%', 
    height: '300%', 
    objectFit: 'contain',
    opacity: 0.8,
    zIndex: 0,
    pointerEvents: 'none',
    mixBlendMode: 'screen',
  },
  
};

const Golf = () => {
  return (
    <div className="golf-container" style={styles.container}>
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

          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @media (max-width: 900px) {
            .golf-container {
              padding: 8rem 5vw !important;
              gap: 6rem !important;
              overflow-x: hidden;
            }
            .archale-row, .golf-row {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 3rem !important;
            }
            .text-left-align {
              text-align: center !important;
            }
            /* Make images scale down correctly on smaller screens */
            .responsive-logo {
              height: auto !important;
              max-height: 300px !important;
              max-width: 100% !important;
            }
            /* Adjust text sizes to fit mobile */
            .responsive-title {
              font-size: 1.5rem !important;
            }
            .responsive-desc {
              font-size: 1rem !important;
            }
            .responsive-quote {
              font-size: 1.2rem !important;
            }
            .ornament-res-right {
              opacity: 0.15 !important;
              height: 100% !important;
              right: -10% !important; 
              top: 0 !important;
            }
          }

          /* Extra tweaks for very small phones */
          @media (max-width: 480px) {
            .golf-container {
              padding: 5rem 5vw !important;
              gap: 4rem !important;
            }
            .archale-row, .golf-row {
              gap: 2rem !important;
            }
            .responsive-logo {
              max-height: 220px !important;
            }
          }
        `}
      </style>

      {/* --- PART 1: ARCHALE --- */}
      <div className="archale-row" style={styles.archaleRow}>
        
        {/* Right Key (Restricted to Archale Row) */}
        <img 
          src="/assets/key.png" 
          alt="" 
          className="ornament-res-right"
          style={styles.ornamentArchaleRight} 
        />

        <div className="responsive-img-wrapper">
          <img 
            src="/assets/Rectangle36.png" 
            alt="Archale Logo" 
            className="responsive-logo"
            style={styles.goldLogo} 
          />
        </div>
        
        <div className="text-left-align" style={styles.textContent}>
          <h2 className="responsive-title" style={styles.projectTitle}>ARCHALE</h2>
          <p className="responsive-desc" style={styles.desc}>
            This is not branding. It is Alchemy. Turning the base metal of commerce into gold-leafed legacy.
          </p>
          <p className="responsive-quote" style={styles.quote}>
            "Un marque n'est pas un nom, c'est un frisson"
          </p>
        </div>
      </div>

      {/* --- PART 2: GOLF --- */}
      <div className="golf-row" style={styles.golfRow}>

        <div className="text-left-align" style={styles.luxuryTextContainer}>
          <p className="responsive-desc" style={{...styles.desc, color: '#e0e0e0'}}>
            Because luxury is a memory that refuses to fade.
          </p>
          <p className="responsive-quote" style={styles.quote}>
            "Parce que le luxe est une mémoire qui refuse de s'éteindre"
          </p>
        </div>

        <div className="responsive-img-wrapper">
          <img 
            src="/assets/Rectangle37.png" 
            alt="Luxury Golf Club" 
            className="responsive-logo"
            style={styles.golfImage} 
          />
        </div>
      </div>
      
    </div>
  );
};

export default Golf;