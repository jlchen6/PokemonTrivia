import React, { useEffect, useState } from "react";
import GithubAuth from "../components/GithubAuth/index";
import LandingTitle from "../images/titles/TrainerTrivia.png";
import Background from "../images/pokemonbackground.jpg";
import Banner from 'react-js-banner';

function Landing() {
  return (
    <container>
<div className="Container">
    
    <Banner
    image={Background}/>
    
    <img src={LandingTitle}/>
    <br/>
    <h1 textAlign="center">Name that Pokémon!</h1>
      <h3>Click sign in with Github to get started!</h3>
      <button>
        <GithubAuth />
      </button>
      </div>
      </container>
  );
}
export default Landing;
