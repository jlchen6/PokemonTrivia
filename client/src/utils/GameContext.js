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

    const gameContext = {
        game,
        setGame,
        currQ,
        setCurrQ,
        randomItem,
        nextQ
    };

    return <GameContext.Provider value={gameContext}>{props.children}</GameContext.Provider>;
};

export const {Consumer} = GameContext;
