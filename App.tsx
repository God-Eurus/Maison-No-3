import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---
import Navbar from './src/components/Navbar';
import MenuOverlay from './src/components/MenuOverlay';
import ScrollToTop from './src/components/ScrollToTop'; // <--- IMPORT THIS

// --- PAGES ---
import Homepage from './src/pages/HomePage'; 
import OurStudioPage from './src/pages/OurStudio'; 
import ContactUs from './src/pages/ContactUs';
import OurProjects from './src/pages/OurProjects';
import BrandingPage from './src/pages/Branding';
import QuiPage from './src/pages/Qui';
import NarratingStoriesPage from './src/pages/NarratingStories';
import ConsciousBusinessPage from './src/pages/ConsciousBusiness';
import AtelierPage from './src/pages/Atelier';
import CripsyPage from './src/pages/Cripsy';
import ZoharetPage from './src/pages/Zoharet';
import MalachiOnePage from './src/pages/MalachiOne';
import MedafemOnePage from './src/pages/MedafemOne';
import Sdg from './src/pages/sdg';
import SusFest from './src/pages/susfest';
import KezaVera from './src/pages/kezavera';
import ThirdHall from './src/pages/thirdhall';
import ThirdHallForm from './src/pages/thirdhallform';
import HallRecord from './src/pages/HallRecord';
import Aia from './src/pages/aia';

import KezaVeraForm from './src/pages/KezaveraForm';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // --- AUTOMATIC SCROLL RESET ---
  // This ensures that when you change routes, the window snaps to the top
  useEffect(() => {
    // We use setTimeout to allow the exit animation to start before scrolling up
    // or you can remove setTimeout for instant scroll
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#f5f2f0]"> {/* Ensure background color is consistent */}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/ourstudio" element={<OurStudioPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ourprojects" element={<OurProjects />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/qui" element={<QuiPage />} />
          <Route path="/narratingstories" element={<NarratingStoriesPage />} />
          <Route path="/consciousbusiness" element={<ConsciousBusinessPage />} />
          <Route path="/atelier" element={<AtelierPage />} />
          
          <Route path="/cripsy" element={<CripsyPage />} />
          <Route path="/zoharet" element={<ZoharetPage />} />
          <Route path="/malachione" element={<MalachiOnePage />} />
          <Route path="/medafemone" element={<MedafemOnePage />} />
          <Route path="/sdg" element={<Sdg />} />
          <Route path="/sust-fest" element={<SusFest />} />
          <Route path="/kezavera" element={<KezaVera />} />
          <Route path="/thirdhall" element={<ThirdHall />} />
          <Route path="/thirdhallform" element={<ThirdHallForm />} />
          <Route path="/hallrecord" element={<HallRecord />} />
          <Route path="/aia" element={<Aia />} />
          
          <Route path="/kezaveraform" element={<KezaVeraForm />} />


        </Routes>
      </AnimatePresence>
      
      {/* GLOBAL UI ELEMENTS */}
      {!menuOpen && <Navbar onOpen={() => setMenuOpen(true)} />}
      
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      
      {/* THE SCROLL BUTTON (Visible on all pages) */}
      <ScrollToTop />
      
    </div>
  );
}

export default App;