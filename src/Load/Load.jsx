import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import styles from "./Load.module.css";

function Load() {
  return (
    <section className={styles.load}>
      <Lot
        autoplay
        loop
        src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/load.json"
        style={{ width: "20rem", height: "20rem" }}
      ></Lot>
    </section>
  );
}

export { Load };
