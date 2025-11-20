import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faStar,
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faHeart,
  faShield,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const links = {
    Company: ["About Us", "Our Team", "Careers", "Press"],
    Support: ["Help Center", "Contact Us", "Live Chat", "FAQ"],
    Resources: ["Travel Blog", "Travel Guides", "Destination Info", "Travel Tips"],
    Business: ["Partnerships", "Affiliate Program", "API Access", "Enterprise"],
  };

  const socials = [
    { icon: faFacebook },
    { icon: faTwitter },
    { icon: faInstagram },
    { icon: faLinkedin },
    { icon: faYoutube },
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
                <FontAwesomeIcon icon={faGlobe} className="h-8 w-8 text-primary-400" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-primary-400" />
                </motion.div>
              </div>

              {/* Logo Name */}
              <span className="text-2xl font-display font-bold text-slate-900">TravelPal</span>
            </div>

            <p className="text-slate-700 leading-relaxed mb-8 max-w-md">
              Personalized travel planning with curated itineraries, recommendations,
              and seamless booking — designed to match your style.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-primary-400" />
                <span>kaifazmi8573@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-primary-400" />
                <span>+91-8887852321</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-primary-400" />
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
                  className="w-10 h-10 rounded-xl bg-white/95 border border-neutral-200/50 
                             text-slate-700 flex items-center justify-center 
                             hover:border-primary-500/40 transition-all"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(links).map(([title, items], idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">{title}</h3>

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
                                 text-slate-700 hover:text-primary-600 transition-all"
                    >
                      {item}
                      <FontAwesomeIcon
                        icon={faArrowRight}
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
                     items-center gap-5 border-t border-neutral-200/50 pt-6"
        >
          <div className="text-slate-600 flex items-center gap-2">
            © 2024 TravelPal — All rights reserved.
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-400" />
          </div>

          <div className="flex gap-6 text-slate-600 text-sm">
            <button
              type="button"
              className="flex items-center gap-1 hover:text-slate-900 transition-all"
            >
              <FontAwesomeIcon icon={faShield} className="w-4 h-4" /> Privacy Policy
            </button>

            <button
              type="button"
              className="flex items-center gap-1 hover:text-slate-900 transition-all"
            >
              <FontAwesomeIcon icon={faAward} className="w-4 h-4" /> Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
