import React, { useEffect, useState } from "react";
/*import Button from "../components/Button/button";
import Thumbnail from "../components/Thumbnail/index.js";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

*/
import API from "../utils/API";

function Lobby() {

const [auth, setAuth] = useState({
  isUserLoggedIn: ""
});

  useEffect(() => {
    console.log("Use effect is running")
    API.isUserLoggedIn()
    .then(status => {
      return setAuth({ isUserLoggedIn: status });
    })
    .catch(err => console.log(err));
  }, [])


    return (
      <div>
        {!auth.isUserLoggedIn ? ( <h1>Lobby : You need to sign in</h1>
         
        ) : (<h1> Lobby: You are authenticated</h1>)}
      </div>
    );
}

export default Lobby;
