// import ElasticMesh from "../../components/ElasticMesh";

import HalftoneReveal from "../../components/HalftoneReveal";
import BlurText from "../../components/ui/BlurText";
import TextType from "../../components/ui/TextType";

const Creative = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 ">
        <HalftoneReveal
          src="https://res.cloudinary.com/don03rsnm/image/upload/v1787397958/Screenshot_2025-05-23_142812_h4vaay.png"
          inkColor="#120D07"
          paperColor="#ffffff"
          mode="mono"
          dotDensity={180}
          angle={30}
          revealRadius={0.5}
          dotSize={1.02}
          shape="line"
          contrast={1}
          invert={false}
          edge={0.76}
          follow={0.1}
          idleReveal={0}
          trigger="hover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <BlurText
          text="Creative Mode"
          delay={300}
          animateBy="letters"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-5xl md:text-7xl lg:text-9xl mb-6 font-bold text-accent-color text-center justify-center"
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
      </div>
    </section>
  );
};

export default Creative;
