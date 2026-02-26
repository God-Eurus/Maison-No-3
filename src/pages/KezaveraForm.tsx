"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function KezaVeraForm() {
  // Form State covering all 30 fields
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    brandName: '',
    entityType: '',
    country: '',
    city: '',
    email: '',
    phone: '',
    contactMethod: '',
    website: '',
    participationCategory: [] as string[],
    brandCategory: '',
    sustainabilityLens: [] as string[],
    yearEstablished: '',
    retailPresence: '',
    brandOverview: '',
    sustainabilityPhilosophy: '',
    whyKezaVera: '',
    interestType: [] as string[],
    collaborationVision: '',
    estimatedBudget: '',
    activationTimeline: '',
    interestedInShowcase: '',
    productCategories: '',
    pricePositioning: '',
    instagram: '',
    lookbook: '',
    receiveDossier: false,
    futureCollaborations: false,
    consentStatement: false,
  });

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleMultiSelect = (field: 'participationCategory' | 'sustainabilityLens' | 'interestType', value: string) => {
    setFormData(prev => {
      const currentList = prev[field];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submission logic here
    alert("Partnership request submitted successfully.");
  };

  // --- Styling Constants ---
  const inputClass = "w-full bg-transparent border-b border-gray-400/60 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors rounded-none placeholder:text-gray-400/50 font-sans";
  const labelClass = "block text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 mb-1 font-light";
  const sectionTitleClass = "text-lg md:text-xl tracking-[0.3em] uppercase font-normal mb-8 border-b border-gray-300/50 pb-4 text-[#111]";
  const selectBgClass = "bg-[#faf9f6] text-[#111] font-sans";

  // --- Custom Checkbox Component ---
  const CustomCheckbox = ({ 
    checked, onChange, label, required = false 
  }: { 
    checked: boolean, onChange: () => void, label: string, required?: boolean 
  }) => (
    <label className="flex items-start gap-4 cursor-pointer group">
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
      <span className="text-[11px] md:text-xs tracking-wider opacity-80 group-hover:opacity-100 transition-opacity font-light uppercase leading-relaxed">
        {label}
      </span>
    </label>
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#111] font-breadley py-20 px-6 md:px-12 lg:px-24 flex justify-center">
      
      <style>{`
        .font-breadley { font-family: 'Breadley Sans', sans-serif; }
      `}</style>

      <div className="w-full max-w-4xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl tracking-[0.4em] uppercase mb-8 font-normal">
            Keza Vera <br/><span className="text-sm md:text-base tracking-[0.3em] opacity-60">Partnership Form</span>
          </h1>
          <p className="text-sm md:text-base leading-[2] tracking-wide opacity-80 max-w-2xl mx-auto font-light text-justify md:text-center">
            Keza Vera is a curated sustainability-led fashion platform by Maison No.3, 
            bringing together conscious brands, cultural partners, and future-facing sponsors. 
            This form captures early expressions of alignment.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-20">

          {/* --- 1. PARTNERSHIP FORM --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>I. Primary Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <label className={labelClass}>1. Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>2. Designation / Role *</label>
                <input type="text" name="designation" required placeholder="Founder / Creative Director" value={formData.designation} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>3. Brand / Organisation Name *</label>
                <input type="text" name="brandName" required value={formData.brandName} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>4. Entity Type *</label>
                <select name="entityType" required value={formData.entityType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select entity type</option>
                  {['Fashion Brand', 'Sustainable Label', 'Lifestyle Brand', 'Sponsor', 'Strategic Partner', 'Institution', 'Investor', 'Foundation'].map(opt => (
                    <option key={opt} value={opt} className={selectBgClass}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>5. Country *</label>
                <input type="text" name="country" required value={formData.country} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>6. City *</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>7. Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>8. Phone / WhatsApp *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>9. Preferred Contact Method *</label>
                <select name="contactMethod" required value={formData.contactMethod} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select method</option>
                  <option value="Email" className={selectBgClass}>Email</option>
                  <option value="WhatsApp" className={selectBgClass}>WhatsApp</option>
                  <option value="Through Office" className={selectBgClass}>Through Office</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>10. Website / Portfolio</label>
                <input type="url" name="website" placeholder="https://" value={formData.website} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </motion.section>

          {/* --- 2. PARTICIPATION CATEGORY --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>II. Participation Category *</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
              {[
                'Title Sponsor', 'Powered By', 'Co-Powered By', 'Sustainability Partner', 
                'Fashion Partner', 'Conscious Luxury Partner', 'Textile Partner', 
                'Craft Partner', 'Jewelry Partner', 'Beauty & Wellness Partner', 
                'Lifestyle Partner', 'Venue Partner', 'Experience Partner', 
                'Knowledge Partner', 'Media Partner', 'Community Partner', 'Cultural Partner'
              ].map(opt => (
                <CustomCheckbox 
                  key={opt} label={opt} 
                  checked={formData.participationCategory.includes(opt)} 
                  onChange={() => handleMultiSelect('participationCategory', opt)} 
                />
              ))}
            </div>
            {/* Hidden native input just to enforce HTML5 'required' validation if the array is empty */}
            {formData.participationCategory.length === 0 && <input type="checkbox" required className="opacity-0 absolute -z-10" />}
          </motion.section>

          {/* --- 3. FASHION / BRAND SPECIFIC BLOCK --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>III. Fashion & Brand Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              <div>
                <label className={labelClass}>12. Brand Category</label>
                <select name="brandCategory" value={formData.brandCategory} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select category</option>
                  {['Apparel', 'Couture', 'Ready-to-Wear', 'Resort Wear', 'Jewelry', 'Accessories', 'Footwear', 'Beauty', 'Home', 'Textile', 'Multi-category'].map(opt => (
                    <option key={opt} value={opt} className={selectBgClass}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>14. Year Established</label>
                <input type="number" name="yearEstablished" value={formData.yearEstablished} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>15. Retail Presence</label>
                <select name="retailPresence" value={formData.retailPresence} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select retail footprint</option>
                  {['Online Only', 'Multi-brand Stores', 'Flagship Stores', 'Global Retail'].map(opt => (
                    <option key={opt} value={opt} className={selectBgClass}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <label className={labelClass}>13. Sustainability Lens</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 mt-6">
              {[
                'Slow Fashion', 'Circular Design', 'Ethical Production', 
                'Handloom', 'Craft Revival', 'Vegan Materials', 
                'Upcycled', 'Zero Waste', 'Regenerative'
              ].map(opt => (
                <CustomCheckbox 
                  key={opt} label={opt} 
                  checked={formData.sustainabilityLens.includes(opt)} 
                  onChange={() => handleMultiSelect('sustainabilityLens', opt)} 
                />
              ))}
            </div>
          </motion.section>

          {/* --- 4. BRAND STORY / INTENT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>IV. Brand Story & Intent</h2>
            <div className="flex flex-col gap-10">
              <div>
                <label className={labelClass}>16. Brand / Organisation Overview (Max 250 words) *</label>
                <textarea name="brandOverview" required rows={4} value={formData.brandOverview} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
              </div>
              <div>
                <label className={labelClass}>17. Sustainability Philosophy *</label>
                <textarea name="sustainabilityPhilosophy" required rows={3} value={formData.sustainabilityPhilosophy} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
              </div>
              <div>
                <label className={labelClass}>18. Why Keza Vera? *</label>
                <textarea name="whyKezaVera" required rows={3} placeholder="Why do you want to be part of this platform?" value={formData.whyKezaVera} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
              </div>
            </div>
          </motion.section>

          {/* --- 5. SPONSOR / PARTNER INTENT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>V. Partner Intent</h2>
            
            <label className={labelClass}>19. Interest Type *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-6 mb-10">
              {[
                'Sponsorship', 'Brand Showcase', 'Strategic Partnership', 
                'Retail Activation', 'Cultural Collaboration', 'Investment', 'Exploring Alignment'
              ].map(opt => (
                <CustomCheckbox 
                  key={opt} label={opt} 
                  checked={formData.interestType.includes(opt)} 
                  onChange={() => handleMultiSelect('interestType', opt)} 
                />
              ))}
              {formData.interestType.length === 0 && <input type="checkbox" required className="opacity-0 absolute -z-10" />}
            </div>

            <div>
              <label className={labelClass}>20. Collaboration Vision</label>
              <textarea name="collaborationVision" rows={3} placeholder="How would you like to collaborate with Keza Vera?" value={formData.collaborationVision} onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
            </div>
          </motion.section>

          {/* --- 6. COMMERCIAL ALIGNMENT & SHOWCASE DETAILS --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VI. Commercial & Showcase Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Sponsors */}
              <div>
                <label className={labelClass}>21. Estimated Budget (Sponsors)</label>
                <select name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select budget range</option>
                  <option value="Below $5K" className={selectBgClass}>Below $5K</option>
                  <option value="$5K–$25K" className={selectBgClass}>$5K–$25K</option>
                  <option value="$25K–$100K" className={selectBgClass}>$25K–$100K</option>
                  <option value="$100K+" className={selectBgClass}>$100K+</option>
                  <option value="Prefer private discussion" className={selectBgClass}>Prefer private discussion</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>22. Activation Timeline</label>
                <select name="activationTimeline" value={formData.activationTimeline} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select timeline</option>
                  <option value="Immediate" className={selectBgClass}>Immediate</option>
                  <option value="3–6 Months" className={selectBgClass}>3–6 Months</option>
                  <option value="6–12 Months" className={selectBgClass}>6–12 Months</option>
                  <option value="Exploring" className={selectBgClass}>Exploring</option>
                </select>
              </div>

              {/* Brands */}
              <div>
                <label className={labelClass}>23. Interested in Brand Showcase?</label>
                <select name="interestedInShowcase" value={formData.interestedInShowcase} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select option</option>
                  <option value="Yes" className={selectBgClass}>Yes</option>
                  <option value="No" className={selectBgClass}>No</option>
                  <option value="Maybe" className={selectBgClass}>Maybe</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>25. Price Positioning</label>
                <select name="pricePositioning" value={formData.pricePositioning} onChange={handleChange} className={inputClass}>
                  <option value="" disabled className={selectBgClass}>Select tier</option>
                  <option value="Accessible Luxury" className={selectBgClass}>Accessible Luxury</option>
                  <option value="Premium" className={selectBgClass}>Premium</option>
                  <option value="Luxury" className={selectBgClass}>Luxury</option>
                  <option value="Ultra Luxury" className={selectBgClass}>Ultra Luxury</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>24. Product Categories to Showcase</label>
                <input type="text" name="productCategories" placeholder="e.g. Resort Wear, Fine Jewelry" value={formData.productCategories} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </motion.section>

          {/* --- 7. VISUAL + CURATION DATA --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VII. Visual Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <label className={labelClass}>26. Instagram / Social Handle</label>
                <input type="text" name="instagram" placeholder="@" value={formData.instagram} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>27. Lookbook / Media Kit Link</label>
                <input type="url" name="lookbook" placeholder="https://" value={formData.lookbook} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </motion.section>

          {/* --- 8. CATALOGUE & CONSENT --- */}
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className={sectionTitleClass}>VIII. Finalisation</h2>
            <div className="flex flex-col gap-6 bg-[#111]/[0.02] p-6 md:p-10 border border-[#111]/10 rounded-xl">
              <CustomCheckbox 
                label="28. Yes, send me the Keza Vera dossier *" 
                required 
                checked={formData.receiveDossier} 
                onChange={() => handleCheckboxChange('receiveDossier', !formData.receiveDossier)} 
              />
              <CustomCheckbox 
                label="29. Yes, keep me informed about future editions" 
                checked={formData.futureCollaborations} 
                onChange={() => handleCheckboxChange('futureCollaborations', !formData.futureCollaborations)} 
              />
              <div className="pt-6 border-t border-[#111]/10 mt-2">
                <CustomCheckbox 
                  label="30. I understand Keza Vera is a curated platform and participation is subject to editorial selection. *" 
                  required 
                  checked={formData.consentStatement} 
                  onChange={() => handleCheckboxChange('consentStatement', !formData.consentStatement)} 
                />
              </div>
            </div>
          </motion.section>

          {/* --- SUBMIT BUTTON --- */}
          <div className="flex justify-center md:justify-end mt-4 pb-24">
            <button 
              type="submit" 
              className="bg-[#111] text-[#faf9f6] px-16 py-5 tracking-[0.3em] text-xs uppercase hover:bg-black hover:shadow-xl transition-all duration-300 font-sans font-light"
            >
              Submit Expression of Interest
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}