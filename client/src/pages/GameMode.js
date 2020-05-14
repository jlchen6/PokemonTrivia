import React, { useEffect, useContext, useState } from "react";
import API from "../utils/API";
import { Question } from "../components/Question/question";
import { GameContext } from "../utils/GameContext";
import Choices from "../components/Choices";
import GuessPokemon from "../images/titles/GuessThatPokemon.png";
import {withRouter} from "react-router";

function GameMode(props) {
    const gameContext = useContext(GameContext);
    const { game, setGame, nextQ, randomItem } = gameContext;

    const imgPath = require.context("../../public/images");

    const [display, setDisplay] = useState({
        dex: "",
        type: "",
        hintImage: "",
        spriteImage: "",
        choices: [],
        pokeName: ""
    });

    const [timer, setTimer] = useState({
        seconds: 20,
        typeShow: false,
        hintImgShow: false,
        spriteImgShow: false,
        showStart: true,
        handle: null,
        timeUp: false
    });

    const initTimer = {
        seconds: 20,
        typeShow: false,
        hintImgShow: false,
        spriteImgShow: false,
        timeUp: false
    };

    useEffect(() => {
        API.getRandom(5)
            .then((res) => {
                setGame({ ...game, questions: res.data });
            })
            .catch((err) => console.log(err));
    }, []);

    // Load information for the first question into the state for the current question.
    const startGame = () => {
        loadNextQ(0);
        let interval = setInterval(tick, 1000);
        setTimer((timer) => {
            return { ...timer, showStart: false, handle: interval };
        });
    };

    const onAnswer = (choice) => {
        let bonus = 0;
        if (choice === game.currQ.pokeName) {
            bonus = 5 * timer.seconds;
            nextQ(bonus);
        } else {
            nextQ(0);
        }
        console.log("CURRENT GAME: ", game);
        if (game.currQNum < 4) {
            loadNextQ(game.currQNum + 1);
        } else {
            clearInterval(timer.handle);
            props.history.push({
                pathname: "/final",
                data: {finalScore: game.userScore + bonus}
            })
        }
    };

    const loadNextQ = (n) => {
        setTimer((timer) => {
            return { ...timer, ...initTimer };
        });
        const nextQ = game.questions[n];
        const dexEntry = randomItem(nextQ.dex);
        const choices = [];
        for (let i = 0; i < 3; i++) {
            let addToArray = false;
            while (!addToArray) {
                let random = randomItem(nextQ.possibleChoices);
                addToArray =
                    (choices.includes(random) || random === nextQ.pokeName) ? false : true;
                if (addToArray) {
                    choices.push(random);
                }
            }
        }
        choices.splice(Math.floor(Math.random() * 4), 0, nextQ.pokeName);

        let displayType = nextQ.type;
        if (typeof displayType === "object") {
            displayType = displayType.join();
        }
        let hintImgFile = nextQ.hintImage.split("/");
        let hintPath = imgPath(`./hintImages/${hintImgFile[hintImgFile.length - 1]}`);
        let imgFile = nextQ.pokeSprite.split("/");
        let imgFilePath = imgPath(`./sprites/${imgFile[imgFile.length - 1]}`)
        let name = nextQ.pokeName;
        setDisplay({
            ...display,
            dex: dexEntry,
            choices: choices,
            type: displayType,
            hintImage: hintPath,
            spriteImage: imgFilePath,
            pokeName: name
        });
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
    }
    const tick = () => {
        setTimer((timer) => {
            let tock = { ...timer, seconds: timer.seconds - 1 };
            if (tock.seconds > 0) {
                switch (tock.seconds) {
                    // When there's 15 seconds left, show the pokemon's type
                    case 15:
                        console.log("SHOWING TYPE");
                        tock.typeShow = true;
                        break;
                    // When there's 10 seconds left, show the hint image
                    case 10:
                        tock.hintImgShow = true;
                        break;
                    // At 5 seconds left, show the pokemon's sprite.
                    case 5:
                        tock.spriteImgShow = true;
                        break;
                    default:
                }
            } else {
                tock.timeUp = true;
            }
            return tock;
        });
    };

    return (
        <div className="game-container">
            <div className="text-center">
                <img src={GuessPokemon} />
                {timer.showStart ? (
                    <button className="btn btn-primary text-center" onClick={startGame}>
                        Start Game
                    </button>
                ) : null}
                <p>Current Score: {game.userScore} </p>
                {timer.timeUp ?
                    (
                        <div>
                            <h2>Time is up! The answer was: {display.pokeName} </h2>
                            <button className="btn btn-primary text-center" onClick={(e) => onAnswer(e.target.value)} > Next Question </button>
                        </div>
                    )
                    : <p> Time Left: {timer.seconds} seconds</p>}
                <Question style={{ display: timer.timeUp ? "none" : "block" }}>
                    <div className="game-container text-center">
                        <div className="row text-center">
                            <div style={{ display: timer.hintImgShow ? "block" : "none" }}>
                                <div className="col-md-5 text-center my-auto">
                                    <h4>Footprint</h4>
                                    <div className="row text-center"></div>
                                    <div className="row text-center">
                                        <img src={display.hintImage} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: timer.spriteImgShow ? "block" : "none" }}>
                                <div className="col-md-5 text-center my-auto">
                                    <div className="row text-center">
                                        <h4>Sprite</h4>
                                    </div>
                                    <div className="row text-center">
                                        <img src={display.spriteImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p> Hint: {display.dex}</p>
                    <p style={{ display: timer.typeShow? "block" : "none" }}>
                        {" "}
            Type: {display.type}{" "}
                    </p>
                </Question>
                {timer.timeUp ? null 
                :
                <Choices
                onClick={(e) => onAnswer(e.target.value)}
                choices={display.choices}/>}

            </div>
        </div>
    );
}

export default GameMode;
