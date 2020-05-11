import React, { useEffect, useState } from "react";
import GithubAuth from "../components/GithubAuth/index";
import Pokeball from "../images/pokeball.gif";

function Landing() {
  return (
    <div>
      <img src={Pokeball} />
      <h1>Name that Pokémon!</h1>
      <button>
        <GithubAuth />
      </button>
    </div>
  );
}
export default Landing;
