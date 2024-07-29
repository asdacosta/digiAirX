import { useState } from "react";
import "./App.css";
import "./reset.css";
import { Background } from "./Background";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Load } from "./Load/Load";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [stopLoad, setStopLoad] = useState(false);
  const endLoadOnComplete = () => setStopLoad(true);

  return (
    <>
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

      {/* <About /> */}
    </>
  );
}

export default App;
