import React, { useEffect, useState } from "react";
import Button from "../components/Button/button";
import GithubAuth from "../components/GithubAuth/index";
import Pokeball from "../images/pokeball.gif";

function Lobby() {

  return (
    <div>
      <h1>Trainer Lobby</h1>
      <h3>Waiting on Trainers ...</h3>
      <img src={Pokeball} width="500px"/>
      <br/>
      <container>Players go here</container>
      <br/>
      <button >Ready</button>
      <p>Timer Goes Here</p>
    </div>
  );
}
export default Lobby;
