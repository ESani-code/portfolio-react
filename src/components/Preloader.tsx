import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InfinityLoader } from "./InfinityLoader";

interface PreloaderProps {
  duration?: number;
  onComplete?: () => void; // Callback when the preloader finishes exiting
}

const Preloader = ({ duration = 3000, onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Prevent body scrolling while preloader is visible
    document.body.style.overflow = "hidden";

    // 2. Trigger the exit animation after the duration expires
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [duration]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        // Restore body scroll & notify parent when exit transition completes
        document.body.style.overflow = "";
        onComplete?.();
      }}
    >
      {isVisible && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black text-white"
        >
          <motion.div
            initial={{ scale: 1.0, opacity: 0.8 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center gap-4"
          >
            <InfinityLoader size={160} />
            {/* <span className="text-4xl md:text-6xl font-bold text-accent-color tracking-widest uppercase">
              Welcome
            </span>
            <div className="w-16 h-1 bg-accent-color rounded-full animate-pulse" /> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
