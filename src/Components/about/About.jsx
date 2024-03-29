import React from "react";
import "./About.css";
// import aboutimg from "../../img/img01.png";
import { motion } from "framer-motion";
import Ripples from "react-ripples";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ x: [-50, 0, 0], opacity: 1 }}
        transition={transition}
        className="a-left"
      >
        <span>About Me</span>
        <h2>Learn Something About Me</h2>
        <span>
          I’m a aspiring front-end web developer from Katihar Engineering College , I
          specialize in creating fully responsive UIs and web
          apps using JavaScript frameworks and libraries. <br />
          <span style={{ color: "orange" }}>
            "Transforming imagination into reality."
          </span>
          
        </span>

        <Ripples during={1500} color={"rgba(255,255,255,0.5)"}>
          <a
            href="https://vksrajputt.web.app/resume.pdf"
            // href="https://drive.google.com/uc?export=download&id=1_5C8QjYct06wt0j0fF9hYC7ky_0bKIaV"
            // href="https://drive.google.com/u/0/uc?id=1_5C8QjYct06wt0j0fF9hYC7ky_0bKIaV&export=download"
            className="a-abtn"
            style={{ textDecoration: "none" }}
            download
          >
            <button className="a-btn">Download CV</button>
          </a>
        </Ripples>
      </motion.div>

      <div className="a-right">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ x: [45, 0, 0], opacity: 1 }}
          transition={transition}
          // src={aboutimg}
          src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/about_fcnpfv.webp"
          alt="About image"
        />
      </div>
    </div>
  );
};

export default About;
