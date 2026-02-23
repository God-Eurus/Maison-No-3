import React from 'react';
import { motion } from 'framer-motion';

// --- DATA ---
const testimonialData = [
  { id: 1, name: "Name", text: "It's always a luxury experience!" },
  { id: 2, name: "Name", text: "It's always a luxury experience!" },
  { id: 3, name: "Name", text: "It's always a luxury experience!" },
  { id: 4, name: "Name", text: "It's always a luxury experience!" },
  { id: 5, name: "Name", text: "It's always a luxury experience!" },
  { id: 6, name: "Name", text: "It's always a luxury experience!" },
];

// --- ANIMATION VARIANTS ---
// Container controls the timing of children (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card appearing
      delayChildren: 0.1,
    }
  }
};

// Individual card animation (Slide Up + Fade In)
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, // Start 50px below final position
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth stacking
    }
  }
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#000000',
    padding: '8rem 2rem',
    color: '#ffffff',
    overflow: 'hidden', // Prevents scrollbars during animation
  },
  header: {
    textAlign: 'center',
    marginBottom: '6rem',
  },
  title: {
    fontFamily: '"Times New Roman", serif',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#a0a0a0', // Muted grey for subtitle
    letterSpacing: '0.05em',
  },
  // Grid Container
  grid: {
    display: 'grid',
    // Responsive: 1 col on mobile, 2 on tablet, 3 on desktop
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  // Card Style
  card: {
    backgroundColor: '#e6e6e6', // Light grey from screenshot
    color: '#1a1a1a', // Dark text
    borderRadius: '12px',
    padding: '2.5rem',
    height: '450px', // Fixed height for uniformity
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  cardName: {
    fontFamily: '"Times New Roman", serif',
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  cardText: {
    fontFamily: '"Helvetica Neue", sans-serif',
    fontSize: '1.1rem',
    lineHeight: '1.5',
    maxWidth: '80%',
  },
};

const Testimonials = () => {
  return (
    <section style={styles.section}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>WHAT OUR CLIENTS SAY?</h2>
        <p style={styles.subtitle}>Nos Clients Nous Aiment!</p>
      </div>

      {/* Grid */}
      <motion.div 
        style={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
      >
        {testimonialData.map((item) => (
          <motion.div 
            key={item.id} 
            style={styles.card}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }} // Optional hover lift
          >
            <span style={styles.cardName}>{item.name}</span>
            <p style={styles.cardText}>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Testimonials;