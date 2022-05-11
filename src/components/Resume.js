import React from "react";
import { Fade } from "react-awesome-reveal";
import { Chrono } from "react-chrono";

function Resume() {
  const items = [
    {
      title: "March 2015",
      cardTitle: "MakerSquare",
      url: "https://en.wikipedia.org/wiki/MakerSquare",
      cardSubtitle: "Coding bootcamp",
      cardDetailedText: "Attended 12-week intensive web development bootcamp",
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
    {
      title: "June 2015",
      cardTitle: "MakerSquare",
      url: "https://en.wikipedia.org/wiki/MakerSquare",
      cardSubtitle: "Fellowship",
      cardDetailedText:
        "Hired as a MakerSquare fellow where I assisted students, hosted a community JavaScript meetup, and taught a weekend JS fundamentals course.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
    {
      title: "September 2015",
      cardTitle: "Sony Interactive Entertainment",
      url: "https://www.sie.com/en/index.html",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Developed and maintained the PlayStation Vue app on PS3 & PS4 using an in-house JavaScript framework with TypeScript.",
        "Developed and maintained multiple internal tools for managing content on PS Vue using Ember and React.",
        "Served as Scrum Master for development team of 7 engineers. Obtained Certified Scrum Master certificate from Scrum Alliance.",
        "Helped architect and develop new cross-platform PS Vue application using React Native to run on PlayStation 5, mobile, web, and multiple TV streaming devices.",
        "Moved from PS Vue to PS5 content platform team where I developed various platform applications for the launch of PS5 using React Native.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
    {
      title: "August 2020",
      cardTitle: "Ins & Outs",
      url: "https://apps.apple.com/us/app/ins-outs-food-symptom-log/id1529371763",
      cardSubtitle: "Creator",
      cardDetailedText: [
        "Developed and released Ins & Outs in order to better understand mobile development and App Store releases.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
    {
      title: "November 2020",
      cardTitle: "Macro Recipes",
      url: "https://apps.apple.com/us/app/macro-recipes/id1534017115",
      cardSubtitle: "Creator",
      cardDetailedText: [
        "Developed and released Macro Recipes in order to better understand mobile development utilizing third-party APIs.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
    {
      title: "January 2021",
      cardTitle: "Dlivr Inc.",
      url: "https://dlivrapp.com/",
      cardSubtitle: "Co-founder & CTO",
      cardDetailedText: [
        "Founded a restaurant delivery Saas company aimed at simplifying the third-party food delivery ecosystem.",
        "As the sole developer I created and maintained two native mobile applications (Android & iOS) using React Native and Firebase.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: "https://pbs.twimg.com/profile_images/542918126111703041/wP1SX3kg_400x400.png",
        },
      },
    },
  ];

  return (
    <Fade>
      <div className="main-container">
        <div className="links-list">
          <a href="https://www.linkedin.com/in/travisjneufeld/">
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable={false} />
      </div>
    </Fade>
  );
}

export default Resume;
