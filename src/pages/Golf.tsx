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
    // ADDED GAP: This creates the massive space between the Archale row and the Golf row
    gap: '15rem', 
  },
  
  // --- ARCHALE SECTION STYLES ---
  archaleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '4rem',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2,
  },
  goldLogo: {
    height: '400px',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 0px 15px rgba(197, 160, 89, 0.3))',
    animation: 'floating 4s ease-in-out infinite',
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
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '2rem',
    letterSpacing: '0.3em',
    color: '#e0e0e0',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: '0.95rem',
    lineHeight: '1.8',
    color: '#a0a0a0',
    marginBottom: '1.5rem',
    fontFamily: 'sans-serif',
  },
  quote: {
    fontFamily: '"Snell Roundhand", cursive',
    fontSize: '1.3rem',
    color: '#C5A059',
    opacity: 0.9,
  },

  // --- GOLF SECTION STYLES ---
  golfRow: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: '50vh', 
    gap: '5rem',
    paddingBottom: '5rem',
    zIndex: 2,
  },
  luxuryTextContainer: {
    flex: '0 1 350px',
    textAlign: 'left',
    marginBottom: '2rem',
    zIndex: 3,
  },
  golfImage: {
    maxHeight: '450px',
    objectFit: 'contain',
    zIndex: 2,
    animation: 'floating 4s ease-in-out infinite',
    animationDelay: '2s',
  },
  
  // --- KEY ORNAMENT STYLES ---
  ornamentRight: {
    position: 'absolute',
    right: '-15%', 
    top: '5%',
    height: '110%',
    objectFit: 'cover',
    opacity: 0.4,
    zIndex: 0,
    pointerEvents: 'none',
    mixBlendMode: 'screen',
  },
};

const Golf = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @media (max-width: 900px) {
            .archale-row, .golf-row {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 3rem !important;
            }
            .text-left-align {
              text-align: center !important;
            }
            .ornament-res {
              opacity: 0.2 !important;
              height: 100% !important;
              /* On mobile, prevent it from causing horizontal scroll */
              right: -40% !important; 
            }
          }
        `}
      </style>

      {/* --- HUGE KEY ORNAMENT --- */}
      <img 
        src="/assets/key.png" 
        alt="" 
        className="ornament-res"
        style={styles.ornamentRight} 
      />

      {/* --- PART 1: ARCHALE --- */}
      <div className="archale-row" style={styles.archaleRow}>
        <div className="responsive-img-wrapper">
          <img 
            src="/assets/Rectangle36.png" 
            alt="Archale Logo" 
            style={styles.goldLogo} 
          />
        </div>
        
        <div className="text-left-align" style={styles.textContent}>
          <h2 style={styles.projectTitle}>ARCHALE</h2>
          <p style={styles.desc}>
            This is not branding. It is Alchemy. Turning the base metal of commerce into gold-leafed legacy.
          </p>
          <p style={styles.quote}>
            "Un marque n'est pas un nom, c'est un frisson"
          </p>
        </div>
      </div>

      {/* --- PART 2: GOLF --- */}
      <div className="golf-row" style={styles.golfRow}>
        <div className="text-left-align" style={styles.luxuryTextContainer}>
          <p style={{...styles.desc, color: '#e0e0e0'}}>
            Because luxury is a memory that refuses to fade.
          </p>
          <p style={styles.quote}>
            "Parce que le luxe est une mémoire qui refuse de s'éteindre"
          </p>
        </div>

        <div className="responsive-img-wrapper">
          <img 
            src="/assets/Rectangle37.png" 
            alt="Luxury Golf Club" 
            style={styles.golfImage} 
          />
        </div>
      </div>
    </div>
  );
};

export default Golf;