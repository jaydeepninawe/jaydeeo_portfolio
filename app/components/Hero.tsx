"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import StarBackground from "./StarBackground";

const greetings = [
  { text: "Hello", flag: "👋" },
  { text: "नमस्ते", flag: "🙏" },
  { text: "Bonjour", flag: "🇫🇷" },
  { text: "Hola", flag: "🇪🇸" },
  { text: "こんにちは", flag: "🇯🇵" },
  { text: "안녕하세요", flag: "🇰🇷" },
  { text: "Ciao", flag: "🇮🇹" },
  { text: "Olá", flag: "🇧🇷" },
  { text: "Привет", flag: "🇷🇺" },
  { text: "வணக்கம்", flag: "🇮🇳" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", flag: "🇮🇳" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.section
        className="min-h-screen w-full bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <StarBackground />

        <div className="text-center max-w-4xl px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
              style={{
                fontFamily:
                  "'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', 'Twemoji Mozilla', 'monospace'",
              }}
            >
              <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold text-white leading-tight">
                {greetings[index].text}
              </h1>
              <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mt-2 text-white">
                {greetings[index].flag}
              </span>
            </motion.div>
          </AnimatePresence>

          <p className="mt-10 p-5 sm:mt-8 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-mono leading-relaxed">
            I’m <span className="text-purple-400 font-semibold">Jaydeep</span> —
            a creative web designer and full-stack developer crafting immersive
            digital experiences.
          </p>

          {/* Scroll Down GIF Button */}
          <div
            className="mt-10 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={scrollToNextSection}
          >
            <img
              src="scroll.gif"
              alt="Scroll down"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
