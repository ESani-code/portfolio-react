import { useState } from "react";
// import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { cardData } from "./GraphicWorks";
const DesktopCarousel = () => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" w-full relative mx-auto overflow-x-hidden overflow-y-visible py-6"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none backdrop-blur-md bg-linear-to-r from-black/80 to-transparent [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_100%)]" />

        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 5000 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-96 mx-2 h-120 relative group rounded-sm hover:scale-101 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover rounded-sm "
                />
                {/* <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20"> */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pb-8 px-4 opacity-0 rounded-sm group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-linear-to-t from-black/60 via-black/20 to-transparent [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_15%,rgba(0,0,0,0)_80%)]">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none backdrop-blur-md bg-linear-to-l from-black/80 to-transparent [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_100%)]" />
      </motion.div>
    </>
  );
};

export default DesktopCarousel;
