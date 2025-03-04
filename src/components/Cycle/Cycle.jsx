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
const circleRadius = 45; // Reduced from 60
/**
 * Where the phase numbers sit (on the circle border).
 */
const labelRadius  = 45;  // Reduced from 60
/**
 * Where the phase cards sit (further out).
 */
const cardRadius   = 65;   // Reduced from 80
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="container mx-auto px-4">
        {/* 
          Outer wrapper pinned by ScrollTrigger, 
          with a bigger width/height to accommodate the larger circle.
        */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          <div ref={circleRef} className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            
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
                stroke="#f8fafc"
                strokeWidth="3"
                className="hidden md:block"
              />
              <circle
                cx="50"
                cy="50"
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
                    stroke={isActive ? '#FBBF24' : '#E5E7EB'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    transform={`rotate(${rotation} 50 50)`}
                    className="transition-all duration-700 ease-out"
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

                // Midpoint angle in degrees (45°, 135°, 225°, 315°)
                const angleDeg = 45 + index * 90;
                const angleRad = (Math.PI / 180) * angleDeg;

                // Circle border point
                const borderX = 50 + circleRadius * Math.cos(angleRad);
                const borderY = 50 + circleRadius * Math.sin(angleRad);

                // Card center
                const cardX = 50 + cardRadius * Math.cos(angleRad);
                const cardY = 50 + cardRadius * Math.sin(angleRad);

                return (
                  <line
                    key={`line-${phase.id}`}
                    x1={borderX}
                    y1={borderY}
                    x2={cardX}
                    y2={cardY}
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                    className="animated-line"
                  />
                );
              })}
            </svg>

            {/*
              3) Phase numbers at midpoints
                 (e.g., 45°, 135°, 225°, 315°) on the circle border
            */}
            {phases.map((phase, index) => {
              const angleDeg = 45 + index * 90;
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
                  <div
                    className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                      backdrop-blur-sm bg-white/90 text-sm md:text-base font-bold
                      border-2 transition-all duration-700 ease-out shadow-sm
                      ${
                        isActive
                          ? 'border-amber-400 text-amber-500 shadow-amber-200/50'
                          : 'border-gray-200 text-gray-400'
                      }
                    `}
                  >
                    {phase.number}
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
                text & link on the right.
            */}
            {phases.map((phase, index) => {
              const angleDeg = 45 + index * 90;
              const angleRad = (Math.PI / 180) * angleDeg;

              const x = 50 + cardRadius * Math.cos(angleRad);
              const y = 50 + cardRadius * Math.sin(angleRad);

              const isVisible = index <= activePhase;

              return (
                <div
                  key={`card-${phase.id}`}
                  className={`absolute transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className="
                      w-[200px] h-[90px]  // Reduced from 220px/100px
                      bg-white/90 backdrop-blur-sm rounded-lg
                      shadow-lg border border-gray-100
                      hover:shadow-xl transition-shadow
                      flex flex-row items-center
                      p-2 md:p-3 gap-2    // Reduced padding and gap
                    "
                  >
                    {/* Icon (or image) on the left */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 
                      flex items-center justify-center text-xl md:text-2xl">
                      {phase.icon}
                    </div>

                    {/* Text & link on the right */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5 truncate">
                        {phase.title}
                      </h4>
                      <p className="text-[10px] md:text-xs text-gray-500 line-clamp-2">
                        {phase.description}
                      </p>
                      <a 
                        href="#"
                        className="text-[10px] md:text-xs text-blue-600 hover:underline self-start mt-0.5"
                      >
                        Click Here
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
