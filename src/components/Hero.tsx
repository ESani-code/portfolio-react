// import ToggleSwitch from "./ToggleSwitch.tsx";

import { useTheme } from "../context/ThemeContext.tsx";

import AnimateMode from "./AnimateMode.tsx";
import Creative from "../view/hero/Creative.tsx";
import Developer from "../view/hero/Developer.tsx";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center">
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
        {/* <ToggleSwitch /> */}
        <AnimateMode creative={<Creative />} developer={<Developer />} />
      </section>
    </>
  );
};

export default Hero;
