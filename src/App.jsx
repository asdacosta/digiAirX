import { useState } from "react";
import "./App.css";
import "./reset.css";
import { Background } from "./Background";
import { Nav } from "./Nav/Nav";

function App() {
  return (
    <>
      <Background />
      <Nav />
    </>
  );
}

export default App;
