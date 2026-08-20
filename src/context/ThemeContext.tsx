import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

type Theme = "creative" | "developer";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("creative");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "creative" ? "developer" : "creative"));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme == "developer") {
      root.classList.add("developer");
      root.classList.remove("creative");
    } else {
      root.classList.remove("developer");
      root.classList.add("creative");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used wwithin a Theme Provider");
  return context;
};

export default ThemeProvider;
