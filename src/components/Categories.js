import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mountain, Umbrella, Landmark, Utensils, Coins, Crown, ArrowRight } from 'lucide-react';

const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      icon: Mountain,
      title: "Adventure & Trekking",
      description: "Explore rugged terrains and conquer new heights",
      count: "150+",
      gradient: "from-green-400 to-blue-500",
      delay: 0,
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
    },
    {
      icon: Umbrella,
      title: "Beach & Coastal",
      description: "Relax on pristine beaches and crystal waters",
      count: "200+",
      gradient: "from-blue-400 to-cyan-500",
      delay: 0.1,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: Landmark,
      title: "Cultural Heritage",
      description: "Discover ancient civilizations and traditions",
      count: "180+",
      gradient: "from-purple-400 to-pink-500",
      delay: 0.2,
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30"
    },
    {
      icon: Utensils,
      title: "Culinary Tours",
      description: "Taste authentic flavors from around the world",
      count: "120+",
      gradient: "from-orange-400 to-red-500",
      delay: 0.3,
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30"
    },
    {
      icon: Coins,
      title: "Budget Travel",
      description: "Amazing experiences without breaking the bank",
      count: "250+",
      gradient: "from-yellow-400 to-green-500",
      delay: 0.4,
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: Crown,
      title: "Luxury Escapes",
      description: "Premium experiences for discerning travelers",
      count: "80+",
      gradient: "from-pink-400 to-purple-500",
      delay: 0.5,
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <section id="destinations" ref={ref} className="py-24 relative overflow-hidden">
      {/* Ambient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
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
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent-300 rounded-full"
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
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            <span className="gradient-text">Explore</span> by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
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
            const Icon = category.icon;
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
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Count Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20">
                    {category.count} destinations
                  </span>
                  
                  {/* Arrow */}
                  <motion.div
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-primary-300 transition-colors duration-300" />
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
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
