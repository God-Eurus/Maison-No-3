import React, { useEffect } from 'react';
import styles from './OurStudio.module.css';
import Lenis from 'lenis';
import { HiOutlineMenu, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom'; 

// Data for the industries list
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

// Data for the services list
const services = [
  { name: "Branding", path: "/services/branding" },
  { name: "Web Design & Development", path: "/services/web-design" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Social Media", path: "/services/social-media" },
  { name: "Public Relations", path: "/services/pr" },
  { name: "Photography", path: "/services/photography" },
  { name: "Augmented/Virtual Reality", path: "/services/ar-vr" },
  { name: "Experiential Events", path: "/services/events" },
];

const OurStudioPage = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    // Animation frame loop to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  const testimonials = [
    { name: "Name", text: "It's always a luxury experience!" },
    { name: "Name", text: "It's always a luxury experience!" },
    { name: "Name", text: "It's always a luxury experience!" },
    { name: "Name", text: "It's always a luxury experience!" },
    { name: "Name", text: "It's always a luxury experience!" },
    { name: "Name", text: "It's always a luxury experience!" },
  ];

  return (
    <>
      {/* --- SECTION 1 & 2 (Dark Background) --- */}
      <div className={styles.pageContainer}>
        
        {/* Top Navigation */}
        <nav className={styles.nav}>
          <div className={styles.logo}>OUI CREATIVES</div>
          <button className={styles.menuButton}>
            <HiOutlineMenu size={28} />
          </button>
        </nav>

        {/* Main Page Content */}
        <main className={styles.mainContent}>

          {/* --- Studio Header + Image --- */}
          <section>
            <div className={styles.studioHeader}>
              <div className={styles.headerLogo}>OUI</div> 
              <h1>OUR STUDIO</h1>
              <p>A boutique affair where Art finds its Spot</p>
            </div>
            <div className={styles.centralImageSection}>
              <div className={styles.imageWrapper}>
                <img 
                  src="/assets/Lady.jpg" 
                  alt="Studio" 
                  className={styles.centralImage} 
                />
              </div>
            </div>
          </section>

          {/* --- Industries List --- */}
          <section className={styles.industriesSection}>
            <h2>INDUSTRIES WE WORK IN</h2>
            <ul className={styles.industryList}>
              {industries.map((industry) => (
                <li key={industry} className={styles.industryItem}>
                  {industry}
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>

      {/* --- SECTION 3: OUR SERVICES (Light Background) --- */}
      <section className={styles.servicesContainer}>
        
        {/* --- LEFT COLUMN (Title & Graphic) --- */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            OUR
            <br />
            SERVICES
          </h2>
        </div>

        {/* --- RIGHT COLUMN (List of Services) --- */}
        <div className={styles.rightColumn}>
          <ul className={styles.serviceList}>
            {services.map((service) => (
              <li key={service.name} className={styles.serviceItem}>
                <Link to={service.path} className={styles.serviceLink}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <HiArrowRight className={styles.serviceIcon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    
      {/* SECTION 4: OUR CLIENTS (Dark Background)  */}
      <section className={styles.clientsContainer}>
        
        {/* --- Client Header --- */}
        <div className={styles.clientsHeader}>
          <img 
            src="/assets/crest-graphic.png" 
            alt="Crest" 
            className={styles.clientsCrest} 
          />
          <h2>OUR CLIENTS</h2>
          <p>We craft gorgeous and memorable projects for our clients.</p>
        </div>

        {/* --- Client Logo Grid --- */}
        <div className={styles.clientGrid}>
          {/* Row 1 */}
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/ayera.png" alt="Ayera" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/oxyn.png" alt="Oxyn" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/cvm.png" alt="CVM" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/sona.png" alt="Sona" />
          </div>
          
          {/* Row 2 */}
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/popup.png" alt="Pop-Up Shop" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/aispi.png" alt="Aispi" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/zoharet.png" alt="Zoharet" />
          </div>
          <div className={styles.clientLogoBox}>
            <img src="/assets/client-logos/deetales.png" alt="Deetales" />
          </div>
        </div>
        
      </section>

      <section className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2>WHAT OUR CLIENTS SAY?</h2>
          <p>Nos Clients Nous Aiment!</p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <h3 className={styles.testimonialName}>{testimonial.name}</h3>
              <p className={styles.testimonialText}>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactContainer}>
        
        {/* --- Contact Header --- */}
        <header className={styles.contactHeader}>
          <img src="/assets/founders-pavilion-logo.png" alt="Founders Pavilion" />
        </header>

        {/* --- Contact Main Content (Text + Image) --- */}
        <div className={styles.contactMain}>
          <div className={styles.contactText}>
            <p className={styles.contactQuote}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
            </p>
            <span className={styles.contactName}>Name</span>
            <p className={styles.contactParagraph}>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
            </p>
          </div>
          <div className={styles.contactImageWrapper}>
            <img src="/assets/man-with-coffee.jpg" alt="Man with coffee" />
          </div>
        </div>

        {/* --- Contact Footer --- */}
        <footer className={styles.contactFooter}>
          {/* UPDATED: Wrapped H2 in Link to redirect to Contact Us page */}
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>CONTACT US</h2>
          </Link>
          
          <p>Contact us & let's bring your vision to life together! one concept at a time!</p>
          
          <div className={styles.footerBar}>
            <a href="#">back on top</a>
            <span>2024 © qui creatives all rights reserved</span>
            <a href="#">Follow Us</a>
          </div>
        </footer>
        
      </section>
    </>
  );
};

export default OurStudioPage;