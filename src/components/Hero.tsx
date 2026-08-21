import ToggleSwitch from "./ToggleSwitch.tsx";
// import BlurText from "./ui/BlurText.tsx";
// import PillNav from "./ui/PillNav.tsx";
// import SoftAurora from "./ui/SoftAurora.tsx";
// import TextType from "./ui/TextType.tsx";

import { useTheme } from "../context/ThemeContext.tsx";
// import ElasticMesh from "./ElasticMesh.tsx";
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

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
        <ToggleSwitch />
        <AnimateMode
          creative={<Creative />}
          developer={<Developer />}
        ></AnimateMode>
        {/* Section Where it starts */}
        {/* <BlurText
          text="Hello there!!!"
          delay={300}
          animateBy="letters"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 font-bold text-accent-color text-center justify-center"
        />

        <div className="text-2xl md:text-3xl lg:text-4xl font-medium">
          I am a
          <TextType
            text={[
              " Front-end Developer",
              " Graphic Designer",
              " Motion Designer",
              " Media Enthusiast",
            ]}
            typingSpeed={50}
            pauseDuration={2400}
            showCursor
            cursorCharacter="|"
            // texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={50}
            // variableSpeedEnabled={false}
            // variableSpeedMin={60}
            // variableSpeedMax={80}
            cursorBlinkDuration={0.5}
            className="text-accent-color"
          />
        </div>
        <div className="w-[540px] h-[675px]">
          <ElasticMesh
            image="https://res.cloudinary.com/don03rsnm/image/upload/v1767356310/Christmas_bwqjfn.png"
            interaction="hover"
            tilt={0}
            shading={0.5}
            color1="#5227FF"
            color2="#B19EEF"
            showGrid
            gridDensity={20}
            gridOpacity={0.1}
            gridColor="#f7ff11"
            highlight="#ffffff"
            borderRadius={21}
            stiffness={0.05}
            damping={0.2}
            grabRadius={0.6}
            pull={0.4}
            wobble={7}
            resolution={25}
            enabled
          />
        </div> */}
      </section>
      {/* Section Where it cut off*/}

      {/* <SoftAurora
        speed={0.3}
        scale={1.3}
        brightness={0.4}
        color1="#ff7575"
        color2="#ff0000"
        noiseFrequency={3}
        noiseAmplitude={3.5}
        bandHeight={0.4}
        bandSpread={2}
        octaveDecay={0.17}
        layerOffset={0.1}
        colorSpeed={0.5}
        enableMouseInteraction
        mouseInfluence={0.1}
      /> */}
    </>
  );
};

export default Hero;
