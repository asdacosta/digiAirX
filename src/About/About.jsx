import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <section>
        <h2>Discover Our Company</h2>
        <section className={styles.card}>
          <p>
            At DigiairX, we are devoted to helping businesses achieve success in
            the digital world. Our experienced team of experts delivers the best
            digital services meticulously tailored to meet your specific needs.
          </p>
          <p>
            Our collaborative approach ensures we fully understand your
            objectives and vision, providing solutions that not only meet but
            surpass your expectations.
          </p>
        </section>
      </section>
      <section>
        <h2>Objective</h2>
        <p>
          Our goal is simple; to deliver the best services that ensure client
          satisfaction.
        </p>
      </section>
      <section>
        <h2>Core Principles</h2>
        <section className={styles.card}>
          <p>
            We adhere to a set of principles that define our approach and shape
            our identity. These values ensure we consistently provide the best
            services and uphold our commitment to our clients.
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Perfection</strong>: Driven by an unending pursuit for
              perfection, we strive to deliver the highest quality in all our
              services.
            </li>
            <li>
              <strong>Creativity</strong>: We embrace out-of-the-box thinking,
              consistently bringing new ideas and modern solutions to the table,
              thereby providing each client with distinct services.
            </li>
            <li>
              <strong>Client Satisfaction</strong>: Our ultimate goal is to
              fully meet client expectations, ensuring complete satisfaction
              with every service we provide.
            </li>
            <li>
              <strong>Honesty</strong>: We are committed to honesty and
              transparency, ensuring that every interaction and service
              maintains trust and integrity with our clients.
            </li>
            <li>
              <strong>Respect</strong>: We treat every client and team member
              with the utmost respect, ensuring all stakeholders feel valued and
              appreciated in every interaction.
            </li>
            <li>
              <strong>Flexibility</strong>: We adapt to each client's unique
              needs, delivering personalized services and swiftly responding to
              changing requests.
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>What Our Clients Say</h2>
        <section className={styles.card}>
          <p>
            Our clients consistently express their satisfaction with our
            services and appreciate the significant improvements we've brought
            to their businesses. They highlight our ability to craft unique and
            professional solutions that surpass their competitors.
          </p>
          <p>
            Our clients' positive remarks about their specific needs being met
            with precision reflect our dedication to delivering perfection in
            every service. These praises come from the local agencies we've
            worked with and demonstrate the trust and satisfaction we strive to
            achieve with every partnership. Their satisfaction forms our
            foundation and is the ultimate measure of our success.
          </p>
        </section>
      </section>
      <section>
        <h2>Get Started</h2>
        <section className={styles.card}>
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
  );
}

export { About };
