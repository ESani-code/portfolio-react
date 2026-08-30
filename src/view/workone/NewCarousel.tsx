import { useState } from "react";
// import { cn } from "@/lib/utils";
import { cardData } from "./GraphicWorks";
const NewCarousel = () => {
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

      <div
        className="overflow-hidden w-full relative mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none backdrop-blur-sm bg-linear-to-r from-black/60 to-transparent" />

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
                className="w-80 mx-2 h-100 relative group hover:scale-103 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none backdrop-blur-sm bg-linear-to-l from-black/60 to-transparent" />
      </div>
    </>
  );
};

export default NewCarousel;
