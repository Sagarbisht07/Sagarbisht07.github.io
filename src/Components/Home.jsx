import React from "react";
import CV from "../assests/cv.pdf";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>
          </div>
          <h1 id="user-detail-name">Sagar Bisht</h1>
          <h3 id="user-detail-skill">
            Mern <span>Developer.</span>
          </h3>

          <br />
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1HWEql0wcJa4aAxMpithfqgofxtuNne1r"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
