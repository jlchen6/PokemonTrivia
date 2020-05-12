import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";

function GameMode() {

    const gameContext = useContext(GameContext);
    const {game, setGame, currQ, setCurrQ, nextQ, randomItem} = gameContext;

    useEffect(() => {
        API.getRandom(5)
        .then(res => {
            setGame({...game, questions: res.data});
        })
        .catch(err => console.log(err))
    }, [])


    const loadFirstQ = () => {
        console.log(game);
        const firstQ = game.questions[0];
        const dexEntry = randomItem(firstQ.dex);
        setCurrQ({ ...firstQ, dex: dexEntry });
    };

    return (
        <div>
            <Button onClick={loadFirstQ} >Start Game</Button>
            <Question>
                <p>Hint: {currQ.dex}</p>
            </Question>
            <Choices choices={[...currQ.possibleChoices, currQ.pokeName]} />
        </div>
    )
}

export default GameMode;