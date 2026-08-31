"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { resortData } from "@/data/resortData";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-sans font-bold text-lg md:text-xl text-white group-hover:text-neutral-300 transition-colors pr-8">
          {question}
        </span>
        <div className="flex-shrink-0 text-neutral-500 group-hover:text-white transition-colors">
          {isOpen ? <X strokeWidth={1.5} className="w-5 h-5" /> : <Plus strokeWidth={1.5} className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-400 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-24 lg:py-32 px-6 md:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-neutral-600"></span> FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            <span className="font-sans font-extrabold text-white block">Got questions?</span> <span className="font-sans font-light text-neutral-300 block">Everything you need to know.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-neutral-900">
          {resortData.faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
