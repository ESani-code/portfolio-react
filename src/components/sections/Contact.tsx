import AnimateMode from "../AnimateMode";

import Creative from "../../view/contact/Creative";
import Developer from "../../view/contact/Developer";

import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <footer
      id={theme === "creative" ? "contact" : "contact"}
      className="w-full flex flex-col justify-center items-start text-center"
    >
      <AnimateMode creative={<Creative />} developer={<Developer />} />
    </footer>
  );
};

export default Contact;
