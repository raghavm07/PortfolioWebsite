import React, { useState } from "react";
import "./Content.scss";

import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="nav">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
        <span className="tooltip-text">Home</span>
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <BiBook />
        <span className="tooltip-text">Education</span>
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
        <span className="tooltip-text">Projects</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPersonWorkspace />
        <span className="tooltip-text">Experience</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdMessage />
        <span className="tooltip-text">Contact</span>
      </a>
    </div>
  );
};

export default Content;
