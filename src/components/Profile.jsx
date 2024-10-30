import React from "react";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Profile Section
        </h2>
      </motion.div>
      <div className="my-skills">
        {profiles.map((profile, index) => (
          <div
            className="skill"
            data-aos="fade-up"
            data-aos-delay="200"
            key={profile.id || index} // Use profile.id if available, otherwise fallback to index
          >
            <div className="icon-container">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <img src={profile.icon} alt={profile.name} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "");
