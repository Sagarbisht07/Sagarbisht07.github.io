import React from "react";
import me from "../assests/photo.png.jpeg";
import CV from "../assests/cv.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
          <img
            className="home-img"
            src="https://avatars.githubusercontent.com/u/112841387?v=4"
            alt="home-image"
            style={{
              width: "100%",
              height: "120%",
            }}
          />
        </div>
        <div className="nav-link about">
          <h1>
            About <span>Me</span>
          </h1>
          <h2 id="user-detail-name">
            I'm <span>Sagar Bisht</span> from Bazpur, Uttrakhand
          </h2>

          <h3
            style={{
              letterSpacing: "1px",
              fontFamily: "sans-serif",
              color: "gray",
              fontWeight: "500",
              fontSize: "1.2rem",
              lineHeight: "1.5",
            }}>
            Mern Developer
          </h3>
          <h1
            id="user-detail-intro"
            style={{
              letterSpacing: "1px",
              fontFamily: "sans-serif",
              fontWeight: "400",
              fontSize: "1.2rem",
              lineHeight: "1.5",
              color: "#fff",
            }}>
            An enthusiastic Mern Developer with excellent hands-on experience in
            developing scalable websites and application using a wide range of
            front-end and back-end skills like HTML, CSS, JavaScript, React,
            Redux and Node Js. Highly skilled in design, development and
            implementation of functional specifications, Ready for taking
            challenging roles..
          </h1>
          {/* <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kkba3IRIWZ7W77s2AZ040myrHEOJVOmh/view?usp=share_link"
                )
              }>
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default About;
