import React from "react";
import "./Footer2.css";
import "./Footer.css";
import logo2 from "../../logo.svg";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { ImArrowUp2 } from "react-icons/im";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";


const Footer2 = () => {
  const transition = { duration: 2, type: "spring" };
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <section>
        <footer className="top">
          {/* <img src="logo192.png" alt="logo"/> */}
          <motion.img transition={transition} initial={{opacity:0}} whileInView={{opacity:1}} src={logo2} alt="Logo" />
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
          <ImArrowUp2 className="farrow" onClick={handleClick} />
        </footer>
        <footer className="bottom">

          <div className="flinks">
            <a 
              title="Facebook | Vishal Kumar Singh"
              href=""
            >
              <RiFacebookFill />
            </a>
            <a
              title="GitHub | Vishal Kumar Singh"
              href=""
            >
              <RiGithubFill />
            </a>
            <a
              title="LinkedIn | Vishal Kumar Singh"
              href=""
            >
              <RiLinkedinFill />
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer2;
