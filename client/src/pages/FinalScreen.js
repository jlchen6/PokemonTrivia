import React, { useEffect, useState } from "react";
import Scores from "../images/titles/Scores.png";
import { Link } from "react-router-dom";

function finalScreen() {
  return (
    <div className="final-container">
      <div className="Grid">
        <img src={Scores} />
        <br />
        <h3 textAlign="center">Player Scores</h3>
        <h4>Player Scores Go Here</h4>
        <br />
        <Link to="/">
          <div className="text-center">
            <button className="btn btn-primary">Home</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default finalScreen;
