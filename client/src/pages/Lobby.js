import React, { useEffect, useContext } from "react";
import Button from "../components/Button/button";
import GithubAuth from "../components/GithubAuth/index";
import Pokeball from "../images/pokeball.gif";
import { GameContext } from "../utils/GameContext";
import API from "../utils/API"

function Lobby() {
  const gameContext = useContext(GameContext);
  const {game, currQ, setCurrQ, setGame, loadFirstQ} = gameContext;
  const questions = [];

  useEffect(() => {
    API.getRandom(5)
        .then(res => {
            setGame({...game, questions: res.data});
        })
        .catch(err => console.log(err))
}, [])

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
