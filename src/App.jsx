import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Menu from "./Component/Menu";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";
import Notification from "./Component/Notification";

function App() {
  // State management for global functionality
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [notif, setNotif] = useState({ message: "", isVisible: false });

  // Top Premium Progress Bar calculation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 001
  });

  // Dynamic Scroll Observer: Handles active navigation links state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "menu", "about", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart logic implementation
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });

    // Trigger toast banner instantly
    setNotif({ message: `${item.name} added to order!`, isVisible: true });
    setTimeout(() => setNotif({ message: "", isVisible: false }), 5000);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Safe aggregate counter check
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-[#09090b] text-zinc-100 font-sans selection:bg-[#d4af37]/30 selection:text-white min-h-screen relative antialiased overflow-x-hidden">
      
      {/* 🌟 PREMIUM SCROLL INDICATOR BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#d4af37] origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* FIXED GLOBAL NAV OVERLAY */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        activeSection={activeSection} 
      />

      {/* 🚀 SMOOTH PROGRESSIVE REVEAL WRAPPERS */}
      <main className="w-full relative z-10">
        
        {/* HERO SECTION */}
        <Hero />

        {/* PREMIUM SECTIONS HANDLERS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Menu addToCart={addToCart} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* GLOBAL FLOATING APP INTERACTION OVERLAYS */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
      />

      <Notification 
        message={notif.message} 
        isVisible={notif.isVisible} 
      />
    </div>
  );
}

export default App;