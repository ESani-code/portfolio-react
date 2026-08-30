import { useRef } from "react";
import { useInView } from "framer-motion";

import Masonry from "../../components/Masonry";
import { work, graphics } from "./GraphicWorks";
import Carousel from "./Carousel";

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <>
      {/* Only Visible for Desktop Deveices */}
      <div
        ref={containerRef}
        id="graphics"
        className="w-full px-6 min-h-150 hidden lg:block"
      >
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
