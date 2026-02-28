import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(5, 5, 5, 0.7)',
    zIndex: 1,
  },
  logo: {
    position: 'relative',
    zIndex: 2,
    // INCREASED SIZE FROM 180px TO 350px
    height: '250px', 
    objectFit: 'contain',
    filter: 'drop-shadow(0px 0px 30px rgba(197, 160, 89, 0.5))', // Slightly stronger glow for larger size
    opacity: 0,
    animation: 'fadeInLogo 3s ease-out forwards',
  },
};

const VideoShowcase = () => {
  return (
    <div style={styles.sectionContainer}>
      <style>
        {`
          @keyframes fadeInLogo {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          /* Responsive adjustments for smaller screens */
          @media (max-width: 768px) {
            .responsive-logo {
              height: 250px !important;
            }
          }
        `}
      </style>

      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={styles.videoBackground}
      >
        <source src="/assets/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}></div>

      <img 
        src="/assets/Rectangle36.png" 
        alt="Archale Gold Logo" 
        className="responsive-logo" // Added class for responsive styling
        style={styles.logo} 
      />
    </div>
  );
};

export default VideoShowcase;