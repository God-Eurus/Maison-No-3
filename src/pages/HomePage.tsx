import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'; 
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

const BG_WHITE = 'bg-white'; 

const itemStyle = (imageUrl) => ({
  height: '85vh', 
  width: '90%',   
  maxWidth: '1200px', 
  margin: '0 auto',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.6)', 
});

export function HomePage() {
  return (
    <main className={`${BG_WHITE} min-h-screen w-full relative text-black`}>
        
        {/* --- GLOBAL HEADER --- */}
        <header className="fixed top-0 left-0 right-0 z-50 p-8 md:p-12 pointer-events-none">
          <div className="flex justify-between items-center text-black">
            <div className="text-sm font-serif-display tracking-wide pointer-events-auto">
              MAISON NO 3
            </div>
          </div>
        </header>

        {/* --- SECTION 1: HERO (WHITE BG) --- */}
        <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-white">
            
            {/* REDUCED SIZE DECORATIVE IMAGE */}
            <div className="absolute top-0 left-0 w-[40%] md:w-[30%] max-h-[50vh] opacity-15 pointer-events-none">
              <img 
                src="/assets/qui-logo.png" 
                alt="" 
                className="w-full h-auto object-contain object-left-top"
              />
            </div>

            <AnimatedSection className="relative z-10 text-center px-4">
              <div className="mb-8">
                
              </div>
              <h1 className="text-black text-5xl md:text-7xl font-script italic mb-4 leading-tight">
                Crafting<br />Hypnotic Brands!
              </h1>
              <p className="text-black/60 text-sm tracking-wide max-w-2xl mx-auto leading-relaxed font-serif-display">
                We are India's first French-inspired creative atelier.
              </p>
            </AnimatedSection>
        </section>

       <div className="relative z-10">
         <ScrollStack
            useWindowScroll={true} 
            stackPosition="5vh"  
            itemDistance={80}    
            itemScale={0.04}     
            itemStackDistance={35}
            baseScale={0.92}
            className="!bg-transparent !shadow-none"     
          >
            
            <ScrollStackItem 
              itemClassName="item-1" 
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
            >
              <Link to="/branding" className="block w-full h-full no-underline group">
                <div 
                  style={itemStyle('/assets/section2-bg.jpg')}
                  className="transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                >
                  <div className="text-center text-white px-4">
                    <h2 className="text-6xl font-serif mb-3 drop-shadow-xl">Branding</h2>
                    <p className="text-xl font-light tracking-wider opacity-90 drop-shadow-md">
                      Crafting hypnotic brands that resonate.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollStackItem>
            
            <ScrollStackItem 
              itemClassName="item-2" 
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
            >
              <Link to="/web-design" className="block w-full h-full no-underline group">
                <div 
                  style={itemStyle('/assets/section3-bg.jpg')}
                  className="transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                >
                  <div className="text-center text-white px-4">
                    <h2 className="text-6xl font-serif mb-3 drop-shadow-xl">Web Design</h2>
                    <p className="text-xl font-light tracking-wider opacity-90 drop-shadow-md">
                      Elegant, French-inspired web experiences.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollStackItem>
            
            <ScrollStackItem 
              itemClassName="item-3" 
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
            >
              <Link to="/storytelling" className="block w-full h-full no-underline group">
                <div 
                  style={itemStyle('/assets/section4-bg.jpeg')}
                  className="transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                >
                  <div className="text-center text-white px-4">
                    <h2 className="text-6xl font-serif mb-3 drop-shadow-xl">Storytelling</h2>
                    <p className="text-xl font-light tracking-wider opacity-90 drop-shadow-md">
                      The art of narrating your unique story.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollStackItem>

             <ScrollStackItem 
              itemClassName="item-4" 
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
             >
              <Link to="/hypnotic" className="block w-full h-full no-underline group">
                <div 
                  style={itemStyle('/assets/section6-bg.jpg')}
                  className="transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                >
                  <div className="text-center text-white px-4">
                    <h2 className="text-6xl font-serif uppercase tracking-[0.2em] drop-shadow-xl">
                      Hypnotic Frames
                    </h2>
                  </div>
                </div>
              </Link>
            </ScrollStackItem>

          </ScrollStack>

          {/* --- FOOTER --- */}
          <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white text-black pt-32 pb-8 px-12">
            <div className="relative z-10 flex flex-col items-center flex-grow">
              <nav className="flex flex-col items-center space-y-6 mb-20">
                {['BRANDING', 'WEB DESIGN', 'DIGITAL MARKETING', 'SOCIAL MEDIA', 'PHOTOGRAPHY', 'PUBLIC RELATIONS'].map((item) => (
                  <a key={item} href="#" className="text-3xl md:text-4xl font-light tracking-[0.15em] opacity-40 hover:opacity-100 transition-opacity hover:text-black">
                    {item}
                  </a>
                ))}
              </nav>

              <Link to="/ourstudio" className="text-center mt-auto mb-16 no-underline text-black group">
                  <h2 className="text-7xl md:text-9xl font-serif tracking-[0.1em] group-hover:scale-105 transition-transform duration-700">
                    OUR STUDIO
                  </h2>
              </Link>
            </div>
            
            <footer className="relative z-10 w-full text-xs font-light opacity-50 uppercase tracking-widest">
              <div className="flex justify-between items-center border-t border-black/10 pt-6">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:opacity-100 transition-colors">
                  back on top
                </button>
                <span>2024 © qui creatives all rights reserved</span>
                <div className="flex gap-4">
                   <a href="#" className="hover:opacity-100 transition-colors">Instagram</a>
                   <a href="#" className="hover:opacity-100 transition-colors">LinkedIn</a>
                </div>
              </div>
            </footer>
          </section>
       </div> 
    </main>
  );
}