import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail/index.js";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

    return (
      <div>
     <h1>Name that Pokémon!</h1> 
      <form>
        <input>Username</input>
        <input>Password</input>
        <button>Sign Up</button>
        <button>Login</button>
        <button>About</button>
      </form>
      </div>
    )
export default Landing;
