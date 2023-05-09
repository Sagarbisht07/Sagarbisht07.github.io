import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={"./apple.png"} alt="" />
            <div className="layer">
              <h5 className="project-title">Apple.com</h5>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
                className="project-description">
                Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "-1.1rem",
                  gap: "1rem",
                }}>
                <div className="project-deployed-link">
                  <a
                    href="https://matrix-opal.vercel.app/"
                    target="_blank">
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Sagarbisht07/Perpetual-fact-6008"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={"./world.png"} alt="" />
            <div className="layer">
              <h5 className="project-title">WardrobeWorld</h5>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
                className="project-description">
               WardrobeWorld is an e-commerce website where people can buy from wide range of products and has an interactive UI. We are a one stop shop for all your fashion and lifestyle needs.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "-1.1rem",
                  gap: "1rem",
                }}>
                <div className="project-deployed-link">
                  <a
                    href="https://wardrobe-world.vercel.app/"
                    target="_blank">
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Sagarbisht07/crabby-whistle-3208"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={"./code.png"} alt="" />
            <div className="layer">
              <h5 className="project-title">CodePen</h5>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
                className="project-description">
                CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "-1.1rem",
                  gap: "1rem",
                }}>
                <div className="project-deployed-link">
                  <a
                    href="https://precious-blini-afdd2e.netlify.app/"
                    target="_blank">
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Sagarbisht07/Code-Editior"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={"./out.png"} alt="" />
            <div className="layer">
              <h5 className="project-title">outfitr.com</h5>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
                className="project-description">
                  Outfitr is an e-commerce website where people can buy from wide range of products and has an interactive UI. We are a one stop shop for all your fashion and lifestyle needs.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "-1.1rem",
                  gap: "1rem",
                }}>
                <div className="project-deployed-link">
                  <a
                    href="https://outfiter.vercel.app/"
                    target="_blank">
                    <i>
                      <SiNetlify />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Sagarbisht07/shrill-yam-9521"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
