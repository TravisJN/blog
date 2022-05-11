import React from "react";
import { Fade } from "react-awesome-reveal";
import Selfie from "../assets/self.png";
import ReactMarkdown from "react-markdown";
import markdown from "../about";

function About() {
  return (
    <Fade>
      <div className="main-container">
        <div className="about-container">
          <img src={Selfie} alt="self portrait" className="selfie-image" />
          <div className="about-text-container">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
