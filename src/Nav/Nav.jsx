import { useRef, useState } from "react";
import styles from "./Nav.module.css";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import logo from "../assets/logo.png";

function Nav() {
  const [lottie, setLottie] = useState(null);
  const [theme, setTheme] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);
  const [segment, setSegment] = useState([0, 30]);

  const switchRef = (lottie) => setLottie(lottie);
  const menuRef = useRef(null);

  const playSwitch = () => {
    if (!lottie) return;
    lottie.play();
    setTheme((prev) => !prev);
    theme ? setSegment([0, 30]) : setSegment([30, 60]);
  };
  const playMenu = () => {
    if (!menuRef.current) return;
    menuOpened
      ? menuRef.current.setPlayerDirection(-1)
      : menuRef.current.setPlayerDirection(1);
    setMenuOpened((prev) => !prev);
    menuRef.current.setPlayerSpeed(4);
    menuRef.current.play();
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
        <button onClick={playSwitch} className={styles.switch}>
          <Lot
            segment={segment}
            speed={2}
            dotLottieRefCallback={switchRef}
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/switch.json"
            style={{ width: "50px", height: "30px" }}
          ></Lot>
        </button>
        <button onClick={playMenu} className={styles.menu}>
          <Player
            ref={menuRef}
            keepLastFrame={true}
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/menu.json"
            style={{ width: "50px", height: "43px" }}
          ></Player>
        </button>
      </section>
    </section>
  );
}

export { Nav };
