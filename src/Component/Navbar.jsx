import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = ({ cartCount, onCartClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[2000] bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.04]">
      <div className="max-w-7xl w-[90%] mx-auto h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a href="#hero" className="flex items-center gap-2 font-serif text-xl font-bold tracking-wider text-zinc-100 group">
          <Coffee size={24} className="text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
          <span>AURA</span>
        </a>

        {/* DESKTOP NAVIGATION (Dynamic Sliding Pill Overlay) */}
        <div className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-full relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors duration-300 z-10 ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {/* Smooth Sliding Pill Effect */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#d4af37] rounded-full z-[-1] shadow-lg shadow-[#d4af37]/20"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* RIGHT ACTIONS: CART, VISIT US CTA BUTTON & MOBILE MENU */}
        <div className="flex items-center gap-4">
          {/* Premium Cart Trigger */}
          <button
            onClick={onCartClick}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/40 text-zinc-300 hover:text-[#d4af37] transition-all duration-300 cursor-pointer"
          >
            <ShoppingBag size={18} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4af37] text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#09090b]"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* 🔥 PREMIUM "VISIT US" BUTTON (Desktop Only) */}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-transparent border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <span>Visit Us</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-zinc-100 cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-[#09090b]/95 border-b border-white/[0.06] backdrop-blur-lg overflow-hidden"
          >
            <div className="w-[90%] mx-auto py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-200 flex items-center justify-between ${
                      isActive 
                        ? "bg-[#d4af37] text-black font-bold" 
                        : "text-zinc-400 bg-white/[0.02] border border-white/[0.04] hover:bg-white/5 hover:text-zinc-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;