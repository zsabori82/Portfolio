import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">zsabori82@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">https://www.linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="https://www.github.com/myname">https://github.com/zsabori82</a>
        </li>
      </ul>
      <ContactForm />
      <a
        href="./assets/contactform/my-cv.pdf"  
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cvLink}
      >
        Download CV
      </a>
      {/* Rest of the existing JSX structure */}
    </footer>
  );
};

export default Contact;
