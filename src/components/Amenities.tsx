"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { resortData } from "@/data/resortData";

export default function Amenities() {
  return (
    <section id="amenities" className="w-full py-32 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-neutral-600"></span> THE ESTATE
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-8 tracking-tight">
            Designed for <span className="italic text-neutral-400">comfort.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 border-t border-neutral-900 pt-12">
          {resortData.amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6"
            >
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-[#050505]">
                <Check className="w-4 h-4 text-neutral-400" />
              </div>
              <span className="text-neutral-300 font-sans tracking-wide text-sm">{amenity}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
