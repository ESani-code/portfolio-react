import { useRef } from "react";
import { useInView } from "framer-motion";

import Masonry from "../../components/Masonry";
import { work } from "./GraphicWorks";
import Carousel from "./Carousel";

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const graphics = [
    "https://res.cloudinary.com/don03rsnm/image/upload/v1787336142/Export_rpaktx.png",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1787336118/Export_2_b2h9ga.png",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1776105247/Welcome_to_Departure_Service_rxvulw.png",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1787855210/Artboard_1_v5_cmvtbz.png",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1787855243/Welcome_Back_to_School_2_npwzgr.png",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1767571873/gwork12_fvw8qq.jpg",
    "https://res.cloudinary.com/don03rsnm/image/upload/v1787855233/Website_Launch_V2_vlfsyb.png",
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
      <div className="max-xl p-4 block overflow-hidden lg:hidden">
        <Carousel>
          {graphics.map((link) => (
            <img key={link} src={link} className="max-w-lg" />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Creative;
