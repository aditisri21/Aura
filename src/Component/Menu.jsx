import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";

// Safe fallback: dono me se koi bhi prop name pass ho, code crash nahi hoga
const Menu = ({ onAddToCart, addToCart }) => {
  const handleAdd = onAddToCart || addToCart;

  const items = [
    {
      id: 1,
      name: "Signature Latte",
      price: 245,
      desc: "Espresso with silky steamed milk and vanilla.",
      img: "/assets/latte.png",
    },
    {
      id: 2,
      name: "Butter Croissant",
      price: 185,
      desc: "Flaky, buttery pastry baked fresh daily.",
      img: "/assets/croissant.png",
    },
    {
      id: 3,
      name: "Cold Brew",
      price: 210,
      desc: "12-hour steeped rhythmic blend.",
      img: "/assets/latte.png",
    },
    {
      id: 4,
      name: "Almond Biscotti",
      price: 120,
      desc: "Crunchy delight for your coffee dip.",
      img: "/assets/croissant.png",
    },
    {
      id: 5,
      name: "Masala Chai Latte",
      price: 195,
      desc: "Traditional spices meet creamy milk art.",
      img: "/assets/latte.png",
    },
    {
      id: 6,
      name: "Pain au Chocolat",
      price: 215,
      desc: "Dark chocolate filled puff pastry.",
      img: "/assets/croissant.png",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-[#09090b] text-zinc-100">
      <div className="max-w-7xl w-[90%] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Premium Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-md mx-auto"
          >
            Freshly roasted beans & handcrafted treats from ₹120.
          </motion.p>
        </div>

        {/* Menu Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }} // Clean smooth hover lift effect
              className="group relative flex flex-col p-5 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-white/[0.04]"
            >
              {/* Product Image Div */}
              <div
                className="w-full h-60 rounded-xl bg-cover bg-center mb-5 relative overflow-hidden shadow-inner grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                {/* Bestseller Tag */}
                <span className="absolute top-3 left-3 bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  Bestseller
                </span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-[#d4af37] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-[#d4af37] font-bold text-lg whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Card Footer Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-white/[0.05]">
                  {/* Stars Container */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="#d4af37"
                        color="#d4af37"
                        className="opacity-80"
                      />
                    ))}
                  </div>

                  {/* Add To Cart Plus Button */}
                  <button
                    className="w-10 h-10 rounded-full bg-[#d4af37] hover:bg-[#bfa465] text-black flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 shadow-md"
                    onClick={() => handleAdd && handleAdd(item)}
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;