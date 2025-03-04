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
    icon: '🔍', // Replace with your SVG icon
    description: 'Initial consultation & planning',
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy Phase',
    icon: '⚡', // Replace with your SVG icon
    description: 'Resource optimization & planning',
  },
  {
    id: 3,
    number: '03',
    title: 'Development Phase',
    icon: '🛠️', // Replace with your SVG icon
    description: 'Implementation & monitoring',
  },
  {
    id: 4,
    number: '04',
    title: 'Delivery Phase',
    icon: '🚀', // Replace with your SVG icon
    description: 'Final delivery & handover',
  },
];

const Cycle = () => {
  const sectionRef = useRef(null);
  const [activePhase, setActivePhase] = useState(-1);
  const circleRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: 'top top',
      end: '+=400%',
      scrub: 1,
      snap: 1 / (phases.length - 1),
      onUpdate: (self) => {
        const phaseIndex = Math.min(
          Math.floor(self.progress * phases.length),
          phases.length - 1
        );
        setActivePhase(phaseIndex);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Main Circle - Adjusted size for mobile */}
          <div ref={circleRef} className="relative w-[280px] h-[280px] md:w-[500px] md:h-[500px]">
            {/* Circle Border Segments */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background circle with responsive stroke width */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f8fafc"
                strokeWidth="3"
                className="hidden md:block"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f8fafc"
                strokeWidth="2"
                className="md:hidden"
              />
              {phases.map((_, index) => {
                const rotation = index * 90;
                const isActive = index <= activePhase;
                return (
                  <path
                    key={index}
                    d={`M50,10 A40,40 0 0,1 90,50`}
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

            {/* Phase Numbers - Adjusted size for mobile */}
            {phases.map((phase, index) => {
              const angle = (index * Math.PI * 2) / 4 - Math.PI / 2;
              const x = 50 + 40 * Math.cos(angle);
              const y = 50 + 40 * Math.sin(angle);
              const isActive = index <= activePhase;

              return (
                <div
                  key={phase.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700
                    ${isActive ? 'scale-110' : 'scale-100'}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div 
                    className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center
                      backdrop-blur-sm bg-white/90 text-base md:text-lg font-bold
                      border-2 transition-all duration-700 ease-out
                      shadow-sm
                      ${isActive 
                        ? 'border-amber-400 text-amber-500 shadow-amber-200/50' 
                        : 'border-gray-200 text-gray-400'
                      }`}
                  >
                    {phase.number}
                  </div>
                </div>
              );
            })}

            {/* Center Content - Responsive text and padding */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="text-center p-4 md:p-8 rounded-full backdrop-blur-sm bg-white/80 
                  shadow-sm transition-all duration-700 ease-out transform
                  w-[180px] h-[180px] md:w-[240px] md:h-[240px]
                  flex flex-col items-center justify-center"
              >
                <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 
                  bg-clip-text text-transparent mb-2 md:mb-3 line-clamp-1">
                  {activePhase >= 0 ? phases[activePhase].title : 'Start'}
                </h3>
                <div className="text-3xl md:text-5xl mb-2 md:mb-3 transform transition-all duration-500">
                  {activePhase >= 0 ? phases[activePhase].icon : '👋'}
                </div>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2 px-2">
                  {activePhase >= 0 ? phases[activePhase].description : 'Scroll to explore'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cycle;