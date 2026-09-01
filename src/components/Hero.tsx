"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const MatrixText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState(text.replace(/[0-9a-zA-Z]/g, "0"));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });
  const hasPlayedOnce = useRef(false);

  useEffect(() => {
    if (!isInView) {
      setDisplayText(text.replace(/[0-9a-zA-Z]/g, "0"));
      return;
    }

    const startDelay = hasPlayedOnce.current ? 0 : delay * 1000;
    hasPlayedOnce.current = true;

    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      const chars = "0123456789";
      let iteration = 0;
      const maxIterations = 30; // Smooth 1.5 seconds (30 frames * 50ms)

      interval = setInterval(() => {
        setDisplayText(() =>
          text.split("").map((char, index) => {
            if (index < (iteration / maxIterations) * text.length) {
              return text[index];
            }
            if (char === "," || char === "+" || char === "%") return char;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
        iteration += 1;
      }, 50);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, text, delay]);

  return <span ref={ref}>{displayText}</span>;
};

export default function Hero() {
  const backgroundImagePath = "/takoyakibg7.jpg"; // Placeholder for future HarTakoyaki image
  const introText = "WELCOME TO".split("");

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#121212]">
      {/* Background Image */}
      <motion.div
        initial={{ filter: "blur(30px)", scale: 1.15 }}
        animate={{ filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url('${backgroundImagePath}')` }}
      />

      {/* Permanent Image Darken Overlay */}
      <div className="absolute inset-0 z-[5] bg-[#121212]/60" />

      {/* Solid Charcoal Curtain Overlay (Step 4 Drop) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 2.8, ease: "easeInOut" }}
        className="absolute inset-0 z-10 bg-[#121212] pointer-events-none"
      />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center px-4 w-full max-w-5xl mt-12">
        {/* Step 1 & 2: Typing and Layout Shift */}
        <motion.div
          initial={{ scale: 1.5, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex mb-8"
        >
          {introText.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 + index * 0.05 }}
              className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-neutral-300 drop-shadow-md"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Step 3: Pop & Reveal (Titles) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center mb-2"
        >
          <Image
            src="/brand-logo.png"
            alt="HarTakoyaki Logo"
            width={1024}
            height={190}
            priority
            className="w-full max-w-xs md:max-w-lg mx-auto h-auto drop-shadow-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-medium text-xl md:text-2xl text-neutral-300 mt-2 mb-10 drop-shadow-md"
        >
          Authentic Japanese Taste. Crispy & Savory.
        </motion.p>

        {/* Buttons Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="#inquire"
            className="border border-[#FF6B00] bg-[#FF6B00] text-white px-8 py-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] hover:bg-orange-600 hover:border-orange-600 transition-colors shadow-md rounded-sm w-full sm:w-auto text-center"
          >
            Order Now
          </a>
          <a
            href="#about"
            className="border border-white text-white px-8 py-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors shadow-md bg-transparent rounded-sm w-full sm:w-auto text-center"
          >
            Explore
          </a>
        </motion.div>

        {/* Stats & Socials Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center w-full"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-16 text-center items-center justify-center mb-10 w-full px-2">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-2"><MatrixText text="10,000+" delay={3.5} /></span>
              <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Takoyaki Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-2"><MatrixText text="2K+" delay={3.5} /></span>
              <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-sans font-bold text-white mb-2"><MatrixText text="99%" delay={3.5} /></span>
              <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Satisfaction</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.facebook.com/profile.php?id=100070209187434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-white hover:text-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center bg-transparent hover:border-[#FF6B00] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </div>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hartakoyakiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-white hover:text-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center bg-transparent hover:border-[#FF6B00] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}