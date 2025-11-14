import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, MapPin, Calendar, Users, ArrowDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient Background Lights */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="ambient-circle bg-primary-400/20 top-1/4 left-1/4" />
          <div className="ambient-circle bg-secondary-400/20 top-1/4 right-1/4" style={{ animationDelay: "1s" }} />
          <div className="ambient-circle bg-accent-400/20 bottom-1/4 left-1/3" style={{ animationDelay: "2s" }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="floating-orb bg-primary-300 top-24 left-20"
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="floating-orb bg-secondary-300 top-40 right-32"
          animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity }}
        />
        <motion.div
          className="floating-orb bg-accent-300 bottom-40 left-40"
          animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.7, delay: 2, repeat: Infinity }}
        />

        {/* Minimal Geometric Animations */}
        <motion.div
          className="geo-shape rounded-full border-primary-300/30 top-20 left-20"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="geo-shape rounded-lg border-secondary-300/30 top-40 right-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="geo-shape border-accent-300/30 bottom-20 left-1/2 rotate-45"
          animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">

        {/* Heading */}
        <motion.h1
  {...fadeUp(0.2)}
  animate={inView ? fadeUp(0.2).animate : {}}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
>
  <span className="text-primary-300">Discover</span> Your <br className="hidden sm:block" />
  <span className="text-primary-300">Perfect</span> Journey
</motion.h1>



        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          animate={inView ? fadeUp(0.35).animate : {}}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Let our AI assistant craft personalized travel experiences that align with your style, pace, and dreams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          animate={inView ? fadeUp(0.55).animate : {}}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            className="btn-hero"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Planning
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Destinations
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.7)}
          animate={inView ? fadeUp(0.7).animate : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
        >
          {[
            { icon: MapPin, value: "0+", label: "Destinations", color: "text-primary-400" },
            { icon: Users, value: "0+", label: "Happy Travelers", color: "text-secondary-400" },
            { icon: Sparkles, value: "24/7", label: "AI Support", color: "text-accent-400" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="icon-box mx-auto mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          {...fadeUp(0.9)}
          animate={inView ? fadeUp(0.9).animate : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: MapPin, title: "Smart Recommendations", desc: "AI-powered suggestions based on your travel patterns.", color: "text-primary-400" },
            { icon: Calendar, title: "Flexible Planning", desc: "Dynamic itineraries that adjust to your preferences.", color: "text-secondary-400" },
            { icon: Users, title: "Group Adventures", desc: "Tailor-made trips for families, couples, and solo explorers.", color: "text-accent-400" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 text-center"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <card.icon className={`h-8 w-8 mx-auto mb-3 ${card.color}`} />
              <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
              <p className="text-white/70 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          {...fadeUp(1.2)}
          animate={inView ? fadeUp(1.2).animate : {}}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
