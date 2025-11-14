import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  MapPin,
  Users,
  Bot,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Destinations", href: "#destinations", icon: MapPin },
    { name: "Experiences", href: "#experiences", icon: Users },
    { name: "AI Assistant", href: "#ai-assistant", icon: Bot },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

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
            className="bg-neutral-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">

              {/* Logo */}
              <motion.span
                className="text-2xl font-display font-bold tracking-wide text-white"
                whileHover={{ scale: 1.04 }}
              >
                TravelPal
              </motion.span>



              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition"
                    >
                      <Icon className="h-4 w-4 text-primary-300" />
                      <span className="text-sm">{item.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* CTA */}
              <button className="hidden md:block px-5 py-2 rounded-md bg-primary-600 text-white font-medium shadow-sm hover:bg-primary-500 transition-all">
  Get Started
</button>

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
            <div className="pointer-events-auto mt-3 px-6 py-3 bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-lg rounded-full flex gap-4">

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition"
                  >
                    <Icon className="h-5 w-5 text-primary-300" />
                    <span className="hidden sm:block text-sm">{item.name}</span>
                  </a>
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
