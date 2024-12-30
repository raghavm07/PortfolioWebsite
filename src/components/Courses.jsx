import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { courses } from "../constants";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
import "./Published.scss";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, transform: "none" }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="publish-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full "
      >
        <div
          className="Box1 relative w-full h-[180px]"
          onClick={() => window.open(source_link, "_blank")}
        >
          <LazyLoadImage
            src={image}
            alt="project_image"
            className="image w-full h-full object-cover rounded-2xl"
            // effect="blur"
          />

          <div
            className="absolute inset-0 flex justify-center card-img_hover"
            style={{ alignItems: "center" }}
          >
            <h3 className="text-black font-bold text-[16px] text-center">
              {name}
            </h3>
          </div>

          <div className="title absolute inset-0 flex justify-end card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <LazyLoadImage
                src={demo}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                // effect="blur"
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Courses = () => {
  const [selected, setSelected] = useState("courses");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(courses);
  }, [selected]);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>Attended...</p>
        <h2 className={`${styles.sectionHeadText}`}>Courses.</h2>
      </motion.div>

      <div className="project w-full flex ">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="-mt-7 text-secondary text-[17px] leading-[30px]"
        >
          <div className="box mt-20 flex flex-wrap justify-center ">
            {data.map((project, index) => (
              <div key={`project-${index}`}>
                <ProjectCard index={index} {...project} />
              </div>
            ))}
          </div>
          <div className="project w-full flex">
            <motion.p
              whileInView={{ opacity: 1, transform: "none" }}
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] leading-[30px]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="view-all-button flex justify-center items-center mt-10"
              >
                <button
                  className="rounded-full py-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-purple-600 hover:to-indigo-600"
                  onClick={() => navigate("/all-courses")}
                >
                  View All
                </button>
              </motion.div>
            </motion.p>
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Courses, "courses");
