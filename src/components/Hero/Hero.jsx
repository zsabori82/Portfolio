import React from "react";

import styles from "./Hero.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zeinab</h1>
        <p className={styles.description}>
        I am a front-end developer builds the front-end. As a front-end developer, I creates websites and applications using web languages such as HTML, CSS, and JavaScript(node.js and react) that allow users to access and interact with the site or app. Please reach out if you'd like to learn more!
        </p>
        <a href="mailto:zsabori82@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/amination(1).png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
     