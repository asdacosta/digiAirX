import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <section>
        <h2>Discover Us</h2>
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
        <h2>Client Experiences</h2>
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
      <section className={styles.faqs}>
        <h2>FAQs</h2>
        <section className={styles.questionCards}>
          <section>
            <div>
              <h3>How do I get started?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              To get started, simply reach out to us through our contact form,
              email, or phone. We'll schedule a consultation to understand your
              needs and recommend the best solutions tailored to your business.
            </p>
          </section>
          <section>
            <div>
              <h3>What industries do you work with?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We work with a variety of industries, including e-commerce,
              healthcare, finance, education, real estate, hospitality, and
              more. Our services are customizable to fit the unique needs of
              each sector.
            </p>
          </section>
          <section>
            <div>
              <h3>What makes your company different from others?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We differentiate ourselves through our customized approach,
              attention to detail, and commitment to understanding your unique
              business needs. Our team combines industry expertise with
              innovative solutions to deliver outstanding results.
            </p>
          </section>
          <section>
            <div>
              <h3>How long does it take to complete a project?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              The timeline for completing a project depends on the scope and
              complexity of the work. A simple website may take a few weeks,
              while larger projects like web apps or comprehensive branding
              strategies may take a few months. We provide estimated timelines
              after our initial consultation.
            </p>
          </section>
          <section>
            <div>
              <h3>What is the cost of your services?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Costs vary depending on the services you require and the
              complexity of the project. After discussing your specific needs,
              we will provide a detailed quote.
            </p>
          </section>
          <section>
            <div>
              <h3>How do you handle additional requests during a project?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We accommodate changes and additional requests by discussing the
              implications on timeline and cost. We’ll adjust the project plan
              accordingly and keep you informed throughout the process.
            </p>
          </section>
          <section>
            <div>
              <h3>Can you work with my existing website?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes! We can enhance, redesign, or build upon your existing
              website, digital assets, or branding to improve performance and
              aesthetics while keeping your business goals in mind.
            </p>
          </section>
          <section>
            <div>
              <h3>Do you offer ongoing support and maintenance?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Absolutely! We offer post-launch support, ongoing maintenance, and
              updates for websites, web apps, and other digital assets to ensure
              they stay secure, up-to-date, and optimized for performance.
            </p>
          </section>
          {/* <section>
            <h3>How do you ensure the security of my website or web app?</h3>
            <p>
              Security is a top priority for us. We implement best practices such
              as SSL encryption, secure coding techniques, regular software
              updates, and vulnerability testing to protect your digital assets.
            </p>
          </section> */}
          <section>
            <div>
              <h3>How do you handle project communication?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We use a combination of email, project management tools, and video
              conferencing to keep you informed throughout the process. Regular
              updates and checkpoints ensure transparency and smooth
              communication.
            </p>
          </section>
          <section>
            <div>
              <h3>Do you offer custom solutions?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We offer both service packages and fully custom solutions tailored
              to the specific needs and budget of your business. During our
              consultation, we can recommend the best option for you.
            </p>
          </section>
          <section>
            <div>
              <h3>What is the difference between a web app and a website?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              A web app is a more interactive and complex tool designed for
              specific functions, often involving user input and dynamic
              content, while a website is generally more informational and
              static.
            </p>
          </section>
          <section>
            <div>
              <h3>Do you offer multilingual website development?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes, we can develop multilingual websites to cater to audiences in
              different languages, including language switching features and
              translation services.
            </p>
          </section>
          <section>
            <div>
              <h3>How do you ensure the scalability of my web app?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              We design web apps with scalability in mind, meaning they can grow
              and evolve with your business as your needs expand over time.
            </p>
          </section>
          {/* <section>
            <div>
              <h3>Can you design for both web and mobile platforms?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes, we create designs that are optimized for both web and mobile
              platforms, ensuring a seamless experience across different
              devices.
            </p>
          </section> */}
          {/* <section>
            <h3>Do you manage social media accounts?</h3>
            <p>
              Yes, we can manage your social media accounts, including content
              creation, posting schedules, engagement strategies, and
              performance tracking.
            </p>
          </section> */}
          <section>
            <div>
              <h3>Can you refresh my existing brand identity?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes! We can work with your existing brand to modernize and refine
              your visual identity while staying true to your core values.
            </p>
          </section>
          <section>
            <div>
              <h3>Can you design for both print and digital media?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes, we design for both print and digital media, ensuring that
              your visual assets are optimized for their respective formats and
              deliver a consistent brand experience.
            </p>
          </section>
          <section>
            <div>
              <h3>
                Do you provide training on how to use the services you deliver?
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className={styles.chevron}
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
            <p>
              Yes, we offer training sessions and documentation to help you
              understand and effectively use the services and products we
              deliver.
            </p>
          </section>
          {/* <section>
            <h3>Do you offer any discounts or promotions?</h3>
            <p>
              We occasionally offer discounts or promotions. Contact us directly
              to inquire about any current offers or to discuss special pricing
              for your project.
            </p>
          </section> */}
        </section>
      </section>
    </section>
  );
}

export { About };
