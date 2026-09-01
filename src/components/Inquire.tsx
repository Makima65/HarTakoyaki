"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Hash, User, Phone, MapPin } from "lucide-react";

const OptionCard = ({ title, subtitle, icon: Icon, emoji, isSelected, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full p-4 rounded-3xl flex items-center gap-4 transition-all duration-300 border border-transparent ${
      isSelected ? "bg-[#2a2a2a] border-neutral-600 shadow-[0_0_15px_rgba(255,255,255,0.02)]" : "bg-[#161616] hover:bg-[#222222]"
    }`}
  >
    <div className={`p-3 rounded-xl border flex flex-shrink-0 items-center justify-center transition-colors ${isSelected ? "bg-[#FF6B00] border-[#FF6B00] text-white" : "bg-white/5 border-white/10 text-neutral-400"}`}>
      {emoji ? <span className="text-xl leading-none">{emoji}</span> : (Icon && <Icon className="w-5 h-5" />)}
    </div>
    <div className="flex flex-col items-start text-left flex-grow">
      <span className="font-sans font-semibold text-white text-base">{title}</span>
      {subtitle && <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">{subtitle}</span>}
    </div>
  </button>
);

export default function Inquire() {
  const [step, setStep] = useState(1);
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const formatMessage = () => {
    return `Hello HarTakoyaki! I'd like to order:\nFlavor: ${flavor}\nSize: ${size}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
  };

  const handleCheckoutFB = () => {
    const message = formatMessage();
    navigator.clipboard.writeText(message).then(() => {
      window.open(`https://m.me/100070209187434`, "_blank");
    });
  };

  const handleCheckoutIG = () => {
    const message = formatMessage();
    navigator.clipboard.writeText(message).then(() => {
      window.open(`https://ig.me/m/hartakoyakiii`, "_blank");
    });
  };

  // Determine size options based on flavor
  const sizeOptions = flavor === "Grilled Cheesebomb" 
    ? [{ title: "8pcs", price: "Php 150" }]
    : [{ title: "4pcs", price: "Php 55" }, { title: "8pcs", price: "Php 110" }];

  return (
    <section id="inquire" className="w-full py-16 md:py-24 bg-[#121212] text-white overflow-hidden border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF6B00] mb-6 block">
            ORDER ONLINE
          </span>
          <h2 className="text-4xl lg:text-6xl font-sans font-black tracking-tight leading-[1.1] text-white">
            Ready to satisfy your <span className="italic text-[#FF6B00]">cravings?</span>
          </h2>
        </motion.div>

        {/* Main Interactive Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center min-h-[500px]"
        >
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col w-full max-w-md lg:max-w-[340px] mx-auto lg:mx-0">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
              {step === 1 && "FLAVOR SELECTION"}
              {step === 2 && "PORTION SIZE"}
              {step === 3 && "CONTACT DETAILS"}
              {step === 4 && "DELIVERY INFO"}
              {step === 5 && "ORDER SUMMARY"}
            </span>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  {[
                    { name: "Crab & Cheese", emoji: "🦀" },
                    { name: "Octobits", emoji: "🐙" },
                    { name: "Grilled Cheesebomb", emoji: "🧀" }
                  ].map((f) => (
                    <OptionCard 
                      key={f.name}
                      title={f.name}
                      subtitle="SELECT FLAVOR"
                      emoji={f.emoji}
                      isSelected={flavor === f.name}
                      onClick={() => {
                        setFlavor(f.name);
                        setSize(""); // Reset size when flavor changes
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  {sizeOptions.map((opt) => (
                    <OptionCard 
                      key={opt.title}
                      title={opt.title}
                      subtitle={opt.price}
                      icon={Hash}
                      isSelected={size === `${opt.title} - ${opt.price}`}
                      onClick={() => setSize(`${opt.title} - ${opt.price}`)}
                    />
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-[#FF6B00] transition-colors flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#2a2a2a] text-neutral-400 flex items-center justify-center rounded-2xl flex-shrink-0"><User className="w-5 h-5"/></div>
                     <div className="flex flex-col w-full">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent text-white font-sans font-semibold text-base outline-none mt-1" />
                     </div>
                  </div>
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-[#FF6B00] transition-colors flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#2a2a2a] text-neutral-400 flex items-center justify-center rounded-2xl flex-shrink-0"><Phone className="w-5 h-5"/></div>
                     <div className="flex flex-col w-full">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Contact Number</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent text-white font-sans font-semibold text-base outline-none mt-1" />
                     </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-[#FF6B00] transition-colors flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#2a2a2a] text-neutral-400 flex items-center justify-center rounded-2xl flex-shrink-0 mt-1"><MapPin className="w-5 h-5"/></div>
                     <div className="flex flex-col w-full">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Delivery Address</label>
                        <textarea rows={4} value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-transparent text-white font-sans font-semibold text-base outline-none mt-2 resize-none" placeholder="Complete address with landmarks..."></textarea>
                     </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  <div className="bg-[#1c1c1c] p-6 rounded-3xl flex flex-col gap-4 border border-neutral-800">
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Flavor</span>
                      <span className="text-white font-sans font-semibold text-right">{flavor || "-"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Size</span>
                      <span className="text-white font-sans font-semibold text-right">{size || "-"}</span>
                    </div>
                    <div className="flex flex-col border-b border-neutral-800 pb-4 gap-2">
                      <span className="text-neutral-400 font-sans text-sm">Customer Details</span>
                      <span className="text-white font-sans text-sm">{name || "-"}</span>
                      <span className="text-white font-sans text-sm">{phone || "-"}</span>
                    </div>
                    <div className="flex flex-col pb-2 gap-2">
                      <span className="text-neutral-400 font-sans text-sm">Address</span>
                      <span className="text-white font-sans text-sm leading-relaxed">{address || "-"}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Column: Glowing Ring Orb */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative h-64 lg:h-full">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full absolute mix-blend-screen"
              style={{
                background: "transparent",
                border: "20px solid transparent",
                borderRadius: "50%",
                boxShadow: "inset 0 0 40px rgba(255,107,0,0.5), 0 0 60px rgba(255,165,0,0.4)",
                borderTopColor: "rgba(255,107,0,0.8)",
                borderRightColor: "rgba(255,165,0,0.8)",
                borderBottomColor: "rgba(255,69,0,0.8)",
                borderLeftColor: "rgba(255,140,0,0.8)",
                filter: "blur(12px)"
              }}
            />
            <div className="relative z-10 flex items-center justify-center">
              <span className="font-sans font-bold text-xl text-white">{step}/5</span>
            </div>
          </div>

          {/* Right Column: Descriptions & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right relative h-full w-full max-w-md lg:max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-4 leading-tight max-w-xs">
              {step === 1 && "Pick your flavor."}
              {step === 2 && "How hungry are you?"}
              {step === 3 && "Who is ordering?"}
              {step === 4 && "Where to deliver?"}
              {step === 5 && "Review your order."}
            </h3>
            
            <p className="text-neutral-400 font-sans text-sm max-w-[280px] mb-12 leading-relaxed">
              {step === 1 && "Choose one of our premium, freshly cooked takoyaki flavors."}
              {step === 2 && "Select your preferred portion size."}
              {step === 3 && "Provide your basic contact details so we can reach you for updates."}
              {step === 4 && "Enter your complete delivery address including any helpful landmarks."}
              {step === 5 && "Review your order details. Clicking send will copy your order and open your selected messaging app."}
            </p>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full justify-start lg:justify-end">
              {step > 1 && (
                <button onClick={prevStep} className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white hover:bg-[#2a2a2a] transition-colors border border-neutral-800">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {step < 5 ? (
                <button 
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !flavor) ||
                    (step === 2 && !size) ||
                    (step === 3 && (!name || !phone)) ||
                    (step === 4 && !address)
                  }
                  className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex flex-col gap-3 w-full">
                  <button 
                    onClick={handleCheckoutFB}
                    className="flex items-center justify-center gap-2 bg-[#0866FF] text-white px-6 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(8,102,255,0.3)] w-full"
                  >
                    Send via Facebook
                  </button>
                  <button 
                    onClick={handleCheckoutIG}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-6 py-3.5 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(253,29,29,0.3)] w-full"
                  >
                    Send via Instagram
                  </button>
                </div>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
