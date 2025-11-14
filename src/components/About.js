import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Users, Sparkles, Target, Shield, Heart, Award, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Target,
      title: "Personalized Planning",
      description: "AI-powered recommendations tailored to your preferences, budget, and travel style",
      delay: 0
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with enterprise-grade security and privacy controls",
      delay: 0.1
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "Curated by travel experts who know the local culture and hidden gems",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every experience is vetted and tested to ensure exceptional quality",
      delay: 0.3
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers", icon: Users },
    { number: "500+", label: "Destinations", icon: Globe },
    { number: "98%", label: "Satisfaction Rate", icon: Heart },
    { number: "24/7", label: "AI Support", icon: Sparkles }
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-primary-300 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-secondary-300 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-300 rounded-full"
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="h-4 w-4 text-accent-400" />
            <span className="text-white/80 text-sm font-medium">About TravelPal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Revolutionizing <span className="gradient-text">Travel Planning</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to make travel planning effortless, personalized, and unforgettable. 
            TravelPal blends AI innovation with human expertise to deliver journeys that feel made just for you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">TravelPal</span>?
            </h3>

            <div className="space-y-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + f.delay }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{f.title}</h4>
                      <p className="text-white/70">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                <Globe className="w-32 h-32 text-white" />
              </div>
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{s.number}</div>
                <div className="text-white/60">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
