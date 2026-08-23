import TiltedCard from "../../components/TiltedCard";

const Creative = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-16 w-full text-left py-3 lg:py-8 px-4 md:px-3">
      {/* LEFT COLUMN: Profile Image */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        {/* Desktop View */}
        <div className="relative hidden lg:block items-start">
          <TiltedCard
            imageSrc="https://res.cloudinary.com/don03rsnm/image/upload/v1787506329/me-pic_n6hym0.jpg"
            altText="Personal Picture"
            captionText="Creative at Heart"
            containerHeight="500px"
            containerWidth="500px"
            imageHeight="500px"
            imageWidth="500px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent={false}
            shadow={true}
          />
        </div>
        {/* Mobile View */}
        <div className="block lg:hidden ">
          <TiltedCard
            imageSrc="https://res.cloudinary.com/don03rsnm/image/upload/v1787506329/me-pic_n6hym0.jpg"
            altText="Personal Picture"
            captionText="Creative at Heart"
            containerHeight="350px"
            containerWidth="350px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent={false}
          />
        </div>
      </div>

      {/* RIGHT COLUMN: Typography Layout (Based on Reference Image) */}
      <div className="w-full lg:w-2/3 lg:ml-3 flex flex-col relative">
        <div className="text-accent-color font-mono text-sm mb-6 font-bold tracking-widest">
          // About Me
        </div>

        {/* Main Large Typography */}

        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight tracking-tight mb-12 z-99">
          I'm a{" "}
          <span className="text-accent-color">
            designer who turns ideas into real solutions.
          </span>{" "}
          I focus on clear interfaces and sharp decisions.
        </h2>

        {/* Subtext and Button (Offset to the right) */}
        {/* ml-auto pushes this block to the right side of its container on desktop */}
        <div className="md:ml-auto w-full md:w-[65%] lg:ml-6 flex flex-col items-start gap-8">
          <p className="text-sm md:text-base text-white opacity-80 leading-relaxed font-light">
            Bringing your vision to life quickly and efficiently—whether it's
            branding, apps, or websites—I've got it covered, delivering smooth
            and effective solutions from start to finish.
          </p>

          {/* Pill Button */}
          <a className="px-6 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            Scroll Down for more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Creative;
