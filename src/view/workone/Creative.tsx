import { useRef } from "react";
import { useInView } from "framer-motion";

import { graphics } from "./GraphicWorks";
import Carousel from "./Carousel";
import NewCarousel from "./NewCarousel";

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div>
      <div>
        <h1 className="font-bold text-6xl pb-12">Graphics</h1>
      </div>

      {/* Only Visible for Desktop Deveices */}
      <div ref={containerRef} className="w-full  min-h-150 hidden lg:block">
        {isInView && <NewCarousel />}
      </div>

      {/* Only Visible for Mobile Deveices */}
      <div className="max-xl p-4 block overflow-hidden lg:hidden">
        <Carousel>
          {graphics.map((link) => (
            <img key={link} src={link} className="max-w-lg" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Creative;
