import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Transistion = () => {
  const { isTransitioning, theme } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-accent-color text-white"
          initial={{ y: "100%" }} // Starts off-screen at the bottom
          animate={{ y: "0%" }} // Slides up to cover the screen
          exit={{ y: "-100%" }} // Slides out through the top
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Cinematic easing
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-2xl font-bold tracking-widest uppercase"
            >
              Initializing {theme === "developer" ? "Developer" : "Creative"}{" "}
              Mode...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Transistion;
