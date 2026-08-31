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
            Crafted for <span className="italic text-neutral-300">cravings.</span>
          </h2>

          <div className="space-y-4 lg:space-y-6 text-neutral-400 font-sans text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              Founded in 2020 in the heart of Mandaluyong City, HarTakoyaki started with a simple mission: to bring an authentic, elevated Japanese street food experience right to our local neighborhood.
            </p>
            <p>
              We believe that true quality takes no shortcuts. Every batch is crafted using only premium ingredients—from our rich, savory batter and real octopus bits to our signature drizzles. It is elevated takoyaki, made fresh daily to guarantee that perfect, melt-in-your-mouth bite.
            </p>
            <p>
              Because we prioritize quality over mass production, our daily batches are made strictly 'til supplies last! 🏮 Whether you are grabbing a quick snack or a party box for the barkada, we are here to satisfy your cravings with zero compromises.
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
              src="/reels4.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              defaultMuted={true}
              playsInline={true}
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
