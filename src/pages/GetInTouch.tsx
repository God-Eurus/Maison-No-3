import React, { useState } from 'react';

const GetInTouch: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    services: [] as string[],
    duration: '',
    budget: '',
    projectDetails: ''
  });

  // Data Lists
  const servicesList = [
    'STRATEGY.',
    'BRANDING.',
    'MARKETING.',
    'WEBSITE / APP DEVELOPMENT.',
    'SOCIAL MEDIA MANAGEMENT.',
    'CONTENT CREATION.',
    'Your Custom Variant'
  ];

  const durationList = [
    'LESS THAN 1 YEAR.',
    '1-3 YEARS.',
    '3-5 YEARS.',
    '5+ YEARS.',
    'OTHER.'
  ];

  const budgetList = [
    'USD 5 - 10K',
    'USD 10 - 50K',
    'USD 50 - 100K',
    'USD +100K'
  ];

  // Helper to handle multiple checkbox selections for services
  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  // Helpers for single selections
  const handleDurationSelect = (duration: string) => {
    setFormData(prev => ({ ...prev, duration }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  // Custom Square Checkbox Component
  const CustomCheckbox = ({ 
    checked, 
    onChange, 
    label, 
  }: { 
    checked: boolean, 
    onChange: () => void, 
    label: string,
  }) => (
    <label className="flex items-center gap-4 cursor-pointer group">
      <div className={`relative flex items-center justify-center w-[14px] h-[14px] border border-gray-600 transition-colors shrink-0`}>
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
          className="peer appearance-none absolute w-full h-full cursor-pointer" 
        />
        {/* Inner square indicator when checked */}
        {checked && (
           <div className="w-[8px] h-[8px] bg-[#1a1a1a]"></div>
        )}
      </div>
      <span className="text-xs md:text-sm tracking-widest opacity-80 group-hover:opacity-100 transition-opacity font-light uppercase">
        {label}
      </span>
    </label>
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] relative flex justify-center py-16 px-6 md:px-12 lg:px-24">
      
      {/* Import luxury serif font via inline style or rely on your tailwind config */}
      <style>{`
        .font-luxury {
          font-family: "Playfair Display", "Times New Roman", Times, serif;
        }
      `}</style>

      {/* Close Button (Top Right) */}
      <button 
        className="absolute top-8 right-8 md:top-12 md:right-12 text-3xl font-luxury font-light hover:opacity-50 transition-opacity focus:outline-none"
        aria-label="Close"
      >
        X
      </button>

      <div className="w-full max-w-3xl mt-8">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-wide font-luxury">
          Get In Touch
        </h1>
        
        <p className="text-[13px] md:text-[15px] leading-[1.8] tracking-wide opacity-80 mb-16 font-sans font-light text-justify md:text-left">
          Our vision is to be the premier luxury creative agency known for redefining brands through unparalleled creativity and strategic innovation. We aspire to set new standards in the creative industry, where our designs become synonymous with refinement, elegance, and timeless sophistication. By continuously pushing the boundaries of art and technology, we envision a future where Oui Creatives is the go-to partner for brands seeking to leave an indelible mark on the world.
        </p>

        {/* Form Section */}
        <form className="flex flex-col gap-14" onSubmit={(e) => e.preventDefault()}>
          
          {/* Text Inputs */}
          <div className="flex flex-col gap-10">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg tracking-wide font-light font-luxury">Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-dashed border-gray-400 py-2 focus:outline-none focus:border-black transition-colors font-sans text-sm"
              />
            </div>

            {/* E-Mail */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg tracking-wide font-light font-luxury">E-Mail</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-dashed border-gray-400 py-2 focus:outline-none focus:border-black transition-colors font-sans text-sm"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="businessName" className="text-lg tracking-wide font-light font-luxury">Business Name</label>
              <input 
                type="text" 
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full bg-transparent border-b border-dashed border-gray-400 py-2 focus:outline-none focus:border-black transition-colors font-sans text-sm"
              />
            </div>
          </div>

          {/* Services Checkboxes */}
          <div>
            <h3 className="text-lg tracking-wide font-light font-luxury mb-6">What Service Are You Interested In?</h3>
            <div className="flex flex-col gap-4 font-sans">
              {servicesList.map((service) => (
                <CustomCheckbox 
                  key={service}
                  label={service}
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
              ))}
            </div>
          </div>

          {/* Duration Radio List */}
          <div>
            <h3 className="text-lg tracking-wide font-light font-luxury mb-6">How Long Have You Been In Business?</h3>
            <div className="flex flex-col gap-4 font-sans">
              {durationList.map((duration) => (
                <CustomCheckbox 
                  key={duration}
                  label={duration}
                  checked={formData.duration === duration}
                  onChange={() => handleDurationSelect(duration)}
                />
              ))}
            </div>
          </div>

          {/* Budget Radio List */}
          <div>
            <h3 className="text-lg tracking-wide font-light font-luxury mb-6">What's Your Budget?</h3>
            <div className="flex flex-col gap-4 font-sans">
              {budgetList.map((budget) => (
                <CustomCheckbox 
                  key={budget}
                  label={budget}
                  checked={formData.budget === budget}
                  onChange={() => handleBudgetSelect(budget)}
                />
              ))}
            </div>
          </div>

          {/* Project Details Textarea */}
          <div className="mt-4">
            <label htmlFor="projectDetails" className="block text-lg tracking-wide font-light font-luxury mb-6">
              Tell Us A Little Bit About Your Project And Timeline
            </label>
            <textarea 
              id="projectDetails"
              rows={5}
              value={formData.projectDetails}
              onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
              className="w-full bg-transparent border border-gray-500 rounded-[1.5rem] p-5 focus:outline-none focus:border-black resize-none transition-colors font-sans text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-2 pb-20">
            <button 
              type="submit" 
              className="bg-[#222] text-[#fdfdfd] px-14 py-4 rounded-[2rem] tracking-[0.25em] text-xs font-sans font-light uppercase hover:bg-black transition-colors duration-300"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default GetInTouch;