import React from "react";
import { Link } from "react-router-dom"; 
 // Import Link from react-router-dom
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me working"
          className={styles.aboutImage}
        />
    <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
    
    <div className={styles.aboutItemText}>
              <h3>  Cyber Security Technology Engineer</h3>
  <p>
    <span>
      🛡️ Passionate about fortifying digital landscapes and securing networks.<br />
      🔒 Detail-oriented problem solver, dedicated to crafting robust security solutions.<br />
      🌐 Experienced in securing networks and systems for a resilient cyber infrastructure.<br />
      🤖 Enthusiast of cutting-edge technologies, integrating them to enhance security measures.<br />
      📈 Data-driven decision-maker, leveraging analytics to identify and mitigate cyber threats.<br />
      🚨 Constantly updating skills to stay ahead of emerging security challenges and vulnerabilities.<br />
    </span>
  </p>
</div>
</li>
<li className={styles.aboutItem}>
<div className={styles.aboutItemText}>
              <h3>Frontend Web Developer</h3>
  <p>
    <span>
      🚀 Passionate about creating engaging digital experiences and intuitive designs.<br />
      🔍 Detail-driven problem solver, committed to crafting pixel-perfect and intuitive designs.<br />
      🔧 Experienced in optimizing website performance for a seamless user journey.<br />
      🌈 Enthusiast of elegant UI/UX design, merging creativity and functionality seamlessly.<br />
      📊 Data-driven decision-maker, incorporating analytics to enhance user interaction.<br />
      🔗 Proficient in integrating APIs, ensuring dynamic and interactive web applications.<br />
    </span>
  </p>
</div>
</li>
<li className={styles.aboutItem}>
<div className={styles.aboutItemText}>
              <h3>Backend Web Developer</h3>
  <p>
    <span>
      ⚙️ Focused on building robust and scalable server-side solutions and backend systems.<br />
      🛠 Detail-oriented problem solver, dedicated to designing efficient and secure backend systems.<br />
      🚀 Experienced in optimizing server performance for a seamless and reliable application backend.<br />
      🌐 Enthusiast of backend architecture, integrating databases and APIs for optimal functionality.<br />
      📊 Data-driven decision-maker, leveraging analytics for efficient backend processes.<br />
      🌱 Lifelong learner, constantly exploring new technologies to enhance backend development.<br />
    </span>
  </p>
</div>
</li>

          {/* ... (other about items) */}
          {/* Updated links to use Link component */}
         {/* Styled Link to the Experience section */}
        <Link to="/experience" className={styles.linkStyle}>
                Check out my experience
                </Link>
        </ul>
      </div>
    </section>
  );
};

export default About;
