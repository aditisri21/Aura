import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");

    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b] text-zinc-100 overflow-hidden">
      {/* Grid Container Setup */}
      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Panel: Contact Branding Info Metadata */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
            Find Us Near{" "}
            <span className="text-[#d4af37]">You</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            Have a question or just want to say hi? We'd love to hear from you. 
            Stop by our flagship store for the freshest experience.
          </p>

          {/* Contact Details Grid Layout */}
          <div className="space-y-6 w-full max-w-md">
            
            {/* Location Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
              <div className="text-[#d4af37] p-2 bg-white/5 rounded-lg shrink-0">
                <MapPin size={22} />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-semibold tracking-wide text-zinc-200">Our Location</h4>
                <p className="text-xs md:text-sm text-zinc-400 mt-1">MG Road, Bangalore, KA, India</p>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
              <div className="text-[#d4af37] p-2 bg-white/5 rounded-lg shrink-0">
                <Phone size={22} />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-semibold tracking-wide text-zinc-200">Call Us</h4>
                <p className="text-xs md:text-sm text-zinc-400 mt-1">+91 98765 43210</p>
              </div>
            </div>

            {/* Email Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
              <div className="text-[#d4af37] p-2 bg-white/5 rounded-lg shrink-0">
                <Mail size={22} />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-semibold tracking-wide text-zinc-200">Email Us</h4>
                <p className="text-xs md:text-sm text-zinc-400 mt-1">hello@auracafe.com</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Panel: Interactive Form Handler */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl mx-auto bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          {formState === "success" ? (
            /* Success Feedback Layout States */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 space-y-5"
            >
              <CheckCircle2 size={56} className="text-[#d4af37] animate-bounce" />
              <h3 className="text-xl font-bold font-serif tracking-wide text-zinc-100">Message Sent!</h3>
              <p className="text-zinc-400 text-sm max-w-xs">
                We'll get back to you shortly.
              </p>
              <button
                className="px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-100 font-semibold text-xs border border-white/10 transition-colors cursor-pointer pt-3"
                onClick={() => setFormState("idle")}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            /* Main Form Control Template Grid */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field input */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d4af37]/50 focus:bg-white/[0.05] focus:outline-none text-sm text-zinc-100 placeholder-zinc-500 transition-all duration-300"
                />
              </div>

              {/* Email Field input */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d4af37]/50 focus:bg-white/[0.05] focus:outline-none text-sm text-zinc-100 placeholder-zinc-500 transition-all duration-300"
                />
              </div>

              {/* Textarea Description Field Box */}
              <div className="w-full">
                <textarea
                  placeholder="Message"
                  rows="5"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d4af37]/50 focus:bg-white/[0.05] focus:outline-none text-sm text-zinc-100 placeholder-zinc-500 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Action Action Trigger Button */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 rounded-xl bg-[#d4af37] hover:bg-[#bfa465] disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed text-black font-bold text-sm tracking-wide shadow-lg shadow-[#d4af37]/5 flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.99] cursor-pointer"
              >
                <span>{formState === "loading" ? "Sending..." : "Send Message"}</span>
                <Send size={16} className={`${formState === "loading" ? "animate-pulse" : ""}`} />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;