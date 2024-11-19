////For 3 Educations

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
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
        alt={`feedback_by-${name}`}
        width="80"
        height="80"
        className="rounded-full object-cover"
        //effect="blur"
      />

      <div className="mt-3 flex-1 flex flex-col">
        <p className="text-center text-white font-medium text-[16px]">
          <span className="text-center blue-text-gradient">{name}</span>
        </p>
        <span className="text-center blue-text-gradient">{from}</span>
        <p className="text-center mt-1 text-secondary text-[12px]">{year}</p>
      </div>
    </div>

    {/* <p className="text-white font-black text-[48px]">"</p> */}

    <div className="mt-1">
      <p className="text-center text-white tracking-wider text-[18px]">
        {degree}
      </p>
      <p className="mt-3 text-center pink-text-gradient">{branch}</p>
      {/* <p className='mt-3 text-center green-text-gradient'>{marks}</p> */}
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education Details...</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {educations.map((education, index) => (
          <FeedbackCard
            key={`${education.name}` + `${index}`}
            index={index}
            {...education}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");

// //For 4 Educations

// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { educations } from "../constants";
// import "./Education.scss";
// const FeedbackCard = ({
//   index,
//   branch,
//   marks,
//   name,
//   from,
//   degree,
//   year,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="Box2 p-6 rounded-3xl shadow-lg
//       transition-all duration-300"
//   >
//     <div className="flex flex-col justify-between items-center gap-4">
//       <img
//         src={image}
//         alt={`feedback_by-${name}`}
//         width="80"
//         height="80"
//         className="rounded-full object-cover border-2 border-blue-950"
//       />
//       <div className="text-center">
//         <p className="text-white font-semibold text-[13px] leading-5">
//           <span className="blue-text-gradient">{name}</span>
//         </p>
//         <p className="text-[14px] text-secondary">{from}</p>
//         <p className="text-[12px] text-secondary mt-1">{year}</p>
//       </div>
//     </div>
//     <div className="mt-4 text-center">
//       <p className="text-[16px] text-white tracking-wide font-medium">
//         {degree}
//       </p>
//       <p className="mt-2 text-[14px] pink-text-gradient">{branch}</p>
//       {/* {marks && (
//         <p className="mt-2 text-[14px] green-text-gradient font-medium">
//           Marks: {marks}
//         </p>
//       )} */}
//     </div>
//   </motion.div>
// );

// const Education = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>Education Details...</p>
//           <h2 className={styles.sectionHeadText}>Education.</h2>
//         </motion.div>
//       </div>
//       <div
//         className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7`}
//       >
//         {educations.map((education, index) => (
//           <FeedbackCard key={education.name} index={index} {...education} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Education, "education");
