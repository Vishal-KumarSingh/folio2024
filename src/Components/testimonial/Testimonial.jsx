import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const Testimonial = () => {
  const clients = [
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/tshahzad_hvy1zu.jpg",
      cname: "Muhammad Shehzad",
      dsg: "MIT Director, Mentor",
      desc: "“Dedicated, skilled, and a pleasure to work with. Vishal Kumar Singh consistently delivers exceptional results.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/testadnan_ojrzq8.jpg",
      cname: "Muhammad Adnan",
      dsg: "Web Developer",
      desc: "“Excellent job! I'm glad I decided to work with Vishal Kumar Singh. He exceeded my expectations.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/saftaincpy_rg0hwo.jpg",
      cname: "Saftain Noor",
      dsg: "Client",
      desc: "“Highly recommended! Vishal Kumar Singh delivered a top-notch, SEO-friendly website and collaborated exceptionally.”",
    },
    {
      img: "https://res.cloudinary.com/dsr70k3to/image/upload/v1681752141/Portfolio/yasircpy_kopisj.jpg",
      cname: "Yasir M.",
      dsg: "Cyber Security Expert",
      desc: "“Flawless implementation of website changes and timely delivery. Vishal Kumar Singh ensured our satisfaction.”",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients & Mentors </span>
        <span>Love </span>
        <span>My Work</span>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0.6 }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="testimonial-card"
              >
                <img src={client.img} alt="" className="testimonial-img" />
                <div className="testimonial-content">
                  <span className="testimonial-name">{client.cname}</span>
                  <span className="testimonial-designation">{client.dsg}</span>
                  <span className="testimonial-description">{client.desc}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
