"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SDG DATA CONFIGURATION WITH REAL CONTENT ---
const sdgList = [
  { 
    id: 1, 
    text: "No Poverty", 
    icon: "/assets/goal1.png", 
    color: "#E5243B", 
    goal: "End poverty in all its forms everywhere by enabling access to basic needs, economic opportunities, and equitable systems that support long-term stability and dignity.",
    perspective: "While our role is not infrastructural, we recognise that economic empowerment often begins with visibility and opportunity. Through conscious partnerships and pro-bono or subsidised creative support, we help purpose-driven organisations communicate their work with clarity and credibility. We also encourage brands to align portions of their outreach or CSR with community-first initiatives. Even small, sustained contributions can help shift attention and resources toward underserved ecosystems."
  },
  { 
    id: 2, 
    text: "Zero Hunger", 
    icon: "/assets/goal2.png", 
    color: "#DDA63A", 
    goal: "End hunger and ensure access to safe, nutritious food through sustainable agriculture, food security initiatives, and responsible food systems.",
    perspective: "We support brands in aligning campaigns and experiential work with food security initiatives, particularly through partnerships with grassroots organisations. Awareness, when done thoughtfully, can redirect both funding and cultural attention. Within our own practices, we encourage sustainable catering and food-conscious event planning & F&B business, reducing waste and supporting local sourcing wherever possible. Small operational decisions create cumulative impact."
  },
  { 
    id: 3, 
    text: "Good Health and Well-being", 
    icon: "/assets/goal3.png", 
    color: "#4C9F38", 
    goal: "Ensure healthy lives and promote well-being for all, including access to healthcare, mental health awareness, and safe living environments.",
    perspective: "We believe well-being extends beyond healthcare into how environments and experiences are shaped. Through spatial storytelling, brand messaging, and event design, we help create atmospheres that prioritise comfort, accessibility, and emotional balance. We also collaborate with foundations and wellness initiatives to amplify health-focused campaigns, ensuring that meaningful work is communicated with sensitivity and reach."
  },
  { 
    id: 4, 
    text: "Quality Education", 
    icon: "/assets/goal4.png", 
    color: "#C5192D", 
    goal: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    perspective: "Education thrives when knowledge is shared clearly and beautifully. We support educational institutions and initiatives by strengthening their storytelling, making learning more visible and aspirational. Beyond projects, we believe in informal knowledge exchange, mentoring young creatives, supporting design literacy, and encouraging learning through practice. Influence, when shared responsibly, can multiply access."
  },
  { 
    id: 5, 
    text: "Gender Equality", 
    icon: "/assets/goal5.png", 
    color: "#FF3A21", 
    goal: "Achieve gender equality and empower all women and girls through equal opportunities, representation, and safety.",
    perspective: "Representation begins with visibility. We consciously amplify female-led brands, creators, and narratives through the platforms we help shape. Storytelling plays a critical role in shifting perception. Internally and externally, we advocate for equitable collaborations and safe creative environments. Cultural change often begins in small, consistent decisions, who is included, who is credited, and who is heard."
  },
  { 
    id: 6, 
    text: "Clean Water and Sanitation", 
    icon: "/assets/goal6.png", 
    color: "#26BDE2", 
    goal: "Ensure availability and sustainable management of water and sanitation for all.",
    perspective: "Though not directly infrastructural, we support water-conscious practices through responsible event production and vendor selection. Reducing water-intensive setups and encouraging mindful consumption becomes part of our operational ethos. We also guide brands in supporting water-focused NGOs and awareness campaigns, translating intent into visible, meaningful participation."
  },
  { 
    id: 7, 
    text: "Affordable and Clean Energy", 
    icon: "/assets/goal7.png", 
    color: "#FCC30B", 
    goal: "Ensure access to affordable, reliable, sustainable energy and promote renewable energy adoption.",
    perspective: "We advocate for energy-aware production, encouraging low-impact lighting, digital-first experiences, and efficient creative workflows where possible. Conscious production design reduces hidden environmental costs. We also support brands transitioning toward renewable practices by helping them communicate these shifts authentically, ensuring sustainability is not just implemented but understood."
  },
  { 
    id: 8, 
    text: "Decent Work and Economic Growth", 
    icon: "/assets/goal8.png", 
    color: "#A21942", 
    goal: "Promote inclusive economic growth, productive employment, and fair working conditions.",
    perspective: "We believe creative ecosystems should be equitable. Wherever possible, we collaborate with independent artists, local makers, and emerging talent, ensuring that opportunity circulates more widely. We also encourage brands to build ethically, not only in messaging but in hiring, attribution, and collaboration models. Fair growth is sustained growth."
  },
  { 
    id: 9, 
    text: "Industry, Innovation and Infrastructure", 
    icon: "/assets/goal9.png", 
    color: "#FD6925", 
    goal: "Build resilient infrastructure and foster innovation through sustainable industrial and technological development.",
    perspective: "Innovation, to us, is not only technological but cultural. We help brands experiment responsibly, blending design, narrative, and technology to create meaningful, future-ready expressions. By integrating thoughtful digital systems and design thinking, we help businesses build identities that remain adaptable in a rapidly evolving world."
  },
  { 
    id: 10, 
    text: "Reduced Inequalities", 
    icon: "/assets/goal10.png", 
    color: "#DD1367", 
    goal: "Reduce inequalities within and among countries by promoting inclusion and equitable access.",
    perspective: "We approach storytelling with sensitivity to diversity, ensuring that brands communicate inclusively and responsibly across cultures and communities. Through conscious collaborations and representation in casting, campaigns, and narratives, we aim to widen visibility rather than narrow it. Cultural equity begins with who is seen."
  },
  { 
    id: 11, 
    text: "Sustainable Cities and Communities", 
    icon: "/assets/goal11.png", 
    color: "#FD9D24", 
    goal: "Make cities inclusive, safe, resilient, and sustainable.",
    perspective: "Cities are cultural ecosystems. Through spatial storytelling, public-facing installations, and community-driven experiences, we encourage brands to engage with their urban environments thoughtfully. We also promote collaborations with local artisans and cultural communities, helping brands contribute to the places they inhabit rather than simply occupy them."
  },
  { 
    id: 12, 
    text: "Responsible Consumption and Production", 
    icon: "/assets/goal12.png", 
    color: "#BF8B2E", 
    goal: "Ensure sustainable consumption and production patterns by reducing waste and encouraging mindful resource use.",
    perspective: "This is one of the goals most closely aligned with our work. We encourage thoughtful production, fewer but better outputs, timeless design, and materials that endure beyond trends. By advocating for longevity in branding and experiences, we help reduce the cycle of excess. Intentional creation is the most refined form of sustainability."
  },
  { 
    id: 13, 
    text: "Climate Action", 
    icon: "/assets/goal13.png", 
    color: "#3F7E44", 
    goal: "Take urgent action to combat climate change and its impacts.",
    perspective: "Climate responsibility begins with awareness. We guide brands in embedding environmental sensitivity into their storytelling without resorting to superficial claims. Through conscious production choices and partnerships with climate-focused organisations, we support gradual, genuine steps toward lower-impact creative ecosystems."
  },
  { 
    id: 14, 
    text: "Life Below Water", 
    icon: "/assets/goal14.png", 
    color: "#0A97D9", 
    goal: "Conserve and sustainably use oceans and marine resources.",
    perspective: "We support marine-focused initiatives by helping environmentally driven brands and organisations communicate their missions with clarity and emotional resonance. In production, we encourage reduced plastic use and responsible material sourcing, small decisions that collectively reduce ocean-bound waste."
  },
  { 
    id: 15, 
    text: "Life on Land", 
    icon: "/assets/goal15.png", 
    color: "#56C02B", 
    goal: "Protect ecosystems, forests, and biodiversity while promoting sustainable land use.",
    perspective: "We align with brands and initiatives working toward ecological preservation by strengthening their cultural voice and visibility. Where possible, we support nature-conscious experiences and material choices, favouring sustainability over spectacle, and preservation over excess."
  },
  { 
    id: 16, 
    text: "Peace, Justice and Strong Institutions", 
    icon: "/assets/goal16.png", 
    color: "#00689D", 
    goal: "Promote peaceful and inclusive societies with access to justice and accountable institutions.",
    perspective: "We believe culture shapes trust. By helping organisations communicate with clarity and integrity, we support transparency and credibility in public perception. Through ethical storytelling and responsible messaging, we aim to foster dialogue that is balanced, respectful, and rooted in truth."
  },
  { 
    id: 17, 
    text: "Partnerships for the Goals", 
    icon: "/assets/goal17.png", 
    color: "#19486A", 
    goal: "Strengthen global partnerships to achieve sustainable development.",
    perspective: "This goal sits at the heart of how we approach impact. Through collaborations with organisations like the AIA Foundation and other aligned initiatives, we help translate intent into action. We see sustainability as a shared journey. By connecting brands with meaningful partners, we enable collective progress, where influence, resources, and purpose move together."
  }
];

export default function Sdg() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center overflow-x-hidden bg-black">
      
      {/* Ensure Breadley Sans is defined if not already handled by Tailwind config */}
      <style>{`
        .font-breadley {
          font-family: 'Breadley Sans', sans-serif;
        }
      `}</style>

      {/* --- BACKGROUND IMAGES & OVERLAYS (STACKED VERTICALLY) --- */}
      <div className="absolute inset-0 z-0 flex flex-col w-full h-full">
        {/* Top Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/cb.jpg" 
            alt="Sustainable Background 1" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Middle Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/cb2.jpg" 
            alt="Sustainable Background 2" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Bottom Image */}
        <div className="relative w-full h-1/3">
          <img 
            src="/assets/cb.jpg" 
            alt="Sustainable Background 3" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlays (Covers all three images seamlessly to keep text readable) */}
        <div className="absolute inset-0 bg-[#1e3a4c] mix-blend-multiply opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-[100vw] mx-auto min-h-screen pt-12 pb-24">
        
        <img 
          src="/assets/suslogo.png" 
          alt="Sustainable Development Goals" 
          className="w-72 sm:w-96 md:w-[600px] lg:w-[750px] h-auto object-contain mb-12 md:mb-20 mt-12"
        />

        <div className="flex flex-col items-center mb-10 opacity-80">
          <span className="text-white text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 font-breadley">
            Explore
          </span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white text-sm"
          >
            ↓
          </motion.div>
        </div>

        {/* CHANGED: Adjusted vw sizing and added explicit padding (px-6 md:px-12) to create breathing room on the sides */}
        <h1 className="px-4 md:px-8 text-[5vw] sm:text-[3vw] md:text-3xl lg:text-[4.5rem] text-white font-breadley tracking-[0.25em] uppercase mb-8 md:mb-12 leading-tight drop-shadow-lg whitespace-nowrap">
          Build with Awareness
        </h1>

        <div className="w-full max-w-[95%] md:max-w-4xl lg:max-w-6xl mx-auto">
          <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg text-justify font-breadley leading-[1.8] md:leading-[2.2] tracking-wide drop-shadow-md px-2 md:px-8">
            Our approach is informed by globally recognised sustainability frameworks, including the United Nations’ Sustainable Development Goals. Rather than treating them as checklists, we view them as guiding principles, encouraging businesses to align purpose with practice. Wherever possible, we help integrate these values into branding, communication, and experience design, allowing responsibility to exist naturally within the brand’s expression.
          </p>
        </div>
      </section>

      {/* --- ACCORDION / LIST SECTION --- */}
      <section className="relative z-10 w-full sm:w-[95%] lg:max-w-[1400px] mx-auto px-2 sm:px-0 pb-12">
        <div className="flex flex-col w-full bg-white/10 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] sm:rounded-lg border-y sm:border border-white/20 overflow-hidden">
          
          {sdgList.map((sdg) => {
            const isExpanded = expandedId === sdg.id;

            return (
              <div 
                key={sdg.id} 
                className={`group flex flex-col w-full border-b border-white/10 last:border-b-0 cursor-pointer transition-colors duration-500 ${isExpanded ? 'bg-white/10' : 'hover:bg-white/5'}`}
                onClick={() => toggleExpand(sdg.id)}
              >
                {/* Header Row (Always Visible) */}
                <div className="flex items-center justify-between w-full py-4 md:py-6 px-4 sm:px-6 md:px-10">
                  
                  {/* Left Logo */}
                  <div className="w-10 sm:w-16 md:w-20 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={sdg.icon} 
                      alt={`SDG ${sdg.id}`} 
                      className="w-full h-auto object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Middle Text - Goal Name Only */}
                  <div className="flex-1 px-4 sm:px-6 md:px-12 flex flex-col justify-center">
                    <span className="text-[10px] md:text-xs font-breadley tracking-[0.2em] uppercase opacity-60 text-white mb-1 md:mb-2">
                      Goal {sdg.id}
                    </span>
                    <p className="font-breadley text-[11px] sm:text-sm md:text-lg leading-relaxed drop-shadow-md text-white">
                      {sdg.text}
                    </p>
                  </div>

                  {/* Right Plus/Close Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <motion.span 
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-2xl sm:text-3xl md:text-4xl font-light transform drop-shadow-md text-white font-breadley"
                    >
                      +
                    </motion.span>
                  </div>
                </div>

                {/* Expanded Content Area (Animated Reveal) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Structure for "The Goal" and "The Maison Perspective" */}
                      <div className="px-4 sm:px-6 md:px-10 pb-8 md:pb-12 ml-10 sm:ml-16 md:ml-20 pl-4 sm:pl-6 md:pl-12 border-l-2 flex flex-col gap-6 md:gap-8 mt-2" style={{ borderColor: sdg.color }}>
                        
                        {/* The Goal */}
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-breadley uppercase text-white/50">
                            The Goal
                          </span>
                          <p className="text-white/90 font-breadley text-[10px] sm:text-xs md:text-sm leading-[1.8] text-justify sm:text-left drop-shadow-sm">
                            {sdg.goal}
                          </p>
                        </div>

                        {/* The Maison Perspective */}
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-breadley uppercase text-white/50">
                            The Maison Perspective
                          </span>
                          <p className="text-white/90 font-breadley text-[10px] sm:text-xs md:text-sm leading-[1.8] text-justify sm:text-left drop-shadow-sm">
                            {sdg.perspective}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>
      </section>

      {/* --- BOTTOM OUTRO SECTION --- */}
      <section className="relative z-10 flex flex-col items-center justify-between w-full min-h-[80vh] mt-16 md:mt-24 px-4 sm:px-6 pb-8 md:pb-12">
        
        {/* Top Paragraph */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl text-center font-breadley leading-[1.8] md:leading-[2] tracking-wide mt-10 md:mt-16 mb-24 md:mb-48 drop-shadow-md px-2">
          Impact is rarely immediate, but always cumulative. <br className="hidden md:block"/>
          We believe that conscious steps, taken consistently, <br className="hidden md:block"/>
          shape the futures we inherit.
        </p>

        {/* MORE PROJECTS Block */}
        <div className="flex flex-col items-center justify-center flex-grow mb-24 md:mb-48">
          <a href="/projects" className="group flex flex-col items-center text-center text-white hover:opacity-80 transition-opacity cursor-pointer">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-breadley tracking-[0.25em] uppercase mb-6 md:mb-10 leading-[1.15] drop-shadow-lg">
              Begin the Shift<br/>
            </h2>
            <p className="text-white/80 text-[10px] sm:text-xs md:text-sm font-breadley tracking-[0.2em] drop-shadow-md px-4">
              If you believe business can create value beyond itself, we invite you to explore what a more conscious
              <br className="hidden md:block"/>
              approach could look like for your brand. Sometimes the smallest shifts create the most meaningful change.
            </p>
          </a>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full max-w-[95%] lg:max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-white/60 text-[8px] md:text-[10px] tracking-[0.3em] uppercase mt-auto font-breadley drop-shadow-md text-center md:text-left">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="hover:text-white transition-colors cursor-pointer uppercase order-2 md:order-1 font-breadley"
          >
            back on top
          </button>
          <span className="order-1 md:order-2 mx-0 md:mx-4 leading-relaxed font-breadley">
            2024 @ qui creatives all rights reserved
          </span>
          <a href="#" className="hover:text-white transition-colors uppercase order-3 font-breadley">
            Follow Us
          </a>
        </div>
      </section>

    </main>
  );
}