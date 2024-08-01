import styles from "./Services.module.css";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";

function Services() {
  return (
    <section className={styles.services}>
      <section className={styles.intro}>
        <p>
          At DigiAirX, we deliver digital services tailored to your unique
          needs. Our focus on quality and client satisfaction guarantees
          solutions that make a significant impact on your business.
        </p>
        <p>
          Our team of experienced professionals is committed to achieving the
          highest standards and delivering exceptional results. Explore our
          services to find the perfect fit for your business requirements.
        </p>
      </section>
      <section className={styles.cards}>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.7}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/website.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>Website Development</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/webapp.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>Web App Development</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/uiux.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>UI/UX Design</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/seo.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>SEO</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/marketing.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>Marketing</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/design.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>Graphic Design</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/branding.json"
              style={{ width: "20rem", height: "20rem" }}
            ></Lot>
          </div>
          <span>Brand Design</span>
        </section>
      </section>
    </section>
  );
}

export { Services };
