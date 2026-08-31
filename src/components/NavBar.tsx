import { CreativeLeft, CreativeRight } from "../view/navbar/Creative";
import { DeveloperLeft, DeveloperRight } from "../view/navbar/Developer";
import AnimateMode from "./AnimateMode";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  return (
    <nav className="z-999 fixed bottom-7 left-0 w-full flex justify-center items-end pointer-events-none px-4">
      <div className="flex items-center gap-4 bg-black/20 border backdrop-blur-md text-white px-6 py-2 rounded-sm shadow-2xl pointer-events-auto">
        {/* Animated Left Links */}
        <AnimateMode
          creative={<CreativeLeft />}
          developer={<DeveloperLeft />}
        />

        {/* Theme Toggle in the Center */}
        <div className="bg-accent/40 border-1/80 px-3 py-1 rounded-sm">
          <ToggleSwitch />
        </div>

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
