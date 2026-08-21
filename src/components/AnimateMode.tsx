import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

type AnimatedModeProps = {
  creative: React.ReactNode;
  developer: React.ReactNode;
};

export const AnimatedMode = ({ creative, developer }: AnimatedModeProps) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        {theme === "developer" ? developer : creative}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedMode;
