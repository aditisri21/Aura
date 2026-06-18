import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Minus, Plus } from "lucide-react";

const Cart = ({ isOpen, onClose, cart = [], onUpdateQty, onRemove }) => {
  // Safe validation fallback array lagayi h taaki crash na ho drop exceptions par
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Glass Screen Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2999] cursor-pointer"
          />

          {/* Sliding Cart Sidebar panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 220,
            }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-[#09090b]/95 border-l border-white/[0.06] backdrop-blur-xl z-[3000] text-zinc-100 flex flex-col shadow-2xl shadow-black/80"
          >
            {/* Cart Header Top Bar */}
            <div className="p-6 border-b border-white/[0.06] flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold tracking-wide">Your Order</h2>

              <button
                className="w-9 h-9 rounded-full border border-white/[0.08] bg-transparent flex items-center justify-center cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                onClick={onClose}
              >
                <X size={16} />
              </button>
            </div>

            {/* Middle Scrollable Section: Cart Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
              {cart.length === 0 ? (
                // Empty State Screen
                <div className="h-full flex flex-col items-center justify-center text-center opacity-60 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37]">
                    <ShoppingBag size={28} />
                  </div>
                  <p className="text-zinc-400 text-sm tracking-wide">Your bag is empty.</p>
                </div>
              ) : (
                // List of items added
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 relative group"
                  >
                    {/* Item Image Thumbnail */}
                    <div
                      className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0 bg-zinc-900 border border-white/[0.05]"
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    />

                    {/* Metadata Specs & Controls */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-zinc-100 truncate pr-6">
                        {item.name}
                      </h4>
                      <p className="text-[#d4af37] text-sm font-bold mt-1">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controller Buttons */}
                      <div className="flex items-center gap-3 mt-3 bg-white/[0.03] border border-white/[0.06] w-fit rounded-lg p-1">
                        <button
                          className="w-6 h-6 rounded-md hover:bg-white/5 flex items-center justify-center cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors"
                          onClick={() => onUpdateQty(item.id, -1)}
                        >
                          <Minus size={12} />
                        </button>

                        <span className="text-xs font-bold w-4 text-center text-zinc-200">
                          {item.qty}
                        </span>

                        <button
                          className="w-6 h-6 rounded-md hover:bg-white/5 flex items-center justify-center cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors"
                          onClick={() => onUpdateQty(item.id, 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Quick Absolute Trash Cross Action */}
                    <button
                      className="absolute top-4 right-4 text-zinc-500 hover:text-red-400 transition-colors duration-200"
                      onClick={() => onRemove(item.id)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Bill Fixed Panel Layout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/[0.06] bg-black/40 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-[#d4af37]">₹{total}</span>
                </div>

                <button
                  className="w-full py-4 rounded-xl bg-[#d4af37] hover:bg-[#bfa465] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#d4af37]/5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  onClick={() => alert("Order confirmed!")}
                >
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;