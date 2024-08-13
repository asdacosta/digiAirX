import styles from "./Contact.module.css";

function Contact() {
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
        <form className={styles.fields}>
          <section className={styles.firstFields}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" name="tel" id="tel" />
            </div>
          </section>
          <section className={styles.secFields}>
            <div>
              <label htmlFor="bus">Business Name</label>
              <input type="text" name="bus" id="bus" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" />
            </div>
            <div>
              <label htmlFor="industry">Industry</label>
              <input type="text" name="industry" id="industry" />
            </div>
          </section>
          <section className={styles.thirdFields}>
            <h3>Service</h3>
            <section className={styles.services}>
              <div>
                <input type="checkbox" name="website" id="website" />
                <label htmlFor="website">Website</label>
              </div>
              <div>
                <input type="checkbox" name="ui" id="ui" />
                <label htmlFor="ui">UI/UX Design</label>
              </div>
              <div>
                <input type="checkbox" name="seo" id="seo" />
                <label htmlFor="seo">SEO</label>
              </div>
              <div>
                <input type="checkbox" name="marketing" id="marketing" />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <div>
                <input type="checkbox" name="graphic" id="graphic" />
                <label htmlFor="graphic">Graphic Design</label>
              </div>
              <div>
                <input type="checkbox" name="brand" id="brand" />
                <label htmlFor="brand">Brand Design</label>
              </div>
              <div>
                <input type="checkbox" name="suite" id="suite" />
                <label htmlFor="suite">Suite</label>
              </div>
            </section>
          </section>
          <section className={styles.lastFields}>
            <div>
              <label htmlFor="us">How Did you hear About Us?</label>
              <input type="text" name="us" id="us" />
            </div>
            <div>
              <label htmlFor="message">Additional Message</label>
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="10"
                maxLength="3000"
              />
            </div>
          </section>
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
}

export { Contact };
