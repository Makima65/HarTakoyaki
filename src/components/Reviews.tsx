"use client";
import { motion } from "framer-motion";

const reviewsData = [
  {
    name: "KC Famisan-Fietas.",
    color: "bg-blue-500",
    text: "Ito na yung favorite takoyaki namin ng kapatid ko. Sobrang sarap!"
  },
  {
    name: "Rea Aganon",
    color: "bg-pink-500",
    text: "sobrang sarap uulit ulit ka talaga😘."
  },
  {
    name: "Jennie Rose Evangelista Penillos",
    color: "bg-green-500",
    text: "Pop na Pop mga mamsh!👌🏻 Hindi tinipid sa squid, crab, and cheese😋 Masarap talaga!🤩"
  },
  {
    name: "Clarrise Esguerra ",
    color: "bg-purple-500",
    text: "SOLID DI NAKAKASAWA pang shala"
  },
  {
    name: "AnDeenyo Mrtnz",
    color: "bg-orange-500",
    text: "Solid ng cheese bomb nila!!! ❤️❤️❤️ 🍡"
  },

  {
    name: "Carla D.",
    color: "bg-red-500",
    text: "Super generous sa toppings, lalo na yung bonito flakes at mayo. Solid!"
  },
  {
    name: "Joyce Aquino",
    color: "bg-teal-500",
    text: "not a takoyaki lover, in fact first time ko lang matikman when i ordered here, and indeed it was so good!!🥰 yung kuya ko rin na hindi kumakain ng takoyaki is nagustuhan din nya hehe. thank you hartakoyaki, very responsive and accomodating din ni seller hehe. must try guys, super worth it!!💛🤎💛"
  },
  {
    name: "Nicole Ocenar Garcera",
    color: "bg-yellow-500",
    text: "Sarap neto 🥰 Sa lahat ng natikman kong takoyaki, eto lang pinaka nagustuhan ko ❣️ Solid to, oorder at oorder ka talaga ulit eh 🤤😊"
  },
  {
    name: "Unica Reyes Bondoc",
    color: "bg-indigo-500",
    text: "Sobrang saraaap ✅ pati baby ko nagustuhan 💕🤗 very accommodating and responsive sila kausap. ✅ murang shipping fee ✅ must try it guys, walang pagsisisi 😊"
  }
];

export default function Reviews() {
  const loopData = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];
  const reverseData = [...reviewsData].reverse();
  const loopReverseData = [...reverseData, ...reverseData, ...reverseData, ...reverseData];

  return (
    <section id="reviews" className="w-full py-24 bg-[#121212] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-neutral-600"></span> REVIEWS & FEEDBACKS
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tight">
            Voices of Satisfaction.<br />Shared by our customers.
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Track 1: Scrolls Left */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-6 w-max px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 250 }}
          >
            {loopData.map((review, index) => (
              <div key={`track1-${index}`} className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-5 md:p-6 w-[280px] md:w-[320px] h-[240px] md:h-[260px] flex-shrink-0 flex flex-col">
                {/* macOS Dots */}
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                {/* Body */}
                <div className="flex-grow mt-4">
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    "{review.text}"
                  </p>
                </div>

                {/* Divider & Profile */}
                <div className="border-t border-neutral-800 mt-6 pt-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${review.color}`}>
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-bold text-white">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Track 2: Scrolls Right */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex gap-6 w-max px-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 280 }}
          >
            {loopReverseData.map((review, index) => (
              <div key={`track2-${index}`} className="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-5 md:p-6 w-[280px] md:w-[320px] h-[240px] md:h-[260px] flex-shrink-0 flex flex-col">
                {/* macOS Dots */}
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                {/* Body */}
                <div className="flex-grow mt-4">
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    "{review.text}"
                  </p>
                </div>

                {/* Divider & Profile */}
                <div className="border-t border-neutral-800 mt-6 pt-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${review.color}`}>
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-bold text-white">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
