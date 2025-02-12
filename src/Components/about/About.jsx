import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Ripples from "react-ripples";

const About = () => {
  const transition = { duration: 1.5, type: "spring", bounce: 0.4 };

  return (
    <div className="about" id="about">
      <div className="a-right">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={transition}
          src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/about_fcnpfv.webp"
          alt="About image"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        className="a-left"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Turning Ideas Into Reality
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm a passionate front-end developer with expertise in creating immersive web experiences. 
          My journey at Katihar Engineering College has equipped me with strong problem-solving skills 
          and a deep understanding of modern web technologies.
          <br /><br />
          <span style={{ 
            background: "linear-gradient(135deg, #ff6b6b, #ff075b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600"
          }}>
            "Building the future, one line of code at a time."
          </span>
        </motion.span>

        <Ripples color="rgba(255,255,255,0.3)" during={2000}>
          <motion.a
            href="https://vksrajputt.web.app/resume.pdf"
            style={{ textDecoration: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download
          >
            <button className="a-btn">Download Resume</button>
          </motion.a>
        </Ripples>
      </motion.div>
    </div>
  );
};

export default About;
