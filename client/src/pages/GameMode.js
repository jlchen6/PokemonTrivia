import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";
import { Container, Row, Col } from "../components/Grid";


function GameMode() {

    const gameContext = useContext(GameContext);
    const { game, setGame, currQ, setCurrQ, nextQ, randomItem } = gameContext;

    const imgPath = require.context("../../public/images")

    const [display, setDisplay] = useState({
        dex: "",
        type: "",
        hintImage: "",
        hintText: "",
        spriteImage: "",
        spriteText: "",
        choices: [],
    })

    const [timer, setTimer] = useState({
        totalTime: 20,
        timePassed: 0,
        timerText: "",
        interval: null
    })

    useEffect(() => {
        API.getRandom(5)
            .then(res => {
                setGame({ ...game, questions: res.data });
            })
            .catch(err => console.log(err))
    }, [])


    // Load information for the first question into the state for the current question.
    const startGame = () => {
        loadNextQ(0);
        setTimer({...timer, timerText: "Timer: ", timePassed: 0, interval: setInterval(tick, 1000)});
    };

    const onAnswer = (choice) => {
        let bonus = 0;
        if (choice === currQ.pokeName) {
            nextQ(25);
            bonus = 25;
        }
        else {
            nextQ(0)
        }
        console.log(game.currQ)
        if (game.currQ < 4) {
            loadNextQ(game.currQ + 1)
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
            while (!addToArray) {
                let random = randomItem(nextQ.possibleChoices)
                addToArray = choices.includes(random) ? false : true;
                if (addToArray) {
                    choices.push(random)
                }
            }
        }
        choices.splice(Math.floor(Math.random() * 4), 0, nextQ.pokeName);
        setDisplay({ ...display, dex: dexEntry, choices: choices });
        // let displayType = "Type: " + nextQ.type[0] + (nextQ.type.length > 1 ? ", " + nextQ.type[1] : "");
        // let hintImgFile = nextQ.hintImage.split("/");
        // console.log(hintImgFile)
        // let hintPath = imgPath(`./hintImages/${hintImgFile[hintImgFile.length - 1]}`);
        // let imgFile = nextQ.pokeSprite.split("/");
        // let imgFilePath = imgPath(`./sprites/${imgFile[imgFile.length - 1]}`)
        // setDisplay({ ...display, dex: dexEntry, choices: choices, type: displayType, hintImage: hintPath, hintText: "Footprint: ", spriteImage: imgFilePath, spriteText: "Full Image: " });
        setCurrQ({ ...nextQ, dex: dexEntry, possibleChoices: choices });
    };

    const showHints = (timeLeft) => {

        switch (timeLeft) {
            // When there's 15 seconds left, show the pokemon's type
            case timeLeft === 15:
                let displayType = "Type: " + currQ.type;
                setDisplay({ ...display, type: displayType })
                break;
            // When there's 10 seconds left, show the hint image
            case timeLeft === 10:
                let hintImgFile = nextQ.hintImage.split("/");
                console.log(hintImgFile)
                let hintPath = imgPath(`./hintImages/${hintImgFile[hintImgFile.length - 1]}`);
                setDisplay({ ...display, hintImage: hintPath, hintText: "Footprint: " });
                break;
            // At 5 seconds left, show the pokemon's sprite. 
            case timeLeft === 5:
                let imgFile = nextQ.pokeSprite.split("/");
                let imgFilePath = imgPath(`./sprites/${imgFile[imgFile.length - 1]}`)
                setDisplay({ ...display, spriteImage: imgFilePath, spriteText: "Full Image: " });
                break;
            default:

        }
    }

    const tick = () => {
        console.log("TICK ", timer)
        if (timer.timePassed < timer.totalTime) {
            setTimer({ ...timer, timePassed: timer.timePassed + 1 })
            let timeLeft = timer.totalTime - timer.timePassed;
            if(timeLeft % 5 === 0)
            {
                showHints(timeLeft);
            }
        }
        else {
            alert("Time is up!!")
            clearInterval(timer.interval);
            nextQ(0);
        }
    }

    return (
        <Container>
            <Button onClick={startGame} >Start Game</Button>
            <p>Current Score: {game.userScore} </p>
            <p> Time Left: {(timer.totalTime - timer.timePassed)} seconds</p>
            <Question>
                <Row>
                    <Col size="md-4" >
                        <h4> {display.hintText} </h4>
                        <img src={display.hintImage} />
                    </Col>
                    <Col size="md-4" >
                        <h4> {display.spriteText} </h4>
                        <img src={display.spriteImage} />
                    </Col>
                </Row>
                <p>Hint: {display.dex}</p>
                <p> {display.type} </p>
            </Question>
            <Choices onClick={e => onAnswer(e.target.value)} choices={display.choices} />
        </Container>
    )
}

export default GameMode;