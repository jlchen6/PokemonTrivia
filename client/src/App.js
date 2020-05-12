import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "../src/pages/Landing";
import About from "../src/pages/About";
import Lobby from "../src/pages/Lobby";
import GameMode from "../src/pages/GameMode";
import FinalScreen from "../src/pages/FinalScreen"
import { GameProvider } from './utils/GameContext';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <GameProvider>
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/game" component={GameMode} />
          {/* <Route exact path="/final" component={FinalScreen} /> */}
          </GameProvider>
          <Route component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
