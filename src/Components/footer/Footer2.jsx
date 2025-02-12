import React from "react";
import "./Footer2.css";
import logo2 from "../../logo.svg";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { ImArrowUp2 } from "react-icons/im";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Footer2 = () => {
  const transition = { duration: 1.5, type: "spring", bounce: 0.4 };
  
  const handleClick = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
      <section>
        <footer className="top">
          <motion.img 
            transition={transition} 
            initial={{opacity:0, y: 20}} 
            whileInView={{opacity:1, y: 0}} 
            src={logo2} 
            alt="Logo" 
          />
          <div className="links">
            <div>
              <h2 className="fmname"
                style={{
                  textDecorationLine: "underline",
                  textUnderlinePosition: "under",
                  textDecorationStyle: "double",
                }}
              >
                Vishal Kumar Singh
              </h2>
              <p className="fpara">
                “Putting your entire content workflow on steroids. It’s the
                secret weapon of every content professional I know.”
              </p>
            </div>
            <div>
              <h2
                style={{
                  textDecorationLine: "underline",
                  textUnderlinePosition: "under",
                }}
              >
                Quick Links
              </h2>
              <div className="links">
                <div>
                  <Link
                    className="ftlink"
                    activeClass="active"
                    to="about"
                    spy={true}
                  >
                    Resume
                  </Link>
                  <Link
                    className="ftlink"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                  >
                    My Recent Projects
                  </Link>
                </div>
                <div>
                  <Link
                    className="ftlink"
                    activeClass="active"
                    to="contact"
                    spy={true}
                  >
                    Contact Details
                  </Link>
                  <Link
                    className="ftlink"
                    activeClass="active"
                    to="services"
                    spy={true}
                  >
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="py-3 footers">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ImArrowUp2 className="farrow" onClick={handleClick} />
          </motion.div>
        </footer>
        <footer className="bottom">
          <div className="flinks">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Facebook | Vishal Kumar Singh"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookFill />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub | Vishal Kumar Singh"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn | Vishal Kumar Singh"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill />
            </motion.a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer2;
