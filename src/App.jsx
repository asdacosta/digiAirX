import { useState } from "react";
import "./App.css";
import { Background } from "./Background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <h1>Ace Draco</h1>
    </>
  );
}

export default App;
