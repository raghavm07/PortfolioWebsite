import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { AllCourses } from "../constants";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
import "./AllCourses.scss";

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
            //effect="blur"
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
  const [data, setData] = useState(AllCourses);
  const navigate = useNavigate();

  useEffect(() => {
    setData(AllCourses);
  }, []);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
      >
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-secondary transition-colors duration-300 border-0 bg-transparent mr-2"
          >
            <AiOutlineArrowLeft />
          </button>
          <p className={`${styles.sectionSubText}`}>Attended...</p>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>All Courses.</h2>
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
    </>
  );
};

export default SectionWrapper(Courses, "AllCourses");
