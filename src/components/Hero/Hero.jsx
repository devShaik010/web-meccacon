import React, { useEffect } from "react";
import backgroundImage from "@assets/images/bg.jpg"; // Ensure this image exists in the folder

const Hero = () => {
  // Animation trigger on component mount
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    setTimeout(() => {
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-visible');
        }, index * 150); // Faster stagger
      });
    }, 300);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Enhanced Gradient Overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/85 z-10" />
      
      {/* Content Container - Reduced spacing between elements */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
                    flex flex-col justify-center items-center text-center">
        
        {/* Tag Line - Reduced bottom margin */}
        <div className="animate-on-load opacity-0 transform transition-all duration-700 ease-out mb-2">
          <span className="inline-block text-base text-xs font-medium tracking-wide
                         px-4 py-1 rounded-full border-2 border-[var(--color-secondary)] 
                         text-[var(--color-secondary)] bg-black/50">
            Your Main Source in Construction
          </span>
        </div>
        
        {/* Main Content - Reduced space-y from 4 to 2 */}
        <div className="mb-4 space-y-2 text-shadow-lg">
          <h1 className="animate-on-load opacity-0 transform  transition-all duration-700 ease-out
                        font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight
                        uppercase tracking-wide relative inline-block group">
            <span className="animate-gradient-enhanced bg-clip-text text-white">
              Meccacon
            </span>
            <span className="absolute left-0 bottom-0 w-full h-1
                          bg-[var(--color-secondary)] transform origin-left
                          scale-x-0 transition-transform duration-500
                          group-hover:scale-x-100"/>
          </h1>
          
          <h2 className="animate-on-load opacity-0 transform transition-all duration-700 ease-out
                        font-semibold text-xl md:text-3xl text-white
                        flex items-center justify-center gap-4">
            <span className="hidden md:block w-8 h-[2px] bg-[var(--color-secondary)]"/>
            Design & Build
            <span className="hidden md:block w-8 h-[2px] bg-[var(--color-secondary)]"/>
          </h2>
        </div>
        
       
        
        {/* Buttons - No change to gap as it's already minimal */}
        <div className="flex flex-col sm:flex-row gap-3 animate-on-load opacity-0 transform  transition-all duration-700 ease-out">
          <button className="bg-[var(--color-secondary)] text-white font-medium
                           px-7 py-3 rounded-lg transition-all duration-300
                           hover:shadow-lg hover:shadow-[var(--color-secondary)]/20
                           hover:transform hover:translate-y-[-2px] text-base">
            Contact Us
          </button>
          <button className="border-2 border-white text-white
                           px-7 py-3 rounded-lg font-medium text-base
                           backdrop-blur-sm bg-black/40
                           transition-all duration-300
                           hover:border-[var(--color-secondary)]
                           hover:text-[var(--color-secondary)]
                           hover:bg-black/60">
            Our Projects
          </button>
        </div>
        
       
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .text-shadow-lg {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .animate-gradient-enhanced {
          background: linear-gradient(-45deg, 
            var(--color-secondary) 0%, 
            #ffffff 50%, 
            var(--color-secondary) 100%);
          background-size: 300%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-animation 8s ease infinite;
        }
        
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-scroll-dot {
          animation: scrollDot 1.5s infinite;
        }
        
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(3px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Hero;