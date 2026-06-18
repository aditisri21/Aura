import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);

  // Parallax scroll calculations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b] text-zinc-100"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%] bg-[url('/assets/hero.png')] bg-center bg-cover bg-no-repeat z-0"
      />

      {/* Modern Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/65 to-[#09090b]/95 z-10" />

      {/* Main Content Wrapper */}
      <div className="relative max-w-7xl w-[90%] mx-auto text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Pulsing Animated Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block px-6 py-2 mb-6 text-xs font-medium tracking-[2px] uppercase rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#d4af37]"
          >
            India's #1 Coffee Shop
          </motion.div>

          {/* Premium Typography Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight mb-6">
            Experience the Art of{" "}
            <span className="text-[#d4af37] italic font-serif">
              Indian Brews
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed mb-10">
            Indulge in our carefully crafted single-origin coffee and artisan
            hand-rolled pastries.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-5">
            <a 
              href="#menu" 
              className="px-8 py-3.5 rounded-lg bg-[#d4af37] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#bfa465] hover:-translate-y-0.5 shadow-lg shadow-[#d4af37]/10"
            >
              Explore Menu
            </a>

            <a 
              href="#about" 
              className="px-8 py-3.5 rounded-lg bg-white/5 text-zinc-100 font-semibold text-sm border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Learn Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Mouse Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[26px] h-[42px] border-2 border-white/30 rounded-[20px] relative">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full absolute left-1/2 top-2.5 -translate-x-1/2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;