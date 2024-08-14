import { useState } from "react";
import styles from "./Contact.module.css";

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

  const triggerFocus = (event) => setFocusedInput(event.target.id);
  const triggerBlur = () => setFocusedInput("");

  const triggerNonEmpty = (event) => {
    const target = event.target;
    // Set true for non empty and false otherwise
    setNonEmptyInput((prev) => ({ ...prev, [target.id]: target.value !== "" }));
  };
  const check = (event) => {
    const target = event.target;
    setNonEmptyCheckBox((prev) => ({ ...prev, [target.id]: target.checked }));
  };

  return (
    <section className={styles.contact}>
      <section>
        <h2>
          W
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
          </svg>
          RLDWIDE REMOTE SERVICES
        </h2>
      </section>
      <section className={styles.fieldsBox}>
        <form
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
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
            </div>
            <div className={styles.emailBox}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
            </div>
            <div className={styles.telBox}>
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              />
            </div>
          </section>
          <section className={styles.secFields}>
            <div className={styles.busBox}>
              <label htmlFor="bus">Business Name</label>
              <input
                type="text"
                name="bus"
                id="bus"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              />
            </div>
            <div className={styles.countryBox}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              />
            </div>
            <div className={styles.industryBox}>
              <label htmlFor="industry">Industry</label>
              <select
                name="industry"
                id="industry"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              >
                <option value="" disabled selected></option>
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
              {/* <input
                type="text"
                name="industry"
                id="industry"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              /> */}
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
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
              >
                <option value="" disabled selected></option>
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
                maxLength="3000"
                onFocus={triggerFocus}
                onBlur={triggerBlur}
                onInput={triggerNonEmpty}
                onChange={triggerNonEmpty}
                required
              />
            </div>
          </section>
          <button type="submit" className={styles.submit}>
            Send Inquiry
          </button>
        </form>
      </section>
    </section>
  );
}

export { Contact };
