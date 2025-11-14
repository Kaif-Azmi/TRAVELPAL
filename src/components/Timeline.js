import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Calendar,
  Camera,
  Heart,
  Plane,
  Target,
  Sparkles,
  ArrowRight,
  Users,
} from "lucide-react";

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
      icon: Search,
      title: "Dream & Discover",
      description:
        "Tell our AI your travel dreams — get personalized destination suggestions.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10 border-blue-400/30",
      delay: 0,
    },
    {
      icon: Target,
      title: "Plan & Customize",
      description:
        "Get curated itineraries tailored to your pace, budget, and style.",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10 border-purple-400/30",
      delay: 0.2,
    },
    {
      icon: Calendar,
      title: "Book & Confirm",
      description:
        "Book the best deals in flights, stays, and activities via trusted partners.",
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-500/10 border-green-400/30",
      delay: 0.4,
    },
    {
      icon: Plane,
      title: "Travel & Explore",
      description:
        "Receive real-time updates, maps, and local insights through the app.",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-500/10 border-orange-400/30",
      delay: 0.6,
    },
    {
      icon: Camera,
      title: "Capture & Share",
      description:
        "Save highlights and create curated story collections of your journey.",
      color: "from-yellow-500 to-amber-500",
      bg: "bg-yellow-500/10 border-yellow-400/30",
      delay: 0.8,
    },
    {
      icon: Heart,
      title: "Return & Remember",
      description:
        "Cherish your memories and start planning your next adventure.",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-500/10 border-pink-400/30",
      delay: 1.0,
    },
  ];

  return (
    <section id="timeline" ref={ref} className="py-24 relative overflow-hidden">
      {/* Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-circle bg-primary-400/10 top-1/4 left-1/4" />
        <div
          className="ambient-circle bg-secondary-400/10 bottom-1/4 right-1/4"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="ambient-circle bg-accent-400/10 top-1/2 left-1/2"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Orbs */}
        {[
          { class: "bg-primary-300 top-20 right-20", size: "w-3 h-3", dur: 3 },
          { class: "bg-secondary-300 bottom-20 left-20", size: "w-2 h-2", dur: 4, delay: 1 },
          { class: "bg-accent-300 top-1/3 right-1/4", size: "w-1 h-1", dur: 2.5, delay: 2 },
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
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span className="text-white/80 text-sm ml-2">How It Works</span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.35)}
            animate={inView ? fadeUp(0.35).animate : {}}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Plan Your Trip in{" "}
            <span className="gradient-text">6 Simple Steps</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.5)}
            animate={inView ? fadeUp(0.5).animate : {}}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Your dream adventure simplified — from inspiration to real-world exploration.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.7, delay: item.delay }}
                  className="relative group"
                >
                  {/* Card */}
                  <motion.div
                    className={`p-8 rounded-3xl border backdrop-blur-sm ${item.bg} ${item.borderColor} hover:shadow-xl transition-all duration-300`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl p-4 mb-6`}>
                      <Icon className="text-white w-full h-full" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Action Button */}
                    <motion.button
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </motion.div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      {...fadeUp(item.delay + 0.3)}
                      animate={inView ? fadeUp(item.delay + 0.3).animate : {}}
                      className="lg:hidden flex justify-center py-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center animate-bounce">
                        <ArrowRight className="h-4 w-4 text-white rotate-90" />
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
              <h3 className="text-3xl font-bold text-white mb-3">
                Ready to Start Your <span className="gradient-text">Journey?</span>
              </h3>
              <p className="text-white/70 mb-6 text-lg">
                Join thousands of explorers building unforgettable memories with AI-powered travel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5" />
                  Start Planning
                </motion.button>

                <motion.button
                  className="btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-5 h-5" />
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
