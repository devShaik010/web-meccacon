import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s1 from '@assets/images/s1.jpg';
import s2 from '@assets/images/s2.jpg';
import s3 from '@assets/images/s3.jpg';
import s4 from '@assets/images/s4.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: '01',
    title: 'Planning',
    description: 'Strategic project planning and initial consultations to set the foundation.',
    image: s1
  },
  {
    id: 2,
    number: '02',
    title: 'Designing',
    description: 'Innovative architectural solutions crafted to match your vision perfectly.',
    image: s2
  },
  {
    id: 3,
    number: '03',
    title: 'Construction',
    description: 'Expert construction management from ground breaking to completion.',
    image: s3
  },
  {
    id: 4,
    number: '04',
    title: 'Delivery',
    description: 'Final touches and handover ensuring everything meets our high standards.',
    image: s4
  }
];

// Reusable Card Component with improved design
const ServiceCard = ({ service, isActive, index }) => (
  <div
    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out 
                ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    style={{
      clipPath: isActive ? 'inset(0% 0% 0% 0%)' : 'inset(10% 10% 10% 10%)'
    }}
  >
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img
        src={service.image}
        alt={service.title}
        className={`w-full h-full object-cover transition-all duration-700 ease-out
                    ${isActive ? 'scale-100 filter-none' : 'scale-110 blur-sm'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                      transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  </div>
);

// Improved indicator component
const ServiceIndicator = ({ total, current, setActiveIndex }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 
                 flex items-center justify-center space-x-3">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300
                  ${current === index 
                    ? 'w-8 bg-white shadow-lg' 
                    : 'bg-white/40 hover:bg-white/70'}`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

// Improved content component
const ServiceContent = ({ service, isActive }) => (
  <div
    className={`w-full max-w-xl transition-all duration-700 ease-out 
               ${isActive 
                 ? 'opacity-100 translate-y-0' 
                 : 'opacity-0 translate-y-8'}`}
  >
    <div className="space-y-6">
      <div className="flex items-baseline space-x-3">
        <span className="text-yellow-400 text-4xl font-bold">{service.number}</span>
        <div className="w-12 h-0.5 bg-yellow-400" />
      </div>
      
      <h2 className="text-gray-50 text-4xl font-bold tracking-tight">
        {service.title}
      </h2>
      
      <p className="text-gray-300 text-lg font-light leading-relaxed">
        {service.description}
      </p>
      
      <button className="group flex items-center space-x-2 text-yellow-400 font-medium">
        <span>Learn more</span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
);

// Navigation controls
const NavigationControls = ({ onPrev, onNext, currentIndex, total }) => (
  <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
    <button
      onClick={onPrev}
      disabled={currentIndex === 0}
      className={`p-3 rounded-full transition-all duration-300
                ${currentIndex === 0 
                  ? 'bg-white/10 text-gray-400' 
                  : 'bg-white/20 text-white hover:bg-white/30'}`}
      aria-label="Previous service"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onClick={onNext}
      disabled={currentIndex === total - 1}
      className={`p-3 rounded-full transition-all duration-300
                ${currentIndex === total - 1 
                  ? 'bg-white/10 text-gray-400' 
                  : 'bg-white/20 text-white hover:bg-white/30'}`}
      aria-label="Next service"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

// Main component with modernized structure
const Cycle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const handleNext = () => {
    if (activeIndex < services.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    // Scroll-triggered automatic cycling (only on initial mount)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          // Auto-start when scrolled into view
          const interval = setInterval(() => {
            setActiveIndex(prev => {
              if (prev >= services.length - 1) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, 5000);
          
          return () => clearInterval(interval);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 overflow-hidden"
    >
      {/* Service background images */}
      <div className="absolute inset-0">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            isActive={index === activeIndex}
            index={index}
          />
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex items-center">
              {services.map((service, index) => (
                <ServiceContent 
                  key={service.id} 
                  service={service} 
                  isActive={index === activeIndex} 
                />
              ))}
            </div>
            <div className="hidden lg:block" /> {/* Spacer for grid layout */}
          </div>
        </div>
      </div>
      
      {/* Progress indicators */}
      <ServiceIndicator 
        total={services.length} 
        current={activeIndex} 
        setActiveIndex={setActiveIndex} 
      />
      
      {/* Navigation controls */}
      <NavigationControls 
        onPrev={handlePrev} 
        onNext={handleNext} 
        currentIndex={activeIndex} 
        total={services.length} 
      />
    </section>
  );
};

export default Cycle;