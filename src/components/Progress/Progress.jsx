import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: 1,
    number: '01',
    title: 'Discovery',
    description: 'Understanding requirements and project scope through initial consultation.',
  },
  {
    id: 2,
    number: '02',
    title: 'Planning',
    description: 'Strategic planning and resource allocation for optimal project execution.',
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Implementation of planned strategies with continuous monitoring.',
  },
  {
    id: 4,
    number: '04',
    title: 'Delivery',
    description: 'Final quality checks and successful project handover.',
  }
];

const CircleProgressPhases = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const sliceRefs = useRef([]);
  const contentRefs = useRef([]);
  const lineRefs = useRef([]);
  const [activePhase, setActivePhase] = useState(0);

  // Reset refs to prevent stale references
  useEffect(() => {
    sliceRefs.current = [];
    contentRefs.current = [];
    lineRefs.current = [];
  }, []);

  useEffect(() => {
    if (
      !circleRef.current ||
      sliceRefs.current.length !== phases.length ||
      contentRefs.current.length !== phases.length ||
      lineRefs.current.length !== phases.length
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Main scroll animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: `+=${window.innerHeight * phases.length}`,
        scrub: 0.5,
        onUpdate: (self) => {
          const newActivePhase = Math.min(
            Math.floor(self.progress * phases.length),
            phases.length - 1
          );
          
          if (newActivePhase !== activePhase) {
            setActivePhase(newActivePhase);
          }
        },
        invalidateOnRefresh: true,
        onRefresh: () => ScrollTrigger.refresh()
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [activePhase]);

  // Update visual elements when active phase changes
  useEffect(() => {
    // Update circle progress fill
    if (circleRef.current) {
      const progress = ((activePhase + 1) / phases.length) * 100;
      circleRef.current.style.background = `conic-gradient(#FBBF24 ${progress}%, #F3F4F6 ${progress}%)`;
    }

    // Update slice states
    sliceRefs.current.forEach((slice, index) => {
      if (index <= activePhase) {
        gsap.to(slice, {
          backgroundColor: '#FBBF24',
          duration: 0.5,
        });
      } else {
        gsap.to(slice, {
          backgroundColor: '#E5E7EB',
          duration: 0.5,
        });
      }
    });

    // Update content visibility with staggered animation
    contentRefs.current.forEach((content, index) => {
      if (index === activePhase) {
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      } else {
        gsap.to(content, {
          opacity: 0,
          y: 20,
          duration: 0.3,
        });
      }
    });

    // Animate connecting lines
    lineRefs.current.forEach((line, index) => {
      if (index === activePhase) {
        gsap.to(line, {
          width: '100%',
          opacity: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to(line, {
          width: '0%',
          opacity: 0.3,
          duration: 0.4,
        });
      }
    });
  }, [activePhase]);

  // Helper function to determine positioning classes
  const getPositionClass = (index) => {
    switch (index) {
      case 0: return 'top-6 right-16 lg:top-8 lg:right-24';
      case 1: return 'top-6 left-16 lg:top-8 lg:left-24';
      case 2: return 'bottom-6 left-16 lg:bottom-8 lg:left-24';
      case 3: return 'bottom-6 right-16 lg:bottom-8 lg:right-24';
      default: return '';
    }
  };

  // Helper function for line connector positioning
  const getLinePosition = (index) => {
    switch (index) {
      case 0: return 'top-1/2 -translate-y-1/2 right-full mr-2 lg:mr-4';
      case 1: return 'top-1/2 -translate-y-1/2 left-full ml-2 lg:ml-4';
      case 2: return 'top-1/2 -translate-y-1/2 left-full ml-2 lg:ml-4';
      case 3: return 'top-1/2 -translate-y-1/2 right-full mr-2 lg:mr-4';
      default: return '';
    }
  };

  // Helper function for slice positioning
  const getSliceStyle = (index) => {
    // Calculate rotation and position for each slice
    const rotation = index * 90;
    return {
      transform: `rotate(${rotation}deg)`,
      transformOrigin: 'bottom right'
    };
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
          Project Lifecycle
        </h2>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Main Circle */}
          <div 
            ref={circleRef}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-100 transition-all duration-700 ease-out"
          >
            {/* Inner circle */}
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-full shadow-inner"></div>
            
            {/* Slices */}
            {phases.map((phase, index) => (
              <div 
                key={phase.id}
                ref={el => sliceRefs.current[index] = el}
                className="absolute top-0 right-0 w-1/2 h-1/2 transition-colors duration-500"
                style={getSliceStyle(index)}
              >
                {/* Slice line */}
                <div className="absolute h-0.5 w-full top-0 right-0 bg-current transform -rotate-45 origin-right"></div>
                
                {/* Phase number */}
                <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border-2 
                                flex items-center justify-center text-sm font-bold z-10
                                transition-all duration-500 ease-out
                                ${index <= activePhase ? 'border-amber-400 text-amber-600' : 'border-gray-300 text-gray-500'}`}
                >
                  {phase.number}
                </div>
              </div>
            ))}
          </div>

          {/* Content blocks */}
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              ref={el => contentRefs.current[index] = el}
              className={`absolute w-56 md:w-64 lg:w-72 p-4 md:p-5 lg:p-6 bg-white rounded-lg shadow-lg
                        opacity-0 transform translate-y-5 transition-all duration-500
                        ${getPositionClass(index)}`}
            >
              {/* Connector line */}
              <div
                ref={el => lineRefs.current[index] = el}
                className={`absolute h-0.5 w-0 bg-amber-400 opacity-30
                          ${getLinePosition(index)}`}
              ></div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* Phase indicator dots (visible on mobile) */}
        <div className="flex justify-center space-x-4 mt-8 md:hidden">
          {phases.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300
                        ${index <= activePhase ? 'bg-amber-400' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleProgressPhases;