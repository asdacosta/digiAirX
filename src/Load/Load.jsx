import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import styles from "./Load.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function Load({ endOnComplete }) {
  const [lottie, setLottie] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const lottieRefCall = (lottie) => setLottie(lottie);

  const endAndClearOnComplete = () => {
    if (!lottie) return;
    lottie.addEventListener("complete", endOnComplete);
    return () => lottie.removeEventListener("complete", endOnComplete);
  };
  useEffect(endAndClearOnComplete, [lottie]);

  return (
    <section
      className={styles.load}
      style={theme === "dark" ? { backgroundColor: "black" } : {}}
    >
      <Lot
        autoplay
        dotLottieRefCallback={lottieRefCall}
        speed={1.5}
        src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/load.json"
        style={{ width: "15rem", height: "15rem" }}
      ></Lot>
    </section>
  );
}

export { Load };
