import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >

                <div
                  style={{
                    height: "auto",
                    display: "Grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    width: "auto",
                    gridGap: "10px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <img
                      src={exp.logoHtml}
                      alt={exp.HTML}
                      width={35}
                    />
                    <h1>{exp.HTML}</h1>
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <img
                      src={exp.logoCss}
                      alt={exp.HTML}
                      width={35}
                    />
                    <h1>{exp.CSS}</h1>
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <img
                      src={exp.logoJs}
                      alt={exp.HTML}
                      width={35}
                    />
                    <h1>{exp.JS}</h1>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What do I help? </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">100+</span>
              <span className="secondaryText">Hours of Hard work</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">200+</span>
              <span className="secondaryText">DSA questions solved</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
