import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";

function Landing() {

    // state = {
    //     gameQuestions: [],
    //     currQNum: 0,
    //     currQDex: "",
    //     error: ""
    // }
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
                setGame({
                    gameQuestions: res.data
                });
                loadTrivia(game.gameQuestions[0]);
                console.log(game.gameQuestions[0]);
            })
            .catch(err => console.log(err))
    }, [])

    loadTrivia(question){
        setTrivia(question);
        const dex = question.dex[(Math.floor(Math.random()*question.dex.length))];
        setTrivia({...trivia, dexEntry: dex});        
    }


    return (
        <div>
            <Question>
                <p>Hint: {trivia.dexEntry}</p>
            </Question>
        </div>
    )
}

export default GameMode;