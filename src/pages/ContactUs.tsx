import React from "react";
import { MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom"; // 1. Imported Link

// Placeholder for your custom fonts. 
// Ensure you import 'Breadley Sans' and 'Snell Roundhand' in your CSS for full fidelity.
const styles = {
  scriptFont: { fontFamily: '"Snell Roundhand", "Cursive", sans-serif' },
  sansFont: { fontFamily: '"Breadley Sans", "Helvetica Neue", sans-serif' },
};

export const ContactUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#34131c] min-h-screen w-full relative overflow-hidden text-white selection:bg-[#58182b] selection:text-white">
      
      {/* --- Background Ambient Blobs --- */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[#471829] rounded-full blur-[150px] opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#471829] rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#471829] rounded-full blur-[150px] opacity-60 pointer-events-none" />

      {/* --- Navbar --- */}
      <nav className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-10 flex justify-between items-start">
        <Link to="/" style={styles.sansFont} className="text-2xl md:text-3xl tracking-[0.3em] uppercase hover:opacity-80 transition-opacity">
          Qui Creatives
        </Link>
        {/* Logo/Icon Placeholder */}
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Logo Center */}
        <div className="mb-12 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center bg-[#34131c]/50 backdrop-blur-sm">
           <span className="text-4xl">Q</span>
        </div>

        <h2 style={styles.scriptFont} className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight">
          Crafting <br />
          <span className="italic">Hypnotic Brands!</span>
        </h2>
        
        <p style={styles.sansFont} className="text-lg md:text-2xl max-w-lg text-white/80 mt-4 font-light">
          Unlock the art of conversation, and let’s bring your vision to life together.
        </p>
      </main>

      {/* --- Contact Section (The "Enchanté" Form) --- */}
      <section className="relative z-10 w-full max-w-[1000px] mx-auto px-6 py-20">
        
        {/* Background Text Overlay */}
        <div 
          style={styles.scriptFont} 
          className="absolute top-0 left-0 w-full text-center text-[150px] md:text-[250px] text-white/[0.03] select-none pointer-events-none -translate-y-1/4"
        >
          enchanté?
        </div>

        <div className="relative z-20 bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl">
            <div className="text-center mb-16">
                <h3 style={styles.scriptFont} className="text-5xl md:text-6xl mb-4">enchanté?</h3>
                <p style={styles.sansFont} className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
                    Delighted by what you see? Let's get in touch to make it happen for you, for real!
                </p>
            </div>

            {/* Form Fields - Grid Layout */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {/* Name */}
                <div className="group">
                    <label className="block text-lg text-white/60 mb-2" style={styles.sansFont}>Your name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 transition-colors" />
                </div>
                
                {/* Email */}
                <div className="group">
                    <label className="block text-lg text-white/60 mb-2" style={styles.sansFont}>Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 transition-colors" />
                </div>

                {/* Phone */}
                <div className="group">
                    <label className="block text-lg text-white/60 mb-2" style={styles.sansFont}>Telephone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 transition-colors" />
                </div>

                {/* Services */}
                <div className="group">
                    <label className="block text-lg text-white/60 mb-2" style={styles.sansFont}>Services</label>
                    <select className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 transition-colors text-white appearance-none">
                        <option className="bg-[#34131c]">Branding</option>
                        <option className="bg-[#34131c]">Web Design</option>
                        <option className="bg-[#34131c]">Development</option>
                    </select>
                </div>

                {/* Project Details (Full Width) */}
                <div className="group md:col-span-2">
                    <label className="block text-lg text-white/60 mb-2" style={styles.sansFont}>Tell us about your project</label>
                    <textarea rows="1" className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 transition-colors resize-none overflow-hidden"></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center mt-8">
                    <button 
                        type="button"
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-[#fff5f5] to-[#bc9fa7] flex flex-col items-center justify-center text-[#58182b] hover:scale-105 transition-transform duration-300 shadow-lg group"
                    >
                        <span style={styles.sansFont} className="tracking-[0.2em] font-semibold text-sm mb-1">SUBMIT</span>
                    </button>
                </div>
            </form>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="relative z-10 w-full max-w-[1320px] mx-auto px-6 py-20">
        <div className="w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             {/* Map Image Placeholder */}
             <img 
                src="https://placehold.co/1440x800/222/999?text=Map+View" 
                alt="Map Location" 
                className="w-full h-full object-cover"
             />
             
             {/* Marker Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                <MapPin className="text-white w-12 h-12 drop-shadow-lg" />
                <span className="bg-black/80 px-4 py-2 text-sm tracking-[0.2em] rounded-md backdrop-blur-md">GOOGLE MAP</span>
             </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative z-10 max-w-[1440px] mx-auto px-6 pt-20 pb-12 text-center">
        
        {/* 2. Wrapped the title in a Link component */}
        <Link to="/ourprojects" className="inline-block hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
            <h2 style={styles.sansFont} className="text-[10vw] md:text-[140px] leading-none tracking-widest opacity-90 mb-16">
                OUR PROJECTS
            </h2>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base opacity-70 border-t border-white/10 pt-8 gap-6">
            <p>© 2024 Qui Creatives. All rights reserved.</p>
            
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>

            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 hover:text-white transition-colors"
            >
                Back on Top <ArrowUp size={16} />
            </button>
        </div>
      </footer>

    </div>
  );
};