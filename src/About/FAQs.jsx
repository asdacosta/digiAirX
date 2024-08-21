import styles from "./About.module.css";
import { Link } from "react-router-dom";

const faqs = [
  {
    key: "faq1",
    question: "How do I get started?",
    answer: (
      <>
        Reach out to us through our contact form or phone at{" "}
        <Link to="/contact">
          <strong className={styles.faqLink}>Contact</strong>
        </Link>
        . We'll respond within 24 hours to understand your needs and recommend
        the best solutions tailored to your business.
      </>
    ),
  },
  {
    key: "faq2",
    question: "What industries do you work with?",
    answer: (
      <>
        We work with all industries! Explore our Industry field at{" "}
        <Link to="/contact#industry">
          <strong className={styles.faqLink}>Contact</strong>
        </Link>{" "}
        to see the full list.
      </>
    ),
  },
  {
    key: "faq3",
    question: "What makes your company different from others?",
    answer:
      "We stand out with our experienced team of  experts who deliver professional, modern, and swift services that are unique to your business, ensuring you gain a competitive edge in your industry.",
  },
  {
    key: "faq4",
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on scope and complexity. Simple websites typically take within a week, while larger projects such as web apps or branding strategies take a few weeks. We provide actual estimated timelines following our initial consultation.",
  },
  {
    key: "faq5",
    question: "What is the cost of your services?",
    answer:
      "Costs vary depending on the services you require and the complexity of the project. After discussing your specific needs or accepting our recommendations, we will provide a detailed invoice.",
  },
  {
    key: "faq6",
    question: "How do you handle additional requests during a project?",
    answer:
      "We accommodate changes and additional requests by discussing the implications on timeline and cost. We’ll adjust the project plan accordingly and keep you informed throughout the process.",
  },
  {
    key: "faq7",
    question: "Can you work with my existing website?",
    answer:
      "Yes! We can enhance, redesign, or build upon your existing website, digital assets, or branding to improve performance and aesthetics while keeping your business goals in mind.",
  },
  {
    key: "faq8",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Absolutely! We offer ongoing support and maintenance to keep your websites, web apps, and digital assets secure, up-to-date, and optimized.",
  },
  // {
  //   key: "faq9",
  //   question: "How do you ensure the security of my website or web app?",
  //   answer:
  //     "Security is a top priority for us. We implement best practices such as SSL encryption, secure coding techniques, regular software updates, and vulnerability testing to protect your digital assets.",
  // },
  {
    key: "faq10",
    question: "How do you handle project communication?",
    answer:
      "We use a combination of email, phone, and project management tools to keep you informed throughout the process.",
  },
  {
    key: "faq11",
    question: "Do you offer packages or custom solutions?",
    answer: (
      <>
        We offer service packages through our{" "}
        <Link to="/services#suite">
          <strong className={styles.faqLink}>Suite</strong>{" "}
        </Link>
        service, and custom solutions tailored to the specific needs and budget
        of your business.{" "}
        <Link to="/contact">
          <strong className={styles.faqLink}>Reach out</strong>
        </Link>{" "}
        so we can recommend the best option for you.
      </>
    ),
  },
  {
    key: "faq12",
    question: "What is the difference between a web app and a website?",
    answer:
      "A web app is a more interactive and complex website designed for specific functions, often involving user input and dynamic content, while a website is generally more informational and static.",
  },
  {
    key: "faq13",
    question: "Do you offer multilingual website development?",
    answer:
      "Yes! We can develop multilingual websites to cater to audiences in different languages, including language switching features and translation services.",
  },
  {
    key: "faq14",
    question: "How do you ensure the scalability of my web app?",
    answer:
      "We design web apps with scalability in mind, meaning they can grow and evolve with your business as your needs expand over time.",
  },
  // {
  //   key: "faq15",
  //   question: "Can you design for both web and mobile platforms?",
  //   answer:
  //     "Yes, we create designs that are optimized for both web and mobile platforms, ensuring a seamless experience across different devices.",
  // },
  // {
  //   key: "faq16",
  //   question: "Do you manage social media accounts?",
  //   answer:
  //     "Yes, we can manage your social media accounts, including content creation, posting schedules, engagement strategies, and performance tracking.",
  // },
  {
    key: "faq17",
    question: "Can you refresh my existing brand identity?",
    answer:
      "Absolutely! We can work with your existing brand to modernize and refine your visual identity.",
  },
  {
    key: "faq18",
    question: "Can you design for both print and digital media?",
    answer:
      "Yes! we design for both print and digital media, ensuring that your visual assets are optimized for their respective formats and deliver a consistent brand experience.",
  },
  {
    key: "faq19",
    question: "Do you offer training for using your services?",
    answer:
      "Yes, we offer training sessions and documentation for complex services to help you understand and use them effectively.",
  },
  // {
  //   key: "faq20",
  //   question: "Do you offer any discounts or promotions?",
  //   answer:
  //     " We occasionally offer discounts or promotions. Contact us directly to inquire about any current offers or to discuss special pricing for your project.",
  // },
];

export { faqs };
