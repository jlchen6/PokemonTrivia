import React, { createContext, useState } from "react";

export const GameContext = createContext({});

export const Provider = (props) => {

    const [game, setGame] = useState({
        questions: [],
        numQuestions: 0,
        currQ: 0,
        userScore: 0,
        endGame: false
    });
    const [currQ, setCurrQ] = useState({
        dex: "",
        pokeName: "",
        type: [],
        hintImage: "",
        spriteImage: "",
        possibleChoices: []
    });

    const randomItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const nextQ = (score) => {
        setGame({
            ...game,
            userScore: game.userScore + score,
            currQ: game.currQ + 1
        });
        if (game.currQ < game.questions.length) {
            const next = game.questions[game.currQ];
            const dex = randomItem(next.dexEntry)
            setCurrQ({ ...next, dexEntry: dex });
        }
    };

        // Load information for the next question into the state for the current question.
        const loadQ = (qNum) => {
            console.log(game);
            const question = game.questions[qNum];
            const dexEntry = randomItem(question.dex);
            let choices = [];
            for (let i = 0; i < 2; i++) {
                let addToArray = false;
                while(!addToArray){
                    let random = randomItem(question.possibleChoices)
                    addToArray = random in choices ? false : true;
                    if(addToArray) {
                        choices.push(random)
                    }
                } 
            }
            console.log(choices);
            setCurrQ({ ...question, dex: dexEntry, possibleChoices: choices });
        };

    const gameContext = {
        game,
        setGame,
        currQ,
        setCurrQ,
        randomItem,
        nextQ, 
        loadQ
    };

    return <GameContext.Provider value={gameContext}>{props.children}</GameContext.Provider>;
};

export const {Consumer} = GameContext;
