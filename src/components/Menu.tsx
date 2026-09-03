"use client";
import { motion } from "framer-motion";
import { FaFishFins } from "react-icons/fa6";
import { GiSadCrab, GiOctopus, GiCheeseWedge } from "react-icons/gi";

const menuItems = [
  {
    id: "crab-cheese",
    title: "Crab & Cheese",
    image: "/takoyakibg10.jpg", // Generic placeholder using the hero image
    badge: "Best Seller",
    tags: [
      <><GiSadCrab className="text-pink-500 w-3.5 h-3.5" /> Crab</>,
      <><GiCheeseWedge className="text-yellow-400 w-3.5 h-3.5" /> Cheese</>
    ],
    description: "A warm, melty hug of cheese loaded with premium crab meat for a rich, ocean-sea fresh flavor.",
    price8pcs: "₱110"
  },
  {
    id: "octobits",
    title: "Octobits",
    image: "/takoyakibg8.jpg",
    badge: "Classic",
    tags: [
      <><GiOctopus className="text-pink-500 w-3.5 h-3.5" /> Octopus</>,
      <><FaFishFins className="text-blue-400 w-3.5 h-3.5" /> Bonito Flakes</>
    ],
    description: "Golden takoyaki balls packed with juicy octopus bits, drizzled with traditional sauces and topped with bonito flakes.",
    price8pcs: "₱110"
  },
  {
    id: "grilled-cheesebomb",
    title: "Grilled Cheesebomb",
    image: "/takoyakibg7.jpg",
    badge: "Fan Favorite",
    tags: [
      <><GiCheeseWedge className="text-yellow-400 w-3.5 h-3.5" /> Triple Cheese</>,
      <><GiOctopus className="text-pink-500 w-3.5 h-3.5" /> Octopus</>
    ],
    description: "A crispy, cheese explosion stuffed with your choice of Crab or Octobits for the ultimate savory bite.",
    price8pcs: "₱150"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="w-full py-24 lg:py-32 px-6 md:px-8 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-24 text-center flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-neutral-600"></span> OUR MENU <span className="w-8 h-[1px] bg-neutral-600"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight text-white font-bold">
            Choose your <span className="italic text-neutral-300">flavor.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-neutral-900 rounded-2xl overflow-hidden flex flex-col border border-neutral-800"
            >
              {/* Top Half (Image) */}
              <div className="h-56 relative w-full bg-neutral-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                {item.badge && (
                  <div className="absolute top-0 left-0 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10 shadow-md">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Bottom Half (Content) */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-white">
                  {item.title}
                </h3>

                {/* Ingredient Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-full flex items-center gap-1.5">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer / Price */}
                <div className="mt-auto flex items-end gap-4 border-t border-neutral-800 pt-5">
                  <span className="text-[#FF6B00] font-sans font-bold text-2xl leading-none">
                    {item.price8pcs} <span className="text-xs font-normal text-neutral-500 tracking-normal">(8pcs)</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
