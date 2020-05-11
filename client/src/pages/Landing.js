import React, { useEffect, useState } from "react";
import Button from "../components/Button/button";
import Thumbnail from "../components/Thumbnail/index";
import Jumbotron from "../components/Jumbotron/index";
import DeleteBtn from "../components/DeleteBtn/index";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Landing() {
  return (
    <div>
      <img src="images/pokeball.gif" />
      <h1>Name that Pokémon!</h1>
      <form>
        <input id="userName" placeholder="Enter your Username">
          Username
        </input>
        <input id="password" placeholder="Enter your password">
          Password
        </input>
        <button>Sign Up</button>
        <button>Login</button>
        <button>About</button>
      </form>
    </div>
  );
}
export default Landing;
