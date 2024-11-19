import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { values } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      <LazyLoadImage
        src={image}
        width="150"
        height="150"
        className="rounded-full object-cover"
        alt={`feedback_by-${name}`}
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
        className={`bg-tertiary rounded-2xl "sm:px-10 px-6 sm:py-10 py-10" min-h-[200px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Values...</p>
          <h2 className={styles.sectionHeadText}>Values.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-28 justify-center pb-8 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {values.map((values, index) => (
          <FeedbackCard key={values.name} index={index} {...values} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Values, "values");
