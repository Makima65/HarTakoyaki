"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Sparkles, Image as ImageIcon } from "lucide-react";

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
    { name: "SERVICES", href: "#services", icon: Sparkles },
    { name: "GALLERY", href: "#gallery", icon: ImageIcon },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between w-full">
            
            {/* Mobile: Hamburger */}
            <button 
              className="md:hidden p-2 -ml-2 text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="font-serif text-2xl text-white tracking-widest flex-1 text-center md:text-left md:flex-none">
              SILIGNA
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
            <div className="md:hidden">
              <a href="#inquire" className="bg-white text-black px-5 py-2.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest">
                Book
              </a>
            </div>

            {/* Desktop: Book Now Button */}
            <a 
              href="#inquire" 
              className="hidden md:block border border-white/20 px-8 py-3 text-[10px] font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
            >
              BOOK NOW
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
                <span className="font-serif text-2xl text-white tracking-widest">SILIGNA</span>
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-neutral-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Prominent CTA */}
              <a 
                href="#inquire" 
                onClick={() => setIsOpen(false)}
                className="w-full bg-white text-black py-4 rounded-xl flex justify-center items-center font-sans font-bold uppercase tracking-widest text-xs mb-10"
              >
                Book Now
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
