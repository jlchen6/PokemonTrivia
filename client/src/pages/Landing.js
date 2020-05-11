import React, { useEffect, useState } from "react";
import Button from "../components/Button/button";
import Thumbnail from "../components/Thumbnail/index";
import Jumbotron from "../components/Jumbotron/index";
import DeleteBtn from "../components/DeleteBtn/index";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
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
