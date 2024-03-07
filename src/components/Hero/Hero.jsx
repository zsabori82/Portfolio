import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
  const Hero = () => {
      return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zeinab</h1>
        <p className={styles.description}>
        I am a front-end developer. As a front-end web developer, I create websites and applications using web languages such as HTML, CSS, and JavaScript(node.js and react) that allow users to access and interact with the site or app. Please reach out if you'd like to learn more!
        </p>
        <a href="mailto:zsabori82@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;