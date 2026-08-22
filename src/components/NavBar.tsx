import { CreativeLeft, CreativeRight } from "../view/navbar/Creative";
import { DeveloperLeft, DeveloperRight } from "../view/navbar/Developer";
import AnimateMode from "./AnimateMode";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  return (
    <nav className="fixed bottom-7 left-0 w-full flex justify-center items-end z-50 pointer-events-none px-4">
      {/* CENTER PILL */}
      <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-sm border border-white/10 shadow-2xl pointer-events-auto">
        {/* Decorative Icon */}

        {/* Animated Left Links */}
        <AnimateMode
          creative={<CreativeLeft />}
          developer={<DeveloperLeft />}
        />
        {/* <div className=" h-4 bg-white/20 mx-2" /> */}
        {/* Theme Toggle in the Center */}
        <div className="bg-accent/40 border-1/80 px-3 py-1 rounded-sm">
          <ToggleSwitch />
        </div>
        {/* <div className=" h-4 bg-white/20 mx-2" /> */}
        {/* Animated Right Links */}
        <AnimateMode
          creative={<CreativeRight />}
          developer={<DeveloperRight />}
        />
      </div>
    </nav>
  );
};

export default NavBar;
