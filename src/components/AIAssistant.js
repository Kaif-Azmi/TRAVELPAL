import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { groqQuery } from "../api/groqClient";

import {
  Bot,
  Send,
  Landmark,
  Globe,
  Coins,
  Mountain,
  Sparkles,
  Calendar,
  Target,
  RefreshCw,
} from "lucide-react";

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
    { text: "Best places to visit in India", icon: Landmark },
    { text: "European summer destinations", icon: Globe },
    { text: "Budget-friendly travel tips", icon: Coins },
    { text: "Adventure travel recommendations", icon: Mountain },
  ];

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-neutral-800/50 px-4 py-2 rounded-full border border-neutral-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-white/90 text-sm">AI Travel Assistant</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Your Personal <span className="text-primary-300">Travel AI</span>
          </h2>

          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Ask about destinations, itineraries, local food, budget planning and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Static Info Area */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-white">
                Plan Your Trip with <span className="text-primary-300">AI</span>
              </h3>
              <p className="text-white/70 mt-3">
                Smart, adaptive and fast — an AI travel guide designed for you.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Tailored Suggestions</h4>
                  <p className="text-white/70 text-sm">Destinations suited to your style.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-500/20 border border-secondary-500/30 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Smart Itineraries</h4>
                  <p className="text-white/70 text-sm">Efficient day-by-day plans.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500/20 border border-accent-500/30 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Budget-Friendly</h4>
                  <p className="text-white/70 text-sm">Save money with expert tips.</p>
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
            <div className="glass-card bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden h-[650px] flex flex-col">

              {/* Chat Header */}
              <div className="bg-primary-600 p-5 border-b border-neutral-700 flex justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">TravelPal AI Assistant</h4>
                    <p className="text-xs text-white/80">Online • Ready to help</p>
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
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition text-white"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl text-sm ${
                          msg.sender === "user"
                            ? "bg-primary-500 text-white"
                            : "bg-neutral-800/80 text-white border border-neutral-700"
                        }`}
                      >
                        {msg.text}
                        <div className="text-xs mt-2 opacity-70">
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
                    <div className="bg-neutral-800 p-3 rounded-xl border border-neutral-700 flex space-x-1">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef}></div>
              </div>

              {/* Suggestions */}
              <div className="p-4 border-t border-neutral-700 bg-neutral-900/40">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(s.text)}
                      className="flex items-center space-x-2 p-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                    >
                      <s.icon className="w-4 h-4" />
                      <span className="text-sm">{s.text}</span>
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
                    className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-white/40 focus:ring-2 ring-primary-500"
                  />

                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white disabled:opacity-40"
                  >
                    <Send className="w-5 h-5" />
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
