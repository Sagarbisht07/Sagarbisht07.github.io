import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=GTvVlcSMVkkxCRfJVrVHxlnXzFtfqlkQJhkHbZQFBmzkwXNRHcsmwHLrBKQRTTLrSgsDRxqvSftDq">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Address</span>
            <p>Bazpur (262401) , Uttrakhand , India</p>
          </div>
          <ul className={css.menu}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwgzvGL4J1KpeVlZ2NlXTJnJeWSv1Y6wkhratD53qJ1SLFOZ1&s"
                alt="Linkdin"
                width={20}
              />
              <a
                href="https://www.linkedin.com/in/sagar-bisht-b26620192/"
                style={{
                  color: "rgb(15, 49, 65)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                Linked In
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShd1QvQRdqW8AMLv6-31_86PebQsoT5YXbtXGDGwz10DTbxKTY&s"
                alt="Linkdin"
                width={35}
                style={{
                  marginLeft: "-0.5rem",
                }}
              />
              <a
                href="https://github.com/Sagarbisht07"
                style={{
                  color: "rgb(15, 49, 65)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                Git Hub
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW-Kr5Pry_azwIYZMdCJc9nhncQmMI624HjVFTjkM-tWy_Mg&s"
                alt="Linkdin"
                width={25}
                style={{
                  marginLeft: "-0.4rem",
                }}
              />
              <a
                href="https://drive.google.com/drive/folders/1HWEql0wcJa4aAxMpithfqgofxtuNne1r"
                style={{
                  color: "rgb(15, 49, 65)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
