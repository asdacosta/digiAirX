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
        "Need digital services?^1000 <span style='color: #0077b6; font-weight: 600;'>Websites</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Web apps</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>UI/UX design</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Marketing</span>...",
        'Need digital services? <br>Our team of experts have you covered! <svg style="fill: #0077b6; width: 1.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
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
