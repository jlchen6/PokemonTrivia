import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";

function GameMode() {

    const [game, setGame] = useState({
        gameQuestions: [],
        currQ: 0
    })

    const [trivia, setTrivia] = useState({
        dexEntry: "",
        pokemon: "",
        hintImage: "",
        spriteImage: "",
        type: [],
        choices: []
    })

    useEffect(() => {
        API.getRandom(5)
            .then(res => {
                console.log(res);
                setGame({
                    ...game,
                    gameQuestions: res.data
                });
            })
            .catch(err => console.log(err))
    }, [])

    function loadTrivia(question) {
        setTrivia(question);
        const dex = question.dex[(Math.floor(Math.random() * question.dex.length))];
        setTrivia({ ...trivia, dexEntry: dex });
    }

    function updateQuestion() {
        console.log(game);
        loadTrivia(game.gameQuestions[game.currQ]);
        if (game.currQ < 4) {
            setGame({ ...game, currQ: game.currQ + 1 });
        }
    }

    return (
        <div>
            <Button onClick={updateQuestion}>Load Question</Button>
            <Question>
                <p>Hint: {trivia.dexEntry}</p>
            </Question>
        </div>
    )
}

export default GameMode;