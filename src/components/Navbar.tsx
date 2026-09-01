"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Utensils, MessageSquare, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#home", icon: Home },
    { name: "ABOUT", href: "#about", icon: Info },
    { name: "MENU", href: "#menu", icon: Utensils },
    { name: "GALLERY", href: "#gallery", icon: ImageIcon },
    { name: "REVIEWS", href: "#reviews", icon: MessageSquare },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="relative flex items-center justify-between w-full h-14">

            {/* Mobile: Hamburger */}
            <button
              className="md:hidden p-2 -ml-2 text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
              <Image 
                src="/nav-logo.png" 
                alt="HarTakoyaki Logo" 
                width={56} 
                height={56} 
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Desktop: Center Links */}
            <div className="hidden md:flex gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile: Small Book Button */}
            <div className={`md:hidden transition-all duration-300 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <a href="#inquire" className="bg-[#FF6B00] text-white px-5 py-2.5 rounded-sm font-mono text-[9px] font-bold uppercase tracking-widest block">
                Order
              </a>
            </div>

            {/* Desktop: Book Now Button */}
            <a
              href="#inquire"
              className={`hidden md:block border border-[#FF6B00] bg-[#FF6B00] px-8 py-3 text-[10px] font-mono uppercase tracking-widest text-white hover:bg-orange-600 transition-all duration-300 rounded-sm ${
                isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#0a0a0b] border-r border-white/10 z-[70] p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <Image 
                  src="/nav-logo.png" 
                  alt="HarTakoyaki Logo" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14 object-contain"
                />
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-neutral-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Prominent CTA */}
              <a
                href="#inquire"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#FF6B00] text-white py-4 rounded-sm flex justify-center items-center font-sans font-bold uppercase tracking-widest text-xs mb-10 hover:bg-orange-600 transition-colors"
              >
                Order Now
              </a>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors font-sans text-lg font-medium"
                  >
                    <link.icon className="w-5 h-5 text-neutral-500" />
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
