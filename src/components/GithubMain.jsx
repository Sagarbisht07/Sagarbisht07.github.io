import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio/Port";
import { staggerChildren, textVariant} from "../utils/motion";
import GitHubStats from "../Github";

const GithubMain = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <span className="primaryText">GitHub stats</span><br /><br />
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <GitHubStats/>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GithubMain;


