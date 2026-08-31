"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after the sequence is complete
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); // Wait 3.5s for the full typing sequence
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="flex flex-wrap items-baseline justify-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-sans text-neutral-400 text-sm md:text-base tracking-widest uppercase"
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="font-sans text-neutral-400 text-sm md:text-base tracking-widest uppercase"
              >
                and welcome to
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-white text-5xl md:text-7xl lg:text-8xl tracking-tight"
            >
              HarTakoyaki,
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="font-serif italic text-neutral-300 text-lg md:text-xl"
            >
              Resort and Events Place.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
