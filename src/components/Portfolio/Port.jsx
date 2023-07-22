import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {  staggerChildren, textVariant } from "../../utils/motion";
import ProjectsMain from "./ProjectsMain";
import Projects from "../Projects";
const Port = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`${css.showCase}`}>
           <div>
          <Projects/>
           </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Port;


