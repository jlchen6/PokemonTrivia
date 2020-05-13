import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Button from "../components/Button/button";
import GithubAuth from "../components/GithubAuth/index";
import Pokeball from "../images/pokeball.gif";
import TrainerLobby from "../images/titles/TrainerLobby.png";


function Lobby() {

  const [auth, setAuth] = useState({
    isUserLoggedIn: ""
  });
  
    useEffect(() => {
      API.isUserLoggedIn()
      .then(status => {
        return setAuth({ isUserLoggedIn: status });
      })
      .catch(err => console.log(err));
    }, [])

  return (
    <div className="lobby-container">
    <div>
        {!auth.isUserLoggedIn ? 
        ( <h1>Please log in</h1>
         
         ) : (
      <div>
      <img src={TrainerLobby}/>
      <h3>Waiting on Trainers ...</h3>
      <img src={Pokeball} width="500px"/>
      <br/>
      <p>Players go here</p>
      <br/>
      <button>Ready</button>
      <p>Timer Goes Here</p>
      </div>
         )}
    </div>
    </div>
  );
}
export default Lobby;
