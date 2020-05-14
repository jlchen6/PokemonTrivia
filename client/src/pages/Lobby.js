import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Button from "../components/Button/button";
import Pokeball from "../images/pokeball.gif";
import {Link} from 'react-router-dom'
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
      {/* <h3>Waiting on Trainers ...</h3> */}
      <img src={Pokeball} />
      <br/>
      {/* <p>Players go here</p> */}
      {/* <br/> */}
      <Link to="/game">
      <button className="text-center justify-content-center">Ready</button>
      </Link>
      {/* <p>Timer Goes Here</p> */}
      </div>
         )}
    </div>
    </div>
  );
}
export default Lobby;
