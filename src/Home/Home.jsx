import { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";

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
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Website Development</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Website Design</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Web App Development</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>UI/UX Design</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Marketing</span>.",
        "We specialize in <span style='color: #0077b6; font-weight: 600;'>Graphic Design</span>.",
        "We specialize in building <span style='color: #0077b6; font-weight: 600;'>Chat Bots and AI solutions</span>.",
        "Need digital services?^1000 <span style='color: #0077b6; font-weight: 600;'>Search Engine Optimization</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Brand Design</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Video Production</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Social Media Management</span>...",
        'From minor to major projects, <br>our team of experts have you covered! <svg style="fill: #0077b6; width: 1.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
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
      <section className={styles.firstHome}>
        <section className={styles.intro}>
          <h1>DigiairX</h1>
          <p className={styles.headerBox}>
            <h2 ref={mainHeaderRef}></h2>
          </p>
          <p className={styles.infoBox}>
            <span className={styles.info} ref={infoRef}></span>
          </p>
        </section>
        <section className={styles.illustrationBox}>
          <Lot
            autoplay
            loop
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/team.lottie"
            style={{ width: "60vmin", height: "60vmin" }}
          ></Lot>
          <section className={styles.socials}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </div>
          </section>
        </section>
      </section>
      <section className={styles.secHome}>
        <section className={styles.knowUs}>
          <h2>Get to Know Us</h2>
          <section className={styles.homeCards}>
            <p>
              At Digiairx, we are devoted to helping businesses achieve success
              in the digital world. Our experienced team of experts delivers the
              best digital services meticulously tailored to meet your specific
              needs.
            </p>
            <p>
              Our collaborative approach ensures we fully understand your
              objectives and vision, providing solutions that not only meet but
              surpass your expectations.
            </p>
          </section>
        </section>
        <section className={styles.callToAction}>
          <h2>Reach out Now</h2>
          <section className={styles.homeCards}>
            <p>
              Ready to transform your business with our professional digital
              services? Reach out today to take the first step toward unlocking
              your business's potential and elevating your digital presence!
            </p>
            <p className={styles.actionButtons}>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>{" "}
                Reach Out
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" />
                </svg>{" "}
                Our services
              </button>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export { Home };
