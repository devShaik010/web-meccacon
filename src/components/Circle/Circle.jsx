import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const progressRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const circle = progressRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set initial state
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(".direction-arrow", {
            rotation: progress * 360,
            duration: 0.1,
          });

          // Update percentage text
          gsap.to(".percentage-text", {
            innerText: Math.round(progress * 100),
            duration: 0.1,
            snap: { innerText: 1 },
          });
        },
      },
    });

    // Animate circle progress
    tl.to(circle, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
    }).to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 pt-8 pb-4 bg-gradient-to-b from-white via-white to-transparent">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-medium tracking-wider text-[var(--color-accent)] mb-2">
            SCROLL TO EXPLORE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
            Our Progress
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Background Pattern */}
          <div className="absolute inset-[-1px] rounded-full border-4 border-dashed border-yellow-300 animate-spin-slow"></div>

          {/* SVG Circle */}
          <svg
            className="w-full h-full -rotate-90 transform relative z-10"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <circle
              ref={progressRef}
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="var(--color-primary-light)"
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>

          {/* Direction Arrow */}
          <div className="direction-arrow absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center bg-white/80 backdrop-blur-sm border p-6 rounded-full shadow-lg"
            >
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-1">
                <span className="percentage-text">0</span>%
              </div>
              <div className="text-sm text-[var(--color-secondary)]">
                Progress
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circle;
