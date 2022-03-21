import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="main">
      <div className="callToAction">
        <img
          className="poster2"
          src="../images/ezgif-5-39ab914a96.gif"
          alt="Feel real emotions"
        />
        <img
          className="poster1"
          src="../images/girl-screen.png"
          alt="Girl in front of screen"
        />
      </div>
      <div className="callToActionButtonDiv">
        <Link to="/products">
          <button className="callToActionButton">Browse products</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
