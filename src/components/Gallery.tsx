"use client";
import { motion } from "framer-motion";
import { resortData } from "@/data/resortData";

export default function Gallery() {
  const baseData = resortData.gallery;
  const loopData = [...baseData, ...baseData, ...baseData, ...baseData];
  const reverseData = [...baseData].reverse();
  const loopReverseData = [...reverseData, ...reverseData, ...reverseData, ...reverseData];

  return (
    <section id="gallery" className="w-full py-24 md:py-32 bg-black overflow-hidden border-t border-neutral-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-neutral-600"></span> CLICK ANY FRAME TO EXPLORE
          </span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white">
            Moments of pure <span className="italic text-neutral-300">relaxation.</span>
          </h2>
        </div>
        
        <a 
          href="#inquire" 
          className="hidden md:flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
        >
          <span className="w-8 h-[1px] bg-neutral-600"></span> INQUIRE NOW ↗
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {/* Track 1: Scrolls Left */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-4 w-max px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 200 }}
          >
            {loopData.map((image, index) => (
              <div key={`track1-${index}`} className="relative w-52 md:w-[17rem] aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 bg-neutral-900">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-[0.2em] text-neutral-300 drop-shadow-md">
                    {image.label}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-sans font-bold text-lg text-white drop-shadow-md">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Track 2: Scrolls Right */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-4 w-max px-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 240 }}
          >
            {loopReverseData.map((image, index) => (
              <div key={`track2-${index}`} className="relative w-52 md:w-[17rem] aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 bg-neutral-900">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-[0.2em] text-neutral-300 drop-shadow-md">
                    {image.label}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-sans font-bold text-lg text-white drop-shadow-md">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
