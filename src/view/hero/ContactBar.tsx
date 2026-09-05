import { creativeLinks, developerLinks } from "./Links";
import { useTheme } from "../../context/ThemeContext";
import { Magnetic } from "./MagneticCursor";

const ContactBar = () => {
  const { theme } = useTheme();
  const links = theme == "creative" ? creativeLinks : developerLinks;
  return (
    <div className="absolute inset-0 z-100 w-full h-10 flex items-center justify-between px-6 lg:px-8 pt-12 pointer-events-none">
      <Magnetic
        magneticDistance={120}
        strength={0.2}
        stiffness={80}
        damping={8}
      >
        <a className="pointer-events-none" href="/#">
          <img
            className="h-16 md:h-18 lg:h-22 w-auto"
            src="https://res.cloudinary.com/don03rsnm/image/upload/v1788169036/fsdgArtboard_1_copy_2_8x_q6zsw7.png"
            alt="Logo PNG"
          />
        </a>
      </Magnetic>

      <div className="items-end pointer-events-auto">
        {links.map(({ link, icon }) => (
          <Magnetic
            magneticDistance={120}
            strength={0.2}
            stiffness={80}
            damping={8}
          >
            <a className=" pl-8 lg:pl-12" href={link}>
              <i
                className={`bi text-3xl lg:text-4xl ${icon} hover:text-accent-color transistion-all duration-200 ease-in-out`}
              />
            </a>
          </Magnetic>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
