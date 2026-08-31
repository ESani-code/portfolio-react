import GlareHover from "../../components/GlareHover";

const Creative = () => {
  return (
    <section className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-16 w-full text-left py-3 lg:py-8 px-4 md:px-3">
      {/* LEFT COLUMN: Profile Image */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        {/* Desktop View */}
        <div className="relative hidden lg:block items-start">
          <div style={{ height: "600px", position: "relative" }}>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="w-full h-full z-10 absolute inset-0 pointer-events-none bg-linear-to-r from-transparent from-40% to-black/50 " />
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1787506329/me-pic_n6hym0.jpg"
                alt="Personal Picture"
              />
            </GlareHover>
          </div>
        </div>
        {/* Mobile View */}
        <div className="block lg:hidden ">
          <div style={{ height: "500px", position: "relative" }}>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <img
                src="https://res.cloudinary.com/don03rsnm/image/upload/v1787506329/me-pic_n6hym0.jpg"
                alt="Personal Picture"
              />
            </GlareHover>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Typography Layout (Based on Reference Image) */}
      <div className="w-full lg:w-2/3 lg:ml-3 flex flex-col relative">
        <div className="z-50 text-accent-color font-mono text-sm mb-6 font-bold tracking-widest">
          // About Me
        </div>

        {/* Main Large Typography */}

        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight tracking-tight mb-12 z-99">
          A <span className="text-accent-color">Creative</span> who turns{" "}
          <span className="text-accent-color">ideas into real solutions.</span>{" "}
          Creating <span className="text-accent-color">visuals</span> to{" "}
          <span className="text-accent-color">solve</span> your problems
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
