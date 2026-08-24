// import { lazy } from "react";
import AnimateMode from "./AnimateMode.tsx";
import Creative from "../view/hero/Creative.tsx";
import Developer from "../view/hero/Developer.tsx";

// const Creative = lazy(() => import("../view/hero/Creative.tsx"));
// const Developer = lazy(() => import("../view/hero/Creative.tsx"));

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col justify-center items-center text-center"
      >
        <AnimateMode creative={<Creative />} developer={<Developer />} />
      </section>
    </>
  );
};

export default Hero;
