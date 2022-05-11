import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [currentView, setView] = useState(pathname);

  return (
    <div className="navbar">
      <Link
        to="/apps"
        className={`navbar-text ${currentView === "/apps" ? "underline" : ""}`}
        onClick={() => setView("/apps")}
      >
        Apps
      </Link>
      <Link
        to="/resume"
        className={`navbar-text ${
          currentView === "/resume" ? "underline" : ""
        }`}
        onClick={() => setView("/resume")}
      >
        Resume
      </Link>
      <Link
        to="/about"
        className={`navbar-text ${
          currentView === "/about" || currentView === "/" ? "underline" : ""
        }`}
        onClick={() => setView("/about")}
      >
        About
      </Link>
    </div>
  );
}

export default Navbar;
