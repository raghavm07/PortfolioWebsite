import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";
import Content from "./Content";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const resumeUrl = "https://drive.google.com/file/d/1LJV882nzcjylONn5JYZTAG7DB_zFOQYm/view?usp=sharing";

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain logo"
          />
          <p className="sm:block text-white text-[18px] font-bold cursor-pointer">
            raghav.mittal
          </p>
        </Link>
        <Content />
        <div className="sm:flex gap-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="view-all-button flex justify-center items-center"
          >
            <button
              className="rounded-full px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-purple-600 hover:to-indigo-600"
              aria-label="View Resume"
              onClick={() => window.open(resumeUrl, "_blank")}
            >
              Resume
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
