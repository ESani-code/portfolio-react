import { useEffect, useState } from "react";
import { CreativeLeft, CreativeRight } from "../view/navbar/Creative";
import { DeveloperLeft, DeveloperRight } from "../view/navbar/Developer";
import AnimateMode from "./AnimateMode";
import ToggleSwitch from "./ToggleSwitch";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Target the hero section to track its visibility
    const heroElement = document.getElementById("hero");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Expand the navbar when the hero section is no longer intersecting (visible)
        setIsExpanded(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="z-999 fixed bottom-7 left-0 w-full flex justify-center items-end pointer-events-none px-4">
      <motion.div
        layout
        className="flex items-center gap-4 bg-black/20 border backdrop-blur-md text-white px-6 py-2 rounded-sm shadow-2xl pointer-events-auto"
      >
        {/* Animated Left Links */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="left-links"
              initial={{ padding: "-24px", width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ padding: "-24px", width: 0, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              <AnimateMode
                creative={<CreativeLeft />}
                developer={<DeveloperLeft />}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Theme Toggle in the Center */}
        <div className="bg-accent/40 border-1/80 px-3 py-1 rounded-sm">
          <ToggleSwitch />
        </div>

        {/* Animated Right Links */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="right-links"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              <AnimateMode
                creative={<CreativeRight />}
                developer={<DeveloperRight />}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <AnimateMode
          creative={<CreativeRight />}
          developer={<DeveloperRight />}
        /> */}
      </motion.div>
    </nav>
  );
};

export default NavBar;
