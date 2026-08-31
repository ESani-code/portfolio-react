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
  isTransitioning: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("creative");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme((prev) => (prev === "creative" ? "developer" : "creative"));

      // Keep the curtain down for a brief moment to simulate loading, then lift it
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1300);
    }, 500);
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
    <ThemeContext.Provider value={{ theme, isTransitioning, toggleTheme }}>
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
