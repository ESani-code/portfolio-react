import { useRef } from "react";
import { useInView } from "framer-motion";

import Masonry from "../../components/Masonry";
import { work } from "./GraphicWorks";

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  return (
    <>
      <div ref={containerRef} className="w-full min-h-150">
        {isInView && (
          <Masonry
            items={work}
            ease="bounce.out"
            duration={1.1}
            stagger={0.07}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        )}
      </div>
    </>
  );
};

export default Creative;
