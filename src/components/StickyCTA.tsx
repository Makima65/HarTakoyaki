"use client";
import { motion } from "framer-motion";
import { resortData } from "@/data/resortData";

export default function StickyCTA() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="hidden fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="backdrop-blur-xl bg-black/80 border border-neutral-800 p-4 flex items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">Book Direct</span>
          <span className="text-white font-serif italic text-sm">{resortData.branding.name}</span>
        </div>
        <a 
          href={resortData.contact.messenger}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 text-[10px] font-mono uppercase tracking-[0.15em] font-bold"
        >
          Message Us
        </a>
      </div>
    </motion.div>
  );
}
