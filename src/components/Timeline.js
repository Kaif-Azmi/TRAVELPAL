import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBullseye,
  faCalendarDays,
  faPlane,
  faCamera,
  faHeart,
  faStar,
  faArrowRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const steps = [
    {
      icon: faMagnifyingGlass,
      title: "Dream & Discover",
      description:
        "Tell our AI your travel dreams — get personalized destination suggestions.",
      color: "from-primary-400 to-primary-500",
      bg: "bg-primary-500/10 border-primary-400/30",
      bgColor: "bg-primary-500",
      delay: 0,
    },
    {
      icon: faBullseye,
      title: "Plan & Customize",
      description:
        "Get curated itineraries tailored to your pace, budget, and style.",
      color: "from-secondary-400 to-secondary-500",
      bg: "bg-secondary-500/10 border-secondary-400/30",
      bgColor: "bg-secondary-500",
      delay: 0.2,
    },
    {
      icon: faCalendarDays,
      title: "Book & Confirm",
      description:
        "Book the best deals in flights, stays, and activities via trusted partners.",
      color: "from-accent-400 to-accent-500",
      bg: "bg-accent-500/10 border-accent-400/30",
      bgColor: "bg-accent-500",
      delay: 0.4,
    },
    {
      icon: faPlane,
      title: "Travel & Explore",
      description:
        "Receive real-time updates, maps, and local insights through the app.",
      color: "from-amaranth-400 to-amaranth-500",
      bg: "bg-amaranth-500/10 border-amaranth-400/30",
      bgColor: "bg-amaranth-500",
      delay: 0.6,
    },
    {
      icon: faCamera,
      title: "Capture & Share",
      description:
        "Save highlights and create curated story collections of your journey.",
      color: "from-indigo-400 to-indigo-500",
      bg: "bg-indigo-500/10 border-indigo-400/30",
      bgColor: "bg-indigo-500",
      delay: 0.8,
    },
    {
      icon: faHeart,
      title: "Return & Remember",
      description:
        "Cherish your memories and start planning your next adventure.",
      color: "from-sky-400 to-sky-500",
      bg: "bg-sky-500/10 border-sky-400/30",
      bgColor: "bg-sky-500",
      delay: 1.0,
    },
  ];

  return (
    <section id="timeline" ref={ref} className="py-24 relative overflow-hidden">
      {/* Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-circle bg-primary-400/10 top-1/4 left-1/4" />
        <div
          className="ambient-circle bg-primary-500/10 bottom-1/4 right-1/4"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="ambient-circle bg-primary-500/10 top-1/2 left-1/2"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Orbs */}
        {[
          { class: "bg-primary-300 top-20 right-20", size: "w-3 h-3", dur: 3 },
          { class: "bg-primary-300 bottom-20 left-20", size: "w-2 h-2", dur: 4, delay: 1 },
          { class: "bg-primary-300 top-1/3 right-1/4", size: "w-1 h-1", dur: 2.5, delay: 2 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`floating-orb ${orb.size} rounded-full absolute ${orb.class}`}
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              delay: orb.delay || 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div {...fadeUp(0.1)} animate={inView ? fadeUp(0.1).animate : {}} className="text-center mb-20">
          <motion.div
            {...fadeUp(0.2)}
            animate={inView ? fadeUp(0.2).animate : {}}
            className="inline-flex items-center bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-full px-4 py-2 mb-6"
          >
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-primary-400" />
            <span className="text-slate-700 text-sm ml-2">How It Works</span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.35)}
            animate={inView ? fadeUp(0.35).animate : {}}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            Plan Your Trip in{" "}
            <span className="gradient-text">6 Simple Steps</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.5)}
            animate={inView ? fadeUp(0.5).animate : {}}
            className="text-slate-700 max-w-2xl mx-auto text-lg"
          >
            Your dream adventure simplified — from inspiration to real-world exploration.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Path (Desktop) - Following sequence 1→2→3→4→5→6 */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e4612e" />
                <stop offset="20%" stopColor="#efef52" />
                <stop offset="40%" stopColor="#48a07b" />
                <stop offset="60%" stopColor="#72c465" />
                <stop offset="80%" stopColor="#7a57fb" />
                <stop offset="100%" stopColor="#75bbe6" />
              </linearGradient>
            </defs>
            {/* Path connecting: 1 (top-left) → 2 (top-center) → 3 (top-right) → 4 (bottom-left) → 5 (bottom-center) → 6 (bottom-right) */}
            <path
              d="M 8% 20% L 50% 20% L 92% 20% L 92% 80% L 50% 80% L 8% 80%"
              stroke="url(#timelineGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative" style={{ zIndex: 2 }}>
            {steps.map((item, index) => {
              const stepNumber = index + 1; // Step numbers: 1, 2, 3, 4, 5, 6
              return (
                <motion.div
                  key={`step-${stepNumber}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.7, delay: item.delay }}
                  className="relative group z-10"
                >
                  {/* Card */}
                  <motion.div
                    className={`p-8 rounded-3xl border ${item.bg} hover:shadow-lg transition-all duration-300 bg-white/95 border-neutral-200/50`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Step Number */}
                    <div className={`absolute -top-4 -left-4 w-9 h-9 rounded-full ${item.bgColor} flex items-center justify-center text-white text-sm font-bold z-10`}>
                      {stepNumber}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl p-4 mb-6`}>
                      <FontAwesomeIcon icon={item.icon} className="text-white w-full h-full" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Action Button */}
                    <motion.button
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                    </motion.button>
                  </motion.div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      {...fadeUp(item.delay + 0.3)}
                      animate={inView ? fadeUp(item.delay + 0.3).animate : {}}
                      className="lg:hidden flex justify-center py-4"
                    >
                      <div className={`w-8 h-8 rounded-full ${steps[index + 1]?.bgColor || 'bg-primary-500'} flex items-center justify-center animate-bounce`}>
                        <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white rotate-90" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            {...fadeUp(1.2)}
            animate={inView ? fadeUp(1.2).animate : {}}
            className="text-center mt-20"
          >
              <div className="glass-card max-w-2xl mx-auto p-10 rounded-3xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                Ready to Start Your <span className="gradient-text">Journey?</span>
              </h3>
              <p className="text-slate-700 mb-6 text-lg">
                Join thousands of explorers building unforgettable memories with curated travel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                  Start Planning
                </motion.button>

                <motion.button
                  className="btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
