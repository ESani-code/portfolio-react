import AnimateMode from "./AnimateMode";

import Creative from "../view/about/Creative";
import Developer from "../view/about/Developer";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center mt-3 py-4 px-3"
    >
      <div className="max-w-8xl">
        <AnimateMode creative={<Creative />} developer={<Developer />} />
      </div>
    </section>
  );
};

export default About;
