import { useTheme } from "../context/ThemeContext";
import { Switch } from "./ui/switch";

const ToggleMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="flex items-center gap-2">
        <i className="bi bi-brightness-high text-2xl" />
        <Switch checked={theme === "creative"} onCheckedChange={toggleTheme} />
        <i className="bi bi-moon text-2xl" />
      </div>
    </>
  );
};

export default ToggleMode;
