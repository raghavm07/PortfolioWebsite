import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { values } from "../constants";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  from,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="Box2 p-5 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-7 flex flex-col justify-between items-center gap-1">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        width="80"
        height="80"
        className="rounded-full object-cover"
      />
      <div className="mt-3 flex-1 flex flex-col">
        <p className="text-center text-white font-medium text-[16px]">
          <p className="text-center pink-text-gradient tracking-wider text-[18px]">
            {name}
          </p>
        </p>
      </div>
    </div>
  </motion.div>
);

const Values = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Values...</p>
          <h2 className={styles.sectionHeadText}>Values.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {values.map((values, index) => (
          <FeedbackCard key={values.name} index={index} {...values} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Values, "values");
