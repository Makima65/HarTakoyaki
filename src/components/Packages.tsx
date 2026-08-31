"use client";
import { motion } from "framer-motion";
import { resortData } from "@/data/resortData";

export default function Packages() {
  return (
    <section id="services" className="w-full py-24 lg:py-32 px-6 md:px-8 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-24 text-center flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-neutral-600"></span> OUR SERVICES <span className="w-8 h-[1px] bg-neutral-600"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white">
            Choose your <span className="italic text-neutral-300">package.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {resortData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] border border-neutral-900 p-6 lg:p-8 flex flex-col justify-between hover:bg-[#0a0a0a] transition-colors duration-500 rounded-sm"
            >
              <div>
                <div className="mb-10">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500">{pkg.timecode}</span>
                </div>
                <h3 className="font-sans font-bold text-3xl text-white mb-4">{pkg.title}</h3>
                <p className="text-neutral-400 text-sm font-sans mb-10 leading-relaxed min-h-[3rem]">
                  {pkg.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-neutral-300 font-sans">
                      <span className="text-neutral-600 font-mono text-[9px] mt-1.5">0{i + 1}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-neutral-900 flex justify-between items-center mt-auto">
                <span className="font-sans text-xl text-white">{pkg.price}</span>
                <a 
                  href="#inquire"
                  className="text-[9px] font-mono uppercase tracking-[0.1em] text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                >
                  Inquire Now ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
