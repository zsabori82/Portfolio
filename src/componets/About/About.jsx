import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <h2>About Me</h2>
              <p>
                I am a front-end developer. As a front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.
              </p>
              {/* Updated links to use Link component */}
              <Link to="/experience">Check out my experience</Link>
            </div>
          </li>
          {/* ... (other about items) */}
        </ul>
      </div>
    </section>
  );
};

export default About;
