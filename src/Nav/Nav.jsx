import { useState } from "react";
import styles from "./Nav.module.css";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import logo from "../assets/logo.png";

function Nav() {
  const [lottie, setLottie] = useState(null);
  const [theme, setTheme] = useState(true);
  const [segment, setSegment] = useState([0, 30]);
  const lottieRef = (lottie) => setLottie(lottie);
  const play = () => {
    if (!lottie) return;
    lottie.play();
    setTheme((prev) => !prev);
    theme ? setSegment([0, 30]) : setSegment([30, 60]);
  };

  return (
    <section className={styles.nav}>
      <section className={styles.logoBox}>
        <img src={logo} alt="Digiairx logo" />
      </section>
      <section className={styles.right}>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
        <button onClick={play}>
          <Lot
            segment={segment}
            speed={2}
            dotLottieRefCallback={lottieRef}
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/switch.lottie"
            style={{ width: "70px", height: "30px" }}
          ></Lot>
        </button>
      </section>
    </section>
  );
}

export { Nav };
