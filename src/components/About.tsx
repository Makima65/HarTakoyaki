"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32 px-6 md:px-8 bg-black border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight mb-6 lg:mb-8 text-white">
            Designed for <span className="italic text-neutral-300">comfort.</span>
          </h2>

          <div className="space-y-4 lg:space-y-6 text-neutral-400 font-sans text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              Located just outside the busy city, Siligna is a private resort built for quick escapes and lasting memories.
            </p>
            <p>
              Our goal is simple: to give you a space where privacy meets complete comfort. Whether you're planning a weekend getaway with family or an intimate celebration with friends, our resort feels just like home.
            </p>
            <p>
              We believe a great stay is about relaxing, enjoying good company, and taking a break from your everyday routine.
            </p>
          </div>
        </motion.div>

        {/* Right Column: iPhone Video Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end lg:pr-12 w-full mt-12 lg:mt-0"
        >
          {/* iPhone CSS Mockup - Scaled Down */}
          <div className="relative w-full max-w-[240px] md:max-w-[260px] aspect-[9/19.5] bg-neutral-950 border-[8px] border-neutral-900 rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 flex items-center justify-between px-2">
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>

            {/* Video Element */}
            <video 
              src="/reel.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            
            {/* Fallback overlay */}
            <div className="absolute inset-0 bg-neutral-900 z-0 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
