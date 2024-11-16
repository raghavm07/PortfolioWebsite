import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { github, demo } from "../assets";
import "./AllProjects.scss";
import { fadeIn, textVariant } from "../utils/motion";
import { list } from "../constants";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { allproductProject, allwebProject } from "../constants";
import ProjectList from "./ProjectList";

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
        <div className="Box1 relative w-full h-full sm:h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="image w-full h-full object-cover rounded-2xl"
          />

          <div
            className="absolute inset-0 flex justify-center card-img_hover"
            style={{ alignItems: "center" }}
          >
            <h3 className="text-black font-bold text-[16px]">{name}</h3>
          </div>

          <div className="title absolute inset-0 flex justify-end card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={demo}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
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
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const AllProjects = () => {
  const [selected, setSelected] = useState("product");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(allwebProject);
        break;
      case "product":
        setData(allproductProject);
        break;

      default:
        setData(allproductProject);
    }
  }, [selected]);

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
          <p className={`${styles.sectionSubText}`}>My work</p>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>All Projects.</h2>
      </motion.div>

      <div className="project w-full flex">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          <ul>
            {list.map((item) => (
              <ProjectList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>

          <div className="box mt-10 flex flex-wrap justify-center">
            {data.map((project, index) => (
              <div>
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </div>
            ))}
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(AllProjects, "AllProjects");
