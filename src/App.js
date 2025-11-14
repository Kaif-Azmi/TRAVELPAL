import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="App bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
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
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
