import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cycle.css';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: 1,
    number: '01',
    title: 'Discovery Phase',
    icon: '🔍',
    description: 'Initial consultation & planning',
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy Phase',
    icon: '⚡',
    description: 'Resource optimization & planning',
  },
  {
    id: 3,
    number: '03',
    title: 'Development Phase',
    icon: '🛠️',
    description: 'Implementation & monitoring',
  },
  {
    id: 4,
    number: '04',
    title: 'Delivery Phase',
    icon: '🚀',
    description: 'Final delivery & handover',
  },
];

/**
 * Larger circle radius for laptop screens.
 * This affects the arcs and the main circle.
 */
const circleRadius = 45; // Reduced from 45
/**
 * Where the phase numbers sit (on the circle border).
 */
const labelRadius  = 45;  // Updated from 35
/**
 * Where the phase cards sit (further out).
 */
const cardRadius   = 65;   // Updated from 55
const totalPhases  = phases.length;

const Cycle = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);

  // Track the currently active phase (-1 = "not started")
  const [activePhase, setActivePhase] = useState(-1);

  useEffect(() => {
    // Create ScrollTrigger to pin this section and update progress
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: 'top top',
      end: '+=400%',
      scrub: 1.5,
      snap: {
        snapTo: 1 / totalPhases,
        duration: { min: 0.2, max: 0.5 },
        ease: 'power2.inOut',
      },
      onUpdate: (self) => {
        if (self.progress < 0.05) {
          setActivePhase(-1); // "Scroll to Start" state
        } else {
          const progress = self.progress * totalPhases;
          const phaseIndex = Math.min(Math.floor(progress), totalPhases - 1);
          setActivePhase(phaseIndex);
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-white relative" // Changed from gradient
    >
      <div className="container mx-auto px-4">
        {/* 
          Outer wrapper pinned by ScrollTrigger, 
          with a bigger width/height to accommodate the larger circle.
        */}
        <div className="relative flex justify-center items-center min-h-[500px]"> {/* Reduced from 600px */}
          <div ref={circleRef} className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]"> {/* Reduced from 300px/500px */}
            
            {/*
              1) The base circle + arcs
            */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Gray background circle */}
              <circle
                cx="50"
                cy="50"
                r={circleRadius}
                fill="none"
                stroke="#f1f5f9" // Lighter gray for subtle contrast
                strokeWidth="2.5" // Reduced from 3
                className="hidden md:block"
              />
              <circle
                cx="50" // Fixed from 20
                cy="50" // Fixed from 20
                r={circleRadius}
                fill="none"
                stroke="#f8fafc"
                strokeWidth="2"
                className="md:hidden"
              />

              {/* Each arc (top->right, right->bottom, bottom->left, left->top) */}
              {phases.map((_, index) => {
                const rotation = index * 90; // 0°, 90°, 180°, 270°
                const isActive = index <= activePhase && activePhase >= 0;

                return (
                  <path
                    key={index}
                    // Arc from top to right
                    d={`
                      M50,${50 - circleRadius}
                      A${circleRadius},${circleRadius} 0 0,1
                      ${50 + circleRadius},50
                    `}
                    fill="none"
                    stroke={isActive ? '#FBBF24' : '#e2e8f0'} // Adjusted colors
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out"
                    transform={`rotate(${rotation} 50 50)`}
                  />
                );
              })}
            </svg>

            {/*
              2) The lines connecting each arc to its card
              Place them at angle = 45°, 135°, 225°, 315° for phases 1..4
            */}
            <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100">
              {phases.map((phase, index) => {
                const isActive = index <= activePhase && activePhase >= 0;
                if (!isActive) return null;

                // Adjust angle to point between numbers (add 45° to original position)
                const angleDeg = -45 + (index * 90);
                const angleRad = (Math.PI / 180) * angleDeg;

                const borderX = 50 + circleRadius * Math.cos(angleRad);
                const borderY = 50 + circleRadius * Math.sin(angleRad);

                const cardX = 50 + (cardRadius * 1.2) * Math.cos(angleRad); // Increased radius for cards
                const cardY = 50 + (cardRadius * 1.2) * Math.sin(angleRad);

                return (
                  <line
                    key={`line-${phase.id}`}
                    x1={borderX}
                    y1={borderY}
                    x2={cardX}
                    y2={cardY}
                    stroke="#1a1a1a" // Changed to black
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="transition-all duration-700"
                  />
                );
              })}
            </svg>

            {/*
              3) Phase numbers at midpoints
                 (e.g., 45°, 135°, 225°, 315°) on the circle border
            */}
            {phases.map((phase, index) => {
              // Start from top (-90°) and rotate clockwise
              const angleDeg = -90 + index * 90;
              const angleRad = (Math.PI / 180) * angleDeg;
              
              // Position on the circle border
              const x = 50 + labelRadius * Math.cos(angleRad);
              const y = 50 + labelRadius * Math.sin(angleRad);
            
              const isActive = index <= activePhase && activePhase >= 0;
            
              return (
                <div
                  key={phase.id}
                  className={`absolute transition-all duration-700 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full 
                    flex items-center justify-center
                    bg-white shadow-md
                    border-3 transition-all duration-700 ease-out
                    ${isActive 
                      ? 'border-amber-400 text-amber-500 scale-110' 
                      : 'border-gray-200 text-gray-400'
                    }`}
                  >
                    <span className="text-sm md:text-base font-bold">
                      {phase.number}
                    </span>
                  </div>
                </div>
              );
            })}

            {/*
              4) Phase cards, also at midpoints but a bit further out
                 (e.g., 80% radius instead of 60%)
                 Remain visible once they've appeared (index <= activePhase).
                 
              - Horizontal design:
                We give each card a fixed width/height, place icon on the left,
                text & link on the right.; // Match the number positions
            */}
            {phases.map((phase, index) => {
              // Adjust angle to match connecting lines (45° offset)
              const angleDeg = -45 + (index * 90);
              const angleRad = (Math.PI / 180) * angleDeg;

              // Increase card radius to move cards further out
              const x = 50 + (cardRadius * 1.2) * Math.cos(angleRad);
              const y = 50 + (cardRadius * 1.2) * Math.sin(angleRad);

              const isVisible = index <= activePhase;

              return (
                <div
                  key={`card-${phase.id}`}
                  className={`absolute transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="
                    bg-white rounded-xl
                    shadow-[0_4px_20px_-3px_rgba(0,0,0,0.1)]
                    hover:shadow-lg hover:scale-105
                    transition-all duration-300
                    flex flex-row items-center
                    p-3 md:p-4 gap-3
                    border border-gray-100
                    w-[200px] md:w-[250px]
                  ">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full 
                      bg-gradient-to-br from-amber-50 to-amber-100
                      flex items-center justify-center text-2xl md:text-3xl
                      shadow-inner"
                    >
                      {phase.icon}
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <h4 className="text-sm md:text-base font-bold text-gray-800 mb-1 truncate">
                        {phase.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                        {phase.description}
                      </p>
                      <a 
                        href="#"
                        className="text-xs md:text-sm text-amber-500 hover:text-amber-600 
                          hover:underline self-start mt-1 font-semibold"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cycle;
