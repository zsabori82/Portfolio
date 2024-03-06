import React, { useEffect } from "react";
//import { shallow } from "enzyme"; // Assuming using Enzyme for testing
import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import "../../utils";
export const Experience = () => {
  /**
   * Renders a section displaying skills and work history.
   * 
   * @returns {JSX.Element} The JSX code representing the experience section.
   */
  useEffect(() => {
    const wrapper = shallow(<Experience />);
    expect(wrapper.find('section#experience')).toHaveLength(1);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;