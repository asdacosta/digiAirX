import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./ContactFeedback.module.css";

function ContactFeedback() {
  const [hideLottie, setHideLottie] = useState(false);

  const handleAnimationComplete = () => {
    setHideLottie(true);
  };

  const apiKey = import.meta.env.VITE_HEROTOFU_DIGIAIRX_EMAIL_API;

  return (
    <section className={styles.body}>
      {!hideLottie ? (
        <div className="sentLottie">
          <Player
            autoplay
            src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/sent.json"
            style={{ width: "8rem", height: "8rem" }}
            onEvent={(event) => {
              if (event === "complete") {
                handleAnimationComplete();
              }
            }}
          ></Player>
        </div>
      ) : (
        <>
          <h2>Email Received!</h2>
          <div className={styles.message}>
            <p>Kindly expect a response within 24 hours.</p>
            <Link className={styles.link} to="/">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z" />
                </svg>
                Return
              </p>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export { ContactFeedback };
