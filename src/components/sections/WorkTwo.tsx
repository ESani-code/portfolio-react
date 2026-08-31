import AnimateMode from "../AnimateMode";

import Creative from "../../view/worktwo/Creative";
import Developer from "../../view/worktwo/Developer";

import { useTheme } from "../../context/ThemeContext";

const WorkTwo = () => {
  const { theme } = useTheme();
  return (
    <section
      id={theme === "creative" ? "graphics" : "tech-stack"}
      className="w-full flex flex-col justify-center items-start text-center"
    >
      <AnimateMode creative={<Creative />} developer={<Developer />} />
    </section>
  );
};

export default WorkTwo;
