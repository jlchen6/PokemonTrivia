import React, { useEffect, useState } from "react";
import GithubAuth from "../components/GithubAuth/index";
import Scores from "../images/titles/Scores.png";
import Background from "../images/pokemonbackground.jpg";
import { Container } from "../components/Grid";

function finalScreen() {
  return (
    <div className="final-container">
      <div className="Grid">
        <img src={Scores} />
        <br />
        <h3 textAlign="center">Player Scores</h3>
        <h4>Player Scores Go Here</h4>
        <button>Return To Lobby</button>
      </div>
    </div>
  );
}
export default finalScreen;
