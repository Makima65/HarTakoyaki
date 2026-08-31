"use client";
import { motion } from "framer-motion";
import { resortData } from "@/data/resortData";

export default function HowItWorks() {
  return (
    <section id="process" className="w-full py-32 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-neutral-600"></span> HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-8 tracking-tight">
            From first inquiry <span className="italic text-neutral-400">to final stay.</span>
          </h2>
        </div>
        
        <div className="flex flex-col border-t border-neutral-900 pt-8">
          {resortData.process.map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 border-b border-neutral-900 py-12 last:border-0"
            >
              <div className="md:col-span-2">
                <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-neutral-500">{item.step}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-3xl font-serif italic text-white">{item.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-neutral-400 text-sm leading-relaxed font-sans max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
