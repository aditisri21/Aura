import {
  Coffee,
  Share2,
  Globe,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#09090b] border-t border-white/[0.06] text-zinc-400 py-16">
      {/* Footer Responsive Grid Container */}
      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
        
        {/* Column 1: Brand details & Social Links */}
        <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
          <div className="flex items-center gap-2 font-serif text-xl font-bold tracking-wider text-zinc-100">
            <Coffee size={28} className="text-[#d4af37]" />
            <span>AURA</span>
          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            India's leading artisan coffee experience. Join the culture.
          </p>

          {/* Social Icons Hover Effects */}
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#d4af37] hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Share2 size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#d4af37] hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Globe size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#d4af37] hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
          <h4 className="text-zinc-100 font-serif font-bold tracking-wide text-base">Explore</h4>

          <ul className="space-y-2.5 list-none p-0 m-0">
            <li>
              <a href="#hero" className="text-sm hover:text-[#d4af37] transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#menu" className="text-sm hover:text-[#d4af37] transition-colors duration-200">Menu</a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:text-[#d4af37] transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-[#d4af37] transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Metadata Info */}
        <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
          <h4 className="text-zinc-100 font-serif font-bold tracking-wide text-base">Visit Us</h4>

          <div className="space-y-3 flex flex-col items-center md:items-start text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-[#d4af37]" /> MG Road, Bangalore, India
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#d4af37]" /> +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <Clock size={16} className="text-[#d4af37]" /> 08:00 - 23:00
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Disclaimer Border bottom */}
      <div className="max-w-7xl w-[90%] mx-auto pt-8 border-t border-white/[0.05] text-center text-xs tracking-wider text-zinc-500">
        © 2026 Aura Coffee & Bistro. Fully Animated Experience.
      </div>
    </footer>
  );
};

export default Footer;