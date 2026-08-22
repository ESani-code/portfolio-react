import { useTheme } from "../context/ThemeContext";
import { Switch } from "./ui/switch";

const ToggleMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="flex items-center gap-2">
        <i className="bi bi-code-slash text-lg" />
        <Switch checked={theme === "creative"} onCheckedChange={toggleTheme} />
        <i className="bi bi-palette-fill text-lg" />
      </div>
    </>
  );
};

export default ToggleMode;
