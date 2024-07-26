import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import styles from "./Load.module.css";
import { useEffect, useState } from "react";

function Load({ endOnComplete }) {
  const [lottie, setLottie] = useState(null);
  const lottieRefCall = (lottie) => setLottie(lottie);

  const endAndClearOnComplete = () => {
    if (!lottie) return;
    lottie.addEventListener("complete", endOnComplete);
    return () => lottie.removeEventListener("complete", endOnComplete);
  };
  useEffect(endAndClearOnComplete, [lottie]);

  return (
    <section className={styles.load}>
      <Lot
        autoplay
        dotLottieRefCallback={lottieRefCall}
        speed={1.5}
        src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/load.json"
        style={{ width: "20rem", height: "20rem" }}
      ></Lot>
    </section>
  );
}

export { Load };
