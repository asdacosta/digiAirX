import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";
import lightLogo from "../assets/logo.png";
import darkLogo from "../assets/logo-dark.png";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

function Home() {
  const [socialName, setSocialName] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);

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
        // "We specialize in building <span style='color: #0077b6; font-weight: 600;'>Chat Bots and AI solutions</span>.",
        "Need digital services?^1000 <span style='color: #0077b6; font-weight: 600;'>SEO</span>...",
        "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Brand Design</span>...",
        // "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Video Production</span>...",
        // "Need digital services? <span style='color: #0077b6; font-weight: 600;'>Social Media Management</span>...",
        'From minor to major projects, <br>our team of experts have you covered! <svg style="fill: #0077b6; width: 1.3rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
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
    <section id="homeHead" className={styles.home}>
      <section className={styles.firstHome}>
        <section className={styles.intro}>
          <h1>
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Digiairx logo"
            />
            DigiairX
          </h1>
          <div className={styles.headerBox}>
            <h2 ref={mainHeaderRef}></h2>
          </div>
          <p className={styles.infoBox}>
            <span className={styles.info} ref={infoRef}></span>
          </p>
        </section>
        <section className={styles.illustrationBox}>
          <Lot
            autoplay
            loop
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/team.lottie"
            style={{ width: "55vmin", height: "40vmin" }}
          ></Lot>
          <section className={styles.socials}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.x}
                onClick={() => {
                  window.open("https://x.com/digiairx", "_blank");
                }}
                onMouseEnter={() => setSocialName("X ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.linkedIn}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/104608500/admin/dashboard/",
                    "_blank"
                  );
                }}
                onMouseEnter={() => setSocialName("LinkedIn ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.ig}
                onClick={() => {
                  window.open("https://www.instagram.com/digiair_x/", "_blank");
                }}
                onMouseEnter={() => setSocialName("Instagram ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.fb}
                onClick={() => {
                  window.open(
                    "https://web.facebook.com/profile.php?id=61564444178796&is_tour_completed",
                    "_blank"
                  );
                }}
                onMouseEnter={() => setSocialName("Facebook ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.whatsapp}
                onClick={() => {
                  window.open("https://wa.me/message/FRHAZYCIYQ7OO1", "_blank");
                }}
                onMouseEnter={() => setSocialName("WhatsApp ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
              </svg>
            </div>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className={styles.tiktok}
                onClick={() => {
                  window.open("https://www.tiktok.com/@digiairx", "_blank");
                }}
                onMouseEnter={() => setSocialName("TikTok ↗")}
                onMouseLeave={() => setSocialName("")}
              >
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </div> */}
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.snapchat}
              >
                <path d="M384 32H64A64 64 0 0 0 0 96V416a64 64 0 0 0 64 64H384a64 64 0 0 0 64-64V96A64 64 0 0 0 384 32zm-3.9 319.3-.1 .1a32.4 32.4 0 0 1 -8.7 6.8 90.3 90.3 0 0 1 -20.6 8.2 12.7 12.7 0 0 0 -3.9 1.8c-2.2 1.9-2.1 4.6-4.4 8.6a23.1 23.1 0 0 1 -6.8 7.5c-6.7 4.6-14.2 4.9-22.2 5.2-7.2 .3-15.4 .6-24.7 3.7-3.8 1.2-7.8 3.7-12.4 6.5-11.3 6.9-26.7 16.4-52.3 16.4s-40.9-9.4-52.1-16.3c-4.7-2.9-8.7-5.4-12.5-6.6-9.3-3.1-17.5-3.4-24.7-3.7-8-.3-15.5-.6-22.2-5.2a23.1 23.1 0 0 1 -6-6.1c-3.2-4.6-2.9-7.8-5.3-9.9a13.4 13.4 0 0 0 -4.1-1.8 90 90 0 0 1 -20.3-8.1 32.9 32.9 0 0 1 -8.3-6.3c-6.6-6.8-8.3-14.8-5.7-21.8 3.4-9.3 11.6-12.1 19.4-16.3 14.8-8 26.3-18.1 34.4-29.9a68.2 68.2 0 0 0 6-10.6c.8-2.2 .8-3.3 .2-4.4a7.4 7.4 0 0 0 -2.2-2.2c-2.5-1.7-5.1-3.4-6.9-4.5-3.3-2.1-5.9-3.8-7.5-5-6.3-4.4-10.7-9-13.4-14.2a28.4 28.4 0 0 1 -1.4-23.6c4.1-10.9 14.5-17.7 27-17.7a37.1 37.1 0 0 1 7.8 .8c.7 .2 1.4 .3 2 .5-.1-7.4 .1-15.4 .7-23.1 2.4-27.3 11.9-41.6 21.9-53a86.8 86.8 0 0 1 22.3-17.9C188.3 100.4 205.3 96 224 96s35.8 4.4 50.9 13a87.2 87.2 0 0 1 22.2 17.9c10 11.4 19.5 25.7 21.9 53a231.2 231.2 0 0 1 .7 23.1c.7-.2 1.4-.3 2.1-.5a37.1 37.1 0 0 1 7.8-.8c12.5 0 22.8 6.8 27 17.7a28.4 28.4 0 0 1 -1.4 23.6c-2.7 5.2-7.1 9.9-13.4 14.2-1.7 1.2-4.3 2.9-7.5 5-1.8 1.2-4.5 2.9-7.2 4.7a6.9 6.9 0 0 0 -2 2c-.5 1-.5 2.2 .2 4.2a69 69 0 0 0 6.1 10.8c8.3 12.1 20.2 22.3 35.5 30.4 1.5 .8 3 1.5 4.4 2.3 .7 .3 1.6 .8 2.5 1.3 4.9 2.7 9.2 6 11.5 12.2C387.8 336.9 386.3 344.7 380.1 351.3zm-16.7-18.5c-50.3-24.3-58.3-61.9-58.7-64.7-.4-3.4-.9-6 2.8-9.5 3.6-3.3 19.5-13.2 24-16.3 7.3-5.1 10.5-10.2 8.2-16.5-1.7-4.3-5.7-6-10-6a18.5 18.5 0 0 0 -4 .4c-8 1.7-15.8 5.8-20.4 6.9a7.1 7.1 0 0 1 -1.7 .2c-2.4 0-3.3-1.1-3.1-4 .6-8.8 1.8-25.9 .4-41.9-1.9-22-9-32.9-17.4-42.6-4.1-4.6-23.1-24.7-59.5-24.7S168.5 134.4 164.5 139c-8.4 9.7-15.5 20.6-17.4 42.6-1.4 16-.1 33.1 .4 41.9 .2 2.8-.7 4-3.1 4a7.1 7.1 0 0 1 -1.7-.2c-4.5-1.1-12.3-5.1-20.3-6.9a18.5 18.5 0 0 0 -4-.4c-4.3 0-8.3 1.6-10 6-2.4 6.3 .8 11.4 8.2 16.5 4.4 3.1 20.4 13 24 16.3 3.7 3.4 3.2 6.1 2.8 9.5-.4 2.8-8.4 40.4-58.7 64.7-2.9 1.4-8 4.5 .9 9.3 13.9 7.6 23.1 6.8 30.3 11.4 6.1 3.9 2.5 12.4 6.9 15.4 5.5 3.8 21.6-.3 42.3 6.6 17.4 5.7 28.1 22 59 22s41.8-16.3 58.9-22c20.8-6.9 36.9-2.8 42.3-6.6 4.4-3.1 .8-11.5 6.9-15.4 7.2-4.6 16.4-3.8 30.3-11.5C371.4 337.4 366.3 334.3 363.4 332.8z" />
              </svg>
            </div> */}

            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className={styles.telegram}
              >
                <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
              </svg>
            </div> */}
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.tube}
              >
                <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
              </svg>
            </div> */}
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.pinterest}
              >
                <path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7c3.9-16 8.5-35 13.9-57.9c0 0-7.3-14.8-7.3-36.5c0-70.7 75.5-78 75.5-25c0 13.5-5.4 31.1-11.2 49.8c-3.3 10.6-6.6 21.5-9.1 32c-5.7 24.5 12.3 44.4 36.4 44.4c43.7 0 77.2-46 77.2-112.4c0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56c2 2.4 2.3 4.5 1.7 7c-1.1 4.7-3.1 12.9-4.7 19.2c-1 4-1.8 7.3-2.1 8.6c-1.1 4.5-3.5 5.5-8.2 3.3c-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8c0 84.6-53.3 152.7-127.4 152.7c-24.9 0-48.3-12.9-56.3-28.2c0 0-12.3 46.9-15.3 58.4c-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z" />
              </svg>
            </div> */}
          </section>
          <span className={styles.socialName}>{socialName}</span>
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
              <Link to="/contact">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                  </svg>{" "}
                  Reach Out
                </button>
              </Link>
              <Link to="/services">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z" />
                  </svg>{" "}
                  Our services
                </button>
              </Link>
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export { Home };
