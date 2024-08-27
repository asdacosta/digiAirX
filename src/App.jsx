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
  const [stopLoad, setStopLoad] = useState({
    stop: false,
    componentsVis: "hidden",
  });
  const [theme, setTheme] = useState(null);
  const endLoadOnComplete = () =>
    setStopLoad({ stop: true, componentsVis: "visible" });
  const location = useLocation();

  const scrollIntoViewForHashChange = () => {
    const hash = location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollIntoViewForHashChange, [location]);

  const extractAndSetTheme = () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    // document.documentElement.setAttribute("data-theme", storedTheme);
    document.body.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  };
  useEffect(extractAndSetTheme, []);

  const updateThemeInStorageAndDom = () => {
    if (!theme) return;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  useEffect(updateThemeInStorageAndDom, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Nav visibilityValue={stopLoad.componentsVis} />
      <Background visibilityValue={stopLoad.componentsVis} />
      {!stopLoad.stop ? (
        <Load endOnComplete={endLoadOnComplete} />
      ) : (
        <>
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
