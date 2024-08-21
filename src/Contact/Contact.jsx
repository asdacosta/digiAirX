import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { FetchCountries } from "./FetchCountries";
import { allFeedbacks } from "./feedback";
import { DotLottieReact as Lot } from "@lottiefiles/dotlottie-react";

function Contact() {
  const [focusedInput, setFocusedInput] = useState("");
  const [nonEmptyInput, setNonEmptyInput] = useState({
    name: false,
    email: false,
    tel: false,
    bus: false,
    country: false,
    industry: false,
    us: false,
    message: false,
  });
  const [nonEmptyCheckBox, setNonEmptyCheckBox] = useState({
    website: false,
    ui: false,
    seo: false,
    marketing: false,
    graphic: false,
    brand: false,
    suite: false,
  });
  const [feedbacks, setFeedbacks] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [requiredFieldsStatus, setRequiredFieldsStatus] = useState({
    name: false,
    email: false,
    service: false,
    message: false,
  });
  const [allowSubmit, setAllowSubmit] = useState({
    submit: false,
    value: "Complete Form",
  });

  const triggerSubmit = () => {
    const allPassed = Object.values(requiredFieldsStatus).every(
      (input) => input === true
    );
    allPassed
      ? setAllowSubmit({ submit: true, value: "Send Inquiry" })
      : setAllowSubmit({ submit: false, value: "Complete Form" });
  };
  useEffect(triggerSubmit, [requiredFieldsStatus]);

  const makeServiceValidOnAtLeastOneSelection = () => {
    const selected = Object.values(nonEmptyCheckBox).some(
      (option) => option === true
    );
    selected
      ? setRequiredFieldsStatus((prev) => ({ ...prev, service: true }))
      : setRequiredFieldsStatus((prev) => ({ ...prev, service: false }));
  };
  useEffect(makeServiceValidOnAtLeastOneSelection, [nonEmptyCheckBox]);

  const triggerFocus = (event) => setFocusedInput(event.target.id);
  const triggerBlur = () => setFocusedInput("");
  const triggerNonEmpty = (event) => {
    const inputName = event.target.id;
    const value = event.target.value.trim();
    setNonEmptyInput((prev) => ({ ...prev, [inputName]: value !== "" })); // Set true for non empty and false otherwise
  };
  const check = (event) => {
    const inputName = event.target.id;
    const isChecked = event.target.checked;
    setNonEmptyCheckBox((prev) => ({ ...prev, [inputName]: isChecked }));
  };

  const handleNameBlur = (event) => {
    const content = event.currentTarget.value.trim();
    if (content === "") {
      setFocusedInput("");
      setFeedbacks((prev) => ({ ...prev, name: "" }));
      setRequiredFieldsStatus((prev) => ({ ...prev, name: false }));
    } else {
      // Validate name
      const hasNumber = /\d/.test(content);
      const hasNoSpecialChar = /^[a-zA-Z'-\s]+$/.test(content);
      // Make input invalid at start
      setRequiredFieldsStatus((prev) => ({ ...prev, name: false }));

      if (hasNumber) {
        setFeedbacks((prev) => ({ ...prev, name: allFeedbacks.name[1] }));
      } else if (!hasNoSpecialChar) {
        setFeedbacks((prev) => ({ ...prev, name: allFeedbacks.name[0] }));
      } else if (content.length < 2) {
        setFeedbacks((prev) => ({ ...prev, name: allFeedbacks.name[2] }));
      } else {
        setFeedbacks((prev) => ({ ...prev, name: "" }));
        setRequiredFieldsStatus((prev) => ({ ...prev, name: true }));
      }
    }
  };

  const handleEmailBlur = (event) => {
    const content = event.currentTarget.value.trim();
    if (content === "") {
      setFocusedInput("");
      setFeedbacks((prev) => ({ ...prev, email: "" }));
      setRequiredFieldsStatus((prev) => ({ ...prev, email: false }));
    } else {
      // Validate mail
      const mailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\s*$/;
      // Make input invalid at start
      setRequiredFieldsStatus((prev) => ({ ...prev, email: false }));

      if (!mailRegex.test(content)) {
        setFeedbacks((prev) => ({ ...prev, email: allFeedbacks.email[0] }));
      } else {
        setFeedbacks((prev) => ({ ...prev, email: "" }));
        setRequiredFieldsStatus((prev) => ({ ...prev, email: true }));
      }
    }
  };

  const handleTelBlur = (event) => {
    const content = event.currentTarget.value.trim();
    if (content === "") {
      setFocusedInput("");
      setFeedbacks((prev) => ({ ...prev, tel: "" }));
    } else {
      // Validate tel
      const telRegex =
        /^\+?(\d{1,4})?[\s\-()]?(\d{1,4})[\s\-()]?(\d{1,4})[\s\-()]?(\d{1,9})$/;

      if (telRegex.test(content)) {
        setFeedbacks((prev) => ({ ...prev, tel: "" }));
      } else {
        setFeedbacks((prev) => ({ ...prev, tel: allFeedbacks.tel[0] }));
      }
    }
  };

  const handleMessageBlur = (event) => {
    const content = event.currentTarget.value.trim();
    if (content === "") {
      setFocusedInput("");
      setFeedbacks((prev) => ({ ...prev, message: "" }));
      setRequiredFieldsStatus((prev) => ({ ...prev, message: false }));
    } else {
      // Make input invalid at start
      setRequiredFieldsStatus((prev) => ({ ...prev, message: false }));

      if (content.length < 2) {
        setFeedbacks((prev) => ({ ...prev, message: allFeedbacks.name[2] }));
      } else {
        setFeedbacks((prev) => ({ ...prev, message: "" }));
        setRequiredFieldsStatus((prev) => ({ ...prev, message: true }));
      }
    }
  };

  return (
    <section id="contactHead" className={styles.contact}>
      <section className={styles.headerBox}>
        <h2>
          W
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
          </svg>
          RLDWIDE REMOTE SERVICES
        </h2>
        <div className={styles.availability}>
          <div>
            <Lot
              autoplay
              loop
              speed={0.7}
              src="https://raw.githubusercontent.com/asdacosta/digiAirX/main/src/assets/247.json"
              style={{ width: "8rem", height: "8rem" }}
            ></Lot>
          </div>
          <span>
            Our team is available remotely 24/7 to meet all your needs.
          </span>
        </div>
        <p>Expect a response within 24 hours after sending your inquiry.</p>
      </section>
      <section className={styles.fieldsBox}>
        <form
          autoComplete="off"
          className={`
            ${styles.fields} 
          ${focusedInput && styles[focusedInput]} 
          ${nonEmptyInput.name && styles.name}
          ${nonEmptyInput.email && styles.email}
          ${nonEmptyInput.tel && styles.tel}
          ${nonEmptyInput.bus && styles.bus}
          ${nonEmptyInput.country && styles.country}
          ${nonEmptyInput.industry && styles.industry}
          ${nonEmptyInput.us && styles.us}
          ${nonEmptyInput.message && styles.message}
          ${nonEmptyCheckBox.website && styles.website}
          ${nonEmptyCheckBox.ui && styles.ui}
          ${nonEmptyCheckBox.seo && styles.seo}
          ${nonEmptyCheckBox.marketing && styles.marketing}
          ${nonEmptyCheckBox.graphic && styles.graphic}
          ${nonEmptyCheckBox.brand && styles.brand}
          ${nonEmptyCheckBox.suite && styles.suite}
          `}
        >
          <section className={styles.firstFields}>
            <div className={styles.nameBox}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="new-name"
                onFocus={triggerFocus}
                onBlur={handleNameBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
              <span className={styles.feedback}>{feedbacks.name}</span>
            </div>
            <div className={styles.emailBox}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="new-email"
                onFocus={triggerFocus}
                onBlur={handleEmailBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
              <span className={styles.feedback}>{feedbacks.email}</span>
            </div>
            <div className={styles.telBox}>
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                autoComplete="new-tel"
                onFocus={triggerFocus}
                onBlur={handleTelBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              />
              <span className={styles.feedback}>{feedbacks.tel}</span>
            </div>
          </section>
          <section className={styles.secFields}>
            <div className={styles.busBox}>
              <label htmlFor="bus">Business Name</label>
              <input
                type="text"
                name="bus"
                id="bus"
                autoComplete="new-bus"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              />
            </div>
            <div className={styles.countryBox}>
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                defaultValue=""
                autoComplete="new-country"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              >
                <FetchCountries />
              </select>
            </div>
            <div className={styles.industryBox}>
              <label htmlFor="industry">Industry</label>
              <select
                name="industry"
                id="industry"
                defaultValue=""
                autoComplete="new-industry"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              >
                <option value="" disabled></option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="fashion">Fashion & Apparel</option>
                <option value="arts">Arts</option>
                <option value="agriculture">Agriculture</option>
                <option value="sports">Sports</option>
                <option value="retail">Retail</option>
                <option value="e-commerce">E-commerce</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="construction">
                  Construction & Infrastructure
                </option>
                <option value="travel">Travel & Tourism</option>
                <option value="real estate">Real Estate</option>
                <option value="transportation">Transportation</option>
                <option value="media">Media & Entertainment</option>
                <option value="food">Food & Beverage</option>
                <option value="telecommunication">Telecommunication</option>
                <option value="legal services">Legal Services</option>
                <option value="publishing">Publishing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </section>
          <section className={styles.thirdFields}>
            <h3>Service</h3>
            <section className={styles.services}>
              <div>
                <input
                  type="checkbox"
                  name="website"
                  id="website"
                  onChange={check}
                />
                <label htmlFor="website">Website</label>
              </div>
              <div>
                <input type="checkbox" name="ui" id="ui" onChange={check} />
                <label htmlFor="ui">UI/UX Design</label>
              </div>
              <div>
                <input type="checkbox" name="seo" id="seo" onChange={check} />
                <label htmlFor="seo">SEO</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="marketing"
                  id="marketing"
                  onChange={check}
                />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="graphic"
                  id="graphic"
                  onChange={check}
                />
                <label htmlFor="graphic">Graphic Design</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="brand"
                  id="brand"
                  onChange={check}
                />
                <label htmlFor="brand">Brand Design</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="suite"
                  id="suite"
                  onChange={check}
                />
                <label htmlFor="suite">Suite</label>
              </div>
            </section>
          </section>
          <section className={styles.lastFields}>
            <div className={styles.usBox}>
              <label htmlFor="us">How did you hear about us?</label>
              <select
                name="us"
                id="us"
                defaultValue=""
                autoComplete="new-us"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              >
                <option value="" disabled></option>
                <option value="referral">Referral</option>
                <option value="search">Online Search</option>
                <option value="social media">Social Media</option>
                <option value="advertising">Advertising</option>
                <option value="email">Email</option>
                <option value="blog">Blog or Article</option>
                <option value="newsletter">Newsletter</option>
                <option value="website">Website</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.messageBox}>
              <label htmlFor="message">Additional Message</label>
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="10"
                autoComplete="new-message"
                maxLength="3000"
                onFocus={triggerFocus}
                onBlur={handleMessageBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
              <span className={styles.feedback}>{feedbacks.message}</span>
            </div>
          </section>
          <button
            type="submit"
            className={`${styles.submitButton} ${
              allowSubmit.submit ? styles.submit : ""
            }`}
          >
            {allowSubmit.value}
          </button>
        </form>
      </section>
      <section className={styles.swiftContact}>
        <h2>Reach out via Different Medium</h2>
        <section className={styles.swiftCard}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>{" "}
            <span className={styles.swiftTel}>+233 50 140 3974</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <span className={styles.swiftMail}>digiairx@gmail.com</span>
          </div>
        </section>
      </section>
    </section>
  );
}

export { Contact };
