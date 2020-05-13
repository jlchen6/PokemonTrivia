import React, { useEffect, useState } from "react";
import GithubAuth from "../components/GithubAuth/index";
import LandingTitle from "../images/titles/TrainerTrivia.png";
import Background from "../images/pokemonbackground.jpg";
import { Container } from "../components/Grid";

function Landing() {
  return (
    <div className="landing-container">
      <div className="Grid">
        <img src={LandingTitle} />
        <br />
        <h3 textAlign="center">Name that Pokémon!</h3>
        <h4>Click sign in with Github to get started!</h4>
        <button>
          <GithubAuth />
        </button>
      </div>
    </div>
  );
}
export default Landing;
