import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fadeIn, textVariant } from "../utils/motion";
import { motion, transform } from "framer-motion";
//import "react-lazy-load-image-component/src/effects/blur.css";
import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";
import Content from "./Content";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain logo"
            // effect="blur"
          />

          <p className="sm:block text-white text-[18px] font-bold cursor-pointer flex ">
            raghav.mittal
          </p>
        </Link>
        <Content />

        <div className="sm:flex gap-5">
          {/* <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer`}
          >
            <a
              href="https://drive.google.com/file/d/12JPCIUFkGR5p9WX8YtenwXDkTRWDQQHW/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </div> */}

          <div className="project w-full flex">
            <motion.p
              whileInView={{ opacity: 1, transform: "none" }}
              variants={fadeIn("", "", 0.1, 1)}
              className=" text-secondary text-[17px] leading-[30px]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="view-all-button flex justify-center items-center "
              >
                <button
                  className="rounded-full  px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:from-purple-600 hover:to-indigo-600"
                  onClick={() => navigate("/all-projects")}
                >
                  <a
                    href="https://drive.google.com/file/d/12JPCIUFkGR5p9WX8YtenwXDkTRWDQQHW/view?usp=drive_link"
                    target="_blank"
                  >
                    Resume
                  </a>
                </button>
              </motion.div>
            </motion.p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
