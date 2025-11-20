import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { groqQuery } from "../api/groqClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faRobot,
  faPaperPlane,
  faLandmark,
  faGlobe,
  faDollarSign,
  faMountain,
  faStar,
  faCalendarDays,
  faBullseye,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const AIAssistant = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text:
        "Hello! I'm your AI travel assistant. Tell me your travel month, budget, and vibe — and I’ll craft the perfect plan.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔥 AI reply function (Groq)
  const generateAIResponse = async (userMessage) => {
    try {
      setIsTyping(true);
      const reply = await groqQuery(userMessage);
      return reply;
    } catch (err) {
      console.error("AI Error:", err);
      return `⚠️ Error: ${err.message || "Something went wrong with Groq."}`;
    } finally {
      setIsTyping(false);
    }
  };

  // 🔥 Send message
  const handleSendMessage = async (finalMessage = inputValue) => {
    if (!finalMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: finalMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    const aiReply = await generateAIResponse(finalMessage);

    const botMessage = {
      id: Date.now() + 1,
      text: aiReply,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  // Quick suggestions
  const suggestions = [
    { text: "Best places to visit in India", icon: faLandmark },
    { text: "European summer destinations", icon: faGlobe },
    { text: "Budget-friendly travel tips", icon: faDollarSign },
    { text: "Adventure travel recommendations", icon: faMountain },
  ];

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Glow (simplified to primary tones) */}
      <div className="absolute inset-0 opacity-18 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/95 px-4 py-2 rounded-full border border-neutral-200/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-primary-400" />
            <span className="text-slate-700 text-sm">AI Travel Assistant</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Your Personal <span className="text-primary-300">Travel AI</span>
          </h2>

          <p className="text-slate-700 text-lg mt-4 max-w-2xl mx-auto">
            Ask about destinations, itineraries, local food, budget planning and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Static Info Area */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-slate-900">
                Plan Your Trip with <span className="text-primary-300">AI</span>
              </h3>
              <p className="text-slate-700 mt-3">
                Smart, adaptive and fast — an AI travel guide designed for you.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faBullseye} className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Tailored Suggestions</h4>
                  <p className="text-slate-700 text-sm">Destinations suited to your style.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-500/20 border border-secondary-500/30 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Smart Itineraries</h4>
                  <p className="text-slate-700 text-sm">Efficient day-by-day plans.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amaranth-500/20 border border-amaranth-500/30 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faDollarSign} className="w-6 h-6 text-amaranth-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Budget-Friendly</h4>
                  <p className="text-slate-700 text-sm">Save money with expert tips.</p>
                </div>
              </div>
            </div>

            <motion.button
              className="px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              Start Planning
            </motion.button>
          </div>

          {/* RIGHT — Chat Window */}
          <div>
            <div className="glass-card bg-white/95 border border-neutral-200 rounded-2xl overflow-hidden h-[650px] flex flex-col">

              {/* Chat Header */}
              <div className="bg-primary-600 p-5 border-b border-neutral-200 flex justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faRobot} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">TravelPal AI Assistant</h4>
                    <p className="text-xs text-slate-700">Online • Ready to help</p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setMessages([
                      {
                        id: Date.now(),
                        text: "Chat cleared. Ask me anything!",
                        sender: "bot",
                        timestamp: new Date(),
                      },
                    ])
                  }
                  className="p-2 bg-white/90 rounded-lg hover:bg-white/100 transition text-slate-700"
                >
                  <FontAwesomeIcon icon={faArrowsRotate} className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl text-sm ${
                          msg.sender === "user"
                            ? "bg-primary-500 text-white"
                            : "bg-white/95 text-slate-800 border border-neutral-200"
                        }`}
                      >
                        {msg.text}
                        <div className="text-xs mt-2 opacity-70 text-slate-500">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div className="flex">
                    <div className="bg-white/90 p-3 rounded-xl border border-neutral-200 flex space-x-1">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef}></div>
              </div>

              {/* Suggestions */}
              <div className="p-4 border-t border-neutral-200 bg-white/95">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(s.text)}
                      className="flex items-center space-x-2 p-3 bg-white/95 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition"
                    >
                      <FontAwesomeIcon icon={s.icon} className="w-4 h-4 text-slate-700" />
                      <span className="text-sm text-slate-700">{s.text}</span>
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask me anything about travel..."
                    className="flex-1 bg-white/95 border border-neutral-200 rounded-lg p-3 text-slate-700 placeholder-slate-400 focus:ring-2 ring-primary-500"
                  />

                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white disabled:opacity-40"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
