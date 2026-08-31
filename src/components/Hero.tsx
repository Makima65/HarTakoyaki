"use client";
import { motion } from "framer-motion";
import { resortData } from "@/data/resortData";

export default function Hero() {
    const backgroundImagePath = "/Silignapic2.jpg";
    const introText = "HI, AND WELCOME TO".split("");

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Background Image (Revealed in Step 4) */}
            <motion.div
                initial={{ filter: "blur(30px)", scale: 1.15 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImagePath}')` }}
            />

            {/* Permanent Image Darken Overlay */}
            <div className="absolute inset-0 z-[5] bg-black/40" />

            {/* Solid Black Curtain Overlay (Step 4 Drop) */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 2.8, ease: "easeInOut" }}
                className="absolute inset-0 z-10 bg-black pointer-events-none"
            />

            {/* Text Content */}
            <div className="relative z-20 flex flex-col items-center px-4 w-full max-w-5xl mt-12">
                {/* Step 1 & 2: Typing and Layout Shift */}
                <motion.div
                    initial={{ scale: 1.5, y: 40 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex mb-8"
                >
                    {introText.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.2 + index * 0.05 }}
                            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-neutral-300 drop-shadow-md"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Step 3: Pop & Reveal (Titles) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-6xl md:text-8xl text-white tracking-tight drop-shadow-lg"
                >
                    Siligna
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-light text-xl md:text-2xl text-neutral-300 mt-2 mb-10 drop-shadow-md"
                >
                    Resort and Events Place.
                </motion.p>

                {/* Buttons Fade In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-row justify-center gap-4"
                >
                    <a
                        href="#inquire"
                        className="bg-white text-black border border-white px-8 py-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-md"
                    >
                        Book Now
                    </a>
                    <a
                        href="#about"
                        className="border border-white text-white px-8 py-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors shadow-md bg-transparent"
                    >
                        Explore
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
