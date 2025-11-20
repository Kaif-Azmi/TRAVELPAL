import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Timeline from './components/Timeline';
import Experiences from './components/Experiences';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-br from-neutral-50 via-white to-neutral-50 min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Categories />
        <About />
        <Timeline />
        <Experiences />
        <AIAssistant />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
