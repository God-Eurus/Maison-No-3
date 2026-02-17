import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './src/pages/HomePage'; // Corrected import path
import OurStudioPage from './src/pages/OurStudio'; // Import the OurStudio page
import Navbar from './src/components/Navbar';
import MenuOverlay from './src/components/MenuOverlay';
import {ContactUs} from './src/pages/ContactUs';
import OurProjects from './src/pages/OurProjects';
import BrandingPage from './src/pages/Branding';
import QuiPage from './src/pages/Qui';
import NarratingStoriesPage from './src/pages/NarratingStories';
import ConsciousBusinessPage from './src/pages/ConsciousBusiness';
import AtelierPage from './src/pages/Atelier';
import CripsyPage from './src/pages/Cripsy';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Define the routes for your application */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourstudio" element={<OurStudioPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ourprojects" element={<OurProjects />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/qui" element={<QuiPage />} />
        <Route path="/narratingstories" element={<NarratingStoriesPage />} />
        <Route path="/consciousbusiness" element={<ConsciousBusinessPage />} />
        <Route path="/atelier" element={<AtelierPage />} />
        <Route path="/cripsy" element={<CripsyPage />} />
      </Routes>
      
      {/* The Navbar is always visible, but the overlay is conditional */}
      
      {/* Only show the hamburger icon IF the menu is closed */}
      {!menuOpen && <Navbar onOpen={() => setMenuOpen(true)} />}
      
      {/* Only render the Menu Overlay IF the menu is open */}
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

export default App;