import AnimateMode from "../AnimateMode";

import Creative from "../../view/workone/Creative";
import Developer from "../../view/workone/Developer";

const WorkOne = () => {
  return (
    <>
      <section
        id="graphics"
        className="min-h-screen w-full flex flex-col justify-center items-center text-center"
      >
        <AnimateMode creative={<Creative />} developer={<Developer />} />
      </section>
    </>
  );
};

export default WorkOne;
