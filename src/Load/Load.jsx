import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import styles from "./Load.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function Load({ endOnComplete }) {
  const [lottie, setLottie] = useState(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const lottieRefCall = (lottie) => setLottie(lottie);

  const triggerCompleteOnError = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/load.json"
      );
      if (!response.ok) {
        throw new Error(`Failed to load animation: ${response.status}`);
      }
    } catch (error) {
      endOnComplete();
    }
  };
  useEffect(() => {
    triggerCompleteOnError();
  }, []);

  const endAndClearOnComplete = () => {
    if (!lottie) return;
    lottie.addEventListener("complete", endOnComplete);
    const fallbackCall = setTimeout(() => endOnComplete(), 4000);

    return () => {
      lottie.removeEventListener("complete", endOnComplete);
      clearTimeout(fallbackCall);
    };
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
        speed={2}
        src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/load.json"
        style={{ width: "12rem", height: "12rem" }}
      ></Lot>
    </section>
  );
}

export { Load };
