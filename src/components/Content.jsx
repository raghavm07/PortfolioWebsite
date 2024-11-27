import React, { useState, useEffect } from "react";
import "./Content.scss";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "#", icon: <AiOutlineHome />, label: "Home" },
    {
      href: "#project",
      icon: <AiOutlineFundProjectionScreen />,
      label: "Projects",
    },
    { href: "#experience", icon: <BsPersonWorkspace />, label: "Experience" },
    { href: "#education", icon: <BiBook />, label: "Education" },
    { href: "#contact", icon: <MdMessage />, label: "Contact" },
  ];

  return (
    <div className="nav">
      {navItems.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? "active" : ""}
          aria-label={label}
        >
          {icon}
          <span
            className={` ${
              isSmallScreen ? `tooltip-text` : "text-sm p-1 rounded-md"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Content;
