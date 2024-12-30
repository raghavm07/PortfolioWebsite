import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { ppt } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { webProject, productProject } from "../constants";
import ProjectList from "./ProjectList";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";
import "./Project.scss";

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
        className="project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full"
      >
        <div
          id="Box1"
          className="Box1 relative w-full h-full sm:h-[180px] "
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
                alt="sourceCode"
                className="w-1/2 h-1/2 object-contain"
                //effect="blur"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <LazyLoadImage
                src={ppt}
                alt="sourcecode"
                className="w-1/2 h-1/2 object-contain"
                //  effect="blur"
              />
            </div>
          </div>
        </div>

        <div className="content mt-5">
          <p
            className="mt-2 text-secondary text-[14px]"
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
        </div>

        <div className="content mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {
  const [selected, setSelected] = useState("product");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProject);
        break;
      case "product":
        setData(productProject);
        break;

      default:
        setData(productProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Proof of Work.</h2>
      </motion.div>

      <div className="project w-full flex">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          {/*  To show buttons - Product & Web */}
          {/* <ul>
            {list.map((item) => (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul> */}

          <div className="box mt-10 flex flex-wrap justify-center">
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
                  onClick={() => navigate("/all-projects")}
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

export default SectionWrapper(Project, "project");
