import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faMapPin, 
  faCalendarDays, 
  faUsers
} from '@fortawesome/free-solid-svg-icons';

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
      {/* Simplified subtle background for a cleaner look */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">

        {/* Heading */}
        <motion.h1
  {...fadeUp(0.2)}
  animate={inView ? fadeUp(0.2).animate : {}}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight"
>
  <span className="text-primary-300">Discover</span> Your <br className="hidden sm:block" />
  <span className="text-primary-300">Perfect</span> Journey
</motion.h1>



        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          animate={inView ? fadeUp(0.35).animate : {}}
          className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Let our AI assistant craft personalized travel experiences that align with your style, pace, and dreams.
        </motion.p>

        {/* CTA Buttons (clean, minimal) */}
        <motion.div
          {...fadeUp(0.55)}
          animate={inView ? fadeUp(0.55).animate : {}}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            className="bg-primary-600 text-white rounded-lg px-6 py-3 shadow-sm hover:bg-primary-500 transition"
          >
            Start Planning
          </button>
          <button
            className="border border-neutral-200 text-slate-800 rounded-lg px-6 py-3 hover:bg-neutral-100 transition"
          >
            Explore Destinations
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.7)}
          animate={inView ? fadeUp(0.7).animate : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
        >
          {[
            { icon: faMapPin, value: "0+", label: "Destinations", color: "text-primary-400" },
            { icon: faUsers, value: "0+", label: "Happy Travelers", color: "text-secondary-400" },
            { icon: faStar, value: "24/7", label: "Support", color: "text-accent-400" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4">
                <FontAwesomeIcon icon={stat.icon} className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
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
            { icon: faMapPin, title: "Smart Recommendations", desc: "Personalized suggestions based on your past trips.", color: "text-primary-400" },
            { icon: faCalendarDays, title: "Flexible Planning", desc: "Itineraries that adapt to your schedule.", color: "text-amaranth-400" },
            { icon: faUsers, title: "Group Adventures", desc: "Trips crafted for families and groups.", color: "text-sky-400" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 text-center bg-white/95 rounded-lg border border-neutral-200/50 hover:shadow transition"
            >
              <FontAwesomeIcon icon={card.icon} className={`h-6 w-6 mx-auto mb-3 ${card.color}`} />
              <h3 className="text-lg font-medium text-slate-900 mb-1">{card.title}</h3>
              <p className="text-slate-700 text-sm">{card.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator removed per request */}
      </div>
    </section>
  );
};

export default Hero;
