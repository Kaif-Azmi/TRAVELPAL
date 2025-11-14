import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Clock,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react";

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
      bg: "from-green-400 to-blue-500",
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
      bg: "from-blue-400 to-cyan-500",
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
      bg: "from-pink-400 to-purple-500",
      location: "Japan",
      delay: 0.2,
    },
  ];

  return (
    <section ref={ref} id="experiences" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured Experiences
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Curated adventures designed to deliver unforgettable memories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: exp.delay }}
              className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all"
            >
              {/* Image */}
              <div className={`h-48 bg-gradient-to-br ${exp.bg} relative`}>
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{exp.location}</span>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
                  <span className="text-white font-semibold">{exp.price}</span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm">{exp.rating}</span>
                  <span className="text-white/70 text-xs">({exp.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition">
                  {exp.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex items-center gap-5 text-white/60 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {exp.groupSize}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
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
            whileHover={{ scale: 1.05 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Experiences
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
