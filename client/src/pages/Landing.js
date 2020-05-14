import React, { useEffect, useState } from "react";
import GithubAuth from "../components/GithubAuth/index";
import LandingTitle from "../images/titles/TrainerTrivia.png";
import {Link} from 'react-router-dom'


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
        <br/>
        <Link to="/about">
        <div className="text-center">
        <button className="btn btn-primary">About</button>
              </div>
              </Link>
      </div>
    </div>
  );
}
export default Landing;
