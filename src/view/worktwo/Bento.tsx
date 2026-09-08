// import { cn } from "../../lib/utils";
// import { useState } from "react";

import { Lollipop } from "lucide-react";
// import Link from 'next/a';
// import { Link } from 'react-router-dom';

export const Bento = () => {
  return (
    <section
      id="free-tools"
      className=" bg-sidebar rounded-lg md:px-8 lg:px-12 py-4 my-5 max-w-8xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-end justify-between w-full">
        <div className="flex flex-col my-12 w-full items-start justify-start gap-4">
          <div className="flex flex-col md:flex-row gap-2 items-end w-full justify-between ">
            <h2 className="relative text-4xl md:text-5xl font-sans font-semibold max-w-xl text-left leading-[1.1em] text-base-content">
              Motion Designs <br />{" "}
              <span>
                <Lollipop
                  className="inline-flex text-accent fill-white rotate-12"
                  size={40}
                  strokeWidth={1.3}
                />
              </span>{" "}
              Enjoy the Eye Candy
            </h2>
            <p className="max-w-sm text-right font-semibold text-md text-neutral/50">
              From Keyframes to Visuals, Wireframes to meshes From Keyframes to
              Visuals, Wireframes to meshes From Keyframes to Visuals,
              Wireframes to meshes
            </p>
          </div>

          <div className="flex flex-row text-accent gap-6 items-start justify-center">
            <p className="text-white/80 whitespace-nowrap font-medium">
              +1,000 Downloads
            </p>
            <p className="text-white/80 whitespace-nowrap font-medium">
              Rated 5/5 by 100 Founders
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:items-start md:justify-start gap-4 ">
        <a
          href={"/resources/freebies"}
          className="md:col-span-2 overflow-hidden hover:scale-101 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-1 transition-all duration-200 ease-in-out h-[330px] overflow-hidden relative bg-accent/20 rounded-xl flex flex-row items-center gap-8 justify-between px-3 pt-3 pb-6"
        >
          <div className="relative flex flex-col items-start justify-center ml-4 gap-0">
            <p className="-rotate-1 ml-4 mb-1 text-base-content">
              1,000 downloads
            </p>
            <h3 className="-rotate-1 text-2xl whitespace-nowrap font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full">
              UX + Product-Led
            </h3>
          </div>
          <div className="w-full object-fill rounded-xl"></div>
        </a>

        <a
          href={"/resources/tools"}
          className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-3 transition-all duration-200 ease-in-out relative bg-highlight/20 h-[330px] rounded-xl flex flex-col items-center justify-between px-3 py-6"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="rotate-6 mb-1 text-base-content">10,000 uses</p>
            <h3 className="rotate-6 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full">
              Growth Tools
            </h3>
          </div>

          <div className="w-full object-fill rounded-xl"></div>
        </a>

        <a
          href={"/resources/behavior-principles"}
          className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:-rotate-3 transition-all duration-200 ease-in-out relative bg-secondary/20 h-[330px] rounded-xl flex flex-col items-center justify-between px-5 py-6"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="-rotate-3 mb-1 text-base-content">
              106 Behavioral Principles
            </p>
            <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full">
              Improve UX
            </h3>
          </div>
          <div className="w-full object-fill rounded-xl"></div>
        </a>

        <a
          href={"/resources/blog"}
          className="pointer-events-none overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>

        <a
          href={"/resources/playbooks"}
          className="pointer-events-none flex items-center justify-center overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:-rotate-6 transition-all duration-200 ease-in-out relative bg-primary/20 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="rotate-6 mb-1 text-base-content">Playbooks</p>
          <h3 className="rotate-6 text-2xl font-semibold text-center px-6 py-2 bg-accent-color rounded-full">
            View More
          </h3>
        </a>
      </div>
    </section>
  );
};
