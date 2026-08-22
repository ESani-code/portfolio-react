import MagicRings from "../../components/MagicRings";
import BlurText from "../../components/ui/BlurText";
import TextType from "../../components/ui/TextType";

const Developer = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <MagicRings
          color="#ff4747"
          colorTwo="#394cff"
          ringCount={10}
          speed={2}
          attenuation={24.5}
          lineThickness={2}
          baseRadius={0.2}
          radiusStep={0.1}
          scaleRate={0.08}
          opacity={0.3}
          blur={2}
          noiseAmount={0.5}
          rotation={0}
          ringGap={1.4}
          fadeIn={0.95}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.05}
          hoverScale={1.1}
          parallax={0.01}
          clickBurst
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <BlurText
          text="Developer Mode"
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

export default Developer;
