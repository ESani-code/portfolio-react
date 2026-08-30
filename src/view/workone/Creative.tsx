import { useRef } from "react";
import { useInView } from "framer-motion";

import Masonry from "../../components/Masonry";
import { work } from "./GraphicWorks";
import DepthCarousel from "../../components/DepthCarousel";

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const graphics = [
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1787336142/Export_rpaktx.png",
      alt: "One",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1787336118/Export_2_b2h9ga.png",
      alt: "Two",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1776105247/Welcome_to_Departure_Service_rxvulw.png",
      alt: "Three",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1787855210/Artboard_1_v5_cmvtbz.png",
      alt: "Four",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1787855243/Welcome_Back_to_School_2_npwzgr.png",
      alt: "Five",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1767571873/gwork12_fvw8qq.jpg",
      alt: "Six",
    },
    {
      image:
        "https://res.cloudinary.com/don03rsnm/image/upload/v1787855233/Website_Launch_V2_vlfsyb.png",
      alt: "Seven",
    },
  ];
  return (
    <>
      {/* Only Visible for Desktop Deveices */}
      <div ref={containerRef} className="w-full px-6 min-h-150 hidden lg:block">
        {isInView && (
          <Masonry
            items={work}
            ease="bounce.out"
            duration={1.1}
            stagger={0.07}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={1.05}
            blurToFocus
            colorShiftOnHover={false}
          />
        )}
      </div>

      {/* Only Visible for Mobile Deveices */}
      <div className="h-160 p-4 block lg:hidden">
        <DepthCarousel
          items={graphics}
          depth={220}
          spread={150}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={2}
          autoplay={false}
          // loop
          cardWidth={400}
          cardHeight={500}
          radius={10}
          tint="#05060a"
          duration={700}
          ease="power3.out"
          autoplayDelay={3200}
          showControls
          showIndicators
        />
      </div>
    </>
  );
};

export default Creative;
