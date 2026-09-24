import { Lollipop } from "lucide-react";
import { motionDesigns } from "./motiondesigns";

export const Bento = () => {
  return (
    <section
      id="free-tools"
      className=" bg-sidebar rounded-lg md:px-8 lg:px-12 py-4 my-5 max-w-8xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-end justify-between w-full">
        <div className="flex flex-col my-12 w-full items-start justify-start gap-4">
          <div className="flex flex-col md:flex-row gap-2 items-end w-full justify-between ">
            <h2 className="relative text-4xl md:text-5xl font-semibold max-w-xl text-left leading-[1.1em] ">
              <span className="text-accent-color">
                Motion Designs <br />{" "}
              </span>
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

      {/* Portfolio Grid Start */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:items-start md:justify-start gap-4 ">
        {/* Item Card */}

        {motionDesigns.map(
          (
            {
              href,
              colSpan,
              rowSpan,
              hoverRotate,
              tools,
              title,
              thumbnail,
              alt,
            },
            index,
          ) => (
            <a
              key={index}
              href={href}
              className={`overflow-hidden md:col-span-${colSpan} md:row-span-${rowSpan} min-h-82.5 h-full md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:${hoverRotate} transition-all duration-200 ease-in-out relative bg-sidebar rounded-xl flex flex-col items-center justify-between px-3 py-6`}
            >
              {/* 1. Full Cover Background Image */}
              {thumbnail && (
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={thumbnail}
                  alt={alt || title}
                />
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />

              <div className="relative flex flex-col w-full h-full items-center justify-end gap-0">
                <div className="flex flex-col items-center justify-between">
                  <p className="z-10 text-center text-sm">{tools}</p>
                  <h3 className="z-10 text-3xl whitespace-nowrap font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full">
                    {title}
                  </h3>
                </div>
              </div>

              <div className="w-full object-fill rounded-xl"></div>
            </a>
          ),
        )}

        {/* 
        <a
          href={"/resources/freebies"}
          className="overflow-hidden md:row-span-2 h-full md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-3 transition-all duration-200 ease-in-out relative bg-sidebar rounded-xl flex flex-col items-center justify-between px-3 py-6"
        >
          <div className="relative flex flex-col w-full h-full items-center justify-end gap-0">
            <div className="flex flex-col items-center justify-between">
              <p className="mb-1 text-center">1,000 downloads</p>
              <h3 className=" text-2xl whitespace-nowrap font-semibold text-center px-6 py-2 bg-base-content/90 text-white rounded-full">
                UX + Product-Led
              </h3>
            </div>
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
          className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>
        <a
          href={"/resources/blog"}
          className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>
        <a
          href={"/resources/blog"}
          className="overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>

        <a
          href={"/resources/blog"}
          className="md:col-span-2 overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>
        <a
          href={"/resources/blog"}
          className="md:col-span-2 overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:rotate-4 transition-all duration-200 ease-in-out relative bg-base-100 h-[330px] rounded-xl flex flex-col items-center justify-center px-5 py-6"
        >
          <p className="-rotate-3 mb-1 text-base-content">Blog & Guides</p>
          <h3 className="-rotate-3 text-2xl font-semibold text-center px-6 py-2 bg-white/75 rounded-full">
            Comming Soon
          </h3>
        </a>

        <a
          href={"/resources/playbooks"}
          className=" flex items-center justify-center overflow-hidden md:hover:scale-105 hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.2)] hover:-rotate-6 transition-all duration-200 ease-in-out relative bg-primary/20 h-[330px] rounded-xl  flex-col  px-5 py-6"
        >
          <p className="rotate-6 mb-1 text-base-content">Playbooks</p>
          <h3 className="rotate-6 text-2xl font-semibold text-center px-6 py-2 bg-accent-color rounded-full">
            View More
          </h3>
        </a> */}
      </div>
    </section>
  );
};
