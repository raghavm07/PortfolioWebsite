import React from "react";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
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
            key={profile.id || index}
          >
            <div className="icon-container">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <LazyLoadImage
                  src={profile.icon}
                  alt={profile.name}
                  //  effect="blur"
                />

                <span className="tooltip-text">{profile.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "");
