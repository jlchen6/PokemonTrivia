import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Button from "../components/Button/button";
import GithubAuth from "../components/GithubAuth/index";
import Pokeball from "../images/pokeball.gif";


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
    <div>
        {!auth.isUserLoggedIn ? 
        ( <h1>Please log in</h1>
         
         ) : (
      <div>
      <h1>Trainer Lobby</h1>
      <h3>Waiting on Trainers ...</h3>
      <img src={Pokeball} width="500px"/>
      <br/>
      <container>Players go here</container>
      <br/>
      <button>Ready</button>
      <p>Timer Goes Here</p>
      </div>
         )}
    </div>
  );
}
export default Lobby;
