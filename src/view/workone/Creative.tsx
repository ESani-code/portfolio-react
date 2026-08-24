import Masonry from "../../components/Masonry";
import { work } from "./GraphicWorks";

const Creative = () => {
  return (
    <>
      <Masonry
        items={work}
        ease="bounce.out"
        duration={1.1}
        stagger={0.07}
        animateFrom="random"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </>
  );
};

export default Creative;
