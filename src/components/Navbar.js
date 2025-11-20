import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapLocation,
  faUsers,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setIsShrunk(true);   // scrolling down → shrink
      } else {
        setIsShrunk(false);  // scrolling up → expand
      }
      lastScroll = currentScroll;

      // Update active section based on scroll position
      const sections = ['home', 'destinations', 'experiences', 'ai-assistant'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: faHome },
    { name: "Destinations", href: "#destinations", icon: faMapLocation },
    { name: "Experiences", href: "#experiences", icon: faUsers },
    { name: "AI Assistant", href: "#ai-assistant", icon: faRobot },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <AnimatePresence mode="wait">

        {/* FULL NAV — visible when not shrunk */}
        {!isShrunk && (
          <motion.div
            key="fullnav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white/90 backdrop-blur-sm border-b border-neutral-200/50 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">

              {/* Logo */}
              <motion.a
                href="#home"
                className="text-2xl font-display font-bold tracking-wide text-slate-900 hover:text-primary-500 transition-colors"
                whileHover={{ scale: 1.04 }}
              >
                <span className="text-primary-500">.</span>TravelPal
              </motion.a>



              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'text-primary-500 bg-primary-500/10' 
                          : 'text-slate-700 hover:text-primary-500 hover:bg-neutral-100'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className={`h-4 w-4 ${isActive ? 'text-primary-500' : 'text-primary-400'}`} 
                      />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.button 
                className="hidden md:block px-6 py-2.5 rounded-lg bg-primary-500 text-white font-medium shadow-md hover:bg-primary-600 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>

            </div>
          </motion.div>
        )}

        {/* SHRUNK NAV — floating pill in the middle */}
        {isShrunk && (
          <motion.div
            key="shrunknav"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="w-full flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto mt-3 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-neutral-200/50 shadow-lg rounded-full flex gap-2">

              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive 
                        ? 'text-primary-500 bg-primary-500/10' 
                        : 'text-slate-700 hover:text-primary-500 hover:bg-neutral-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={`h-4 w-4 ${isActive ? 'text-primary-500' : 'text-primary-400'}`} 
                    />
                    <span className="hidden sm:block">{item.name}</span>
                  </motion.a>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
