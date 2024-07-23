import { useState } from "react";
import "./App.css";
import "./reset.css";
import { Background } from "./Background";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";

function App() {
  return (
    <>
      <Background />
      <Nav />
      <Home />
    </>
  );
}

export default App;
