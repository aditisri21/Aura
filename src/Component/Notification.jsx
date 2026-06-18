import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Notification = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-5 right-5 z-[5000] flex flex-col overflow-hidden bg-[#09090b]/90 border border-white/[0.08] backdrop-blur-md rounded-xl shadow-2xl shadow-black/50 max-w-sm w-[calc(100%-40px)] sm:w-80"
        >
          {/* Notification Main Layout Content */}
          <div className="flex items-center gap-3 p-4 text-zinc-100">
            <CheckCircle2
              size={20}
              className="text-[#d4af37] shrink-0"
            />
            <span className="text-sm font-medium tracking-wide">{message}</span>
          </div>

          {/* Dynamic Progress Bar - Auto shrinking */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{
              duration: 5,
              ease: "linear",
              // explicit timeout logic handler alignment
            }}
            className="h-[3px] bg-[#d4af37] w-full self-start"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;