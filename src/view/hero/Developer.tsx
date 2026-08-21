import ElasticMesh from "../../components/ElasticMesh";
import BlurText from "../../components/ui/BlurText";
import TextType from "../../components/ui/TextType";

const Developer = () => {
  return (
    <section>
      <BlurText
        text="Developer Mode"
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
      </div>
    </section>
  );
};

export default Developer;
