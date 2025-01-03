import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import classNames from "classnames";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      toast.warn("All fields are required.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast.warn("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    emailjs
      .send(
        "service_5qikpyj",
        "template_8vh9p4c",
        {
          from_name: form.name,
          to_name: "Raghav Mittal",
          from_email: form.email,
          to_email: "raghavm79@gmail.com",
          message: form.message,
        },
        "ScnGidqx-J_LL4V9z"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you! I will get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Let's talk.</h3>
        <p className="sm:text-[13px] text-[12px] text-secondary uppercase tracking-wider">
          I am always open to collaborations and exploration
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-3">Your Name</span> */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              aria-label="Your Name"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-3">Your email</span> */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              aria-label="Your email"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-white font-medium mb-3">Your Message</span> */}
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              aria-label="Your Message"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={classNames(
              "bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",
              { "loading-class": loading }
            )}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-5 contact__options">
          <article className="contact__option">
            <MdEmail />
            <a
              href="mailto:raghavm79@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-text-gradient"
            >
              raghavm79@gmail.com
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <a
              href="https://api.whatsapp.com/send/?phone=919990349184&text&app_absent=0&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-text-gradient"
            >
              +91 9990349184
            </a>
          </article>
        </div>
      </motion.div>

      {/* Add ToastContainer here */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        closeOnClick
        style={{ zIndex: 9999, marginBottom: "100px" }}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
