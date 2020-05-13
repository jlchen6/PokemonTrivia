import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API"
import { Question } from "../components/Question/question";
import Button from "../components/Button/button";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";
import { Container, Row, Col } from "../components/Grid";
import GuessPokemon from "../images/titles/GuessThatPokemon.png";

function GameMode() {

    const gameContext = useContext(GameContext);
    const { game, setGame, nextQ, randomItem } = gameContext;

    const imgPath = require.context("../../public/images")

    const [display, setDisplay] = useState({
        dex: "",
        type: "",
        hintImage: "",
        spriteImage: "",
        choices: [],
    })

    const [showing, setShowing] = useState({
        typeShow: false,
        hintImgShow: false,
        spriteImgShow: false,
        showStart: true
    })

    const [timer, setTimer] = useState(20)

    useEffect(() => {
        API.getRandom(5)
            .then(res => {
                setGame({ ...game, questions: res.data });
            })
            .catch(err => console.log(err))
    }, [])


    // Load information for the first question into the state for the current question.
    const startGame = () => {
        setShowing({ ...showing, showStart: false })
        loadNextQ(0);
        // let interval = setInterval(tick, 1000);
    };

    const onAnswer = (choice) => {
        console.log(game)
        let bonus = 0;
        if (choice === game.currQ.pokeName) {
            nextQ(25);
            bonus = 25;
        }
        else {
            nextQ(0)
        }
        console.log("CURRENT GAME: ", game)
        if (game.currQNum < 4) {
            loadNextQ(game.currQNum + 1)
        }
        else {
            alert("You've finished the game! Your final score was " + (game.userScore + bonus))
        }
    }

    const loadNextQ = (n) => {
        setTimer(20)
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
        // setDisplay({ ...display, dex: dexEntry, choices: choices });
        let displayType = "Type: " + nextQ.type;
        let hintImgFile = nextQ.hintImage.split("/");
        let hintPath = imgPath(`./hintImages/${hintImgFile[hintImgFile.length - 1]}`);
        let imgFile = nextQ.pokeSprite.split("/");
        let imgFilePath = imgPath(`./sprites/${imgFile[imgFile.length - 1]}`)
        setDisplay({ ...display, dex: dexEntry, choices: choices, type: displayType, hintImage: hintPath, spriteImage: imgFilePath });
        setGame(game => {
            return {
                ...game,
                currQ:
                {
                    ...nextQ,
                    dex: dexEntry,
                    possibleChoices:
                        choices
                }
            }
        });
    };

    const showHints = (time) => {
        console.log("QUESTION: ", game.currQ)
        switch (time) {
            // When there's 15 seconds left, show the pokemon's type
            case 15:
                setShowing({ ...showing, typeShow: true })
                break;
            // When there's 10 seconds left, show the hint image
            case 10:
                setShowing({ ...showing, hintImgShow: true });
                break;
            // At 5 seconds left, show the pokemon's sprite. 
            case 5:
                setShowing({ ...showing, spriteImgShow: true });
                break;
            default:

        }
    }

    const tick = () => {
        let runOnce = false;
        setTimer(timer => {
            let tock = timer - 1
            console.log("tock: ", tock)
            if (tock > 0 && !runOnce) {
                if (tock % 5 === 0) {
                    console.log("show a hint")
                    showHints(tock);
                    console.log("DISPLAY: ", display)
                }
                runOnce = true;
            }
            else if (!runOnce) {
                alert("Time is up!!")
                nextQ(0);
                setTimer(20)
            }
            return tock;
        });
        // console.log("TICK ", timer)

    }

    return (
            <div className="game-container">
            <img src={GuessPokemon} />
                {showing.showStart ?
                <Button onClick={startGame} >Start Game</Button>
                : null}
                <p>Current Score: {game.userScore} </p>
                <p> Time Left: {timer} seconds</p>
                <Question>
                    <Row>
                        <Col size="xs-5" >
                            <Row>
                                <h4> Footprint:  </h4>
                            </Row>
                            <Row>
                                <img src={display.hintImage} />
                            </Row>
                        </Col>
                        <Col size="xs-5" >
                            <Row>
                                <h4> Sprite:  </h4>
                            </Row>
                            <Row>
                                <img src={display.spriteImage} />
                            </Row>
                        </Col>
                    </Row>
                    <p>Hint: {display.dex}</p>
                    <p> {showing.typeShow? display.type : null} </p>
                </Question>
                <Choices onClick={e => onAnswer(e.target.value)} choices={display.choices} />
            </div>
    )
}

export default GameMode;