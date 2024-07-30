import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services}>
      <section>
        <p>
          At DigiAirX, we are dedicated to delivering digital services tailored
          to your unique needs. Our focus on quality and client satisfaction
          guarantees solutions that make a significant impact on your business.
        </p>
        <p>
          Our team of experienced professionals is committed to achieving the
          highest standards and delivering exceptional results. Explore our
          services to find the perfect fit for your business requirements.
        </p>
      </section>
      <section>
        <section>
          <div></div>
          <span>Website Development</span>
        </section>
        <section>
          <div></div>
          <span>Web App Development</span>
        </section>
        <section>
          <div></div>
          <span>UI/UX Design</span>
        </section>
        <section>
          <div></div>
          <span>Marketing</span>
        </section>
        <section>
          <div></div>
          <span>Graphic Design</span>
        </section>
        <section>
          <div></div>
          <span>Search Engine Optimization (SEO)</span>
        </section>
        <section>
          <div></div>
          <span>Brand Design</span>
        </section>
      </section>
    </section>
  );
}

return { Services };
