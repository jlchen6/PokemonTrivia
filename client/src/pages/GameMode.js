import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";

function GameMode() {

    const gameContext = useContext(GameContext);
    const {game, setGame, currQ, setCurrQ, nextQ, randomItem} = gameContext;

    const [hints, setHints] = useState({
        dex: "",
        type: [],
        hintImage: "",
        spriteImage: ""
    })

    useEffect(() => {
        API.getRandom(5)
        .then(res => {
            setGame({...game, questions: res.data});
        })
        .catch(err => console.log(err))
    }, [])


    // Load information for the first question into the state for the current question.
    const loadFirstQ = () => {
        console.log(game);
        const firstQ = game.questions[0];
        const dexEntry = randomItem(firstQ.dex);
        const choices = [];
        for (let i = 0; i < 3; i++) {
            let addToArray = false;
            while(!addToArray){
                let random = randomItem(firstQ.possibleChoices)
                addToArray = choices.includes(random)? false : true;
                console.log(addToArray, random);
                if(addToArray) {
                    choices.push(random)
                }
            }
        }
        console.log(choices)
        choices.splice(Math.floor(Math.random()*4), 0, firstQ.pokeName);
        setCurrQ({ ...firstQ, dex: dexEntry, possibleChoices: choices});
    };

    const onAnswer = (choice) => {
        console.log(choice)
        if(choice === currQ.pokeName) {
            nextQ(25);
        }
        else {
            nextQ(0)
        }
        console.log(game.currQ)
        if(!game.endGame)
        {
            loadNextQ(game.currQ)
        }
        else {
            alert("You've finished the game! Your final score was " + game.userScore)
        }
    }

    const loadNextQ = (n) => {
        console.log(game);
        const nextQ = game.questions[n];
        const dexEntry = randomItem(nextQ.dex);
        const choices = [];
        for (let i = 0; i < 3; i++) {
            let addToArray = false;
            while(!addToArray){
                let random = randomItem(nextQ.possibleChoices)
                addToArray = choices.includes(random)? false : true;
                console.log(addToArray, random);
                if(addToArray) {
                    choices.push(random)
                }
            }
        }
        console.log(choices)
        choices.splice(Math.floor(Math.random()*4), 0, nextQ.pokeName);
        setCurrQ({ ...nextQ, dex: dexEntry, possibleChoices: choices});
    };

    return (
        <div>
            <Button onClick={loadFirstQ} >Start Game</Button>
            <p>Current Score: {game.userScore} </p>
            <Question>
                <p>Hint: {currQ.dex}</p>
            </Question>
            <Choices onClick={ e => onAnswer(e.target.value)} choices={currQ.possibleChoices} />
        </div>
    )
}

export default GameMode;