import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Sagar Bisht.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Ready to Learn and Improve
            <br />I am ambitious and adventurous.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./sagar8.png"
            alt="sagar bisht"
          />
        </motion.div>

        <a className={css.email} href="mailto:bishtsagarbisht123@gmail.com">
          Bishtsagarbisht123@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10+ </div>
            <div className="secondaryText">
              <div>Projects</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img
              src="https://icon-library.com/images/web_development_-_1_-white_source-modify-_color1-18-512.png"
              alt="logo"
            />
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginLeft: "0.5rem",
              }}
            >
              MERN Stack Developer
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
