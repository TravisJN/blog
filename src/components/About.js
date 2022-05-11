import React from "react";
import { Fade } from "react-awesome-reveal";
import Selfie from "../assets/self.png";

function About() {
  return (
    <Fade>
      <div className="main-container">
        <div className="about-container">
          <img src={Selfie} alt="self portrait" className="selfie-image" />
          <div className="about-text-container">
            <span className="about-text">
              My name is Travis Neufeld and I'm a software engineer with
              extensive experience using JavaScript for the web and mobile.
            </span>
            <span className="about-text">
              My professional experience includes ~5 years working for Sony
              Interactive Entertainment during which time I helped build and
              maintain PlayStation Vue on PS3/PS4 using TypeScript, contributed
              to the development of a rebuilt PlayStation Vue running on React
              Native for the PS5, and finally moved to a team working on
              multiple React Native applications for the PS5 platform
              experience.
            </span>
            <span className="about-text">
              I then co-founded a startup whose mission was to help restaurants
              manage their delivery operations. As the sole developer I created
              and maintained two native mobile applications built with React
              Native (a tablet app for the restaurant and a mobile app for
              drivers) which utilized Firebase and Node.js on the backend.
            </span>
            <span className="about-text">
              I enjoy gaming, off-roading, camping, gardening, physics, and
              philosophy.
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
