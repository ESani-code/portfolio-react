import { useEffect, useState } from "react";
import { CreativeLeft, CreativeRight } from "../view/navbar/Creative";
import { DeveloperLeft, DeveloperRight } from "../view/navbar/Developer";
// import ToggleSwitch from "./ToggleSwitch";
import { motion, AnimatePresence } from "framer-motion";
import NavAnimate from "./NavAnimate";
import ToggleIcon from "./ToggleIcon";

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
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="z-999 fixed bottom-7 left-0 w-full flex justify-center items-end pointer-events-none px-4">
      <motion.div
        // layout
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 bg-black/20 border backdrop-blur-md py-2 text-white rounded-sm shadow-2xl pointer-events-auto"
      >
        {/* Animated Left Links */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="left-links"
              initial={{
                width: 0,
                opacity: 0,
                paddingRight: 0,
                paddingLeft: 0,
              }}
              animate={{
                width: "auto",
                opacity: 1,
                paddingRight: 0,
                paddingLeft: 0,
                marginLeft: 0,
                marginRight: 0,
              }}
              exit={{
                width: 0,
                opacity: 0,
                paddingRight: 0,
                paddingLeft: 0,
                marginLeft: -8,
                marginRight: -8,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <NavAnimate
                creative={<CreativeLeft />}
                developer={<DeveloperLeft />}
                className="px-3"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Theme Toggle with Switch in the Center */}
        {/* <div className={isExpanded ? `` : `px-3`}
          <div className="bg-accent/40 border-1/80 px-3 py-1 rounded-sm">
            <ToggleSwitch />            
          </div>
        </div> */}

        {/* Theme Toggle with Icon in the Center */}
        <div className={isExpanded ? `` : `px-3`}>
          <div className="px-0.5 py-0.5 -my-2 overflow-hidden rounded-sm hover:scale-110 transition-all:ease-in-out duration-300">
            <ToggleIcon size={50} />
          </div>
        </div>

        {/* Animated Right Links */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="right-links"
              initial={{
                width: 0,
                opacity: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              animate={{
                width: "auto",
                opacity: 1,
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: 0,
                marginRight: 0,
              }}
              exit={{
                width: 0,
                opacity: 0,
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: -8,
                marginRight: -8,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <NavAnimate
                creative={<CreativeRight />}
                developer={<DeveloperRight />}
                className="px-3"
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
