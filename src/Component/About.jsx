import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#09090b] text-zinc-100 overflow-hidden">
      {/* Container Wrapper with responsive grid setup */}
      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Image with Animated Spinning Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-xl mx-auto lg:mx-0 group"
        >
          {/* Main About Image */}
          <img 
            src="/assets/hero.png" 
            alt="Cafe Interior" 
            className="w-full h-auto rounded-3xl object-cover shadow-2xl border border-white/[0.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Infinite Rotating Circular Stamp Badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[#d4af37] text-[9px] font-black tracking-[2px] flex items-center justify-center p-4 text-center shadow-lg select-none"
            style={{ borderRadius: "50%" }}
          >
            SINCE 2015 • AURA • SINCE 2015 • AURA
          </motion.div>
        </motion.div>

        {/* Right Side: Copywriting Content & Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
            The Aroma of{" "}
            <span className="text-[#d4af37]">
              Excellence
            </span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            Nestled in the heart of the city, Aura is
            not just a cafe; it's an experience. We
            bring you the finest beans from Araku and
            Kodagu, roasted with precision to bring
            out their unique character.
          </p>

          {/* Grid Stats Block */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t border-white/[0.05] pt-8 w-full mb-10">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#d4af37] mb-1">10+</h3>
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider font-medium">Regions</p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#d4af37] mb-1">25k+</h3>
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider font-medium">Daily Cups</p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#d4af37] mb-1">2015</h3>
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider font-medium">Est.</p>
            </div>
          </div>

          {/* Action Button */}
          <button className="px-8 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#bfa465] text-black font-semibold text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-md">
            Our Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;