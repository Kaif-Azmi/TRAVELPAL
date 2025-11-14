import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Shield,
  Award,
} from "lucide-react";

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const links = {
    Company: ["About Us", "Our Team", "Careers", "Press"],
    Support: ["Help Center", "Contact Us", "Live Chat", "FAQ"],
    Resources: ["Travel Blog", "Travel Guides", "Destination Info", "Travel Tips"],
    Business: ["Partnerships", "Affiliate Program", "API Access", "Enterprise"],
  };

  const socials = [
    { icon: Facebook },
    { icon: Twitter },
    { icon: Instagram },
    { icon: Linkedin },
    { icon: Youtube },
  ];

  return (
    <footer ref={ref} className="relative pt-24 pb-10 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[1100px] h-[1100px] rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14"
        >
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Globe className="h-8 w-8 text-primary-400" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="h-4 w-4 text-accent-400" />
                </motion.div>
              </div>

              {/* Logo Name */}
              <span className="text-2xl font-display font-bold text-white">TravelPal</span>
            </div>

            <p className="text-white/70 leading-relaxed mb-8 max-w-md">
              AI-powered travel planning with personalized itineraries, smart recommendations,
              and seamless booking — designed to match your style.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>kaifazmi8573@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+91-8887852321</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>Ghaziabad, U.P India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.button
                  key={i}
                  type="button"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 
                             text-white/70 flex items-center justify-center 
                             hover:border-white/40 transition-all"
                >
                  <s.icon className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(links).map(([title, items], idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>

              <ul className="space-y-4">
                {items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 + j * 0.03 }}
                  >
                    <button
                      type="button"
                      className="group flex items-center gap-2 
                                 text-white/70 hover:text-primary-400 transition-all"
                    >
                      {item}
                      <ArrowRight
                        className="w-3 h-3 opacity-0 
                                   group-hover:opacity-100 group-hover:translate-x-1 
                                   transition-all"
                      />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col md:flex-row justify-between 
                     items-center gap-5 border-t border-white/10 pt-6"
        >
          <div className="text-white/60 flex items-center gap-2">
            © 2024 TravelPal — All rights reserved.
            <Heart className="w-4 h-4 text-red-400" />
          </div>

          <div className="flex gap-6 text-white/60 text-sm">
            <button
              type="button"
              className="flex items-center gap-1 hover:text-white transition-all"
            >
              <Shield className="w-4 h-4" /> Privacy Policy
            </button>

            <button
              type="button"
              className="flex items-center gap-1 hover:text-white transition-all"
            >
              <Award className="w-4 h-4" /> Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
