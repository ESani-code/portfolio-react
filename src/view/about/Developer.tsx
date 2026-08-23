import { useState } from "react";
import TiltedCard from "../../components/TiltedCard";

const Developer = () => {
  const [activeTab, setActiveTab] = useState("education");
  const tabs = ["education", "certifications"];
  return (
    <section className="flex flex-col md:flex-row gap-10 items-start w-full text-left p-6">
      <div className="w-full md:w-1/3 flex justify-center">
        <TiltedCard
          imageSrc="https://res.cloudinary.com/don03rsnm/image/upload/v1787506329/me-pic_n6hym0.jpg"
          altText="Personal Picture"
          captionText="Creative at Heart"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent={false}
        />
      </div>

      {/* RIGHT COLUMN: Bio & Tabs */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            I'm a{" "}
            <span className="text-accent-color font-semibold">
              Computer Engineering
            </span>{" "}
            student who loves the field in the intersection between media and
            technology. My passion lies in{" "}
            <span className="text-accent-color font-semibold">
              solving problems
            </span>{" "}
            and coming up with creative{" "}
            <span className="text-accent-color font-semibold">
              visual solutions
            </span>{" "}
            that improve awareness.
          </p>
        </div>

        {/* Tabs Navigation */}
        <nav className="flex gap-6 border-b border-white/20 pb-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize text-sm font-medium pb-2 whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-accent-color border-b-2 border-accent-color"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="min-h-62.5">
          {activeTab === "experience" && (
            <ul className="flex flex-col gap-5 opacity-80">
              <li>
                <div className="font-bold text-accent-color">
                  2024 - Present
                </div>
                <div className="font-semibold">
                  Freelancer, Graphic Designer, Motion Graphics and Video
                  Editing
                </div>
                <div className="text-sm mt-1">
                  Worked on various graphic design and media projects.
                </div>
              </li>
              <li>
                <div className="font-bold text-accent-color">
                  October 2024 - July 2025
                </div>
                <div className="font-semibold">HSL, Graphic Designer</div>
                <div className="text-sm mt-1">
                  Worked on various graphic design projects for the start up
                  community.
                </div>
              </li>
              <li>
                <div className="font-bold text-accent-color">
                  April 2024 - April 2025
                </div>
                <div className="font-semibold">
                  Soundclaz, Graphics Designer
                </div>
                <div className="text-sm mt-1">
                  Created custom graphics for clients and businesses, focusing
                  on unique designs that meet their specific needs.
                </div>
              </li>
            </ul>
          )}

          {activeTab === "education" && (
            <ul className="flex flex-col gap-4 opacity-80">
              <li>
                <div className="font-bold text-accent-color">2022 - 2027</div>
                <div className="font-semibold">Computer Engineering</div>
                <div className="text-sm">Covenant University, Ota</div>
              </li>
            </ul>
          )}

          {activeTab === "certifications" && (
            <ul className="flex flex-col gap-4 opacity-80">
              <li>
                <div className="font-bold text-accent-color">June 2024</div>
                <div className="font-semibold">
                  Autodesk Certified Professional: AutoCAD
                </div>
              </li>
              <li>
                <div className="font-bold text-accent-color">June 2024</div>
                <div className="font-semibold">
                  Engineering Drawing with Fusion 360 - Autodesk
                </div>
              </li>
              <li>
                <div className="font-bold text-accent-color">June 2024</div>
                <div className="font-semibold">
                  CCNA: Introduction to Networks - Cisco
                </div>
              </li>
              <li>
                <div className="font-bold text-accent-color">February 2024</div>
                <div className="font-semibold">
                  Prompt Engineering (LLM) - OBTranslate
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Developer;
