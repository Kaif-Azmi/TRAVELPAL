import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClock,
  faUsers,
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Experiences = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const experiences = [
    {
      id: 1,
      title: "Swiss Alps Adventure",
      description: "Experience the breathtaking beauty of the Swiss Alps with alpine trails, scenic views, and cultural immersion.",
      price: "$2,499",
      duration: "7 days",
      groupSize: "8 people",
      rating: 4.9,
      reviews: 127,
      tags: ["Adventure", "Mountains", "Culture"],
      bg: "from-accent-500 to-sky-500",
      location: "Switzerland",
      delay: 0,
    },
    {
      id: 2,
      title: "Bali Beach Paradise",
      description: "Relax on pristine beaches, explore temples, and enjoy the warmth of Balinese culture and cuisine.",
      price: "$1,899",
      duration: "10 days",
      groupSize: "12 people",
      rating: 4.8,
      reviews: 203,
      tags: ["Beach", "Culture", "Relaxation"],
      bg: "from-sky-500 to-indigo-500",
      location: "Indonesia",
      delay: 0.1,
    },
    {
      id: 3,
      title: "Japanese Cherry Blossom",
      description: "Witness cherry blossom season across Tokyo, Kyoto, and serene cultural landscapes.",
      price: "$3,299",
      duration: "12 days",
      groupSize: "10 people",
      rating: 4.9,
      reviews: 156,
      tags: ["Culture", "Nature", "Urban"],
      bg: "from-primary-500 to-indigo-500",
      location: "Japan",
      delay: 0.2,
    },
  ];

  return (
    <section ref={ref} id="experiences" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Curated adventures designed to deliver unforgettable memories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: exp.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-3xl bg-white border border-neutral-200/50 overflow-hidden hover:shadow-xl hover:border-neutral-300/50 transition-all duration-300"
            >
              {/* Image/Gradient Header */}
              <div className={`h-52 bg-gradient-to-br ${exp.bg} relative overflow-hidden`}>
                {/* Overlay gradient for better badge visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Location Badge */}
                <motion.div 
                  className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-sm font-medium">{exp.location}</span>
                </motion.div>

                {/* Price Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white font-bold text-sm">{exp.price}</span>
                </motion.div>

                {/* Rating Badge */}
                <motion.div 
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-sm font-semibold">{exp.rating}</span>
                  <span className="text-white/80 text-xs">({exp.reviews})</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {exp.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-6 text-slate-600 text-sm mb-5 pb-5 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{exp.groupSize}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium bg-neutral-100 border border-neutral-200 rounded-full text-slate-700 hover:bg-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More 
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-neutral-200 text-slate-800 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-500 hover:bg-primary-50/50 shadow-sm hover:shadow-md transition-all duration-300"
          >
            View All Experiences
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
