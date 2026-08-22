import ToggleSwitch from "./ToggleSwitch.tsx";
// import PillNav from "./ui/PillNav.tsx";
// import SoftAurora from "./ui/SoftAurora.tsx";

import { useTheme } from "../context/ThemeContext.tsx";

import AnimateMode from "./AnimateMode.tsx";
import Creative from "../view/hero/Creative.tsx";
import Developer from "../view/hero/Developer.tsx";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      {/* <PillNav
        logo="https://res.cloudinary.com/don03rsnm/image/upload/v1758131129/Logo.png"
        logoAlt="Design Labs Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#070707"
        pillColor="#ed3838"
        hoveredPillTextColor="#ed3838"
        pillTextColor="#fffff"
        // theme="light"
        initialLoadAnimation={true}
      /> */}

      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center">
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
        <ToggleSwitch />
        <AnimateMode
          creative={<Creative />}
          developer={<Developer />}
        ></AnimateMode>
      </section>
      {/* Section Where it cut off*/}
    </>
  );
};

export default Hero;
