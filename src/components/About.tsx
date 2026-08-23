import AnimateMode from "./AnimateMode";

import Creative from "../view/about/Creative";
import Developer from "../view/about/Developer";

const About = () => {
  return (
    <section className="about w-full flex flex-col justify-center items-center text-center mt-3 p-6">
      <AnimateMode creative={<Creative />} developer={<Developer />} />
    </section>
  );
};

export default About;
