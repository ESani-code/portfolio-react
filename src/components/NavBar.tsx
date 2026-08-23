import { CreativeLeft, CreativeRight } from "../view/navbar/Creative";
import { DeveloperLeft, DeveloperRight } from "../view/navbar/Developer";
import AnimateMode from "./AnimateMode";
import BorderGlow from "./BorderGlow";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  return (
    <nav className="fixed bottom-7 left-0 w-full flex justify-center items-end z-50 pointer-events-none px-4">
      <BorderGlow
        edgeSensitivity={45}
        glowColor="10 150 30"
        backgroundColor="#000000"
        borderRadius={0}
        glowRadius={20}
        glowIntensity={0.5}
        coneSpread={8}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
        <div className="flex items-center gap-4 backdrop-blur-md text-white px-6 py-2  shadow-2xl pointer-events-auto">
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
      </BorderGlow>
    </nav>
  );
};

export default NavBar;
