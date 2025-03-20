import { cn } from "@utils/cn";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// Add animation variants for text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

// Counter animation component
function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);
  
  return (
    <span ref={nodeRef} className="inline-block">
      {prefix}{count}{suffix}
    </span>
  );
}

// --- Updated BentoCard Component ---
function BentoCard({ children, className, delay = 0, hoverColor = "var(--color-accent)" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative overflow-hidden",
        "backdrop-blur-sm bg-white/90",
        "transition-all duration-500",
        "hover:backdrop-blur-lg hover:bg-white/95",
        className
      )}
      style={{
        "--hover-color": hoverColor,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </motion.div>
  );
}

function Bento() {
  // Define a vibrant color palette
  const colors = {
    primary: "#1a1a1a",    // Dark gray instead of blue-black
    secondary: "#FBBF24",  // Warm amber instead of golden yellow
    accent: "#2563EB",     // Bright blue instead of deep blue
    success: "#059669",    // Emerald instead of forest green
    warning: "#F97316",    // Light orange instead of deep orange
    gradient: "linear-gradient(135deg, #fff 0%, #f8fafc 100%)",
  };

  return (
    <section
      className="w-full h-full flex flex-col py-16 lg:py-28 px-6 lg:px-10"
      style={{
        background: "#ffffff",
        "--color-primary": colors.primary,
        "--color-secondary": colors.secondary,
        "--color-accent": colors.accent,
        "--color-success": colors.success,
        "--color-warning": colors.warning,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span
          className="inline-block px-4 py-1 text-sm uppercase tracking-wider text-white font-semibold mb-3 rounded-full"
          style={{ background: "var(--color-secondary)" }}
        >
          Our Success Story
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{
            color: "var(--color-primary)",
            textShadow: "0 2px 10px rgba(30, 64, 175, 0.1)",
          }}
        >
          Our Achievements
        </h2>
        <div
          className="w-32 h-1.5 mx-auto rounded-full"
          style={{
            background: "var(--color-gradient)",
            backgroundImage: colors.gradient,
            boxShadow: "0 5px 15px rgba(6, 182, 212, 0.3)",
          }}
        ></div>
      </motion.div>

      <section
        className={cn(
          "w-full h-full px-2 py-4 min-h-[60svh]",
          "flex flex-col md:grid md:grid-cols-7 md:grid-rows-6 gap-6 lg:gap-8"
        )}
      >
        {/* Operating Since Card */}
        <BentoCard
          delay={0.2}
          hoverColor={colors.secondary}
          className={cn(
            "md:col-span-3 md:row-span-2",
            "rounded-2xl bg-white",
            "min-h-72 md:min-h-56",
            "relative flex items-center p-8",
            "bg-[url('/cc.svg')] bg-no-repeat bg-[size:50%]",
            "bg-[position:90%_50%]",
            "transition-all ease-out duration-500 hover:-translate-y-2 hover:rotate-1",
            "border border-gray-100/50 hover:border-[var(--hover-color)]/40",
            "shadow-lg hover:shadow-2xl shadow-blue-100/50 hover:shadow-blue-200/50",
            "backdrop-filter backdrop-blur-sm",
            "bg-white/90 hover:bg-white/95",
            "shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "border border-gray-100/50",
            "hover:border-[var(--hover-color)]/20",
            "transition-all duration-500 ease-out",
            "hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="relative z-20 max-w-[65%]"
          >
            <span
              className="text-sm font-medium block mb-3 py-1 px-3 rounded-full inline-block"
              style={{
                background: "var(--color-secondary)",
                color: "white",
              }}
            >
              Established
            </span>
            <p
              className="text-3xl md:text-3xl lg:text-5xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Operating Since{" "}
              <AnimatedCounter end={2020} duration={1.5} />
            </p>
          </motion.div>
        </BentoCard>

        {/* Satisfied Customers Card */}
        <BentoCard
          delay={0.3}
          hoverColor={colors.accent}
          className={cn(
            "md:col-span-2 md:row-span-4",
            "rounded-2xl bg-white",
            "relative flex p-8 items-start",
            "min-h-96 md:min-h-56",
            "bg-[url('/fc.svg')] bg-no-repeat bg-[size:60%]", // constant size override
            "bg-[position:100%_100%]",
            "transition-all ease-out duration-500 hover:-translate-y-2",
            "border border-gray-100 hover:border-purple-300/30",
            "shadow-lg hover:shadow-2xl shadow-purple-100/30 hover:shadow-purple-200/40",
            "backdrop-filter backdrop-blur-sm",
            "bg-white/90 hover:bg-white/95",
            "shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "border border-gray-100/50",
            "hover:border-[var(--hover-color)]/20",
            "transition-all duration-500 ease-out",
            "hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            With more than{" "}
            <span style={{ color: "var(--color-accent)" }}>
              <AnimatedCounter end={50} suffix="+" duration={1.8} />
            </span>{" "}
            Satisfied customers
          </motion.p>
        </BentoCard>

        {/* Present Across States Card */}
        <BentoCard
          delay={0.4}
          hoverColor={colors.success}
          className={cn(
            "md:col-span-2 md:row-span-4",
            "rounded-2xl bg-white",
            "relative flex p-8 items-start",
            "min-h-80 md:min-h-56",
            "bg-[url('/lc.svg')] bg-no-repeat bg-[size:70%]", // minimized background
            "bg-[position:50%_100%]",
            "transition-all ease-out duration-500 hover:-translate-y-2",
            "border border-gray-100 hover:border-green-300/30",
            "shadow-lg hover:shadow-2xl shadow-green-100/30 hover:shadow-green-200/40",
            "backdrop-filter backdrop-blur-sm",
            "bg-white/90 hover:bg-white/95",
            "shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "border border-gray-100/50",
            "hover:border-[var(--hover-color)]/20",
            "transition-all duration-500 ease-out",
            "hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Present Across{" "}
              <AnimatedCounter end={28} suffix="" duration={1.5} /> States
            </p>
            <span
              className="text-sm py-1 px-3 rounded-full inline-block"
              style={{
                background: "var(--color-success)",
                color: "white",
              }}
            >
              National Coverage
            </span>
          </motion.div>
        </BentoCard>

        {/* Experienced Team Card */}
        <BentoCard
          delay={0.5}
          hoverColor={colors.warning}
          className={cn(
            "md:col-span-3 md:row-span-4",
            "rounded-2xl bg-white",
            "relative flex p-8 pb-0 pt-10 items-start",
            "lg:min-h-56 min-h-72",
            "flex items-center justify-between flex-col",
            "bg-[url('/ec.svg')] bg-no-repeat bg-[size:100%]", // constant background size
            "bg-bottom",
            "transition-all ease-out duration-500 hover:-translate-y-2",
            "border border-gray-100 hover:border-amber-300/30",
            "shadow-lg hover:shadow-2xl shadow-amber-100/30 hover:shadow-amber-200/40",
            "backdrop-filter backdrop-blur-sm",
            "bg-white/90 hover:bg-white/95",
            "shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "border border-gray-100/50",
            "hover:border-[var(--hover-color)]/20",
            "transition-all duration-500 ease-out",
            "hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <p
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Experienced Team
            </p>
            <div className="flex justify-center items-center gap-8 mb-4">
              <div className="text-center">
                <p
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-warning)" }}
                >
                  <AnimatedCounter end={15} suffix="+" duration={1.2} />
                </p>
                <p className="text-sm font-medium mt-1 text-gray-600">
                  Experts
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-warning)" }}
                >
                  <AnimatedCounter end={8} suffix="+" duration={1} />
                </p>
                <p className="text-sm font-medium mt-1 text-gray-600">
                  Industries
                </p>
              </div>
            </div>
          </motion.div>
        </BentoCard>

        {/* Turning Visions into Reality Card */}
        <BentoCard
          delay={0.6}
          hoverColor={colors.primary}
          className={cn(
            "md:col-span-4 md:row-span-2",
            "rounded-2xl bg-white",
            "relative flex p-8 items-center",
            "md:min-h-56 min-h-80",
            "bg-[url('/ctc.svg')] bg-no-repeat bg-[size:45%]", // constant background size so SVG is minimized
            "bg-right-bottom",
            "transition-all ease-out duration-500 hover:-translate-y-2",
            "border border-gray-100 hover:border-blue-300/30",
            "shadow-lg hover:shadow-2xl shadow-blue-100/30 hover:shadow-blue-200/40",
            "backdrop-filter backdrop-blur-sm",
            "bg-white/90 hover:bg-white/95",
            "shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
            "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "border border-gray-100/50",
            "hover:border-[var(--hover-color)]/20",
            "transition-all duration-500 ease-out",
            "hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-[60%]"
          >
            <span
              className="text-sm py-1 px-3 rounded-full inline-block mb-3"
              style={{
                background: "var(--color-primary)",
                color: "white",
              }}
            >
              Innovation
            </span>
            <p
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Turning Visions into Reality
            </p>
            <p className="text-gray-600">
              <AnimatedCounter
                end={100}
                suffix="%"
                prefix="• "
                duration={1.5}
              />{" "}
              Success Rate
            </p>
          </motion.div>
        </BentoCard>
      </section>
    </section>
  );
}

export default Bento;