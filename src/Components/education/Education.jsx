import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import "./Education.css";
import { FaUniversity } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="education" id="education">
      <div className="e-heading">
        <span>My Education</span>
       
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="edu-cards"
      >
        <motion.div transition={transition} whileHover={{scale:1.05}}>
          <Card className="edu-card">
            <Card.Body>
              <Card.Subtitle className="mb-2 edu-icon">
                <FaUniversity />
              </Card.Subtitle>
              <Card.Title className="edu-title">M.Tech CSE</Card.Title>
              <Card.Subtitle className="edu-institute">Indian Institute of Technology Bombay</Card.Subtitle>
              <Card.Text className="edu-year">2024 - 2026</Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div transition={transition} whileHover={{scale:1.05}}>
          <Card className="edu-card">
            <Card.Body>
              <Card.Subtitle className="mb-2 edu-icon">
                <MdEngineering />
              </Card.Subtitle>
              <Card.Title className="edu-title">B.Tech CSE</Card.Title>
              <Card.Subtitle className="edu-institute">Katihar Engineering College</Card.Subtitle>
              <Card.Text className="edu-year">2021 - 2024</Card.Text>
            </Card.Body>
          </Card>
        </motion.div>

        <motion.div transition={transition} whileHover={{scale:1.05}}>
          <Card className="edu-card">
            <Card.Body>
              <Card.Subtitle className="mb-2 edu-icon">
                <IoSchool />
              </Card.Subtitle>
              <Card.Title className="edu-title">Diploma CSE</Card.Title>
              <Card.Subtitle className="edu-institute">Government Polytechnic College</Card.Subtitle>
              <Card.Text className="edu-year">2018 - 2021</Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
