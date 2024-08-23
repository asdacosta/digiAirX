import { createContext, useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import { Background } from "./Background";
import { Nav } from "./Nav/Nav";
import { Load } from "./Load/Load";
import { Footer } from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollToTop } from "./ScrollTo/ScrollToTop";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
});

function App() {
  const [stopLoad, setStopLoad] = useState(false);
  const [theme, setTheme] = useState("light");
  const [extractedTheme, setExtractedTheme] = useState(false);
  const endLoadOnComplete = () => setStopLoad(true);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  const extractAndSetTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      // document.documentElement.setAttribute("data-theme", storedTheme);
      document.body.setAttribute("data-theme", storedTheme);
    }

    setExtractedTheme(true);
    setTheme(storedTheme);
  };
  useEffect(extractAndSetTheme, []);

  const updateThemeInStorageAndDom = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  useEffect(updateThemeInStorageAndDom, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {!stopLoad ? (
        <Load endOnComplete={endLoadOnComplete} />
      ) : (
        <>
          <Background />
          <Nav />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
