import { createContext, useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import { Background } from "./Background";
import { Nav } from "./Nav/Nav";
import { Load } from "./Load/Load";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
});

function App() {
  const [stopLoad, setStopLoad] = useState(false);
  const [theme, setTheme] = useState("light");
  const endLoadOnComplete = () => setStopLoad(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {!stopLoad ? (
        <Load endOnComplete={endLoadOnComplete} />
      ) : (
        <>
          <Background />
          <Nav />
          <Outlet />
          <Footer />
        </>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
