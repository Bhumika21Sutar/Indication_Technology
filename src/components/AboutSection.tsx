import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Variants } from "framer-motion";
import aboutWoman from "@/assets/AboutImage.png";
import "./AboutSection.css";

const AboutSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about-us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about-us" className="about-section bg-gradient-hero">
      <div className="about-container">
        <div className="about-grid">
          {/* Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="about-image-wrapper"
          >
            <motion.figure
              animate={{ y: [0, -12, 0] }} // floating animation
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="about-image-box"
            >
              <img
                src={aboutWoman}
                alt="Professional woman working on tablet"
                className="about-image no-bg"
                loading="lazy"
              />
              <span className="about-image-overlay" aria-hidden="true"></span>
            </motion.figure>

            {/* Quote Bubble */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-quote"
            >
              <p>“Let's make something great work together.”</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="about-content"
          >
            <div className="about-heading">
              <p className="about-subtitle">About Indication Technology</p>
              <h2 className="about-title">
                Transforming Ideas into
                <br />
                <span className="gradient-text">Digital Excellence</span>
              </h2>
            </div>

            <p className="about-description">
              At Indication Technology, we specialize in turning bold concepts
              into powerful digital solutions. Founded with a vision to lead
              innovation in the tech industry, we craft cutting-edge services
              that drive growth and impact. Our expertise includes web
              development, mobile app development, chatbot solutions, and AI
              services — helping brands reach new heights in the digital era.
            </p>

            <motion.div
              className="about-buttons"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/about">
                <Button className="btn-dark">To Know more</Button>
              </Link>
              <Button onClick={scrollToContact} className="btn-gradient">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
