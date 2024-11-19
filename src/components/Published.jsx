import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { thoughts } from "../constants";
import ProjectList from "./ProjectList";
import { FaMediumM } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <div className="Box1 relative w-full h-[180px]">
          <LazyLoadImage
            src={image}
            alt="project_image"
            className="image w-full h-full object-cover rounded-2xl"
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
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Published = () => {
  const [selected, setSelected] = useState("thoughts");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(thoughts);
  }, [selected]);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>My Thoughts</p>
        <h2 className={`${styles.sectionHeadText}`}>Published.</h2>
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
        </motion.p>
      </div>

      <div className="project w-full flex flex-row items-center justify-center py-3">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px] text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="view-all-button flex justify-center items-center mt-10 relative"
          >
            <div className="rounded-full py-2 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 flex items-center">
              For More Visit
              <div className="link1 flex gap-4 ml-4">
                <a
                  href="https://www.linkedin.com/in/raghavmittal79/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImLinkedin className="text-white hover:text-gray-300 transition-colors duration-300 w-6 h-6" />
                </a>
                <a
                  href="https://medium.com/@raghavm79"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMediumM className="text-white hover:text-gray-300 transition-colors duration-300 w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Published, "thoughts");
