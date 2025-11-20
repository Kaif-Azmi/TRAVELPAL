import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMountain, 
  faUmbrella, 
  faLandmark, 
  faUtensils, 
  faDollarSign, 
  faCrown, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      icon: faMountain,
      title: "Adventure & Trekking",
      description: "Explore rugged terrains and conquer new heights",
      count: "150+",
      gradient: "from-primary-400 to-primary-500",
      delay: 0,
      bgColor: "bg-primary-500/10",
      borderColor: "border-primary-400/30",
      hoverText: "group-hover:text-primary-400",
      hoverBg: "group-hover:bg-primary-500/20",
      hoverBorder: "group-hover:border-primary-400/40",
      hoverIcon: "group-hover:text-primary-400"
    },
    {
      icon: faUmbrella,
      title: "Beach & Coastal",
      description: "Relax on pristine beaches and crystal waters",
      count: "200+",
      gradient: "from-secondary-400 to-secondary-500",
      delay: 0.1,
      bgColor: "bg-secondary-500/10",
      borderColor: "border-secondary-400/30",
      hoverText: "group-hover:text-secondary-400",
      hoverBg: "group-hover:bg-secondary-500/20",
      hoverBorder: "group-hover:border-secondary-400/40",
      hoverIcon: "group-hover:text-secondary-400"
    },
    {
      icon: faLandmark,
      title: "Cultural Heritage",
      description: "Discover ancient civilizations and traditions",
      count: "180+",
      gradient: "from-accent-400 to-accent-500",
      delay: 0.2,
      bgColor: "bg-accent-500/10",
      borderColor: "border-accent-400/30",
      hoverText: "group-hover:text-accent-400",
      hoverBg: "group-hover:bg-accent-500/20",
      hoverBorder: "group-hover:border-accent-400/40",
      hoverIcon: "group-hover:text-accent-400"
    },
    {
      icon: faUtensils,
      title: "Culinary Tours",
      description: "Taste authentic flavors from around the world",
      count: "120+",
      gradient: "from-amaranth-400 to-amaranth-500",
      delay: 0.3,
      bgColor: "bg-amaranth-500/10",
      borderColor: "border-amaranth-400/30",
      hoverText: "group-hover:text-amaranth-400",
      hoverBg: "group-hover:bg-amaranth-500/20",
      hoverBorder: "group-hover:border-amaranth-400/40",
      hoverIcon: "group-hover:text-amaranth-400"
    },
    {
      icon: faDollarSign,
      title: "Budget Travel",
      description: "Amazing experiences without breaking the bank",
      count: "250+",
      gradient: "from-indigo-400 to-indigo-500",
      delay: 0.4,
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-400/30",
      hoverText: "group-hover:text-indigo-400",
      hoverBg: "group-hover:bg-indigo-500/20",
      hoverBorder: "group-hover:border-indigo-400/40",
      hoverIcon: "group-hover:text-indigo-400"
    },
    {
      icon: faCrown,
      title: "Luxury Escapes",
      description: "Premium experiences for discerning travelers",
      count: "80+",
      gradient: "from-sky-400 to-sky-500",
      delay: 0.5,
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-400/30",
      hoverText: "group-hover:text-sky-400",
      hoverBg: "group-hover:bg-sky-500/20",
      hoverBorder: "group-hover:border-sky-400/40",
      hoverIcon: "group-hover:text-sky-400"
    }
  ];

  return (
    <section id="destinations" ref={ref} className="py-24 relative overflow-hidden">
      {/* Ambient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements */}
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
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-amaranth-300 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            <span className="gradient-text">Explore</span> by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-700 max-w-2xl mx-auto"
          >
            Find your perfect adventure from our curated collection of travel experiences
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((category, index) => {
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: category.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl p-8 ${category.bgColor} ${category.borderColor} border backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl" />
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <FontAwesomeIcon icon={category.icon} className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${category.hoverText} transition-colors duration-300`}>
                  {category.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Count Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-neutral-100 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 border border-neutral-200">
                    {category.count} destinations
                  </span>
                  
                  {/* Arrow */}
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-neutral-100 backdrop-blur-sm border border-neutral-200 flex items-center justify-center ${category.hoverBg} ${category.hoverBorder} transition-all duration-300`}
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className={`w-5 h-5 text-slate-700 ${category.hoverIcon} transition-colors duration-300`} />
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.gradient.replace('from-', 'from-').replace('to-', 'to-')} 0%, transparent 50%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Categories
            <FontAwesomeIcon icon={faArrowRight} className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
