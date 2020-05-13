import React, { createContext, useState } from "react";

export const GameContext = createContext({});

export const Provider = (props) => {

    const [game, setGame] = useState({
        questions: [],
        numQuestions: 0,
        currQNum: 0,
        currQ: {
            dex: "",
            pokeName: "",
            type: [],
            hintImage: "",
            spriteImage: "",
            possibleChoices: []
        },
        userScore: 0,
        endGame: false
    });

    const randomItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const nextQ = (score) => {
        setGame(game => {
            let toSet = {
                ...game,
                userScore: game.userScore + score,
                currQNum: game.currQNum + 1,
                endGame: (game.currQNum + 1 < game.questions.length ? false : true)
            }
            console.log("GAME: ", game)
            if (game.currQNum < game.questions.length) {
                const next = game.questions[game.currQNum];
                console.log(game.questions, next)
                const dex = randomItem(next.dex)
                toSet.currQ = 
                {
                    ...next,
                    dex: dex,
                }

            }
            console.log("TOSET: ", toSet)
            return toSet;
        })

    };

    // // Load information for the next question into the state for the current question.
    // const loadQ = (qNum) => {
    //     console.log(game);
    //     const question = game.questions[qNum];
    //     const dexEntry = randomItem(question.dexEntry);
    //     let choices = [];
    //     for (let i = 0; i < 2; i++) {
    //         let addToArray = false;
    //         while(!addToArray){
    //             let random = randomItem(question.possibleChoices)
    //             addToArray = random in choices ? false : true;
    //             if(addToArray) {
    //                 choices.push(random)
    //             }
    //         } 
    //     }
    //     console.log(choices);
    //     setCurrQ({ ...question, dex: dexEntry, possibleChoices: choices });
    // };

    const gameContext = {
        game,
        setGame,
        randomItem,
        nextQ
    };

    return <GameContext.Provider value={gameContext}>{props.children}</GameContext.Provider>;
};

export const { Consumer } = GameContext;
