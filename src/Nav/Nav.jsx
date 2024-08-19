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
        <section className={styles.links}>
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
        </section>
        <button onClick={play} className={styles.switch}>
          <Lot
            segment={segment}
            speed={2}
            dotLottieRefCallback={lottieRef}
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/switch.json"
            style={{ width: "50px", height: "30px" }}
          ></Lot>
        </button>
        <button className={styles.menu}>
          <Lot
            speed={2}
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/menu.json"
            style={{ width: "50px", height: "43px" }}
          ></Lot>
        </button>
      </section>
    </section>
  );
}

export { Nav };
