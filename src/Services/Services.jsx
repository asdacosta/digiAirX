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
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Website Development</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/webapp.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Web App Development</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/uiux.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>UI/UX Design</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/seo.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>SEO</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/marketing.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Marketing</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/design.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Graphic Design</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.8}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/branding.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Brand Design</span>
        </section>
        <section>
          <div>
            <Lot
              autoplay
              loop
              speed={0.9}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/services/package.json"
              style={{ width: "18rem", height: "16rem" }}
            ></Lot>
          </div>
          <span>Suite</span>
        </section>
      </section>
      <section className={styles.descriptions}>
        <section className={styles.websiteBox}>
          <h2>Website Development</h2>
          <p>
            A website is a set of web pages designed to provide information
            through text, images, and videos about a topic or business, such as
            blogs, news sites, and company homepages.
          </p>
          <p>
            Website development involves creating and maintaining websites. It
            is central to our services and includes several aspects such as web
            design, web content development, client-side/server-side scripting,
            and network security.
          </p>
          <p>
            At Digiairx, we build websites that serve various purposes, from
            personal blogs and portfolio showcases to informational portals.
          </p>
          <p>
            We specialize in creating custom websites that align with your
            business goals. Our expertise spans front-end development (designing
            visual and interactive interfaces), ensuring a seamless user
            experience, and back-end development (managing data and
            server-client communication), ensuring robust functionality and
            security.
          </p>
          <div className={styles.floated}>
            <p>
              Our development process includes several stages: planning, design,
              development, testing, deployment, and maintenance. Our web
              developers collaborate closely with designers, content creators,
              and other stakeholders to ensure that the website meets your
              business needs and provides the best user experience. From
              planning to final deployment, our team delivers high-quality web
              solutions that propel your business forward.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.webappBox}>
          <h2>Web App Development</h2>
          <p>
            A web application is a type of website designed to perform complex
            tasks. Web apps are more interactive and responsive compared to
            regular websites. Examples include online banking platforms, project
            management tools, and e-commerce platforms.
          </p>
          <p>
            It is central to our services and encompasses several aspects such
            as user interface design, user experience design, client-side and
            server-side scripting, and database management.
          </p>
          <p>
            At DigiAirX, we specialize in creating web apps that align with your
            business objectives. Our expertise covers both front-end development
            (designing visual and interactive interfaces), ensuring a seamless
            user experience, and back-end development (managing data and
            server-client communication), ensuring robust functionality and
            security.
          </p>
          <div className={styles.floated}>
            <p>
              Our development process involves key stages: planning, design,
              development, testing, deployment, and maintenance. Our web
              developers collaborate closely with designers, content creators,
              and other stakeholders to ensure that the web app meets your
              business needs and provides the best user experience. From
              planning to final deployment, our team delivers high-quality web
              app solutions that propel your business forward.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.uiBox}>
          <h2>UI/UX Design</h2>
          <p>
            User interface (UI) and user experience (UX) design focus on
            creating aesthetically appealing and user-friendly interfaces. UI
            design handles visual elements such as buttons, icons, and layouts,
            while UX design ensures the overall user experience is efficient and
            meets users' needs.
          </p>
          <p>
            We specialize in crafting UI/UX designs that enhance user engagement
            and satisfaction. Our approach includes layout planning and
            iterative prototyping to test and refine designs.
          </p>
          <div className={styles.floated}>
            <p>
              Our goal is to create designs that look great and provide a
              seamless user experience. Our designers collaborate closely with
              developers, content creators, and other stakeholders to ensure
              that the final product meets business goals and user expectations.
              From planning to final implementation, our team provides
              high-quality design solutions that elevate your digital presence
              and enhance user engagement.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.seoBox}>
          <h2>Search Engine Optimization</h2>
          <p>
            Search Engine Optimization (SEO) involves enhancing your website’s
            visibility on search engines like Google, ensuring your business
            reaches its target audience effectively.
          </p>
          <p>
            SEO encompasses technical, on-page, off-page, and local aspects. Our
            goal is to increase organic traffic, resulting in higher visibility
            and better engagement with potential customers.
          </p>
          <p>
            At DigiAirX, our SEO approach involves keyword research, on-page
            optimization, link building, and content creation to improve your
            website's ranking.
          </p>
          <div className={styles.floated}>
            <p>
              Our process includes several stages: audit, strategy development,
              implementation, monitoring, and optimization. Our SEO experts work
              closely with content creators, web developers, and other
              stakeholders to ensure that your website achieves optimal
              performance and visibility. From audit to optimization, our team
              delivers high-quality SEO solutions that enhance your online
              presence.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.marketingBox}>
          <h2>Marketing</h2>
          <p>
            Digital marketing involves promoting your business through online
            channels to effectively reach and engage your target audience. It
            includes social media marketing, email marketing, content marketing,
            PPC advertising, and more.
          </p>
          <p>
            At DigiAirX, we offer marketing solutions that span across multiple
            channels, ensuring effective and results-driven campaigns. We
            leverage strategies to meet your business goals, including market
            research, creative campaign development, execution, and performance
            analysis.
          </p>
          <div className={styles.floated}>
            <p>
              Our process involves key stages: research, strategy development,
              campaign execution, monitoring, and optimization. Our marketing
              professionals collaborate closely with designers, content
              creators, and other stakeholders to ensure that your campaigns
              achieve maximum impact. From strategy development to optimization,
              our team delivers high-quality marketing solutions that boost
              business growth.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.designBox}>
          <h2>Graphic Design</h2>
          <p>
            Graphic design involves creating visual content to communicate
            messages effectively. It involves the use of typography, imagery,
            color, and layout to produce designs that captivate and engage
            audiences. Examples include logos, business cards, social media
            graphics, and advertising materials.
          </p>
          <p>
            At Digiairx, graphic design is a fundamental part of our services,
            covering various aspects such as brand identity design, marketing
            materials, digital graphics, and print design. Our goal is to create
            visually appealing designs that resonate with your audience and
            strengthen your brand.
          </p>
          <p>
            We specialize in creating designs that align with your brand. Our
            approach involves understanding your brand, conceptualizing creative
            ideas, and delivering unique designs.
          </p>
          <div className={styles.floated}>
            <p>
              Our design process includes several stages: concept development,
              design execution, revisions, and final delivery. Our graphic
              designers ensure that the final designs meet your expectations.
              From concept to final delivery, our team provides high-quality
              graphic design solutions that enhance your visual communication
              and brand presence.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.brandingBox}>
          <h2>Brand Design</h2>
          <p>
            Brand design involves creating a visual identity that represents
            your business and resonates with your target audience. It includes
            designing elements such as logos, color schemes, typography, and
            more.
          </p>
          <p>
            At DigiAirX, our brand design solutions create a strong visual
            identity that communicates your business values and stands out in
            the market. This includes visual identity and brand guidelines that
            align with your business objectives, ensuring unique designs.
          </p>
          <div className={styles.floated}>
            <p>
              Our design process includes several stages: discovery, brand
              strategy development, visual identity design, brand guidelines
              creation, and implementation. From strategy to implementation, our
              team delivers high-quality brand design solutions that build a
              strong visual identity.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
        <section className={styles.suiteBox}>
          <h2>Suite</h2>
          <p>
            Suite offers a blend of our core digital services, providing an
            all-inclusive solution to meet your diverse needs. This service
            package integrates Website Development, UI/UX Design, SEO,
            Marketing, Graphic Design, and Brand Design into one cohesive
            offering, ensuring that every aspect of your digital presence is
            covered.
          </p>
          <p>
            By combining our expertise across multiple domains, we create a
            unified strategy that maximizes efficiency and impact of your
            digital presence.
          </p>
          <p>
            Our approach involves a thorough consultation to understand your
            specific needs, followed by the creation of a plan that integrates
            various services. From planning to final execution, our team manages
            all elements of your digital strategy, ensuring consistency and
            effectiveness.
          </p>
          <div className={styles.floated}>
            <p>
              The Suite process involves several stages: assessment, strategy
              development, implementation, and performance analysis. Our team of
              professionals works closely with you to deliver a comprehensive
              digital solution that drives your business forward. With our
              Suite, you receive a full spectrum of services that work together
              to elevate your business in the digital landscape.
            </p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
              </svg>
              Inquire
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export { Services };
