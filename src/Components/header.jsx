import React from "react";
import { useState } from "react";
import CV from "../assests/cv.pdf";
import DropDown from "./dropDown";

const Header = () => {
  const [activeNave, setActiveNav] = useState("#");
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          {" "}
          Sagar <span> Bisht </span>
        </a>
        <ul className="navlist">
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              {" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}>
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              {" "}
              Contact
            </a>
          </li>
          <button id="resume-button-1">
            <a

            style={{
              padding: "5px 5px",
              color: "black",
              backgroundColor: "#61dc14",
            }}
              href={CV}
              target="_blank"
              download="pdf"
              id="resume-link-1"
              className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1HWEql0wcJa4aAxMpithfqgofxtuNne1r"
                )
              }
            >
              Resume
            </a>
          </button>
        </ul>
        <div id="menu-icon">
          <DropDown
            options={[
              <a href="#home">Home</a>,
              <a href="#about">About</a>,
              <a href="#skills">Skills</a>,
              <a href="#projects">Projects</a>,
              <a href="#githubs">GitHub</a>,
              <a href="#contact">Contact</a>,
            ]}
            onSelect={handleOptionSelect}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
