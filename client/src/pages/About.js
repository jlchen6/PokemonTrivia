import React, { Component } from "react";
import AboutTitle from "../images/titles/About.png";
import HowToPlay from "../images/titles/HowToPlay.png";
import { Container, Row, Col } from "../components/Grid";
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Container>
          <div className="row">
            <div className="col" size="md-5 sm-9">
              <img src={HowToPlay} />
              <p>
                This is a pokemon trivia game meant to test your knowledge on
                pokemon! Up to 6 players can play at once, competing against the
                timer to correctly guess the pokemon.
              </p>
              <p>In order to play you need to sign in. If you don't currently have a gitHub account, you will need to create an account.</p>
              <p>Once you are signed in you will be taken to the Trainer Lobby. When you are ready, click the ready button. This will take you to the game.</p>
              <p>In the game you will be prompted to pick the correct pokemon based on different hints that are given to you</p>
              <p>At the end of the game you will see your scores and have an option to return to the Trainer Lobby to play again!</p>
            </div>
          
            <div className="col" size="md-5 sm-9">
              <img src={AboutTitle} />

              <p>
                This game was inspired by our love of Pokémon. We wanted to provide trainers the opportunity to continue their practise of Pokémon knowledge.
              </p>
              <p>Background Image.  HD All Pokemon Wallpaper HD</p>
              <a href="https://thewallpaper.co//wp-content/uploads/2016/10preview/hd-all-pokemon-wallpaper-hd-desktop-wallpapers-1080p-windows-wallpapers-smart-phone-background-photos-download-widescreen-desktop-backgrounds-high-quality-3888x2459.jpg">All Pokemon Wallpaper</a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
