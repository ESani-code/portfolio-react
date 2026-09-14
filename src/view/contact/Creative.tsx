import { useTheme } from "../../context/ThemeContext";
import { creativeLinks, developerLinks } from "./Links";

const Creative = () => {
  const { theme } = useTheme();
  const links = theme == "creative" ? creativeLinks : developerLinks;
  return (
    <section className="h-screen">
      <h1 className="text-9xl font-black pt-10">CONTACT</h1>

      {/* Links & extra information */}
      <div className="px-10 flex flex-row items-center justify-between">
        <div>
          {" "}
          Lorem ipsum dolor sit amet consectetur, <br /> Lorem ipsum dolor sit
          amet consectetur, <br /> Lorem ipsum dolor sit amet consectetur,{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur,
          <br />
        </div>

        {/* Contact Links */}
        <div className="">
          {links.map(({ link, icon }) => (
            <a className="px-13 pl-0 lg:px-0 lg:pl-12" href={link}>
              <i
                className={`bi text-4xl md:text-3xl lg:text-4xl ${icon} hover:text-accent-color transistion-all duration-200 ease-in-out`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creative;
