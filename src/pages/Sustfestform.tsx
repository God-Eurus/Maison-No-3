"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SustFestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    // 1. Primary Contact
    fullName: '',
    age: '',
    gender: '',
    designation: '',
    company: '',
    orgType: '',
    website: '',
    country: '',
    city: '',
    email: '',
    phone: '',
    preferredContact: '',
    
    // 2. Partnership Category
    partnershipCategory: [] as string[],
    
    // 3. Involvement Interest
    interestType: [] as string[],
    sustainabilityAlignment: '',
    sdgAlignment: [] as string[],
    
    // 4. Program Contribution
    programContribution: [] as string[],
    
    // 5. Commercial Alignment
    estimatedBudget: '',
    sponsorshipReadiness: '',
    geographicScope: '',
    
    // 6. Exhibitor / Speaker
    interestedAsSpeaker: '',
    proposedTopic: '',
    interestedAsExhibitor: '',
    productDescription: '',
    
    // 7. Collaboration Vision
    collaborationVision: '',
    
    // 8. Consent
    receiveCatalogue: false,
    joinFutureUpdates: false,
    consentStatement: false,
  });

  // --- HANDLERS ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleMultiSelect = (field: 'partnershipCategory' | 'interestType' | 'sdgAlignment' | 'programContribution', value: string) => {
    setFormData(prev => {
      const currentList = prev[field];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE THIS URL WITH YOUR NEW FORMSPREE ENDPOINT
      const response = await fetch("https://formspree.io/f/YOUR_NEW_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Expression of interest submitted successfully. Welcome to Sust Fest.");
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- STYLING CONSTANTS ---
  const inputClass = "w-full bg-transparent border-b border-gray-400/60 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none placeholder:text-gray-400/50 font-breadley font-light";
  const labelClass = "block text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 mb-1 font-light";
  const sectionTitleClass = "text-lg md:text-xl tracking-[0.3em] uppercase font-normal mb-8 border-b border-gray-300/50 pb-4 text-[#111] mt-16";
  const selectBgClass = "bg-[#faf9f6] text-[#111] font-breadley font-light";

  const CustomCheckbox = ({ 
    checked, onChange, label, required = false 
  }: { 
    checked: boolean, onChange: () => void, label: string, required?: boolean 
  }) => (
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center w-[14px] h-[14px] border border-gray-500 mt-[2px] shrink-0 transition-colors group-hover:border-[#111]">
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
          required={required}
          className="peer appearance-none absolute w-full h-full cursor-pointer" 
        />
        {checked && <div className="w-[8px] h-[8px] bg-[#111]"></div>}
      </div>
      <span className="text-[10px] md:text-[11px] tracking-wider opacity-80 group-hover:opacity-100 transition-opacity font-light uppercase leading-relaxed font-breadley">
        {label}
      </span>
    </label>
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#111] font-breadley py-20 px-6 md:px-12 lg:px-24 flex justify-center">
      
      {/* Explicit Breadley Sans Definition */}
      <style>{`
        @font-face {
          font-family: 'Breadley Sans';
          src: url('/fonts/BreadleySans.woff2') format('woff2'),
               url('/fonts/BreadleySans.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .font-breadley { font-family: 'Breadley Sans', sans-serif; }
      `}</style>

      <div className="w-full max-w-5xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-center mb-16 font-breadley"
        >
          <h1 className="text-3xl md:text-5xl tracking-[0.4em] uppercase mb-8 font-normal">
            Sust Fest <br/><span className="text-sm md:text-base tracking-[0.3em] opacity-60">Partnership Form</span>
          </h1>
          <p className="text-sm md:text-base leading-[2] tracking-wide opacity-80 max-w-2xl mx-auto font-light text-justify md:text-center">
            Sust Fest is a curated global sustainability platform by Maison No.3. This form captures early expressions of interest across partners, sponsors, collaborators, and contributors.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col font-breadley">

          {/* --- I. PRIMARY CONTACT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>I. Primary Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <label className={labelClass}>1. Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>2. Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>3. Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                    <option value="" disabled className={selectBgClass}>Select</option>
                    <option value="Male" className={selectBgClass}>Male</option>
                    <option value="Female" className={selectBgClass}>Female</option>
                    <option value="Non-binary" className={selectBgClass}>Non-binary</option>
                    <option value="Prefer not to say" className={selectBgClass}>Prefer not to say</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>4. Designation / Role *</label>
                <input type="text" name="designation" required value={formData.designation} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>5. Company / Organisation Name *</label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>6. Organisation Type *</label>
                <select name="orgType" required value={formData.orgType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select type</option>
                  {['Brand', 'Startup', 'Corporate', 'NGO', 'Foundation', 'Government', 'Investor', 'Individual'].map(opt => (
                    <option key={opt} value={opt} className={selectBgClass}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>7. Website / Portfolio</label>
                <input type="url" name="website" placeholder="https://" value={formData.website} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>8. Country *</label>
                <input type="text" name="country" required value={formData.country} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>9. City *</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
                <div>
                  <label className={labelClass}>10. Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>11. Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>12. Preferred Contact *</label>
                  <select name="preferredContact" required value={formData.preferredContact} onChange={handleChange} className={inputClass}>
                    <option value="" disabled className={selectBgClass}>Select</option>
                    <option value="Email" className={selectBgClass}>Email</option>
                    <option value="WhatsApp" className={selectBgClass}>WhatsApp</option>
                    <option value="Phone" className={selectBgClass}>Phone</option>
                    <option value="Through Office" className={selectBgClass}>Through Office</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.section>

          {/* --- II. PARTNERSHIP CATEGORY --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>II. Partnership Category *</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 bg-gray-100/30 p-6 rounded-lg">
              {[
                'Title Sponsor', 'Powered By', 'Co-Powered By', 'SDG Partner', 'Speaker', 'Automotive Partner', 
                'Knowledge Partner', 'Venue Partner', 'Media Partner', 'Entertainment Partner', 'Ticketing Partner', 
                'Payment Partner', 'Hospitality Partner', 'Travel Partner', 'Radio Partner', 'Marketing Partner', 
                'Curation Partner', 'Design Partner', 'Health Partner', 'Nutrition Partner', 'Fashion & Lifestyle Partner', 
                'Liquor Partner', 'Hydration Partner', 'F&B Partner', 'Art Partner', 'Heritage Partner', 'Community Partner', 
                'Tech Partner', 'Production Partner', 'Sanitization Partner', 'Telecom Partner', 'Telephone Partner', 
                'Green Energy Partner', 'PR Print Partner', 'AR-VR Partner', 'Startup India', 'Make in India Partner', 
                'Social Media Partner', 'Jewelry Partner'
              ].map(opt => (
                <CustomCheckbox 
                  key={opt} label={opt} 
                  checked={formData.partnershipCategory.includes(opt)} 
                  onChange={() => handleMultiSelect('partnershipCategory', opt)} 
                />
              ))}
            </div>
            {formData.partnershipCategory.length === 0 && <input type="checkbox" required className="opacity-0 absolute -z-10" />}
          </motion.section>

          {/* --- III. INVOLVEMENT INTEREST --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>III. Sust Fest Involvement</h2>
            <div className="flex flex-col gap-10">
              
              <div>
                <label className={labelClass}>14. Interest Type *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 mt-4">
                  {['Sponsorship', 'Speaking', 'Exhibition', 'Collaboration', 'Experience Zone', 'Investment', 'Volunteering', 'Community Activation'].map(opt => (
                    <CustomCheckbox key={opt} label={opt} checked={formData.interestType.includes(opt)} onChange={() => handleMultiSelect('interestType', opt)} />
                  ))}
                </div>
                {formData.interestType.length === 0 && <input type="checkbox" required className="opacity-0 absolute -z-10" />}
              </div>

              <div>
                <label className={labelClass}>15. Sustainability Alignment (Max 250 words) *</label>
                <textarea name="sustainabilityAlignment" required rows={3} placeholder="Why do you belong in Sust Fest?" value={formData.sustainabilityAlignment} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
              </div>

              <div>
                <label className={labelClass}>16. SDG Alignment (Optional)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-y-4 gap-x-2 mt-4">
                  {Array.from({length: 17}, (_, i) => `SDG ${i + 1}`).map(opt => (
                    <CustomCheckbox key={opt} label={opt} checked={formData.sdgAlignment.includes(opt)} onChange={() => handleMultiSelect('sdgAlignment', opt)} />
                  ))}
                </div>
              </div>

            </div>
          </motion.section>

          {/* --- IV. PROGRAM CONTRIBUTION --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>IV. Program Contribution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 bg-gray-100/30 p-6 rounded-lg">
              {[
                'Educational Awareness', 'Experiential Learning', 'Art & Culture', 'Networking', 'Community Engagement', 
                'Green Marketplace', 'Youth Engagement', 'Workshops', 'DIY Sessions', 'Green Tech Showcase', 
                'Entertainment', 'Carbon Offsetting', 'Measuring Impact', 'Sustainable Logistics', 'Sustainability Awards', 
                'Ticketing & Registration', 'Safety & Security', 'Food & Beverage', 'Space Design', 'Post-Event Engagement', 
                'Volunteers & Coordination', 'Security', 'Housekeeping', 'Marketing & Promotion', 'Program Development', 
                'Sponsorship Alliances', 'Partnerships', 'Exhibitors'
              ].map(opt => (
                <CustomCheckbox 
                  key={opt} label={opt} 
                  checked={formData.programContribution.includes(opt)} 
                  onChange={() => handleMultiSelect('programContribution', opt)} 
                />
              ))}
            </div>
          </motion.section>

          {/* --- V. COMMERCIAL ALIGNMENT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>V. Budget & Commercial Alignment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
              <div>
                <label className={labelClass}>18. Estimated Budget</label>
                <select name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select budget</option>
                  <option value="Below $5K" className={selectBgClass}>Below $5K</option>
                  <option value="$5K–$25K" className={selectBgClass}>$5K–$25K</option>
                  <option value="$25K–$100K" className={selectBgClass}>$25K–$100K</option>
                  <option value="$100K–$500K" className={selectBgClass}>$100K–$500K</option>
                  <option value="$500K+" className={selectBgClass}>$500K+</option>
                  <option value="Prefer to discuss privately" className={selectBgClass}>Discuss privately</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>19. Sponsorship Readiness</label>
                <select name="sponsorshipReadiness" value={formData.sponsorshipReadiness} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select timeline</option>
                  <option value="Immediate" className={selectBgClass}>Immediate</option>
                  <option value="3–6 Months" className={selectBgClass}>3–6 Months</option>
                  <option value="6–12 Months" className={selectBgClass}>6–12 Months</option>
                  <option value="Exploring" className={selectBgClass}>Exploring</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>20. Geographic Scope</label>
                <select name="geographicScope" value={formData.geographicScope} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select scope</option>
                  <option value="Local" className={selectBgClass}>Local</option>
                  <option value="National" className={selectBgClass}>National</option>
                  <option value="Global" className={selectBgClass}>Global</option>
                </select>
              </div>
            </div>
          </motion.section>

          {/* --- VI. EXHIBITOR / SPEAKER --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VI. Exhibitor & Speaker Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <label className={labelClass}>21. Interested as Speaker?</label>
                <select name="interestedAsSpeaker" value={formData.interestedAsSpeaker} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select option</option>
                  <option value="Yes" className={selectBgClass}>Yes</option>
                  <option value="No" className={selectBgClass}>No</option>
                  <option value="Maybe" className={selectBgClass}>Maybe</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>22. Proposed Topic</label>
                <input type="text" name="proposedTopic" placeholder="If applicable..." value={formData.proposedTopic} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>23. Interested as Exhibitor?</label>
                <select name="interestedAsExhibitor" value={formData.interestedAsExhibitor} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select option</option>
                  <option value="Yes" className={selectBgClass}>Yes</option>
                  <option value="No" className={selectBgClass}>No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>24. Product / Showcase Description</label>
                <textarea name="productDescription" rows={1} value={formData.productDescription} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
              </div>
            </div>
          </motion.section>

          {/* --- VII. COLLABORATION VISION --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VII. Collaboration Vision</h2>
            <div>
              <label className={labelClass}>25. Collaboration Vision</label>
              <textarea name="collaborationVision" rows={3} placeholder="How would you like to collaborate with Sust Fest?" value={formData.collaborationVision} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
            </div>
          </motion.section>

          {/* --- VIII. CATALOGUE & CONSENT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VIII. Finalisation</h2>
            <div className="flex flex-col gap-6 bg-[#111]/[0.02] p-6 md:p-10 border border-[#111]/10 rounded-xl">
              <CustomCheckbox 
                label="26. Yes, send me the Sust Fest catalogue *" 
                required 
                checked={formData.receiveCatalogue} 
                onChange={() => handleCheckboxChange('receiveCatalogue', !formData.receiveCatalogue)} 
              />
              <CustomCheckbox 
                label="27. Yes, keep me informed about future updates" 
                checked={formData.joinFutureUpdates} 
                onChange={() => handleCheckboxChange('joinFutureUpdates', !formData.joinFutureUpdates)} 
              />
              <div className="pt-6 border-t border-[#111]/10 mt-2">
                <CustomCheckbox 
                  label="28. I understand Sust Fest is a curated initiative and collaborations are subject to alignment. *" 
                  required 
                  checked={formData.consentStatement} 
                  onChange={() => handleCheckboxChange('consentStatement', !formData.consentStatement)} 
                />
              </div>
            </div>
          </motion.section>

          {/* --- SUBMIT BUTTON --- */}
          <div className="flex justify-center mt-12 pb-24">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-[#111] text-[#faf9f6] px-16 py-5 tracking-[0.3em] text-xs uppercase transition-all duration-300 font-breadley font-light ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Expression of Interest'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}