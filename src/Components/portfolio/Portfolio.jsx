import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const images = [
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766928/Portfolio/MouseMove_p7nvxv.webp",
    description: "Cloud Monitor and VPS Dashboard Tool",
    link: "https://cloud-monitor-vps-dashboard-tool.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766928/Portfolio/MouseMove_p7nvxv.webp",
    description: "Distributed Key Value Store",
    link: "https://distributed-key-value-store.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1687766928/Portfolio/MouseMove_p7nvxv.webp",
    description: "Stock Market Price Predictor",
    link: "https://stock-market-price-predictor.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <p className="pclick">Click to view</p>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        autoplay
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation
        className="portfolio-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="pcontainer">
              <motion.img
                className="pimg"
                src={item.img}
                alt="Loading Project"
                whileTap={{ scale: 0.95 }}
              />
              <div className="poverlay">
                <div className="ptext">
                  <h4>Description</h4>
                  <p style={{ fontSize: "18px" }}>{item.description}</p>
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <button className="pdtn">
                      <HiExternalLink />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
