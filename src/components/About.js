import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faShield, 
  faHeart, 
  faAward, 
  faUsers, 
  faGlobe, 
  faBolt
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: faBullseye,
      title: "Personalized Planning",
      description: "AI-powered recommendations tailored to your preferences, budget, and travel style",
      delay: 0,
      bgColor: "bg-primary-500"
    },
    {
      icon: faShield,
      title: "Safe & Secure",
      description: "Your data is protected with enterprise-grade security and privacy controls",
      delay: 0.1,
      bgColor: "bg-secondary-500"
    },
    {
      icon: faHeart,
      title: "Authentic Experiences",
      description: "Curated by travel experts who know the local culture and hidden gems",
      delay: 0.2,
      bgColor: "bg-accent-500"
    },
    {
      icon: faAward,
      title: "Quality Assured",
      description: "Every experience is vetted and tested to ensure exceptional quality",
      delay: 0.3,
      bgColor: "bg-amaranth-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers", icon: faUsers, color: "text-primary-400" },
    { number: "500+", label: "Destinations", icon: faGlobe, color: "text-indigo-400" },
    { number: "98%", label: "Satisfaction Rate", icon: faHeart, color: "text-accent-400" },
    { number: "24/7", label: "AI Support", icon: faBolt, color: "text-sky-400" }
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-primary-300 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-accent-300 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-300 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-full px-4 py-2 mb-6"
          >
            <FontAwesomeIcon icon={faBolt} className="h-4 w-4 text-primary-400" />
            <span className="text-slate-700 text-sm font-medium">About TravelPal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Revolutionizing <span className="gradient-text">Travel Planning</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to make travel planning effortless, personalized, and unforgettable. 
            TravelPal blends AI innovation with human expertise to deliver journeys that feel made just for you.
          </motion.p>
        </motion.div>

        <div className="mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose <span className="gradient-text">TravelPal</span>?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => {
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + f.delay }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative p-6 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-2xl hover:shadow-lg hover:border-neutral-300/50 transition-all duration-300"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${f.bgColor.replace('bg-', 'from-')}/5 to-transparent`} />
                    
                    <div className="relative flex items-start space-x-4">
                      <motion.div 
                        className={`w-14 h-14 ${f.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <FontAwesomeIcon icon={f.icon} className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2 transition-colors">
                          {f.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((s, i) => {
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/95 backdrop-blur-sm border border-neutral-200/50 rounded-2xl hover:shadow-lg hover:border-neutral-300/50 transition-all duration-300"
              >
                <motion.div 
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${s.color.replace('text-', 'from-')}/10 to-transparent backdrop-blur-sm border border-neutral-200 rounded-2xl mx-auto mb-4 transition-transform duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={s.icon} className={`h-8 w-8 ${s.color}`} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{s.number}</div>
                <div className="text-slate-600 text-sm md:text-base">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
