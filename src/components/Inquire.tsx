"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resortData } from "@/data/resortData";
import { ChevronRight, ChevronLeft, Sun, Moon, CalendarDays, Users, Sparkles, CheckCircle2, Banknote, Utensils, Music, Bed, Projector, Calendar, User, Mail, CreditCard, Check } from "lucide-react";

const OptionCard = ({ title, subtitle, icon: Icon, isSelected, onClick, showCheckbox }: any) => (
  <button
    onClick={onClick}
    className={`w-full p-4 rounded-3xl flex items-center gap-4 transition-all duration-300 border border-transparent ${
      isSelected ? "bg-[#2a2a2a] border-neutral-600 shadow-[0_0_15px_rgba(255,255,255,0.02)]" : "bg-[#161616] hover:bg-[#222222]"
    }`}
  >
    <div className={`p-3 rounded-xl border flex flex-shrink-0 items-center justify-center transition-colors ${isSelected ? "bg-[#3a3a3a] border-neutral-500 text-white" : "bg-white/5 border-white/10 text-neutral-400"}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex flex-col items-start text-left flex-grow">
      <span className="font-sans font-semibold text-white text-base">{title}</span>
      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">{subtitle}</span>
    </div>
    {showCheckbox && (
      <div className={`w-5 h-5 flex-shrink-0 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'bg-green-500 border-green-500' : 'border-neutral-500'}`}>
        {isSelected && <Check className="w-3 h-3 text-white" />}
      </div>
    )}
  </button>
);

export default function Inquire() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [pax, setPax] = useState<number>(10);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("");
  const [contact, setContact] = useState({ name: "", email: "" });

  const currentPackage = resortData.packages.find((p) => p.id === selectedPackage);
  const basePrice = currentPackage ? parseInt(currentPackage.price.replace(/[^0-9]/g, "")) : 0;
  const maxPax = currentPackage ? parseInt(currentPackage.features[0].replace(/[^0-9]/g, "")) : 0;
  
  const extraPaxCharge = pax > maxPax ? (pax - maxPax) * resortData.bookingConfig.extraPaxFee : 0;
  
  const addonsTotal = selectedAddons.reduce((total, addonId) => {
    const addon = resortData.bookingConfig.addons.find((a) => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = basePrice + extraPaxCharge + addonsTotal;

  const handleCheckout = () => {
    const addonNames = selectedAddons.map(id => resortData.bookingConfig.addons.find(a => a.id === id)?.name).join(", ") || "None";
    const message = `Hi Siligna Resort! I'd like to request a booking:\n\n*Name:* ${contact.name}\n*Email:* ${contact.email}\n*Package:* ${currentPackage?.title}\n*Date:* ${date}\n*Guests:* ${pax} pax\n*Add-ons:* ${addonNames}\n*Payment Method:* ${payment}\n\n*Estimated Total:* ₱${grandTotal.toLocaleString()}\n\nPlease let me know if this date is available.`;
    const url = `${resortData.contact.messenger}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const getPackageIcon = (id: string) => {
    if (id === 'day') return Sun;
    if (id === 'night') return Moon;
    return CalendarDays;
  };

  const getAddonIcon = (id: string) => {
    if (id === 'kitchen') return Utensils;
    if (id === 'karaoke') return Music;
    if (id === 'mattress') return Bed;
    if (id === 'projector') return Projector;
    return Sparkles;
  };

  return (
    <section id="inquire" className="w-full py-16 md:py-24 bg-[#121212] text-white overflow-hidden border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header matched to screenshot */}
        <div className="mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
            INQUIRE
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-white">
            Ready to book your <span className="italic text-neutral-300">stay?</span>
          </h2>
        </div>

        {/* Main Interactive Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Interactive Options */}
          <div className="lg:col-span-4 flex flex-col w-full max-w-md lg:max-w-[340px] mx-auto lg:mx-0">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 block">
              {step === 1 && "PACKAGE OPTIONS"}
              {step === 2 && "GUEST COUNT"}
              {step === 3 && "AVAILABLE ADD-ONS"}
              {step === 4 && "LOGISTICS"}
              {step === 5 && "CONTACT DETAILS"}
              {step === 6 && "BOOKING SUMMARY"}
            </span>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  {resortData.packages.map((pkg) => (
                    <OptionCard 
                      key={pkg.id} 
                      title={pkg.title} 
                      subtitle={`SELECT PACKAGE • ${pkg.price}`} 
                      icon={getPackageIcon(pkg.id)} 
                      isSelected={selectedPackage === pkg.id} 
                      onClick={() => setSelectedPackage(pkg.id)} 
                    />
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  {[10, 15, 20].map((num) => (
                    <OptionCard 
                      key={num} 
                      title={`${num} Guests`} 
                      subtitle="SELECT HEADCOUNT" 
                      icon={Users} 
                      isSelected={pax === num} 
                      onClick={() => setPax(num)} 
                    />
                  ))}
                  <div className="mt-2 bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-neutral-600 transition-colors">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2 px-2">Custom Headcount</label>
                    <input type="number" min="1" value={pax} onChange={(e) => setPax(parseInt(e.target.value) || 1)} className="w-full bg-transparent text-white font-sans font-semibold text-base px-2 outline-none" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  {resortData.bookingConfig.addons.map((addon) => (
                    <OptionCard 
                      key={addon.id} 
                      title={addon.name} 
                      subtitle={addon.price === 0 ? "ADD TO RESERVATION • FREE" : `ADD TO RESERVATION • +₱${addon.price}`} 
                      icon={getAddonIcon(addon.id)} 
                      isSelected={selectedAddons.includes(addon.id)} 
                      onClick={() => setSelectedAddons(prev => prev.includes(addon.id) ? prev.filter(id => id !== addon.id) : [...prev, addon.id])} 
                      showCheckbox={true}
                    />
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-6">
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-neutral-600 transition-colors">
                     <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2 px-2">Target Date</label>
                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-white font-sans font-semibold text-base px-2 outline-none [color-scheme:dark]" />
                  </div>
                  <div className="flex flex-col gap-3">
                    {resortData.bookingConfig.paymentMethods.map(pm => (
                      <OptionCard 
                        key={pm} 
                        title={pm} 
                        subtitle="SELECT PAYMENT METHOD" 
                        icon={CreditCard} 
                        isSelected={payment === pm} 
                        onClick={() => setPayment(pm)} 
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-neutral-600 transition-colors flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#2a2a2a] text-neutral-400 flex items-center justify-center rounded-2xl flex-shrink-0"><User className="w-5 h-5"/></div>
                     <div className="flex flex-col w-full">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Full Name</label>
                        <input type="text" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="w-full bg-transparent text-white font-sans font-semibold text-base outline-none mt-1" />
                     </div>
                  </div>
                  <div className="bg-[#1c1c1c] p-4 rounded-3xl border border-transparent focus-within:border-neutral-600 transition-colors flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#2a2a2a] text-neutral-400 flex items-center justify-center rounded-2xl flex-shrink-0"><Mail className="w-5 h-5"/></div>
                     <div className="flex flex-col w-full">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Email Address</label>
                        <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="w-full bg-transparent text-white font-sans font-semibold text-base outline-none mt-1" />
                     </div>
                  </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
                  <div className="bg-[#1c1c1c] p-6 rounded-3xl flex flex-col gap-4 border border-neutral-800">
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Package</span>
                      <span className="text-white font-sans font-semibold">{currentPackage?.title || "-"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Guests</span>
                      <span className="text-white font-sans font-semibold">{pax} Pax</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Date</span>
                      <span className="text-white font-sans font-semibold">{date || "-"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                      <span className="text-neutral-400 font-sans text-sm">Payment</span>
                      <span className="text-white font-sans font-semibold">{payment || "-"}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">Estimated Total</span>
                      <span className="text-white font-sans text-2xl font-bold">₱{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Column: Glowing Ring Orb matching screenshot */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative h-64 lg:h-full">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full absolute mix-blend-screen"
              style={{
                background: "transparent",
                border: "20px solid transparent",
                borderRadius: "50%",
                boxShadow: "inset 0 0 40px rgba(139,92,246,0.5), 0 0 60px rgba(59,130,246,0.6)",
                borderTopColor: "rgba(139,92,246,0.8)",
                borderRightColor: "rgba(59,130,246,0.8)",
                borderBottomColor: "rgba(236,72,153,0.8)",
                borderLeftColor: "rgba(139,92,246,0.8)",
                filter: "blur(12px)"
              }}
            />
            <div className="relative z-10 flex items-center justify-center">
              <span className="font-sans font-bold text-xl text-white">{step}/6</span>
            </div>
          </div>

          {/* Right Column: Descriptions & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right relative h-full w-full max-w-md lg:max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="w-10 h-10 rounded-xl bg-[#1c2433] flex items-center justify-center text-blue-400 mb-8 lg:mb-12 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Sparkles className="w-5 h-5" />
            </div>
            
            <h3 className="font-serif text-3xl text-white mb-4 leading-tight max-w-xs">
              {step === 1 && "Start your booking."}
              {step === 2 && "Who is joining you?"}
              {step === 3 && "Tailor your stay."}
              {step === 4 && "When & How?"}
              {step === 5 && "Almost there."}
              {step === 6 && "Ready to finalize."}
            </h3>
            
            <p className="text-neutral-400 font-sans text-sm max-w-[280px] mb-12 leading-relaxed">
              {step === 1 && "First, choose a primary package on the left to tell us what kind of experience you are planning."}
              {step === 2 && "Let us know your estimated guest count. Exceeding the package max incurs a standard extra fee."}
              {step === 3 && "Add specific amenities or services to make your event seamless and tailored to your needs."}
              {step === 4 && "Select your preferred date and how you'd like to settle the down payment to secure it."}
              {step === 5 && "Provide your basic contact details so our team knows who is requesting the booking."}
              {step === 6 && "Review your quote. Clicking send will draft this summary directly to our Messenger."}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 mt-auto w-full lg:w-auto justify-start lg:justify-end">
              {step > 1 && (
                <button onClick={prevStep} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white hover:bg-[#2a2a2a] transition-colors border border-neutral-800">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {step < 6 ? (
                <button 
                  onClick={nextStep}
                  disabled={step === 1 && !selectedPackage}
                  className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  onClick={handleCheckout}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Send to Messenger
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
