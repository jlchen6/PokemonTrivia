import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";
import { Container, Row } from "../components/Grid";

function GameMode() {

    const gameContext = useContext(GameContext);
    const {game, setGame, currQ, setCurrQ, nextQ, randomItem} = gameContext;

    const [display, setDisplay] = useState({
        dex: "",
        type: [],
        hintImage: "",
        spriteImage: "",
        choices: [],
    })

    const [timer, setTimer] = useState({
        totalTime: 0,
        secsRemaining: 0,
    })

    useEffect(() => {
        API.getRandom(5)
        .then(res => {
            setGame({...game, questions: res.data});
        })
        .catch(err => console.log(err))
    }, [])


    // Load information for the first question into the state for the current question.
    const startGame = () => {
        loadNextQ(0);
    };

    const onAnswer = (choice) => {
        let bonus = 0;
        if(choice === currQ.pokeName) {
            nextQ(25);
            bonus = 25;
        }
        else {
            nextQ(0)
        }
        console.log(game.currQ)
        if(game.currQ < 4)
        {
            loadNextQ(game.currQ+1)
        }
        else {
            alert("You've finished the game! Your final score was " + (game.userScore + bonus))
        }
    }

    const loadNextQ = (n) => {
        const nextQ = game.questions[n];
        const dexEntry = randomItem(nextQ.dex);
        const choices = [];
        for (let i = 0; i < 3; i++) {
            let addToArray = false;
            while(!addToArray){
                let random = randomItem(nextQ.possibleChoices)
                addToArray = choices.includes(random)? false : true;
                if(addToArray) {
                    choices.push(random)
                }
            }
        }
        choices.splice(Math.floor(Math.random()*4), 0, nextQ.pokeName);
        setDisplay({...display, dex: dexEntry, choices: choices});
        setCurrQ({ ...nextQ, dex: dexEntry, possibleChoices: choices});
    };

    return (
        <Container>
            <Button onClick={startGame} >Start Game</Button>
            <p>Current Score: {game.userScore} </p>
            <Question>
                <Row>
                <img src={display.hintImage} />
                <img src={display.spriteImage} />
                </Row>
                <p>Hint: {display.dex}</p>
            </Question>
            <Choices onClick={ e => onAnswer(e.target.value)} choices={display.choices} />
        </Container>
    )
}

export default GameMode;