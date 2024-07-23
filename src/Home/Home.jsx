import { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";

function Home() {
  const mainHeaderRef = useRef(null);
  const typeMainHeader = () => {
    const typed = new Typed(mainHeaderRef.current, {
      strings: [
        `Dominate your competitors with <br><span class='${styles.animateHeader}' >professional</span>, <span class='${styles.animateHeader}'>modern</span>, and <span class='${styles.animateHeader}'>swift</span> digital services.`,
      ],
      typeSpeed: 20,
      showCursor: false,
    });
    return () => typed.destroy();
  };
  useEffect(typeMainHeader, []);

  const infoRef = useRef(null);
  const typeInfo = () => {
    const typed = new Typed(infoRef.current, {
      strings: [
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Websites</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Web apps</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>UI/UX design</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Marketing</span>.",
      ],
      typeSpeed: 30,
      backSpeed: 15,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      cursorChar: "•",
    });
    return () => typed.destroy();
  };
  useEffect(typeInfo, []);

  return (
    <section className={styles.home}>
      <section className={styles.intro}>
        <p className={styles.headerBox}>
          <h1 ref={mainHeaderRef}></h1>
        </p>
        <p className={styles.infoBox}>
          <span className={styles.info} ref={infoRef}></span>
        </p>
      </section>
    </section>
  );
}

export { Home };
