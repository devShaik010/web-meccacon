import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom SVG icons object
const icons = {
  interior: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  exterior: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  home: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 21h6" />
    </svg>
  ),
  architect: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
};

const services = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Transform your space with our premium interior design solutions.',
    icon: icons.interior
  },
  {
    id: 2,
    title: 'Exterior Design',
    description: 'Create stunning curb appeal with expert exterior design.',
    icon: icons.exterior
  },
  {
    id: 3,
    title: 'Home Design',
    description: 'Comprehensive home design services for your dream residence.',
    icon: icons.home
  },
  {
    id: 4,
    title: 'Architect Design',
    description: 'Professional architectural solutions for modern living.',
    icon: icons.architect
  }
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Clear any existing refs to prevent stale references
    cardsRef.current = [];
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Only run cards animation if the refs are properly populated
      if (cardsRef.current.length > 0) {
        // Cards stagger animation
        gsap.from(cardsRef.current, {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
      }
    }, sectionRef);

    return () => {
      // Properly clean up ScrollTrigger instances to prevent memory leaks
      ctx.revert();
    };
  }, []);

  // Function to save card refs
  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--color-primary)] 
                       tracking-tight relative inline-block">
            What We Do
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                          w-24 h-1 bg-[var(--color-secondary)] rounded-full"></div>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => setCardRef(el, index)}
              className="group relative bg-white rounded-2xl p-6 
                       transform hover:-translate-y-2 transition-all duration-300 
                       hover:shadow-2xl cursor-pointer border overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 
                           bg-[var(--color-secondary)]/10 rounded-full 
                           group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 flex items-start mb-6">
                <div className="w-14 h-14 rounded-xl 
                             bg-[var(--color-secondary)]/10 
                             group-hover:bg-[var(--color-secondary)] 
                             transition-colors duration-300 
                             flex items-center justify-center">
                  <div className="text-[var(--color-secondary)] 
                               group-hover:text-white 
                               transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] 
                             group-hover:text-[var(--color-secondary)] 
                             transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--color-primary-light)] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="relative z-10 mt-6 flex items-center">
                <a href={`/services/${service.id}`} 
                   className="inline-flex items-center text-sm font-medium 
                            text-[var(--color-secondary)] 
                            group-hover:text-[var(--color-secondary-dark)]">
                  <span className="border-b border-transparent 
                                group-hover:border-[var(--color-secondary)] 
                                transition-all duration-300">
                    Learn more
                  </span>
                  <svg className="w-4 h-4 ml-1 transform 
                              group-hover:translate-x-1 
                              transition-transform duration-300" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;